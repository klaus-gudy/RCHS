// components/Profile.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="h-full bg-gray-200 p-8">
      <div className="bg-white rounded-lg shadow-xl pb-8">
        <div className="w-full h-[200px] bg-[#08a29e]">
        </div>
        <div className="flex flex-col items-center -mt-20">
          <Image
            src="/avatar/me.png"
            className="w-40 border-4 border-white rounded-full"
            alt="Profile Image"
            width={200}
            height={200}
          />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl">Tuntufye Mwakifumbwa</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          <div className="flex items-center space-x-4 mt-2">
            <Link href={"/Visits"}>
            <Button className="flex items-center bg-[#08a29e] hover:bg-[#a6cabd] text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <span>New Visit</span>
            </Button>
            </Link>
            <Button className="flex items-center bg-[#08a29e] hover:bg-[#a6cabd] text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <span>New Appoitment</span>
            </Button>
            <Button className="flex items-center bg-[#08a29e] hover:bg-[#a6cabd] text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <span>Generate Report</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
