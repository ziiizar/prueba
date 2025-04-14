'use client'

import { HamburgerMenuIcon, NotificationsIcon, UserIcon, ArrowBackIcon } from "@/icons"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { routes } from "@/constants/routes"

const Header = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header className="flex justify-between items-center h-14 w-full px-4 bg-background text-foreground">
      {isHome ? (
        <button>
          <HamburgerMenuIcon />
        </button>
      ) : (
        <Link href={routes.home}>
            <ArrowBackIcon />
        </Link>
      )}
      <div className="flex items-center gap-4">
        <button><NotificationsIcon /></button>
        <button><UserIcon /></button>
      </div>
    </header>
  )
}

export default Header