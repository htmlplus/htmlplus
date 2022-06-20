export interface SidebarItem {
  title: string;
  icon?: string;
  items?: Array<SidebarItem>;
  url?: string;
}

export interface SidebarProps {
  items?: Array<SidebarItem>;
}
