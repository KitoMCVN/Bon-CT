import React, { ReactNode, useState } from "react";
import { Sidebar, Header, Status } from "../components";
import { SidebarItems } from "../../data/sidebarData";

interface ChildrenProps {
  children: ReactNode;
}

const MainLayout: React.FC<ChildrenProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='md:p-5 p-2 bg-sky-300 dark:bg-gray-900 dark:text-gray-50 text-gray-900 relative'>
      <div className='max-w-screen-2xl mx-auto'>
        <Header toggleSidebar={toggleSidebar} toggleStatus={() => setIsStatusOpen(!isStatusOpen)} />
        <div className='flex gap-5 h-full mt-[60px] md:mt-0 items-start'>
          {isSidebarOpen && <div className='fixed top-0 xl:hidden block left-0 w-full h-full bg-black opacity-50 z-40'></div>}
          <Sidebar items={SidebarItems} isOpen={isSidebarOpen} toggleMenu={toggleSidebar}></Sidebar>
          <div className='h-full flex-1 mt-5 flex gap-5 relative'>
            <div className='w-full h-full flex-1'>{children}</div>
            {isStatusOpen && <div className='fixed block lg:hidden top-0 left-0 w-full h-full bg-black opacity-50 z-40'></div>}
            <Status isStatus={isStatusOpen} setIsStatus={setIsStatusOpen}></Status>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
