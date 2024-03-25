import Image from "next/image";

export default function Sidebar(){
    return(
        <aside className="fixed bg-[#31353d] text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]">
            <div className="flex relative items-center py-5 px-3.5">
                <Image alt="RCHS System" src='/RCHS_logo.png' className='w-12 mx-3.5 min-h-fit' width={35} height={35}></Image>
                <h3 className="pl-2 font-bold text-2xl">RCHS System</h3>
            </div>
        </aside>
    );
}