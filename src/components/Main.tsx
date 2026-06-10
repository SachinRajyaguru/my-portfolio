import "../assets/styles/Main.scss";
import SocialIcons from "./SocialIcons";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="/assets/sachin-rajyaguru.jpg" alt="Sachin Rajyaguru" />
        </div>
        <div className="content">
          <div className="social_icons">
            <SocialIcons />
          </div>
          <h1>Sachin Rajyaguru</h1>
          <p>Software Engineer | Frontend & Mobile Engineer</p>

          <div className="mobile_social_icons">
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
