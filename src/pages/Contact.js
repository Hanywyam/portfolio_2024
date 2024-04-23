import { Link, animateScroll as scroll } from "react-scroll";
import "../assets/style/contact.scss";

const Contact = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div id="4" className="contact-contn">
      <h2>Contact</h2>
      <Link to="1" onClick={scrollToTop} className="top-btn">
        <span></span>
        <span></span>
        <span></span>
      </Link>

      <div className="contact-wrap">
        <div className="contact-intro">
          <p>
            디자이너에서 개발자로.
            <br />
            멈추지 않고 새로운 것에 도전하는 한재영입니다.
          </p>
          <p>
            영리하게 공부하는 것 보다
            <br />
            미련하게 공부하는 걸 좋아합니다.
            <br />
            기본부터 충실하며 깊이 있게 고민하는 개발자가 되겠습니다.
          </p>
          <p>읽어주셔서 감사합니다.</p>
        </div>

        <div className="contact-info">
          <ul>
            <li>한재영. Han je young</li>
            <li>
              <a href="mailto:hellow522@naver.com">
                Email. hellow522@naver.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <ul className="contact-url">
        <li>
          <a
            href="https://www.notion.so/Portfolio-4cd992f6a65e4c08bf0865a458872ce5"
            target="_blank"
            rel="noopener noreferrer"
            title="notion 페이지">
            notion
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Hanywyam/portfolio_2024?tab=readme-ov-file#2024-frontend-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            title="Portfolio 깃허브 페이지">
            portfolio
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Hanywyam/HOMEWORK?tab=readme-ov-file#%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80"
            target="_blank"
            rel="noopener noreferrer"
            title="Hanywyam 깃허브 페이지">
            Github
          </a>
          <span>개발일지 보러가기</span>
          <em>click!</em>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQ85r-0-bSneatnd_m-g360kyl5PVCALlxaNLyC2bGp0HhpmIhqdB-bdZIQOC6puHQxKeYKzBBPaGah/pub"
            target="_blank"
            rel="noopener noreferrer"
            title="resume: 한재영 이력서 페이지">
            resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
