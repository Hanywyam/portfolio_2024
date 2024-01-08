import { useEffect, useState } from "react";
import "../assets/style/style.scss";

const Border = () => {
  const [scrollWidth, setScrollWidth] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrolled === windowHeight) {
        const newWidth = (scrolled / windowHeight) * 100;
        setScrollWidth(newWidth);
      } else {
        const newWidth = 0 + scrolled * 0.1;
        setScrollWidth(100 >= newWidth > 0 ? newWidth : 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="move-border" style={{ width: `${scrollWidth}%` }}></div>
  );
};

export default Border;
