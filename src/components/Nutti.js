import "../assets/style/project.scss";

const nutti = () => {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <section>
      <div className="proj-wrap">
        <div className="proj-num">
          <p>
            <em>1</em>팀 프로젝트
          </p>
        </div>
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
        <a
          href="https://github.com/Hanywyam/Nutti"
          target="_blank"
          rel="noopener noreferrer"
          title="프로젝트1-누띠 깃허브 페이지">
          <img
            src={publicUrl + "/images/nutti_Screenshot.gif"}
            alt="프로젝트 이미지1-누띠"
          />
        </a>
      </div>
    </section>
  );
};

export default nutti;
