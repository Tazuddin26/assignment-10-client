import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import PopulerGame from "./Populer/PopulerGame";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { DarkModeContext } from "../../ThemeToggle/DarkModeProvider";
const Home = () => {
  const loadedGame = useLoaderData();
   const { theme } = useContext(DarkModeContext);

  return (
    <div className="max-w-7xl mx-auto mt-10 shadow-2xl">
      <div>
        <Banner />
      </div>
      <div
        className={`${
          theme === "light"
            ? "bg-white text-black"
            : "bg-slate-900 text-primary-content  "
        } `}
      >
        <h1>{theme === "light" ? "" : ""}</h1>
        <p className="text-3xl ml-5 mt-10 ">Populer game</p>
      </div>
      <Marquee pauseOnHover={true} className="space-x-4 cursor-pointer mb-10">
        <div className="flex gap-4 mt-10  ">
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
