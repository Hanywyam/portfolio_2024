import "../assets/style/project.scss";

const Project = () => {
  return (
    <div className="proj-contn">
      <h2>
        <em>+</em> project
      </h2>

      <section>
        <div>
          <h3>1</h3>
          <p>팀 프로젝트</p>
        </div>

        <div>
          <h4>Nutti : 일상을 기록하고 보관하는 일기장 </h4>
          <p>React를 활용한 모바일 app 구현 (데이터베이스 활용 및 배포)</p>

          <ul>
            <li>module.css</li>
            <li>React</li>
            <li>express</li>
            <li>mongoDB / cloudtype</li>
          </ul>
        </div>

        <img src alt="프로젝트 이미지1-누띠" />
      </section>

      <section>
        <div>
          <h3>2</h3>
          <p>팀 프로젝트</p>
        </div>

        <div>
          <h4>NEO Digital Group</h4>
          <p>웹사이트 리디자인 및 사이트 구현 (반응형 웹사이트 제작)</p>

          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JS</li>
            <li>GSAP</li>
          </ul>
        </div>

        <img src alt="프로젝트 이미지2-네오웹사이트" />
      </section>
    </div>
  );
};

export default Project;
