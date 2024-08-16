import ProjectCard from "../components/ProjectCard";

function Portfolio() {
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
      ios_link: "https://apps.apple.com/us/app/furtrieve/id1415240197",
      android_link:
        "https://play.google.com/store/apps/details?id=com.furtrieve&hl=en_US",
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
      ios_link:
        "https://apps.apple.com/us/app/foodies-takeout-delivery/id6463634796",
      android_link:
        "https://play.google.com/store/apps/details?id=com.foodiestakeout",
    },
    {
      title: "Streetz-Gujju Marketplace",
      category: "Lifestyle/Ecommerce",
      description: [
        "Seamless Shopping: Easy browsing, searching, adding to cart, & secure checkout.",
        "Real-Time Delivery: Track orders & see delivery driver location.",
        "User Management: Profiles, order history, & address management.",
      ],
      image: "streetz.jpg",
      ios_link:
        "https://apps.apple.com/in/app/streetz-gujju-marketplace/id6451184276",
      android_link:
        "https://play.google.com/store/apps/details?id=com.streetzapp&pli=1",
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
      ios_link: "https://apps.apple.com/us/app/careit-work/id1611555542",
      android_link:
        "https://play.google.com/store/apps/details?id=com.care_it&hl=en_US&gl=US",
    },
  ];

  return (
    <section className="portfolio">
      <div className="project-grid mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
