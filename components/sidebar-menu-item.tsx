"use client";
import { SideNavItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

export const SideBarMenuItem = ({
  item,
  toggleCollapse,
}: {
  item: SideNavItem;
  toggleCollapse: boolean;
}) => {
  const linkStyle =
    "flex items-center min-h-[40px] h-full text-gray-200  py-2 px-4 hover:text-gray-800 rounded-md transition duration-200";
  const activelinkStyle =
    "rounded-md text-white light:text-black light:bg-[#efefef] bg-blue-400";
  const ddlinkStyle = linkStyle;
  const navMenuDropdownItem =
    "text-white py-2 px-4 hover:text-blue-600 transition duration-200";

  const pathName = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  return (
    <>
      {item.submenu ? (
        <div className="rounded-md min-w-[18px]">
          <a
            className={`${ddlinkStyle} ${
              pathName.includes(item.path) ? activelinkStyle : ""
            }`}
            onClick={toggleSubMenu}
          >
            {item.icon}
            {!toggleCollapse && (
              <>
                <span className="ml-3 text-base leading-6 font-semibold">
                  {item.title}
                </span>
                <BsChevronRight
                  className={`${
                    subMenuOpen ? "rotate-90" : ""
                  } ml-auto stroke-2 text-xs`}
                />
              </>
            )}
          </a>
          {subMenuOpen && !toggleCollapse && (
            <div className="bg-[#3498db] border-l-4 ">
              <div className="grid gap-y-2 px-10 py-3 leading-5">
                {item?.subMenuItems?.map((subItem, index) => {
                  return (
                    <Link
                      key={index}
                      href={subItem.path}
                      className={`${navMenuDropdownItem} ${
                        subItem.path === pathName ? "text-gray-800" : ""
                      }`}
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
        <Link
          href={item.path}
          className={`${linkStyle} ${
            item.path === pathName ? activelinkStyle : ""
          }`}
        >
          {item.icon}
          {!toggleCollapse && (
            <span className="ml-3 leading-6 font-semibold">{item.title}</span>
          )}
        </Link>
      )}
    </>
  );
};
