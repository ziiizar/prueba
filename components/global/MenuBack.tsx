"use client";

import { HamburgerMenuIcon } from "@/icons";
import { routes } from "@/constants/routes";
import { ArrowBackIcon } from "@/icons";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuBack = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {isHome ? (
        <button>
          <HamburgerMenuIcon />
        </button>
      ) : (
        <Link href={routes.home}>
          <ArrowBackIcon />
        </Link>
      )}
    </>
  );
};

export default MenuBack;