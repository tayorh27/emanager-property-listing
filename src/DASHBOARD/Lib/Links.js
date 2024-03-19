import { MdDashboard, MdOutlineGroups } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { PiWalletFill } from "react-icons/pi";
import listings from '../../DASHBOARD/assets/listings.png'
import { FiSettings } from "react-icons/fi";
import { IoMdHelpCircleOutline } from "react-icons/io";

export const DashboardSideLinks = [
  {
    key : 1,
    label : "Dashboard",
    path : "/dashboard",
    icon : <MdDashboard/>
  },
  {
    key : 2,
    label : "My Listings",
    path : "/listings",
    icon : listings
  },
  {
    key : 3,
    label : "Subsription",
    path : "/subscription",
    icon : <MdOutlineGroups />
  },
  {
    key : 4,
    label : "Property Requests",
    path : "/property-requests",
    icon : <PiWalletFill />
  },
  {
    key : 5,
    label : "Profile",
    path : "/profile",
    icon : <IoPersonOutline />
  },
]

export const BottomLinks = [
  {
    key : 1,
    label : "Settings",
    path : "/settings",
    icon : <FiSettings/>
  },
  {
    key : 2,
    label : "Help",
    path : "/help",
    icon : <IoMdHelpCircleOutline/>
  },
]