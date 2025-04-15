import MenuBack from "./MenuBack";
import AuthButton from "./AuthButton";
import { auth } from "@/auth";

const Header = async () => {

  const session = await auth();
  console.log(session);

  return (
    <header className="flex justify-between items-center h-14 w-full px-4 bg-background text-foreground">
      <MenuBack />
      <div className="flex items-center gap-4 place-content-center justify-between">
       
        <AuthButton user={session?.user} />
      </div>
    </header>
  );
};

export default Header;
