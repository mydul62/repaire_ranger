import Carousel from "./components/Carousel/Carousel";
import PopularServices from "./components/PopularService/PopularServices";
import WeRepaire from "./components/WeRepaire/WeRepaire";
import WhyChoice from "./components/WhyChoice/WhyChoice";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <WeRepaire></WeRepaire>
      <PopularServices></PopularServices>
      <WhyChoice></WhyChoice>
    </div>
  );
};

export default Home;