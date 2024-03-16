import { Button } from "../../components/Button";
import MiniGame from "./MiniGame";

const Home = () => {
  return (
    <div className='w-full'>
      <div className='mb-5'>
        <div className={`overflow-hidden rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.25)] bg-white dark:bg-gray-800 bg-center bg-[url('./assets/imgs/all/banner.png')]`}>
          <div className='p-[30px] bg-gradient-to-r from-gray-900/80 via-gray-900/80 to-gray-900/10'>
            <div className=' md:flex gap-3 text-gray-50 items-center justify-between'>
              <div>
                <h3 className='font-bold text-2xl uppercase'>Here to play Minecraft?</h3>
                <p className='text-base'>Join and start playing on our Minecraft server now!</p>
              </div>
              <div>
                <Button className='border-[2px] md:mt-0 mt-4 hover:bg-white hover:text-gray-800 font-semibold border-white'>Let's go!</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[10000px]'>
        <MiniGame></MiniGame>
      </div>
    </div>
  );
};

export default Home;
