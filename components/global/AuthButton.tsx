'use client'

import { NotificationsIcon, UserIcon } from "@/icons";
import { useEffect, useState, useRef } from "react";
import { Button, ButtonWithGradientBorder } from "../ui/button";
import Link from "next/link";
import { AUTH_ROUTES, routes } from "@/constants/routes";
import { usePathname } from "next/navigation";
import { useAuthUser, useSignOut } from "@/hooks";

const AuthButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const signOut = useSignOut();
  const authUser = useAuthUser();
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    // Cerrar dropdown al cambiar de ruta o recargar
    setIsDropdownOpen(false);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [pathname]); // Se ejecuta cuando cambia la ruta

  return (
    <div className="relative flex items-center place-content-center">
      {authUser ? (
        <div className="flex items-center gap-3">
          <button>
            <NotificationsIcon />
          </button>
          <button 
            ref={buttonRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="rounded-full"
          >
            <UserIcon />
          </button>
          {isDropdownOpen && (
            <div 
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-56 rounded-md border bg-popover p-2 text-popover-foreground shadow-md"
            >
              <div className="flex items-center gap-2 p-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  {authUser?.name?.[0] || "U"}
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">{authUser?.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {authUser?.email}
                  </span>
                </div>
              </div>
              <Button 
                onClick={() => {
                  signOut();
                  setIsDropdownOpen(false);
                }}
                variant="ghost"
                className="w-full justify-start"
                type="submit"
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      ) : (
        AUTH_ROUTES.includes(pathname) ? null : (
          <div className="flex items-center gap-2">
            <Link href={routes.signup}>
              <ButtonWithGradientBorder className="w-20 flex place-content-center items-center h-8">
                Signup
              </ButtonWithGradientBorder>
            </Link>
            <Link href={routes.login}>
              <Button className="w-20">Login</Button>
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default AuthButton;