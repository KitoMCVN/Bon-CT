import React, { useState, useEffect } from 'react';
import { Image } from '../../components/Image';
import axios from 'axios';

interface PlayerProps {
  name: string;
  uuid: string;
}

interface MinecraftData {
  ip: string;
  port: number;
  players: {
    online: number;
    max: number;
    list?: PlayerProps[];
  };
  online: boolean;
}

interface Member {
  id: string;
  username: string;
  avatar_url: string;
  status: any;
  game?: {
    name: string;
  };
}

interface DiscordData {
  id: string;
  name: string;
  instant_invite: string | null;
  channels: {
    id: string;
    name: string;
    position: number;
  }[];
  members: Member[];
  presence_count: number;
}

const Members: React.FC = () => {
  const [discordData, setDiscordData] = useState<DiscordData | null>(null);
  const [minecraftData, setMinecraftData] = useState<MinecraftData | null>(null);
  const [onlineCount, setOnlineCount] = useState<number>(0);
  const [idleCount, setIdleCount] = useState<number>(0);
  const [dndCount, setDndCount] = useState<number>(0);

  useEffect(() => {
    document.title = 'Thành Viên · Bon City';

    const fetchData = async () => {
      try {
        const response = await axios.get<DiscordData>('https://discord.com/api/guilds/1063302010918678538/embed.json');
        const data = response.data;

        const counts: { [key: string]: number } = { online: 0, idle: 0, dnd: 0 };

        data.members.forEach((member) => {
          switch (member.status) {
            case 'online':
              counts.online++;
              break;
            case 'idle':
              counts.idle++;
              break;
            case 'dnd':
              counts.dnd++;
              break;
            default:
              break;
          }
        });

        setOnlineCount(counts.online);
        setIdleCount(counts.idle);
        setDndCount(counts.dnd);

        setDiscordData(data);
      } catch (error) {
        console.error('Lỗi:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.mcsrvstat.us/3/bonchoituot.ddns.net');
        if (!response.ok) {
          throw new Error('Failed to fetch discord data');
        }
        const data = await response.json();
        setMinecraftData(data);
      } catch (error) {
        console.error('Lỗi:', error);
      }
    };

    fetchData();
  }, []);

  const getCustomStatus = (username: string): string | null => {
    if (username === 'Bon Chơi Tuốt') {
      return 'Owner';
    } else if (username === 'KitoMC') {
      return 'Admin';
    }
    return null;
  };

  const statusTextMap: Record<string, string> = {
    online: '🧊 Trực tuyến',
    dnd: '⛔ Ko làm phiền',
    idle: '🌙 Chờ',
  };

  const filteredMembers = discordData?.members?.filter((member) => member.username === 'Bon Chơi Tuốt' || member.username === 'KitoMC');

  return (
    <div className="flex md:flex-row flex-col items-start w-full gap-5">
      <div className="rounded-lg w-full shadow-[0_0_10px_rgba(0,0,0,0.25)] bg-white dark:bg-slate-800">
        <div className="flex p-[15px] pr-14 border-b-[2px] border-b-sky-600">
          <h3 className="font-extrabold text-sm uppercase text-gray-800 dark:text-gray-50">Discord Online</h3>
        </div>
        <div className="px-[15px]">
          {discordData && discordData.members ? (
            discordData.members.map((member) => (
              <div className="flex items-center py-3 gap-4" key={member.id}>
                <Image className="h-8 w-8 rounded-sm" src={member.avatar_url} alt={`${member.username}`} />
                <div className="text-sm text-gray-800 dark:text-gray-300">
                  <p className="text-green-700 dark:text-green-500">{member.username}</p>
                  <p className="text-xs">
                    {statusTextMap[member.status]}
                    {member.game && <span> ({member.game.name})</span>}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center py-3 gap-4">
              <div className="h-8 w-8 rounded-sm bg-slate-300 animate-pulse"></div>
              <div>
                <p className="h-3 w-24 rounded-full bg-slate-300 animate-pulse"></p>
                <p className="mt-2 h-2 w-20 rounded-full bg-slate-300 animate-pulse"></p>
              </div>
            </div>
          )}
        </div>
        <div className="px-[15px] py-3 bg-gray-100 dark:bg-gray-700/50 rounded-bl-lg rounded-br-lg border-t dark:border-t-gray-600 border-t-gray-400">
          <p className="text-gray-600 dark:text-gray-300 text-xs">
            Online: {onlineCount}, Idle: {idleCount}, Dnd: {dndCount}
          </p>
        </div>
      </div>
      <div className="rounded-lg w-full shadow-[0_0_10px_rgba(0,0,0,0.25)] bg-white dark:bg-slate-800">
        <div className="flex p-[15px] pr-14 border-b-[2px] border-b-sky-600">
          <h3 className="font-extrabold text-sm uppercase text-gray-800 dark:text-gray-50">Staff Online</h3>
        </div>
        <div className="px-[15px]">
          {filteredMembers && filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
              <div className="flex items-center py-3 gap-4" key={member.id}>
                <Image className="h-8 w-8 rounded-sm" src={member.avatar_url} alt={`${member.username}`} />
                <div className="text-sm text-gray-800 dark:text-gray-300">
                  <p className="text-green-700 dark:text-green-500">{member.username}</p>
                  <p className="text-xs">{getCustomStatus(member.username) ? <span className="text-yellow-600">{getCustomStatus(member.username)}</span> : <span>{statusTextMap[member.status]}</span>}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center py-3 gap-4">
              <div className="h-8 w-8 rounded-sm bg-slate-300 animate-pulse"></div>
              <div>
                <p className="h-3 w-24 rounded-full bg-slate-300 animate-pulse"></p>
                <p className="mt-2 h-2 w-20 rounded-full bg-slate-300 animate-pulse"></p>
              </div>
            </div>
          )}
        </div>
        <div className="px-[15px] py-3 bg-gray-100 dark:bg-gray-700/50 rounded-bl-lg rounded-br-lg border-t dark:border-t-gray-600 border-t-gray-400">
          <p className="text-gray-600 dark:text-gray-300 text-xs">Nếu load hog đc thì chả ai online</p>
        </div>
      </div>
      <div className="rounded-lg w-full shadow-[0_0_10px_rgba(0,0,0,0.25)] bg-white dark:bg-slate-800">
        <div className="flex p-[15px] pr-14 border-b-[2px] border-b-sky-600">
          <h3 className="font-extrabold text-sm uppercase text-gray-800 dark:text-gray-50">Minecraft Online</h3>
        </div>
        {minecraftData && minecraftData.online ? (
          <div className="">
            {minecraftData.players && minecraftData.players.list ? (
              <div className="px-[15px]">
                {minecraftData.players.list.slice(0, 10).map((player) => (
                  <div className="flex items-center py-3 gap-4" key={player.name}>
                    <Image className="size-8 rounded-sm" src={`https://mineskin.eu/avatar/${player.name}/32`} alt={`${player.name}`} />
                    <div className="text-sm text-gray-800 dark:text-gray-300">
                      <p className="text-green-700 dark:text-green-500">{player.name}</p>
                      <p className="text-xs">🙍‍♂️ Member</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-[15px] py-3 text-gray-800 dark:text-gray-300 text-sm">Không có ai chơi cả</div>
            )}
          </div>
        ) : (
          <div className="px-[15px]">
            <p className="py-3 text-gray-800 dark:text-gray-300 text-sm">Máy chủ đang offline</p>
          </div>
        )}
        <div className="px-[15px] py-3 bg-gray-100 dark:bg-gray-700/50 rounded-bl-lg rounded-br-lg border-t dark:border-t-gray-600 border-t-gray-400">
          <p className="text-gray-600 dark:text-gray-300 text-xs">
            {minecraftData && minecraftData.online ? (
              <>
                Trực tuyến: {minecraftData.players.online || 0} (Tối đa: {minecraftData.players.max})
              </>
            ) : (
              <>Trực tuyến: 0 (Offline)</>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Members;
