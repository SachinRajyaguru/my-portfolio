import Box from "@mui/material/Box";
import "../assets/styles/Project.scss";

const projects = [
  {
    title: "ESSTA",
    category: "Music And Audio",
    description: [
      "Essta: Wellbeing, Anytime. Owns support with physical cards, forever content (no subscriptions).",
      "Tackles grief, imposter syndrome, burnout & more. Connects you with real people, real-time support.",
      "NFC card support and Music player support.",
    ],
    image: "essta.jpg",
    is_web_link_working: false,
    web_link: "https://essta.com/",
    ios_link: "https://apps.apple.com/gb/app/essta/id1659848856",
    android_link:
      "https://play.google.com/store/apps/details?id=com.essta_app&hl=en&gl=US",
  },
  {
    title: "Furtrieve",
    category: "Navigation",
    description: [
      "Cellular device for real-time location tracking.",
      "Streetview integration for a visual understanding of surroundings.",
      "Two-way communication to comfort your pet or talk to whoever finds them.",
      "Crowd-Notify to alert nearby users if your pet escapes the set safe zone.",
      "Mobile virtual fence for instant alerts when your pet wanders too far.",
    ],
    image: "furtrieve.jpg",
    is_web_link_working: true,
    web_link: "https://furtrieve.com/",
    ios_link: "https://apps.apple.com/us/app/furtrieve/id1415240197",
    // android_link: "https://play.google.com/store/apps/details?id=com.furtrieve&hl=en_US",
  },
  {
    title: "Acts of Love",
    category: "Social",
    description: [
      "A platform that encourages users to perform and share acts of love and kindness.",
      "Track and share your acts of love with the community.",
      "Features to discover new ways to contribute positively to society.",
    ],
    image: "acts_of_love.jpg",
    is_web_link_working: true,
    web_link: "https://www.actsofloveapp.com/",
    ios_link: "https://apps.apple.com/us/app/acts-of-love-app/id6447066371",
    android_link:
      "https://play.google.com/store/apps/details?id=com.actsoflove&hl=en&gl=US",
  },
  {
    title: "Foodies Takeout & Delivery",
    category: "Food And Drink",
    description: [
      "A vast selection of local restaurants to choose from.",
      "User-friendly interface for easy browsing and ordering.",
      "Secure payment options.",
      "Exclusive deals and promotions from your favorite eateries.",
      "Personalized recommendations based on your tastes.",
    ],
    image: "foodies_takeout.jpg",
    is_web_link_working: true,
    web_link: "https://foodiestakeout.com/",
    ios_link:
      "https://apps.apple.com/us/app/foodies-takeout-delivery/id6463634796",
    // android_link: "https://play.google.com/store/apps/details?id=com.foodiestakeout",
  },
  {
    title: "Streetz-Gujju Marketplace (Shutdown)",
    category: "Lifestyle/Ecommerce in Ahmedabad",
    description: [
      "Seamless Shopping: Easy browsing, searching, adding to cart, & secure checkout.",
      "Real-Time Delivery: Track orders & see delivery driver location.",
      "User Management: Profiles, order history, & address management.",
    ],
    image: "streetz.jpg",
    is_web_link_working: false,
    web_link: "",
    // ios_link: "https://apps.apple.com/in/app/streetz-gujju-marketplace/id6451184276",
    // android_link: "https://play.google.com/store/apps/details?id=com.streetzapp&pli=1",
  },
  {
    title: "Careit",
    category: "Business",
    description: [
      "Work management tool for businesses to track and manage their operations.",
      "Features for task management, team collaboration, and time tracking.",
      "Integration with various business tools and services.",
    ],
    image: "careit.jpg",
    is_web_link_working: false,
    web_link: "",
    ios_link: "https://apps.apple.com/us/app/careit-work/id1611555542",
    android_link:
      "https://play.google.com/store/apps/details?id=com.care_it&hl=en_US&gl=US",
  },
  {
    title: "Connector",
    category: "Business",
    description: [
      "Real-time connections: Based on location, events, profiles, and interests.",
      "Push notifications: For relevant opportunities.",
      "Search capability: Find connections based on specific criteria.",
      "Genuine connections: Through shared interests and career goals.",
      "Value Score: Identifies potential connection value, reducing spam.",
    ],
    image: "careit.jpg",
    is_web_link_working: true,
    web_link: "https://connectorapp.co/",
    ios_link: "https://apps.apple.com/us/app/the-connector-app/id6477791197",
    android_link:
      "https://play.google.com/store/apps/details?id=com.connector.android",
  },
];

function Project() {
  return (
    <Box component="div" className="projects-container" id="projects">
      <h1>Projects</h1>
      <Box component="div" className="projects-grid">
        {projects.map((project, index) => (
          <Box component="div" className="project" key={index}>
            {/* image */}
            {/* <img src={"https://images.unsplash.com/photo-1614909978570-15d7423fc6a7?q=80&w=2665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="zoom" alt={project.title} width="100%" /> */}

            {/* title */}
            <h2>
              {project.web_link && project.is_web_link_working ? (
                <a href={project.web_link} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h2>
            <p className="category">{project.category}</p>

            {/* description list */}
            <ul>
              {project.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            {/* store badges */}
            <div className="store-links">
              {project.ios_link && (
                <a href={project.ios_link} target="_blank" rel="noreferrer">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    height="40"
                  />
                </a>
              )}
              {project.android_link && (
                <a href={project.android_link} target="_blank" rel="noreferrer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    height="40"
                  />
                </a>
              )}
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Project;
