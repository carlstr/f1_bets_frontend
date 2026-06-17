import { type MouseEvent, useState } from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import NavButton from "./NavButton";
import { navItems } from "./NavItems";
import NavMenu from "./NavMenu";
import favicon from "../assets/favicon.png";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [openMenuLabel, setOpenMenuLabel] = useState<string | null>(null);

  function handleMenuOpen(event: MouseEvent<HTMLButtonElement>, label: string) {
    setAnchorEl(event.currentTarget);
    setOpenMenuLabel(label);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    setOpenMenuLabel(null);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", gap: 1 }}>
          <img src={favicon} alt="" />
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          {navItems.map((item) => {
            if (!("items" in item)) {
              return (
                <NavButton key={item.href} href={item.href}>
                  {item.label}
                </NavButton>
              );
            }

            const buttonId = `${item.label.toLowerCase()}-button`;
            const menuId = `${item.label.toLowerCase()}-menu`;

            const isMenuOpen = openMenuLabel === item.label;

            return (
              <div key={item.label}>
                <Box key={item.label}>
                  <NavButton
                    id={buttonId}
                    ariaControls={isMenuOpen ? menuId : undefined}
                    ariaHaspopup="true"
                    ariaExpanded={isMenuOpen ? "true" : undefined}
                    onMouseEnter={(event) => handleMenuOpen(event, item.label)}
                    onClick={(event) => handleMenuOpen(event, item.label)}
                  >
                    {item.label}
                  </NavButton>
                  <NavMenu
                    id={menuId}
                    labelledBy={buttonId}
                    anchorEl={anchorEl}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                    items={item.items}
                    onMouseLeave={handleMenuClose}
                  />
                </Box>
              </div>
            );
          })}
        </Box>

        <Box sx={{ display: "flex", marginLeft: "auto", gap: 1 }}>
          <Button variant="contained">Login</Button>
          <Button variant="contained">Register</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
