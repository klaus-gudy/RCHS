import { BsList } from "react-icons/bs";

export default function Header(){
    return(
        <div className="fixed bg-[#3498db] w-full z-0 px-4 shadow-sm shadow-slate-500/40 pl-[20rem]">
            <div className="flex items-center justify between h-16">
                <button className="bg-[#6ca2ff] text-[#ffffff] hover:bg-blue-500 ml-3 rounded-md h-[30px] w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center">
                    <BsList></BsList>
                </button>
            </div>
        </div>
    );
}