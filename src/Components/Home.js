import CatPic from "./CatPic";
import MotivationQuotes from "./MotivationQuotes";
import Weather from "./SingaporeWeather";
import Timer from "./Timer";

function Home(props) {
  return (
    <>
      <div>
        <CatPic setCat={props.setCat} />
        <Weather />
        <Timer />
        <MotivationQuotes />
      </div>
    </>
  );
}

export default Home;
