import type { IconType } from "react-icons";

export interface IUser {
  avatar: string;
  username: string;
  email: string;
  password: string;
}

export interface IFormValues {
  username: string;
  email: string;
  password: string;
}

export interface INavigation {
  id: number;
  title: string;
  link: string;
  img?: IconType;
}

export interface IchartData {
  year: number;
  marketplace: number;
  direct: number;
}
export interface IMiniChartData {
  name: string;
  value: number;
}

export interface IcardData {
  id: number;
  title: string;
  count: string;
  badge: string;
  badgeText: string;
}

export interface IOrdersData {
  id: number;
  img: string;
  name: string;
  status: string;
  coast: string;
  date: string;
}

export interface IDropDownLinks {
  id: number;
  icon: IconType;
  name: string;
  action: string;
  path: string;
}
