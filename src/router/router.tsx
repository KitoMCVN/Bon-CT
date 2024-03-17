import { MainLayout } from "../layouts/MainLayout";
import { LayoutNoStatus } from "../layouts/LayoutNoStatus";
import { Home, Members } from "../page";

export const routes = [
  {
    path: "/",
    layout: MainLayout,
    component: Home,
  },
  {
    path: "/members",
    layout: LayoutNoStatus,
    component: Members,
  },
];
