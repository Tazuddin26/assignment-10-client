import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import PopulerGame from "./Populer/PopulerGame";
import Marquee from "react-fast-marquee";
const Home = () => {
  const loadedGame = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto mt-10 shadow-2xl">
      <div>
        <Banner />
      </div>
      <p className="text-3xl mt-10 ml-10">Populer Game</p>
      <Marquee pauseOnHover={true} className="space-x-4 cursor-pointer mb-10">
        <div className="flex gap-4 mt-10">
          {loadedGame?.length === 0
            ? "There is no game Data in Server"
            : loadedGame.map((game) => (
                <PopulerGame key={game._id} game={game} />
              ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Home;
