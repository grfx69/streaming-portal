"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: "fa-home", href: "/", label: "Home" },
  { icon: "fa-gamepad", href: "/gamepad", label: "Games" },
  { icon: "fa-music", href: "/music", label: "Music" },
  { icon: "fa-globe", href: "/globe", label: "Web" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-black overflow-auto flex flex-nowrap border-b border-zinc-800">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`float-left px-4 py-3 text-2xl text-center transition-colors duration-200 ${
              isActive
                ? "text-white bg-zinc-800"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
            }`}
            title={item.label}
          >
            <i className={`fa-solid ${item.icon}`} />
          </Link>
        );
      })}
    </nav>
  );
}
