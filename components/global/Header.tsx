import MenuBack from "./MenuBack";
import AuthButton from "./AuthButton";
const Header =  () => {
  return (
    <header className="flex justify-between items-center h-14 w-full px-4 bg-background text-foreground">
      <MenuBack />
      <div className="flex items-center gap-4 place-content-center justify-between">
        <AuthButton />
      </div>
    </header>
  );
};

export default Header;
