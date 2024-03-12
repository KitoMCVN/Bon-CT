import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { DarkMode } from "../../../components/DarkMode";
import { Button } from "../../../components/Button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
      className={`lg:ml-[230px] bg-white dark:bg-gray-800 md:static  md:w-auto w-full rounded-none fixed top-0 left-0 transition-all duration-300 md:rounded-lg shadow-sm ${scrolled ? "sticky top-0 left-0  rounded-tl-none rounded-tr-none " : ""}`}
    >
      <nav className='px-5 h-[60px] flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <button className='text-xl text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50'>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className='size-10 rounded-lg overflow-hidden'>
            <img className='size-full' src='/logo.png' alt='logo' />
          </div>
        </div>
        <div className='flex items-center float-right'>
          <Button className='bg-sky-600 hover:-translate-y-1 hover:bg-sky-500 mx-4 text-white'>bonchoituot.net</Button>
          <DarkMode></DarkMode>
        </div>
      </nav>
    </div>
  );
};

export default Header;
