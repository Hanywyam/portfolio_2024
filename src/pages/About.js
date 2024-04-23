import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import "../assets/style/about.scss";

const About = () => {
  const [scrOpacity, setScrOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const opacity = Math.min(
        1,
        scrollPosition / (fullHeight / 5 - windowHeight)
      );
      setScrOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="1" className="about-contn">
      <h2>안녕하세요.</h2>
      <h2>
        <em>
          <Typewriter
            options={{
              strings: ["멈추지 않고", "꾸준히 성장하는"],
              autoStart: true,
              loop: true,
              cursorClassName: "color: #1a7ef3",
            }}
          />
        </em>
        한재영입니다.
      </h2>
      <div className="border-top">
        <span></span>
        <span></span>
      </div>
      <ul className="whoiam-contn">
        <li>WHO I AM</li>
        <li>WHO I AM</li>
        <li>WHO I AM</li>
      </ul>
      <div className="about-intro" style={{ opacity: scrOpacity }}>
        <h5>
          Hello. I'm Je-young Han, a front-end developer. I have a perseverance
          that isn't afraid of new experiences and failures.
        </h5>
      </div>
    </div>
  );
};

export default About;
