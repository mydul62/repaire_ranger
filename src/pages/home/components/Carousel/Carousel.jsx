import img from '/banner.jpg'
const Carousel = () => {
  return (
    <div className='min-h-screen'>
      <img src={img} alt="" className=' h-[700px] w-full '/>
    </div>
  );
};

export default Carousel;