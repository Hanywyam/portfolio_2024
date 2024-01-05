import { useEffect, useState } from "react";
import "../assets/style/skills.scss";

const Skills = () => {
  const [scrOpacity, setScrOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const opacity = Math.min(
        1,
        scrollPosition / (fullHeight / 4 - windowHeight / 5)
      );
      setScrOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="2" className="skills-contn" style={{ opacity: scrOpacity }}>
      <div className="border-top"></div>
      <h2>
        <em>+</em>
        <div className="sticky">skills</div>
        <em>&</em>
      </h2>

      <div className="skills-wrap">
        <h5>frontend</h5>
        <ul className="skils-list">
          <li>
            <h3>
              HTML5 <br />& CSS3
            </h3>
            <ul>
              <li>웹사이트 구축 및 디자인 스타일 적용</li>
              <li>웹표준& 웹 접근성에 맞는 시멘틱 태그 마크업</li>
              <li>Media Query를 활용한 반응형 웹 제작</li>
              <li>flex, grid, position을 활용한 레이아웃 구축</li>
              <li>@keyframe을 활용한 애니메이션 모션 적용</li>
              <li>
                SCSS, styled-components, module.css를 이용한 스타일의 다양한
                활용
              </li>
            </ul>
          </li>

          <li>
            <h3>
              JavaScript<em>(ES6+)</em>
            </h3>
            <ul>
              <li>자바스크립트 ES6 기본 문법 이해</li>
              <li>DOM, BOM 구조 및 이해</li>
              <li>map, forEach 배열 매서드 함수를 활용한 반복되는 코드 단축</li>
              <li>
                setTimeout, setInterval 등 비동기 함수 실행 순서 관리를 위한
                이벤트 루프의 이해 및 활용
              </li>
              <li>
                AJAX 활용 : Promise, fetch, async&await 등 데이터 처리 비동기
                통신 구현 및 활용
              </li>
              <li>Rest API, Axios 라이브러리를 활용한 외부 데이터 통신</li>
            </ul>
          </li>

          <li>
            <h3>React</h3>
            <ul>
              <li>컴포넌트 생성, 진행, 소멸, 생명주기(라이프 사이클) 이해</li>
              <li>
                module-css, SASS, styled-component, React-Bootstrap을 활용한
                디자인
              </li>
              <li>
                useState, useRef, useCallback, useEffect 등 use Hook을 이용한
                웹사이트 구축
              </li>
              <li>React-Router-DOM을 활용한 SPA 웹 구축</li>
              <li>CRUD를 이용한 사용자 인터페이스 구축</li>
              <li>
                context API, useReducer, Redux, Redux Toolkit 활용한 전역 상태
                관리
              </li>
              <li>localStorage를 이용한 브라우저 데이터 저장 및 관리</li>
              <li>Axios를 이용한 외부 API 및 backend와의 통신</li>
            </ul>
          </li>
        </ul>

        <h5>backend</h5>
        <ul className="skils-list">
          <li>
            <h3>Node.js</h3>
            <ul>
              <li>
                Node.js 런타임 환경에서 Express 웹 프레임워크를 이용한 서버 구축
              </li>
              <li>API를 통한 클라이언트와의 데이터 통신</li>
              <li>
                다양한 Express의 미들웨어 활용:
                <br /> express-session, cors, static, json 등
              </li>
              <li>
                express router를 이용한 페이지 간의 이동 및 네비게이션 관리,
                구현
              </li>
              <li>sha256 이용한 비밀번호 해싱</li>
              <li>env 데이터 환경변수 관리 </li>
              <li>ejs 템플릿 엔진 활용</li>
              <li>cloudtype을 이용한 배포</li>
            </ul>
          </li>

          <li>
            <h3>Database</h3>
            <ul>
              <li>mongoDB를 이용한 데이터 베이스 생성 및 상태 관리</li>
            </ul>
          </li>

          <li>
            <h3>Tools</h3>
            <ul>
              <li>Git / GitHub / GitHub pages</li>
              <li>Notion</li>
              <li>pigma / Adobe photoshop & Illustrator</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
