import React, { useEffect, useState } from "react";
import "../assets/style/project.scss";

const NeoWeb = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  // const [loaded, setLoaded] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 0);
  //   };

  //   // 페이지 로드 시 한 번 실행
  //   handleScroll();

  //   // 스크롤 이벤트 리스너 등록
  //   window.addEventListener("scroll", handleScroll);

  //   // 컴포넌트 언마운트 시에 이벤트 리스너 제거
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   // 페이지 로드 시 한 번 실행
  //   setLoaded(false);
  // }, []);

  const publicUrl = process.env.PUBLIC_URL;
  return (
    <section /* className={`TxtBox ${isScrolled || loaded ? "loaded" : ""}`} */>
      <div className="proj-wrap">
        <div className="proj-num">
          <p>
            <em>4</em>팀 프로젝트
          </p>
        </div>
      </div>

      <div className="proj-title">
        <h4>NEO Digital Group</h4>
        <p>SPA 반응형 웹 사이트 구현</p>

        <ul>
          <li>
            HTML5/
            <br /> CSS3
          </li>
          <li>JavaScript</li>
          <li>GSAP</li>
          <li style={{ visibility: "hidden" }}></li>
        </ul>
      </div>

      <div className="proj-img">
        <a
          href="https://github.com/Hanywyam/neoDGweb?tab=readme-ov-file#love_letter-team-project--ah-oh"
          target="_blank"
          rel="noopener noreferrer"
          title="프로젝트4-네오웹 깃허브 페이지">
          <img
            src={publicUrl + "/images/neoWeb_Screenshot.gif"}
            alt="프로젝트 이미지4-네오웹사이트"
          />
        </a>
      </div>
    </section>
  );
};

export default NeoWeb;
