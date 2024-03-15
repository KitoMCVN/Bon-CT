import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { SidebarItemProps } from "../../../data/sidebarData";

interface SidebarProps {
  items: SidebarItemProps[];
  isOpen: boolean;
  toggleMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleMenu, items }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
        toggleMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  return (
    <div
      ref={sidebarRef}
      className={`${isOpen ? "translate-x-0" : "xl:translate-x-0 -translate-x-full"} xl:static xl:block xl:-top-[156px] xl:z-0 z-50  fixed top-0 left-0 bg-white dark:bg-gray-800 overflow-hidden xl:rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.25)] xl:w-[210px] xl:-mt-[60px] xl:h-auto h-dvh w-full max-w-80 transition-transform duration-300 ease-in-out`}
    >
      <div className='xl:w-[210px]'>
        <div className='xl:hidden flex p-4 border-b text-gray-700 dark:text-gray-300 dark:border-b-gray-600 border-b-gray-400 bg-gray-100 dark:bg-gray-700/50 items-center justify-between'>
          <h3 className='font-bold uppercase'>Menu</h3>
          <FontAwesomeIcon icon={faXmark} onClick={toggleMenu} className='cursor-pointer' />
        </div>
        <div className='xl:flex hidden max-h-40 overflow-hidden w-full items-center justify-center sidebar-header'>
          <img
            className='size-36 object-contain'
            src='https://media.discordapp.net/attachments/1063673504014278697/1215198681725280256/Khong_Co_Tieu_e154_20240307084345.png?ex=65fbe0f7&is=65e96bf7&hm=86bd82066bd51bb7a5f582fc55645bfae6fcd1a804a8b24c6d7d882344ccdcd1&=&format=webp&quality=lossless&width=501&height=501'
            alt='logo'
          />
        </div>
        <div className='mt-5 xl:h-auto h-full sidebar-link xl:overflow-y-visible overflow-y-scroll'>
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
        <div className='sidebar-footer h-44 w-full mt-10 hidden xl:block'></div>
      </div>
    </div>
  );
};

export default Sidebar;
