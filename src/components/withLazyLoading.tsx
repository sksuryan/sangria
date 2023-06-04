import { ReactElement, useRef } from "react";
import useLazyLoad from "@hooks/useLazyLoad";

const withLazyLoading = (Component: () => ReactElement) => () => {
  const ref = useRef<HTMLDivElement>(null);
  const { mounted } = useLazyLoad(ref);

  if (!mounted) {
    return (
      <div
        ref={ref}
        style={{ height: "300px" }}
        id={"lazy-load-" + Component.name}
      />
    );
  }

  return <Component />;
};

export default withLazyLoading;
