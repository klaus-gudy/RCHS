import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { BsList } from "react-icons/bs";

export default function Header({
  toggleCollapse,
  setToggleCollapse,
}: {
  toggleCollapse: boolean;
  setToggleCollapse: Dispatch<SetStateAction<boolean>>;
}) {

    const sideBarToggle=()=>{
        setToggleCollapse(!toggleCollapse);
    } 
    const headerStyle = classNames("fixed bg-[#3498db] w-full z-0 px-4 shadow-sm shadow-slate-500/40",
    {
        ["pl-[20rem]"]:!toggleCollapse,
        ["pl-[5.6rem]"]:toggleCollapse,
    })
  return (
    <header className={headerStyle}>
      <div className="flex items-center justify-between h-16">
        <button onClick={sideBarToggle} className="bg-[#6ca2ff] text-[#ffffff] hover:bg-blue-500 ml-3 rounded-md h-[30px] w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
          <BsList></BsList>
        </button>
        <div className="h-10 w-10 rounded-full bg-[#6ca2ff] flex items-center justify-center text-center">
          <span className="font-semibold text-sm">GM</span>
        </div>
      </div>
    </header>
  );
}
