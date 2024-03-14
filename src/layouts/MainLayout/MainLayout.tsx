import React, { ReactNode } from "react";
import { Sidebar, Header } from "../components";
import { DiscordOnline, MoreDiscordOnline } from "../../components/DiscordOnline";
import { MinecraftOnline } from "../../components/MincraftOnline";
import { SidebarItems } from "../../data/sidebarData";

interface ChildrenProps {
  children: ReactNode;
}

const MainLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className='md:p-5 p-2 bg-sky-300 dark:bg-gray-900 dark:text-gray-50 text-gray-900'>
      <div className='max-w-screen-2xl mx-auto'>
        <Header></Header>
        <div className='flex gap-5 h-full mt-[60px] md:mt-0 items-start'>
          <Sidebar items={SidebarItems}></Sidebar>
          <div className='h-full flex-1 mt-5 flex gap-5'>
            <div className='box w-full h-full flex-1'>{children}</div>
            <div className='md:block hidden w-[250px]'>
              <DiscordOnline></DiscordOnline>
              <MinecraftOnline></MinecraftOnline>
              <MoreDiscordOnline></MoreDiscordOnline>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
