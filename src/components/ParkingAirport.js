import "../assets/style/project.scss";

const ParkingAirport = () => {
  const publicUrl = process.env.PUBLIC_URL;
  return (
    <section>
      <div className="proj-wrap">
        <div className="proj-num">
          <p>
            <em>2</em>개인 프로젝트
          </p>
        </div>
      </div>

      <div className="proj-title">
        <h4>Inchen Airport Parking System : 주차 예약 안내</h4>
        <p>
          Node.js를 이용한 인천공항 장기 주차장 예약 및 실시간 잔여 주차장 안내
        </p>

        <ul>
          <li>Node.js</li>
          <li>API</li>
          <li>MongoDB</li>
          <li>cloudtype</li>
        </ul>
      </div>
      <div className="proj-img">
        <a
          href="https://github.com/Hanywyam/IncheonAirport?tab=readme-ov-file#-incheonairport"
          target="_blank"
          rel="noopener noreferrer"
          title="개인프로젝트1-인천공항 주차장 깃허브 페이지">
          <img
            src={publicUrl + "/images/parkingAirport_Screenshot.PNG"}
            alt="프로젝트 이미지1-인천공항주차장"
          />
        </a>
      </div>
    </section>
  );
};

export default ParkingAirport;
