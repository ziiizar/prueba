'use client'

import {signOutAction} from "../../actions/signOut/action";
import { NotificationsIcon, UserIcon } from "@/icons";
import {  useState } from "react";
import { Button, ButtonWithGradientBorder } from "../ui/button";
import Link from "next/link";
import { routes } from "@/constants/routes";


const AuthButton = ({user}: {user: any}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  

  return (
    <div className="relative flex items-center place-content-center">
      
          {user ? (<>
            <button>
          <NotificationsIcon />
        </button>
            <button 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="rounded-full"
          >
            <UserIcon />
          </button>
          {    isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-md border bg-popover p-2 text-popover-foreground shadow-md">
              <div className="flex items-center gap-2 p-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  {user?.name?.[0] || "U"}
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">{user?.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {user?.email}
                  </span>
                </div>
              </div>
              <form >
                <Button onClick={signOutAction}
                  variant="ghost"
                  className="w-full justify-start"
                  type="submit"
                >
                  Logout
                </Button>
              </form>
            </div>
          )}
          </>) : (<div className="flex items-center gap-2">
           <Link href={routes.login}>
              <ButtonWithGradientBorder className="w-20 flex place-content-center items-center h-8" >Signup</ButtonWithGradientBorder>
           </Link>
           <Link href={routes.signup}>
              <Button className="w-20" >Login</Button>
           </Link>
          </div>
          )}
        </div>
  )
}   

export default AuthButton