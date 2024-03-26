import { ReactNode } from "react";

export type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element | ReactNode;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
  };
  
  export type SideNavItemGroup = {
    title: string;
    menuList: SideNavItem[]
  }