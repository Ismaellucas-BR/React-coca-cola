import { Link, useLocation } from "react-router";

export default function FloatBar() {
  const location = useLocation();

  const links = [
    { label: "Coke Studio", href: "/coke-studio" },
    { label: "Promoções", href: "/coke-studio/promos" },
    { label: "Lollapalooza 2025", href: "/coke-studio/lollapalooza-2025" },
    { label: "Experiências", href: "/coke-studio/experiences" },
    { label: "Time", href: "/coke-studio/team" },
  ];
  return (
    <div className="fixed  z-20 max-w-[90%] top-25 lg:mt-5 lg:mb-20 lg:top-24">
      <ul className="flex gap-5 rounded-lg p-5 bg-black/56 text-white font-Noto font-semibold overflow-scroll scrollbar-hide">
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
