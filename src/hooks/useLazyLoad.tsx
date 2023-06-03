import { useEffect, useRef, useState } from "react";

const useLazyLoad = (id: string) => {
  const [mounted, setMounted] = useState(false);
  const observer = useRef(
    new IntersectionObserver((ins) => {
      setMounted((state) => {
        let updatedState = state;
        ins.forEach((entry) => {
          if (entry.target.id === id && entry.isIntersecting && !state) {
            updatedState = true;
          }
        });

        return updatedState;
      });
    })
  );

  useEffect(() => {
    const obs = observer.current;
    const observable = document.getElementById(id);
    if (observable) {
      obs.observe(observable);
    }

    return () => obs.disconnect();
  }, [id]);

  console.log({ id, mounted });

  return { mounted };
};

export default useLazyLoad;
