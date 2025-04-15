import { NotificationsIcon } from "@/icons";
import MenuBack from "./MenuBack";
import AuthButton from "./AuthButton";
import { getUser } from "@/services/auth";
const Header = async () => {
  const user = await getUser();
  console.log(user);

  return (
    <header className="flex justify-between items-center h-14 w-full px-4 bg-background text-foreground">
      <MenuBack />
      <div className="flex items-center gap-4 place-content-center justify-between">
        <button>
          <NotificationsIcon />
        </button>
        <AuthButton user={user} />
      </div>
    </header>
  );
};

export default Header;
