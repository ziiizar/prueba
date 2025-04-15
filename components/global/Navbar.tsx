"use client";

import { CalendarIcon, ChatIcon, HomeIcon } from "@/icons";
import NavLinks from "./NavLinks";
import { NavLinkProps } from "@/types";
import { AUTH_ROUTES } from "@/constants/routes";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const links: NavLinkProps[] = [
    {
      label: "Calendario",
      href: "/calendario",
      icon: CalendarIcon,
    },
    {
      label: "Inicio",
      href: "/",
      icon: HomeIcon,
    },
    {
      label: "Chat",
      href: "/chat",
      icon: ChatIcon,
    },
  ];

  return (
    <>
      {AUTH_ROUTES.includes(pathname) ? (null) : (
        <nav className="flex  h-14 w-full  px-8 bg-background-secondary ">
          <NavLinks links={links} />
        </nav>
      )}
    </>
  );
};

export default Navbar;
