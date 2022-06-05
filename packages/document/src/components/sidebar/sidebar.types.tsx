export interface SidebarItem {
  title: string;
  icon?: string;
  items?: Array<SidebarItem>;
  route?: {
    to: string;
    params?: any;
  };
}

export interface SidebarProps {
  items?: Array<SidebarItem>;
}
