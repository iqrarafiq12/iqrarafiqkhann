"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiHome5Line,
  RiFolderLine,
  RiToolsLine,
  RiGiftLine,
  RiEditLine,
  RiMailLine,
} from "react-icons/ri";

const navItems = [
  { name: "Home", href: "/", icon: RiHome5Line },
  { name: "Projects", href: "/projects", icon: RiFolderLine },
  { name: "Services", href: "/services", icon: RiToolsLine },
  { name: "Offers", href: "/offers", icon: RiGiftLine },
  { name: "Blog", href: "/blog", icon: RiEditLine },
  { name: "Contact", href: "/contact", icon: RiMailLine },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4">
      <div className="mx-auto w-fit">
        <nav
          className="
            flex items-center gap-2 sm:gap-4
            bg-[var(--color-secondary)]/80
            backdrop-blur-xl
            border border-[var(--color-dark-2)]/10
            px-4 sm:px-6 py-3
            rounded-2xl
            shadow-xl
          "
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  p-2 sm:p-3 rounded-xl
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-[var(--color-secondary)] text-[var(--color-foreground)] shadow-[0_0_15px_var(--color-accent)]"
                      : "text-[var(--color-dark-2)]/60 hover:text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/20"
                  }
                `}
              >
                <Icon className="text-lg sm:text-xl" />
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
