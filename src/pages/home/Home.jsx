import Carousel from "./components/Carousel/Carousel";
import PopularServices from "./components/PopularService/PopularServices";
import Testimonial from "./components/Testimonial/Testimonial";
import WeRepaire from "./components/WeRepaire/WeRepaire";
import WhyChoice from "./components/WhyChoice/WhyChoice";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <WeRepaire></WeRepaire>
      <PopularServices></PopularServices>
      <WhyChoice></WhyChoice>
      <div className="">
      <Testimonial></Testimonial>
      </div>
     </div>
  );
};

export default Home;