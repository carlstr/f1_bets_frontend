type NavLinkItem = {
  label: string;
  href: string;
};

type NavMenuItem = {
  label: string;
  items: NavLinkItem[];
};

export type NavItem = NavLinkItem | NavMenuItem;

export const navItems: NavItem[] = [
  {
    label: "Schedule",
    items: [
      { label: "Previous", href: "/previous" },
      { label: "Next", href: "/next" },
      { label: "Upcoming", href: "/upcoming" },
    ],
    href: "/schedule",
  },
  {
    label: "Results",
    items: [
      { label: "Drivers", href: "/results/previous" },
      { label: "Teams", href: "/results/next" },
      { label: "Season", href: "/results/upcoming" },
    ],
    href: "/results",
  },
  {
    label: "Drivers",
    items: [
      { label: "Driver 1", href: "/drivers/1" },
      { label: "Driver 2", href: "/drivers/2" },
    ],
  },
  {
    label: "Teams",
    items: [
      { label: "Team 1", href: "/teams/1" },
      { label: "Team 2", href: "/teams/2" },
    ],
    href: "/teams",
  },
  {
    label: "Predictions",
    items: [
      { label: "Standings", href: "/predictions/standings" },
      { label: "Place Prediction", href: "/predictions/predict" },
    ],
    href: "/predictions",
  },
  { label: "Info", href: "/info" },
];
