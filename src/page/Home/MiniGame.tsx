import React, { useState } from "react";
import { minigameData } from "../../data/minigameData";
import Tippy from "@tippyjs/react";

const MiniGame: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const gamesPerPage: number = 5;
  const indexOfLastGame: number = currentPage * gamesPerPage;
  const indexOfFirstGame: number = indexOfLastGame - gamesPerPage;
  const currentGames = minigameData.slice(indexOfFirstGame, indexOfLastGame);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);

  return (
    <div>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-3 text-gray-50'>
        {currentGames.map((minigame: any, index: number) => (
          <div
            key={minigame.id}
            className={`bg-[url('${minigame.image}')] bg-cover bg-center rounded-lg flex bg-white dark:bg-gray-800 shadow-[0_0_10px_rgba(0,0,0,0.25)] overflow-hidden ${index === 0 ? "sm:row-span-2" : "h-[150px] "}`}
          >
            <div className='p-4 size-full bg-gradient-to-t from-gray-900/80 via-gray-900/60 to-transparent flex flex-col justify-end'>
              <h2 className='text-xl font-semibold'>{minigame.name}</h2>
              <Tippy content={minigame.description}>
                <p className='line-clamp-2 mt-1 text-sm cursor-pointer'>{minigame.description}</p>
              </Tippy>
              <div className='mt-1 flex gap-1 text-sm'>
                <span className='font-semibold text-sm underline text-gray-200'>{minigame.creator}</span>
                <span>•</span>
                <span className='text-gray-300'>{minigame.day}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav className='mt-4 flex gap-3 text-sm'>
        <ul className='flex gap-2'>
          {Array.from({ length: Math.ceil(minigameData.length / gamesPerPage) }, (_, i) => (
            <li key={i}>
              <button
                onClick={() => paginate(i + 1)}
                className={` ${i + 1 === currentPage ? "font-bold bg-sky-600 text-gray-300" : "dark:text-gray-300 hover:dark:text-gray-50 text-gray-800 hover:text-gray-900"} size-6 flex items-center justify-center rounded-full`}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
        {currentPage < Math.ceil(minigameData.length / gamesPerPage) && (
          <button onClick={nextPage} className='dark:text-gray-300 hover:dark:text-gray-50 text-gray-800 hover:text-gray-900'>
            Tiếp
          </button>
        )}
      </nav>
    </div>
  );
};

export default MiniGame;
