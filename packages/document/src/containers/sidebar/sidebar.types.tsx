export interface SidebarItem {
  title: string;
  icon?: string;
  items?: SidebarItem[];
  url?: string;
}

export interface SidebarProps {
  items?: SidebarItem[];
}
