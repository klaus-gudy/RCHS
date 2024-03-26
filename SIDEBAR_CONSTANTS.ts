import { SideNavItem } from "./types/types";
import { BsCalendar, BsCalendarFill, BsFileBarGraphFill, BsFillPersonLinesFill, BsGearFill, BsGraphUp, BsHouseDoor, BsHouseDoorFill, BsPersonFill, BsQuestionCircleFill } from "react-icons/bs";

export const SIDENAV_ITEMS:SideNavItem[]=[
    {
        title: "Dashboard",
        path: "/home",
        icon: BsHouseDoorFill ({size:20})
        // icon: <BsHouseDoor/>
    },
    {
        title: "Patient Records",
        path: "/Records",
        icon:  BsFillPersonLinesFill ({size:20})
    },
    {
        title: "Hospital Visits",
        path: "/visits",
        icon:  BsCalendarFill ({size:20}),
        submenu: true,
        subMenuItems: [
            {title: "All", path: "/visits"},
            {title: "New", path: "/visits/new"},
        ]
    },
    {
        title: "Reports/Analytics",
        path: "/reports",
        icon:  BsFileBarGraphFill ({size:20})
    },
    {
        title: "Settings/Administration",
        path: "/settings",
        icon:  BsGearFill ({size:20})
    },
    {
        title: "User Account",
        path: "/account",
        icon:  BsPersonFill ({size:20})
    },
    {
        title: "Help/Support",
        path: "/help",
        icon:  BsQuestionCircleFill ({size:20})
    },
]