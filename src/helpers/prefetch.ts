export const preFetchAssets = async (...args: string[]) => {
  args.forEach((item) => (new Image().src = item));
};

/**
 * starts prefetching of images
 * @returns undefined
 */
export const init = () =>
  preFetchAssets(
    "https://img.icons8.com/ios/64/000000/github.png",
    "https://img.icons8.com/ios/50/000000/linkedin-2--v1.png",
    "https://img.icons8.com/ios/64/000000/twitter.png",
    "https://img.icons8.com/wired/64/000000/wordpress.png",
    "https://img.icons8.com/external-filled-color-icons-papa-vector/78/external-Skills-Sharing-technology-transfer-filled-color-icons-papa-vector.png"
  );
