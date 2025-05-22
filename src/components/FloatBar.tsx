import { Link, useLocation } from "react-router";

export default function FloatBar() {
  const location = useLocation();

  const links = [
    { label: "Coke Studio", href: "/coke-studio" },
    { label: "Promoções", href: "/promocoes" },
    { label: "Lollapalooza 2025", href: "/lolla-2025" },
    { label: "Experiências", href: "/experiencias" },
    { label: "Time", href: "/time" },
  ];
  return (
    <div className="fixed  z-50 max-w-[90%] top-25 lg:mt-5 lg:mb-20 lg:top-24">
      <ul className="flex gap-5 rounded-lg p-5 bg-black/56 text-white font-Noto font-semibold overflow-scroll">
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
