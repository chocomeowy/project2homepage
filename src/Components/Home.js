import CatPic from "./CatPic";
import Quotes from "./Quotes";
import Weather from "./SingaporeWeather";
import Timer from "./Timer";

function Home(props) {
  return (
    <>
      <div>
        <CatPic setCat={props.setCat} />
        <Weather />
        <Timer />
        <Quotes />
      </div>
    </>
  );
}

export default Home;
