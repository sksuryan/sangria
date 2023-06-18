import { cache } from "react";
import { Client, Databases, Models } from "node-appwrite";

interface SkillsType extends Models.Document {
  skills: string[];
}

type InitStatus = {
  status: "pending" | "success" | "failure";
  error: string | null;
};

class DataSource {
  private initStatus: InitStatus = {
    status: "pending",
    error: null,
  };

  private client: Client | null = null;
  private databases: Databases | null = null;

  // necessary IDs for app
  private dbId = process.env.DB_ID ?? null;
  private apiKey = process.env.API_KEY ?? null;
  private projectId = process.env.PROJECT_ID ?? null;

  // collections id
  private skillsId = "648dcd13760703be4efb";
  private projectsId = "648dd01111734cb145f5";

  constructor() {
    this.client = new Client();

    if (this.projectId && this.apiKey) {
      this.client
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject(this.projectId)
        .setKey(this.apiKey);
    } else {
      this.initStatus.status = "failure";

      if (!this.projectId) {
        this.initStatus.error = "Project ID not found";
      } else if (!this.apiKey) {
        this.initStatus.error = "API Key not found";
      }

      return;
    }

    this.databases = new Databases(this.client);

    // mark init as success
    this.initStatus.status = "success";
  }

  private checkForErrors = () => {
    if (this.initStatus.status === "failure") {
      throw new Error(this.initStatus.error ?? "error unavailable");
    }

    if (!this.databases) {
      throw new Error("Database Instance not initialized");
    }

    if (!this.dbId) {
      throw new Error("Database ID not found");
    }
  };

  public getSkills = cache(async () => {
    this.checkForErrors();

    // fetch data here
    const refs = await this.databases!.listDocuments(this.dbId!, this.skillsId);
    const ref = refs.documents?.[0] as SkillsType;

    return ref?.skills ?? [];
  });

  public getProjects = cache(async () => {
    this.checkForErrors();

    // fetch data here
    return null;
  });
}

const dataSourceInstance = new DataSource();

export { dataSourceInstance };
