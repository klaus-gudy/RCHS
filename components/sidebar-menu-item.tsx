"use client";
import { SideNavItem } from "@/types/types";
import Link from "next/link";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

export const SideBarMenuItem = ({ item }: { item: SideNavItem }) => {
  const linkStyle =
    "flex items-center min-h-[40px] h-full text-gray-200  py-2 px-4 hover:text-blue-600 rounded-md transition duration-200";
  const ddlinkStyle = linkStyle;
  const navMenuDropdownItem =
    "text-white py-2 px-4 hover:text-blue-600 transition duration-200";

  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu=()=>{
    setSubMenuOpen(!subMenuOpen);
  }
  return (
    <>
      {item.submenu ? (
        <div className="rounded-md min-w-[18px]">
          <a className={ddlinkStyle} onClick={toggleSubMenu}>
            {item.icon}
            <span className="ml-3 text-base leading-6 font-semibold">
              {item.title}
            </span>
            <BsChevronRight className="ml-auto stroke-2 text-xs" />
          </a>
          {subMenuOpen && (
            <div className="bg-[#3498db] border-l-4 ">
              <div className="grid gap-y-2 px-10 py-3 leading-5">
                {item.subMenuItems.map((subItem, index) => {
                  return (
                    <Link
                      key={index}
                      href={subItem.path}
                      className={navMenuDropdownItem}
                    >
                      <span>{subItem.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link href={item.path} className={linkStyle}>
          {item.icon}
          <span className="ml-3 leading-6 font-semibold">{item.title}</span>
        </Link>
      )}
    </>
  );
};
