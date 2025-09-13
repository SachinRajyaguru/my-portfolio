import "../assets/styles/Main.scss";
import SocialIcons from "./SocialIcons";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQEAbzGgsiu3fw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689231399729?e=1760572800&amp;v=beta&amp;t=IEF0d_ayRW8ZLKWzh0JCcWQ1VewEZbwIHxZMWCH0dZQ"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <SocialIcons />
          </div>
          <h1>Sachin Rajyaguru</h1>
          <p>Mobile + Backend Engineer</p>

          <div className="mobile_social_icons">
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
