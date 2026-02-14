import avatar from "../assets/user/avatar.jpeg";
import type {
  IcardData,
  IchartData,
  IMiniChartData,
  INavigation,
  IOrdersData,
  IUser,
} from "../types/types";
import {
  FiUser,
  FiCreditCard,
  FiSettings,
  FiLock,
  FiLogOut,
} from "react-icons/fi";
import { BsSpeedometer2 } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { CiMedicalCase } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { RiPieChart2Fill } from "react-icons/ri";

export const user: IUser[] = [
  {
    avatar: avatar,
    username: "exampleLogin",
    email: "exampleLogin@mail.ru",
    password: "examplePassword",
  },
];

export const navigation: INavigation[] = [
  {
    id: 1,
    title: "Dashboard",
    link: "/dashboard",
    img: BsSpeedometer2,
  },
  {
    id: 2,
    title: "Email",
    link: "/email",
    img: TfiEmail,
  },
  {
    id: 3,
    title: "UI Elemet",
    link: "/ui-element",
    img: CiMedicalCase,
  },
  {
    id: 4,
    title: "Forms",
    link: "/forms",
    img: FaWpforms,
  },

  {
    id: 5,
    title: "More",
    link: "/more",
    img: CgDetailsMore,
  },
  {
    id: 6,
    title: "Charts",
    link: "/charts",
    img: RiPieChart2Fill,
  },
  {
    id: 7,
    title: "Pages",
    link: "/pages",
    img: CiMedicalCase,
  },
];

export const chartData: IchartData[] = [
  { year: 2011, marketplace: 90, direct: 180 },
  { year: 2012, marketplace: 180, direct: 200 },
  { year: 2013, marketplace: 270, direct: 90 },
  { year: 2015, marketplace: 360, direct: 360 },
  { year: 2016, marketplace: 360, direct: 360 },
  { year: 2017, marketplace: 360, direct: 360 },
];

export const miniChartData: IMiniChartData[] = [
  { name: "a", value: 12 },
  { name: "b", value: 20 },
  { name: "c", value: 8 },
  { name: "a", value: 12 },
  { name: "b", value: 20 },
  { name: "c", value: 8 },
  { name: "a", value: 12 },
  { name: "b", value: 20 },
  { name: "c", value: 8 },
  { name: "a", value: 12 },
  { name: "b", value: 20 },
  { name: "c", value: 8 },
  { name: "a", value: 12 },
  { name: "b", value: 20 },
  { name: "c", value: 8 },
];

export const cardData: IcardData[] = [
  {
    id: 1,
    title: "Orders",
    count: "1,587",
    badge: "+11%",
    badgeText: "From previous period",
  },
  {
    id: 2,
    title: "Revenue",
    count: "$46,782",
    badge: "-29%",
    badgeText: "From previous period",
  },
  {
    id: 3,
    title: "Average Price",
    count: "$15.9",
    badge: "0%",
    badgeText: "From previous period",
  },
  {
    id: 3,
    title: "Product Sold",
    count: "1890",
    badge: "+89%",
    badgeText: "From previous period",
  },
  {
    id: 4,
    title: "Product Sold",
    count: "1890",
    badge: "+89%",
    badgeText: "From previous period",
  },
];

export const ordersData: IOrdersData[] = [
  {
    id: 13242,
    img: avatar,
    status: "Cancel",
    name: "Riverston Glass Chair",
    coast: "$435",
    date: "5/12/2016",
  },
  {
    id: 13242,
    img: avatar,
    status: "Delivered",
    name: "Riverston Glass Chair",
    coast: "$435",
    date: "5/12/2016",
  },
  {
    id: 13242,
    img: avatar,
    status: "Cancel",
    name: "Riverston Glass Chair",
    coast: "$435",
    date: "5/12/2016",
  },
  {
    id: 13242,
    img: avatar,
    status: "Delivered",
    name: "Riverston Glass Chair",
    coast: "$435",
    date: "5/12/2016",
  },
  {
    id: 13242,
    img: avatar,
    name: "Riverston Glass Chair",
    status: "Shipped",
    coast: "$435",
    date: "5/12/2016",
  },
  {
    id: 13242,
    img: avatar,
    name: "Riverston Glass Chair",
    status: "Delivered",
    coast: "$435",
    date: "5/12/2016",
  },
  {
    id: 13242,
    img: avatar,
    name: "Riverston Glass Chair",
    status: "Shipped",
    coast: "$435",
    date: "5/12/2016",
  },
];

export const dropDownLinks = [
  {
    id: 1,
    icon: FiUser,
    name: "Profile",
    action: "",
    path: "/dashboard",
  },
  {
    id: 2,
    icon: FiCreditCard,
    name: "My wallet",
    action: "",
    path: "/dashboard",
  },
  {
    id: 3,
    icon: FiSettings,
    name: "Settings",
    action: "",
    path: "/dashboard",
  },
  {
    id: 4,
    icon: FiLock,
    name: "Lock screen",
    action: "",
    path: "/dashboard",
  },
  {
    id: 5,
    icon: FiLogOut,
    name: "Log out",
    action: "logout",
    path: "/dashboard",
  },
];
