import "../assets/style/project.scss";

const Project = () => {
  return (
    <div className="proj-contn">
      <h2>
        <em>+</em> project
      </h2>

      <section>
        <div className="proj-wrap">
          <p>
            <em>1</em>팀 프로젝트
          </p>
        </div>

        <div className="proj-title">
          <h4>Nutti : 일상을 기록하고 보관하는 일기장 </h4>
          <p>React를 활용한 모바일 app 구현 (데이터베이스 활용 및 배포)</p>

          <ul>
            <li>module.css</li>
            <li>React</li>
            <li>express</li>
            <li>
              mongoDB/
              <br /> cloudtype
            </li>
          </ul>
        </div>
        <div className="proj-img">
          <img src alt="프로젝트 이미지1-누띠" />
        </div>
      </section>

      <section>
        <div className="proj-wrap">
          <p>
            <em>2</em>팀 프로젝트
          </p>
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
            <li></li>
          </ul>
        </div>

        <div className="proj-img">
          <img src alt="프로젝트 이미지2-네오웹사이트" />
        </div>
      </section>
    </div>
  );
};

export default Project;
