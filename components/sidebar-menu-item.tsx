import { SideNavItem } from "@/types/types";
import Link from "next/link";

export const SideBarMenuItem = ({ item }: { item: SideNavItem }) => {
  const linkStyle =
    "flex items-center min-h-[40px] h-full text-[#6e768e] py-2 px-4 hover:text-white rounded-md transition duration-200";
  return (
    <>
      {item.submenu ? (
        <div></div>
      ) : (
        <Link href={item.path} className={linkStyle}>
                 { item.icon}
          <span className="ml-3 leading-6 font-semibold">{item.title}</span>
        </Link>
      )}
    </>
  );
};