import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "#", current: false },
  { name: "About Me", href: "aboutme", current: false },
  { name: "Projects", href: "portfolio", current: false },
];

export default function Header() {
  return (
    <div className="bg-gray-800 mx-auto max-w-7xl">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={`/${item.href}`}
                  aria-current={item.current ? "page" : undefined}
                  className={({ isActive }) =>
                    [
                      isActive
                        ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium",
                    ].join(" ")
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
