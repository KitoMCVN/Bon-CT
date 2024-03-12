import React, { useState, useEffect, useRef } from "react";

const DarkMode: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme as "dark" | "light";
    } else {
      return "light";
    }
  });
  const [showMenu, setShowMenu] = useState(false);
  const [useSystemTheme, setUseSystemTheme] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (useSystemTheme && systemPrefersDark) {
      setTheme("dark");
    } else if (useSystemTheme && !systemPrefersDark) {
      setTheme("light");
    }
  }, [useSystemTheme]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTheme = (selectedTheme: "dark" | "light") => {
    setTheme(selectedTheme);
    setShowMenu(false);
    setUseSystemTheme(false);
  };

  const toggleSystemTheme = () => {
    setUseSystemTheme(!useSystemTheme);
  };

  const DarkIcon = (
    <svg fill='none' className='w-6 h-6' viewBox='0 0 24 24'>
      <path d='M17.715 15.15A6.5 6.5 0 019 6.035c-2.894.887-5 3.61-5 6.832 0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853z' className='fill-sky-400/20' clipRule='evenodd'></path>
      <path
        d='M17.715 15.15l.95.316a1 1 0 00-1.445-1.185l.495.869zM9 6.035l.846.534a1 1 0 00-1.14-1.49L9 6.035zm8.221 8.246a5.47 5.47 0 01-2.72.718v2a7.47 7.47 0 003.71-.98l-.99-1.738zm-2.72.718A5.5 5.5 0 019 9.5H7a7.5 7.5 0 007.5 7.5v-2zM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 007 9.5h2zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99l-.586-1.91C5.397 6.094 3 9.201 3 12.867h2zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632z'
        className='fill-sky-500'
      ></path>
      <path d='M17 3a1 1 0 011 1 2 2 0 002 2 1 1 0 110 2 2 2 0 00-2 2 1 1 0 11-2 0 2 2 0 00-2-2 1 1 0 110-2 2 2 0 002-2 1 1 0 011-1z' className='fill-sky-500' clipRule='evenodd'></path>
    </svg>
  );

  const LightIcon = (
    <svg fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-6 h-6' viewBox='0 0 24 24'>
      <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' className='fill-sky-400/20 stroke-sky-500'></path>
      <path d='M12 4v1m5.66 1.344l-.828.828m3.173 4.832h-1m-1.345 5.66l-.828-.828M12 20.01V19m-5.66-1.336l.835-.836m-3.18-4.824h1.01M6 6l.835.836' className='stroke-sky-500'></path>
    </svg>
  );

  const style = "flex gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-300 dark:hover:bg-gray-700";

  return (
    <div className='relative inline-block text-left' ref={menuRef}>
      <div>
        <button onClick={() => setShowMenu(!showMenu)} type='button' className='flex items-center gap-2'>
          {theme === "light" ? LightIcon : DarkIcon}
        </button>
      </div>
      {showMenu && (
        <div className='origin-top-right translate-x-4 md:translate-x-5 shadow-[0_0_10px_rgba(0,0,0,0.25)]  absolute right-0 mt-6 w-32 rounded-md bg-white dark:bg-gray-800'>
          <div className='py-1 text-gray-800 dark:text-gray-300'>
            <button onClick={() => toggleTheme("light")} className={`${style} ${theme === "light" ? "dark:bg-gray-700 bg-gray-300 dark:text-sky-400 text-sky-600" : ""}`}>
              <span>⚡</span> <span>Light</span>
            </button>
            <button onClick={() => toggleTheme("dark")} className={`${style} ${theme === "dark" ? "dark:bg-gray-700 bg-gray-300 dark:text-sky-400 text-sky-600 " : ""}`}>
              <span>🌘</span> <span>Dark</span>
            </button>
            <button onClick={toggleSystemTheme} className={style}>
              <span>🪁</span> <span>System</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DarkMode;
