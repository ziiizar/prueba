'use client'

import { CalendarIcon, ChatIcon, HomeIcon } from "@/icons"
import NavLinks from "./NavLinks"
import { NavLinkProps } from "@/types"

const Navbar = () => {

    const links: NavLinkProps[] = 
         [
            {
                label: "Calendario",
            href: "/calendario",
            icon: CalendarIcon
        },
        {
            label: "Inicio",
            href: "/",
            icon: HomeIcon
        },
        {
            label: "Chat",
            href: "/chat",
            icon: ChatIcon
        }
    ]
    

  return (
    <nav className="flex  h-14 w-full  px-8 bg-background-secondary ">
        
        <NavLinks links={links} />
    </nav>
  )
}

export default Navbar
