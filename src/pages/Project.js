import { useEffect, useState } from "react";
import "../assets/style/project.scss";
import Nutti from "../components/Nutti";
import Portfolio from "../components/Portfolio";
import NeoWeb from "../components/NeoWeb";
import ParkingAirport from "../components/ParkingAirport";

const Project = () => {
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
    <div id="3" className="proj-contn">
      <h2>
        <em>+</em> project
      </h2>
      <Portfolio />
      <Nutti />
      <ParkingAirport />
      <NeoWeb />
    </div>
  );
};

export default Project;
