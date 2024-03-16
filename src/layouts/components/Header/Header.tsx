import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleDollarToSlot, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { DarkMode } from "../../../components/DarkMode";
import { Button } from "../../../components/Button";
import { Image } from "../../../components/Image";
import useCopy from "../../../hooks/useCopy";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";

interface HeaderProps {
  toggleSidebar: () => void;
  toggleStatus: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, toggleStatus }) => {
  const [scrolled, setScrolled] = useState(false);
  const { copyContent } = useCopy();

  const handleCopyClick = () => {
    copyContent("BonCity.net");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && window.innerWidth > 768) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`xl:ml-[230px] bg-white z-40 dark:bg-gray-800 md:sticky md:w-auto w-full rounded-none fixed top-0 left-0 transition-all duration-300 md:rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.25)] ${scrolled ? "sticky top-0 left-0  md:rounded-tl-none md:rounded-tr-none " : ""}`}
    >
      <nav className='px-5 h-[60px] flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <button className='text-xl xl:hidden block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50'>
            <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
          </button>
          <div className='size-10 rounded-lg overflow-hidden'>
            <Image className='size-full' src='/logo.png' alt='logo'></Image>
          </div>
        </div>
        <div className='flex items-center float-right gap-4'>
          <Button onClick={handleCopyClick} className='bg-sky-600 hover:-translate-y-1 hover:bg-sky-500 text-white'>
            BonCity.net
          </Button>
          <Tippy content='🪁 Online' animation='scale' offset={[0, 20]}>
            <FontAwesomeIcon
              onClick={toggleStatus}
              icon={faEllipsisVertical}
              className='focus:outline-none lg:hidden flex gap-2 items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 cursor-pointer dark:hover:text-gray-50'
            />
          </Tippy>
          <Tippy content='💸 Donate' animation='scale' offset={[0, 20]}>
            <Link className='flex gap-2 items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50' to='/donate'>
              <FontAwesomeIcon icon={faCircleDollarToSlot} />
            </Link>
          </Tippy>
          <DarkMode></DarkMode>
        </div>
      </nav>
    </div>
  );
};

export default Header;
