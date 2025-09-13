import { FaGithub, FaLinkedin, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiMedium, SiHuggingface, SiKaggle, SiStackoverflow } from "react-icons/si";

export default function SocialIcons() {
  const links = [
    { href: import.meta.env.VITE_GITHUB_PROFILE_URL, icon: <FaGithub /> },
    { href: import.meta.env.VITE_LINKEDIN_PROFILE_URL, icon: <FaLinkedin /> },
    // { href: import.meta.env.VITE_RESUME_PROFILE_URL, icon: <HiOutlineDocument /> },
    { href: import.meta.env.VITE_LEETCODE_PROFILE_URL, icon: <SiLeetcode /> },
    { href: import.meta.env.VITE_MEDIUM_PROFILE_URL, icon: <SiMedium /> },
    { href: import.meta.env.VITE_YOUTUBE_PROFILE_URL, icon: <FaYoutube /> },
    { href: import.meta.env.VITE_HUGGING_FACE_PROFILE_URL, icon: <SiHuggingface /> },
    { href: import.meta.env.VITE_KAGGLE_PROFILE_URL, icon: <SiKaggle /> },
    { href: import.meta.env.VITE_STACK_OVERFLOW_PROFILE_URL, icon: <SiStackoverflow /> },
    { href: import.meta.env.VITE_X_TWITTER_PROFILE_URL, icon: <FaXTwitter /> },
  ];

  return (
    <div className="social_icons flex gap-4 text-2xl">
      {links.map(({ href, icon }, idx) => (
        <a key={idx} href={href} target="_blank" rel="noreferrer">
          {icon}
        </a>
      ))}
    </div>
  );
}
