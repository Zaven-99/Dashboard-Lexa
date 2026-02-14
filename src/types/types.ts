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
  title: string;
  count: string;
  badge: string;
  badgeText: string;
}

export interface IOrdersData {
  id: string;
  img: string;
  name: string;
  status: string;
  coast: string;
  date: string;
}
