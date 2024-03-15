import { Button } from "../../components/Button";

const Home = () => {
  return (
    <div className='w-full'>
      <div className='mb-5'>
        <div
          className={`overflow-hidden rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.25)] bg-center bg-[url('https://media.discordapp.net/attachments/1063673504014278697/1084578510573674586/2023-03-13_03.22.23_2.png?ex=66009173&is=65ee1c73&hm=7723fee937e0950faab9fff7e704f3613ddadf094f9b1bb3b17e55d2cf2ee386&=&format=webp&quality=lossless&width=891&height=501')]`}
        >
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
      <div className='h-[10000px]'></div>
    </div>
  );
};

export default Home;
