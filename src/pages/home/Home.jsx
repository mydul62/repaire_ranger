import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import DynamicTitle from "../DynamicTitle";
import Carousel from "./components/Carousel/Carousel";
import Features from "./components/Features/Features";
import PopularServices from "./components/PopularService/PopularServices";
import Testimonial from "./components/Testimonial/Testimonial";
import WeRepaire from "./components/WeRepaire/WeRepaire";
import WhyChoice from "./components/WhyChoice/WhyChoice";

const Home = () => {
  return (
    <LoadingSpinner>
    <div>
       <DynamicTitle title={''}></DynamicTitle>

      <Carousel></Carousel>
      <WeRepaire></WeRepaire>
      <PopularServices></PopularServices>
      <WhyChoice></WhyChoice>
      <Features></Features>
      <div className="">
      <Testimonial></Testimonial>
      </div>
     </div>
    </LoadingSpinner>
  );
};

export default Home;