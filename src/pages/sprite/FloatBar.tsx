import { Link, useLocation } from "react-router";

export default function FloatBar() {
  const location = useLocation();

  const links = [
    { label: "Sprite", href: "/brands/sprite" },
    { label: "É verão", href: "/brands/sprite/sprite-e-verao" },
    { label: "Em casa", href: "/brands/sprite/athome" },
    { label: "Na Rua", href: "/brands/sprite/inthestreet" },
  ];

  return (
    <div className="sticky top-20 z-50 max-w-[90%]">
      <ul className="flex gap-5 rounded-lg p-5 bg-black/56 text-white font-Noto font-semibold overflow-x-auto scrollbar-hide">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className={`${
                location.pathname === link.href
                  ? "underline underline-offset-[130%] decoration-3"
                  : "hover:underline"
              } transition whitespace-nowrap`}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
