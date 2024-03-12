import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../page";

export const routes = [
  {
    path: "/",
    layout: MainLayout,
    component: Home,
    exact: true,
  },
];
