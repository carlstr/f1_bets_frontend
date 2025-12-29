import favicon from "../assets/favicon.png";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-2 outline-solid">
      <img src={favicon} alt="" />
      <div className="flex gap-2">
        <Button variant="contained">Login</Button>
        <Button variant="contained">Register</Button>
      </div>
    </header>
  );
};

export default Header;
