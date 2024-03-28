import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import Image from 'next/image';

const TitleCarousel = () => {
  
  const imageData = [
    {
      title: 'Title 1',
      image: '/assets/main/titleCarousel/image1.png',
    },
    {
      title: 'Title 2',
      image: '/assets/main/titleCarousel/image2.png',
    },
    {
      title: 'Title 3',
      image: '/assets/main/titleCarousel/image3.png',
    },
  ];
  return (
    <div className='p-12 relative'>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={{
          nextEl: '.next-navigation-title',
          prevEl: '.prev-navigation-title',
        }}
        pagination={true}
        modules={[Navigation, Pagination]}
        className=' w-full h-[360px] rounded-xl'
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = '.prev-navigation-title';
          swiper.params.navigation.nextEl = '.next-navigation-title';
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {imageData.map((item, index) => (
          <SwiperSlide key={index} className='bg-[#E0E0E0]'>
            <div>
              <Image
                src={item.image}
                alt='title'
                width={600}
                height={360}
                className='w-full object-cover object-bottom'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className='next-navigation-title cursor-pointer absolute right-[25px] top-[200px] z-10
       bg-white size-12 rounded-full shadow-md flex items-center justify-center'
      >
        <MdOutlineKeyboardArrowRight className='size-6' />
      </div>
      <div
        className='prev-navigation-title cursor-pointer absolute left-[25px] top-[200px] z-10
       bg-white size-12 rounded-full shadow-md flex items-center justify-center'
      >
        <MdOutlineKeyboardArrowLeft className='size-6' />
      </div>
    </div>
  );
};

export default TitleCarousel;
