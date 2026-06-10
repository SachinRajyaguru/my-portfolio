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
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#272822" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Aug 2025 - Apr 2026"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Engineer (PayPal)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tata Consultancy Services, Bengaluru
            </h4>

            <ul>
              <li>
                Supported Austria market expansion by validating and adapting checkout
                flows for regional requirements.
              </li>
              <li>
                Authored and maintained 270+ functional tests for pre-checkout payment
                journeys, improving release reliability.
              </li>
              <li>
                Built frontend features for PayPal Store Sync using Next.js 15 (App Router)
                and TypeScript, enabling merchants to integrate product catalogs and commerce
                APIs with PayPal's agentic commerce platform.
              </li>
              <li>
                Improved page load performance by 5-10% through lazy loading, API batching,
                and client-side optimization.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#272822" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Nov 2024 - Jul 2025"
            iconStyle={{ background: "#5000ca", color: "white" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Engineer (Shell)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tata Consultancy Services, Bengaluru
            </h4>

            <ul>
              <li>
                Upgraded React Native applications from v0.69 to v0.81, resolving
                dependency conflicts and improving maintainability.
              </li>
              <li>
                Leveraged Azure Application Insights, Flipper, Logcat, and performance
                profiling tools to diagnose and resolve complex production issues.
              </li>
              <li>
                Resolved 15-25 production incidents per week across React and React Native
                applications while maintaining 95%+ SLA compliance.
              </li>
              <li>
                Improved platform availability to 99.5%+ through proactive monitoring,
                incident response, and root-cause analysis.
              </li>
              <li>
                Eliminated a recurring issue responsible for nearly 50% of production
                incidents by implementing a UI-driven automation solution.
              </li>
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
