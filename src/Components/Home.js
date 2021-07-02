import Weather from "./SingaporeWeather";
import CatPic from "./CatPic";
import MotivationQuotes from "./MotivationQuotes";
import Timer from "./Timer";

function Home(props) {
  return (
    <>
      <div>
        <Weather />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Timer />
        <br></br>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <br></br>
        <MotivationQuotes />
        <CatPic setCat={props.setCat} />
      </div>
    </>
  );
}

export default Home;
