import React, { useEffect, useState } from "react";
import { Image } from "../../../components/Image";

interface PlayerProps {
  name: string;
  uuid: string;
}

interface ServerDataProps {
  ip: string;
  port: number;
  players: {
    online: number;
    max: number;
    list?: PlayerProps[];
  };
  online: boolean;
}

const MinecraftOnline: React.FC = () => {
  const [serverData, setServerData] = useState<ServerDataProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.mcsrvstat.us/3/bonchoituot.ddns.net");
        if (!response.ok) {
          throw new Error("Failed to fetch server data");
        }
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error("Lỗi:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mt-5 bg-white dark:bg-gray-800 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.25)]'>
      <div className='mc-online flex p-[15px] pr-14 border-b-[2px] border-b-sky-600'>
        <h3 className='font-extrabold text-sm uppercase text-gray-800 dark:text-gray-50'>Server Online</h3>
      </div>
      {serverData && serverData.online ? (
        <div className=''>
          {serverData.players && serverData.players.list ? (
            <div className='px-[15px]'>
              {serverData.players.list.slice(0, 10).map((player) => (
                <div className='flex items-center py-3 gap-4' key={player.name}>
                  <Image className='size-8 rounded-sm' src={`https://mineskin.eu/avatar/${player.name}/32`} alt={`${player.name}`} />
                  <div className='text-sm text-gray-800 dark:text-gray-300'>
                    <p className='text-green-700 dark:text-green-500'>{player.name}</p>
                    <p className='text-xs'>🙍‍♂️ Member</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='px-[15px] py-3 text-gray-800 dark:text-gray-300 text-sm'>Không có ai chơi cả</div>
          )}
        </div>
      ) : (
        <div className='px-[15px]'>
          <p className='py-3 text-gray-800 dark:text-gray-300 text-sm'>Máy chủ đang offline</p>
        </div>
      )}
      <div className='px-[15px] py-3 bg-gray-100 dark:bg-gray-700/50 rounded-bl-lg rounded-br-lg border-t dark:border-t-gray-600 border-t-gray-400'>
        <p className='text-gray-600 dark:text-gray-300 text-xs'>
          {serverData && serverData.online ? (
            <>
              Trực tuyến: {serverData.players.online || 0} (Tối đa: {serverData.players.max})
            </>
          ) : (
            <>Trực tuyến: 0 (Offline)</>
          )}
        </p>
      </div>
    </div>
  );
};

export default MinecraftOnline;
