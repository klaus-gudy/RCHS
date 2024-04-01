import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { BsList } from "react-icons/bs";

export default function Header() {

  const { toggleCollapse, invokeToggleCollapse } = useSideBarToggle();
  const sidebarToggle = () => {
      invokeToggleCollapse();
  }
  const headerStyle = classNames("bg-sidebar fixed w-full z-[99999] px-4 shadow-sm shadow-slate-500/40",
      {
          ["sm:pl-[20rem]"]: !toggleCollapse,
          ["sm:pl-[5.6rem]"]: toggleCollapse,
      });
  return (
    <header className={headerStyle}>
      <div className="flex items-center justify-between h-16">
        <button onClick={sidebarToggle} className="order-2 sm:order-1 bg-[#6ca2ff] text-[#ffffff] hover:bg-blue-500 ml-3 rounded-md h-[30px] w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
          <BsList></BsList>
        </button>
        <div className="order-1 sm:order-2 h-10 w-10 rounded-full bg-[#6ca2ff] flex items-center justify-center text-center">
          <span className="font-semibold text-sm">GM</span>
        </div>
      </div>
    </header>
  );
}
