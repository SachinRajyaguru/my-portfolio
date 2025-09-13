import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* Tata Consultancy Services */}
          <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "white", color: "#272822" }} contentArrowStyle={{ borderRight: "7px solid white" }} date="Nov 2024 - Present" iconStyle={{ background: "#5000ca", color: "white" }} icon={<FontAwesomeIcon icon={faBriefcase} />}>
            <h3 className="vertical-timeline-element-title">System Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Tata Consultancy Services, Bengaluru</h4>
            <ul>
              <li>Managed end-to-end incident lifecycle (logging, categorization, prioritization, resolution, closure)</li>
              <li>Assessed, planned, and executed standard & emergency changes following ITIL processes</li>
              <li>Identified recurring incidents and initiated problem records to eliminate root causes</li>
              <li>Performed Azure-based debugging & monitoring for cloud-hosted apps & infrastructure</li>
            </ul>
          </VerticalTimelineElement>

          {/* Latitude Technolabs */}
          <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "white", color: "#272822" }} contentArrowStyle={{ borderRight: "7px solid white" }} date="May 2023 - Jul 2024" iconStyle={{ background: "#5000ca", color: "white" }} icon={<FontAwesomeIcon icon={faBriefcase} />}>
            <h3 className="vertical-timeline-element-title">React Native Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Latitude Technolabs, Ahmedabad</h4>
            <ul>
              <li>Built & shipped complete modules/features independently, ensuring scalability</li>
              <li>Optimized app performance (load times, memory, responsiveness)</li>
              <li>Implemented state management solutions (Redux, Context API)</li>
              <li>Integrated native modules (Java/Kotlin, Swift/Objective-C)</li>
              <li>Worked with CI/CD pipelines (GitHub Actions, Fastlane)</li>
              <li>Collaborated with designers & backend engineers to deliver seamless UX</li>
              <li>Mentored juniors/interns, reviewing code & guiding best practices</li>
            </ul>
          </VerticalTimelineElement>

          {/* Hyperlink Infosystem */}
          <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "white", color: "#272822" }} contentArrowStyle={{ borderRight: "7px solid white" }} date="Jul 2021 - Apr 2023" iconStyle={{ background: "#5000ca", color: "white" }} icon={<FontAwesomeIcon icon={faBriefcase} />}>
            <h3 className="vertical-timeline-element-title">React Native Developer (Junior)</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyperlink Infosystem, Ahmedabad</h4>
            <ul>
              <li>UI/UX Implementation: Convert Figma/XD/Sketch designs into mobile screens</li>
              <li>Coding & Feature Implementation, Debugging & Testing</li>
              <li>API Integration (REST, GraphQL, Socket.io)</li>
              <li>Version Control & Collaboration using GitLab</li>
              <li>Learned fundamentals of native Android/iOS & state management</li>
            </ul>
          </VerticalTimelineElement>

          {/* React Native Trainee */}
          <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "white", color: "#272822" }} contentArrowStyle={{ borderRight: "7px solid white" }} date="Jan 2021 - Jun 2021" iconStyle={{ background: "#5000ca", color: "white" }} icon={<FontAwesomeIcon icon={faBriefcase} />}>
            <h3 className="vertical-timeline-element-title">React Native Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">Self-Learning / Internship</h4>
            <ul>
              <li>Learned JavaScript & React Native fundamentals</li>
              <li>Implemented basic apps and UI screens</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
