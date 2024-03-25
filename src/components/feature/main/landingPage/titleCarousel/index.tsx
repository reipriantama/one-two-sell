import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import styles from '@/styles/carousel.module.css';

const TitleCarousel = () => {
  return (
    <div className='p-12'>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={{
          nextEl: '.next-navigation',
          prevEl: '.prev-navigation',
        }}
        pagination={true}
        modules={[Navigation, Pagination]}
        className=' w-full h-[360px] rounded-xl'
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = '.prev-navigation';
          swiper.params.navigation.nextEl = '.next-navigation';
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <SwiperSlide className='bg-[#E0E0E0]'>Title Carousel</SwiperSlide>
        <SwiperSlide className='bg-[#6d2c2c]'>Title Carousel</SwiperSlide>
        <SwiperSlide className='bg-[#56d2dd]'>Title Carousel</SwiperSlide>
      </Swiper>
      <div className='next-navigation'>Next</div>
      <div className='prev-navigation'>Prev</div>
    </div>
  );
};

export default TitleCarousel;