"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavLinkProps } from "@/types";

const NavLinks = ({ links }: { links: NavLinkProps[] }) => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-4 justify-between place-content-center items-center w-full text-foreground h-full">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;
        return (
          <li
            className="w-[120px] py-2 flex flex-col items-center place-content-center"
            key={link.href}
          >
            <Link
              href={link.href}
              className={cn(
                "flex flex-col items-center gap-1 place-content-center text-xs",
                isActive && "text-secondary"
              )}
            >
              <LinkIcon
                className={cn(
                  "size-6",
                  isActive ? "fill-secondary" : "fill-foreground"
                )}
              />
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
