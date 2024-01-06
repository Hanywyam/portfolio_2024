import { useEffect, useState } from "react";
import "../assets/style/project.scss";

const NeoWeb = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // 페이지 로드 시 한 번 실행
    handleScroll();

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시에 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // 페이지 로드 시 한 번 실행
    setLoaded(false);
  }, []);

  const publicUrl = process.env.PUBLIC_URL;
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseOver = () => {
    setIsPlaying(true);
  };

  const handleMouseOut = () => {
    setIsPlaying(false);
  };

  return (
    <section className={`TxtBox ${isScrolled || loaded ? "loaded" : ""}`}>
      <div className="proj-wrap">
        <div className="proj-num">
          <p>
            <em>2</em>팀 프로젝트
          </p>
        </div>
      </div>

      <div className="proj-title">
        <h4>NEO Digital Group</h4>
        <p>웹사이트 리디자인 및 사이트 구현 (반응형 웹사이트 제작)</p>

        <ul>
          <li>
            HTML5/
            <br /> CSS3
          </li>
          <li>JavaScript</li>
          <li>GSAP</li>
          <li className="hide"></li>
        </ul>
      </div>

      <div className="proj-img">
        <a
          href="https://github.com/Hanywyam/neoDGweb?tab=readme-ov-file#love_letter-team-project--ah-oh"
          target="_blank"
          rel="noopener noreferrer"
          title="프로젝트2-네오웹 깃허브 페이지">
          <video
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            autoPlay={isPlaying}
            loop>
            <source
              src={publicUrl + "/images/neoWeb_Screenshot.mov"}
              type="video/mp4"
            />
          </video>
        </a>
      </div>
    </section>
  );
};

export default NeoWeb;
