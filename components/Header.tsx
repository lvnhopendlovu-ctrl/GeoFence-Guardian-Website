"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { playStoreUrl } from "@/lib/seo";
import { Brand } from "./Brand";
import { MenuIcon, PlayStoreIcon } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/demo", label: "Demo" },
  { href: "/help", label: "Help" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <button aria-expanded={open} aria-label="Toggle navigation" className="menu-button" onClick={() => setOpen((value) => !value)} type="button">
          <MenuIcon size={25} />
        </button>
        <nav aria-label="Main navigation" className={open ? "nav open" : "nav"}>
          <div className="nav-links">
            {links.map((link) => (
              <Link aria-current={pathname === link.href ? "page" : undefined} className={pathname === link.href ? "active" : ""} href={link.href} key={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
          <a className="button button-small button-red" href={playStoreUrl} onClick={() => setOpen(false)} rel="noopener noreferrer" target="_blank">
            <PlayStoreIcon size={17} /> Get the app
          </a>
        </nav>
      </div>
    </header>
  );
}
