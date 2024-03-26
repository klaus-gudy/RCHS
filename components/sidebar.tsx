import { SIDENAV_ITEMS } from "@/SIDEBAR_CONSTANTS";
import Image from "next/image";
import { SideBarMenuItem } from "./sidebar-menu-item";

export default function Sidebar(){
    return(
        <aside className="fixed bg-[#3498db] text-gray-200 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]">
            <div className="flex relative items-center py-5 px-3.5">
                <Image alt="RCHS System" src='/logo.png' className='w-12 mx-3.5 min-h-fit' width={35} height={35}></Image>
                <h3 className="pl-2 font-bold text-2xl">RCHS System</h3>
            </div>
            <nav className="flex flex-col gap-2 transition duration-300">
                {
                    SIDENAV_ITEMS.map((item, index) => {
                        return <SideBarMenuItem item={item}></SideBarMenuItem>
                    })
                }
            </nav>
        </aside>
    );
}