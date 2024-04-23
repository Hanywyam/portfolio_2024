import "../assets/style/project.scss";

const nutti = () => {
  const publicUrl = process.env.PUBLIC_URL;
  return (
    <section>
      <div className="proj-wrap">
        <div className="proj-num">
          <p>
            <em>1</em>개인 프로젝트
          </p>
        </div>
      </div>

      <div className="proj-title">
        <h4>Portfolio</h4>
        <p>React를 활용하여 PC와 모바일에 반응하는 포트폴리오 사이트를 직접 디자인 및 구현</p>

        <ul>
          <li>React</li>
          <li>SSAS</li>
          <li>GitHub pages</li>
          <li>반응형</li>
        </ul>
      </div>
      <div className="proj-img">
        <a
          href="https://github.com/Hanywyam/portfolio_2024?tab=readme-ov-file#2024-frontend-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          title="프로젝트1-Portfolio 깃허브 페이지">
          <img src={publicUrl + "/images/portfolio_Screendhot.png"} />
        </a>
      </div>
    </section>
  );
};

export default nutti;
