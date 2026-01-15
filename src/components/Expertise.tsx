import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";

import "../assets/styles/Expertise.scss";

const lebelFirst = [
  "React Native",
  "React.js",
  "Next.js",
  "TypeScript",
  "Redux",
  "TanStack Query",
  "React Navigation",
  "HTML5",
  "CSS3",
];

const backend_api = [
  "RESTful APIs",
  "GraphQL APIs",
  "WebSocket APIs",
  "Node.js",
  "Firebase (FCM, Analytics, Crashlytics)",
  "Axios",
  "Fetch API",
  "Swagger",
];

const databases = [
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "SQLite",
  "Oracle Database",
  "Microsoft SQL Server",
];

const labelsThird = [
  "AI",
  "Docker",
  "AWS",
  "Azure",
  "Animations",
  "TypeScript & Typing",
  "Testing & QA",
  "CI/CD & Deployment",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <div className="skill-icons">
              <FontAwesomeIcon icon={faReact} size="3x" />
              <FontAwesomeIcon icon={faNodeJs} size="3x" />
            </div>
            <h3>Mobile + Full Stack Engineer</h3>
            <p>
              I have built a diverse array of cross-platform mobile and web
              applications from scratch using modern technologies such as React
              Native and Next.js. I have a strong proficiency in the SDLC
              process and frontend + backend development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {lebelFirst.map((label: string, index: number) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="skill-icons">
              <FontAwesomeIcon icon={faDocker} size="3x" />
            </div>
            <h3>Backend & API Integration</h3>
            <p>
              Experienced in integrating RESTful and GraphQL APIs with mobile
              apps, ensuring smooth data flow. Skilled in backend communication,
              authentication, and error handling for reliable app performance.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {[...backend_api, ...databases].map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="skill-icons">
              <FontAwesomeIcon icon={faPython} size="3x" />
            </div>
            <h3>Learning & Researching</h3>
            <p>
              I actively explore and experiment with modern technologies across
              DevOps, Automation, and Generative AI to stay ahead in the
              fast-evolving tech landscape. This involves continuous hands-on
              learning, research, and building proof-of-concepts that combine
              infrastructure automation with AI-driven solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
