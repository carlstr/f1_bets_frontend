import { Menu, MenuItem } from "@mui/material";

type NavMenuItem = {
  label: string;
  href: string;
};

type NavMenuProps = {
  id: string;
  labelledBy: string;
  anchorEl: HTMLElement | null;
  open: boolean;
  items: NavMenuItem[];
  onClose: () => void;
};

function NavMenu({
  id,
  labelledBy,
  anchorEl,
  open,
  items,
  onClose,
}: NavMenuProps) {
  return (
    <Menu
      id={id}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      slotProps={{
        list: {
          "aria-labelledby": labelledBy,
        },
      }}
    >
      {items.map((item) => (
        <MenuItem
          key={item.href}
          component="a"
          href={item.href}
          onClick={onClose}
        >
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
}

export default NavMenu;
