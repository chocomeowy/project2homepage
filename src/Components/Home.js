import Weather from "./SingaporeWeather";
import CatPic from "./CatPic";
import MotivationQuotes from "./MotivationQuotes";
import Timer from "./Timer";

function Home() {
  return (
    <>
      <div>
        <Weather />
        <Timer />
        <MotivationQuotes />
        <CatPic />
      </div>
    </>
  );
}

export default Home;
