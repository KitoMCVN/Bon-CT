import React, { useEffect, useRef } from "react";
import { DiscordOnline, MoreDiscordOnline } from "../../../components/DiscordOnline";
import { MinecraftOnline } from "../../../components/MinecraftOnline";

interface StatusProps {
  isStatus: boolean;
  setIsStatus: (isStatus: boolean) => void;
}

const Status: React.FC<StatusProps> = ({ isStatus, setIsStatus }) => {
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (statusRef.current && !statusRef.current.contains(event.target as Node)) {
        setIsStatus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsStatus]);

  return (
    <div
      ref={statusRef}
      className={`${isStatus ? "translate-x-0" : "lg:translate-x-0 translate-x-full"} transition-transform duration-300 ease-in-out lg:static lg:-z-0 z-50 top-0 right-0 fixed lg:bg-transparent lg:dark:bg-transparent dark:bg-gray-800 bg-white h-dvh lg:overflow-y-visible overflow-y-scroll  lg:h-auto`}
    >
      <div className='w-[250px] lg:p-0 p-5'>
        <DiscordOnline></DiscordOnline>
        <MinecraftOnline></MinecraftOnline>
        <MoreDiscordOnline></MoreDiscordOnline>
      </div>
    </div>
  );
};

export default Status;
