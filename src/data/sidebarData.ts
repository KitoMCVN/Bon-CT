import { faHome, faCity, faScaleBalanced, faTruckMedical, faBugSlash } from "@fortawesome/free-solid-svg-icons";

export interface SidebarItemProps {
  id: number;
  title: string;
  path: string;
  icon: any;
}

export const SidebarItems: SidebarItemProps[] = [
  { id: 1, title: "Trang Chủ", icon: faHome, path: "/" },
  { id: 2, title: "Thành viên", icon: faCity, path: "/members" },
  { id: 3, title: "Luật Lệ", icon: faScaleBalanced, path: "/rule" },
  { id: 4, title: "Tố Cáo", icon: faBugSlash, path: "/report" },
  { id: 5, title: "Giúp Đỡ", icon: faTruckMedical, path: "/help" },
];
