import "../assets/style/contact.scss";

const Contact = () => {
  return (
    <div className="contact-contn">
      <h2>Contact</h2>
      <div className="top-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="contact-wrap">
        <div className="contact-intro">
          <p>
            디자이너에서 개발자로
            <br />
            멈추지 않고 한 번 더 도전하는 한재영입니다.
          </p>
          <p>
            상상은 다시 현실이 될 수 있도록
            <br />
            조용히, 열심히 노력하는 개발자가 되겠습니다.
          </p>
          <p>감사합니다.</p>
        </div>

        <div className="contact-info">
          <ul>
            <li>한재영. Han je young</li>
            <li>Email. hellow522@naver.com</li>
          </ul>
        </div>
      </div>

      <ul className="contact-url">
        <li>slack</li>
        <li>portfolio</li>
        <li>
          Github
          <em>click!</em>
        </li>
        <li>notion</li>
      </ul>
    </div>
  );
};

export default Contact;
