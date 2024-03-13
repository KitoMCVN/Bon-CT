import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Assuming you're using FontAwesome
import { SidebarItemProps, SidebarItems } from "../../../data/sidebarData";

interface SidebarProps {
  items: SidebarItemProps[];
}

const Sidebar: React.FC<SidebarProps> = ({ items = SidebarItems }) => {
  return (
    <div className='hidden lg:block bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow-sm w-[210px] -mt-[60px]'>
      <div className='w-[210px]'>
        <div className='max-h-40 overflow-hidden w-full flex items-center justify-center sidebar-header'>
          <img
            className='size-36 object-contain'
            src='https://media.discordapp.net/attachments/1063673504014278697/1215198681725280256/Khong_Co_Tieu_e154_20240307084345.png?ex=65fbe0f7&is=65e96bf7&hm=86bd82066bd51bb7a5f582fc55645bfae6fcd1a804a8b24c6d7d882344ccdcd1&=&format=webp&quality=lossless&width=501&height=501'
            alt='logo'
          />
        </div>
        <div className='mt-5'>
          <div className='pr-5'>
            {items.map((item) => (
              <Link key={item.id} to={item.path}>
                <div className='px-4 h-11 flex items-center mb-2 dark:text-gray-300 text-gray-600 rounded-r-full hover:bg-gray-100 hover:dark:bg-gray-700 hover:text-gray-900 hover:dark:text-gray-50'>
                  <div className='flex items-center gap-4 '>
                    <FontAwesomeIcon icon={item.icon} className='text-base' />
                    <span className='uppercase text-sm font-medium'>{item.title}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className='sidebar-footer h-44 w-full mt-10'></div>
      </div>
    </div>
  );
};

export default Sidebar;
