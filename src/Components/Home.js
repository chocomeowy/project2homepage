import CatPic from "./CatPic";
import MotivationQuotes from "./MotivationQuotes";
import Weather from "./SingaporeWeather";
import Timer from "./Timer";

function Home(props) {
  return (
    <>
      <div>
        <Weather />
        <Timer />
        <CatPic setCat={props.setCat} />
        <MotivationQuotes />
      </div>
    </>
  );
}

export default Home;
