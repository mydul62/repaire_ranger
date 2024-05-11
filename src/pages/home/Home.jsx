import Carousel from "./components/Carousel/Carousel";
import PopularServices from "./components/PopularService/PopularServices";
import WeRepaire from "./components/WeRepaire/WeRepaire";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <WeRepaire></WeRepaire>
      <PopularServices></PopularServices>
    </div>
  );
};

export default Home;