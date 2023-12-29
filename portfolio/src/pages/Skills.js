import React from "react";

const Skills = () => {
  return (
    <div>
      <h2>skills</h2>
      <ul>
        <li>
          <h3>HTML5 & CSS3</h3>
          <ul>
            <li>웹사이트 구축 및 디자인 스타일 적용</li>
            <li>웹표준& 웹 접근성에 맞는 시멘틱 태그 마크업</li>
            <li>Mediaquery를 활용한 반응형 웹 제작</li>
            <li>flex, grid, position을 활용한 레이아웃 구축</li>
            <li>가상 선택자를 활용한 간단한 효과 구현</li>
            <li>@keyframe을 활용한 애니메이션 모션 적용</li>
          </ul>
        </li>

        <li>
          <h3>Java Script(ES6+)</h3>
          <ul>
            <li>자바스크립트 ES6 기본 문법 이해</li>
            <li>
              map, forEach, fillter, find 배열 매서드 함수를 활용한 반복되는
              코드 단축
            </li>
            <li>setTimeout, setInterval 등 비동기 함수 이해 및 활용</li>
            <li>Promise, async&await 등 비동기 통신 이해 및 활용</li>
            <li>Rest API, axios 라이브러리를 활용한 외부 데이터 통신</li>
          </ul>
        </li>

        <li>
          <h3>React</h3>
          <ul>
            <li>컴포넌트 생성, 진행, 소멸, 생명주기(라이프 사이클) 이해</li>
            <li> module-css, SASS, styled-component를 활용한 디자인</li>
            <li>
              useState, useRef, useCallback, useEffect 등 use Hook을 이용한
              웹사이트 구축
            </li>
            <li>React-Router-DOM을 활용한 SPA 웹 구축</li>
            <li>CRUD를 이용한 사용자 인터페이스 구축</li>
            <li>
              context API, useReducer, redux, localStorage 활용한 상태 데이터
              관리
            </li>
          </ul>
        </li>

        <li>
          <h3>Node.js</h3>
          <ul>
            <li>
              Node.js 런타임 환경에서 Express 웹 프레임워크를 이용한 서버 구성
            </li>
            <li>
              express router를 이용한 페이지 간의 이동 및 네비게이션 관리, 구현
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
            <li>pigma / adobe photoshop & Illustrator</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
