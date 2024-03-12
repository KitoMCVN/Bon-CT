import React, { ReactNode } from "react";
import { Sidebar, Header } from "../components";

interface ChildrenProps {
  children: ReactNode;
}

const MainLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className='md:p-5 p-2 bg-cyan-300 dark:bg-gray-900 dark:text-gray-50'>
      <Header></Header>
      <div className='flex gap-5 h-full mt-[60px] md:mt-0'>
        <Sidebar></Sidebar>
        <div className='h-full mt-5 flex gap-5'>
          <div className='box w-full h-full'>{children}</div>
          <div className='w-[250px]'></div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
