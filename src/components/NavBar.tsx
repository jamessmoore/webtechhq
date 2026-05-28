"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="blade-nav">
      <div className="blade-rule" />
      <div className="flex items-center justify-center gap-10 py-3">
        {links.map((link, i) => (
          <span key={link.href} className="flex items-center gap-10">
            {i > 0 && <span className="blade-nav-sep">///</span>}
            <Link
              href={link.href}
              className={`blade-nav-link${pathname === link.href ? " active" : ""}`}
            >
              {link.label}
            </Link>
          </span>
        ))}
      </div>
      <div className="blade-rule" />
    </nav>
  );
}
