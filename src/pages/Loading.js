import { useState, useEffect } from "react";
import "../assets/style/loading.scss";

const Loading = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`loading-cont ${fadeOut ? "fade-out" : ""}`}>
      <h2>
        FRONT-END
        <br />
        JEYOUNG HAN
      </h2>
    </div>
  );
};

export default Loading;
