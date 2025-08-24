import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "", current: false },
  { name: "Projects", href: "portfolio", current: false },
  { name: "Skills", href: "skills", current: false },
  { name: "Blog", href: "blog", current: false },
  { name: "Resume", href: "resume", current: false },
  { name: "Testimonials", href: "testimonials", current: false },
  { name: "Contact", href: "contact", current: false },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <ul className="flex ">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={`/${item.href}`}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
    </nav>
  );
}

export default Navbar;
