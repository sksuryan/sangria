import { useEffect, useRef, useState } from "react";

const useLazyLoad = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    if (ref.current) {
      observer = new IntersectionObserver((ins) => {
        setMounted((state) => {
          let updatedState = state;
          ins.forEach((entry) => {
            if (
              entry.target.id === ref.current?.id &&
              entry.isIntersecting &&
              !state
            ) {
              updatedState = true;
            }
          });

          return updatedState;
        });
      });

      observer.observe(ref.current as Element);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref.current]);

  return { mounted };
};

export default useLazyLoad;
