import favicon from "../assets/favicon.png";
import { Button } from "@mui/material";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="header">
      <div className="flex items-center justify-between p-2">
        <img src={favicon} alt="" />
        <div className="flex gap-2">
          <Button variant="contained">Login</Button>
          <Button variant="contained">Register</Button>
        </div>
      </div>
      <div className="navBar">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
