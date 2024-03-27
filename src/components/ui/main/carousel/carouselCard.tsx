// import './carouselCard.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { EventDataType } from '@/types/eventData.type';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { useId } from 'react';
import Link from 'next/link';

const CarouselCard = ({
  eventData,
  className,
}: {
  eventData: EventDataType[];
  className: string;
}) => {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '');
  const formatPriceToRupiah = (price: number): string => {
    const formattedPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
    return formattedPrice;
  };
  return (
    <div className='space-y-1 relative'>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={24}
        navigation={{
          nextEl: `.next-navigation-${id}`,
          prevEl: `.prev-navigation-${id}`,
        }}
        modules={[Navigation]}
        slidesOffsetBefore={48}
        slidesOffsetAfter={48}
        className='w-full'
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = `.prev-navigation-${id}`;
          swiper.params.navigation.nextEl = `.next-navigation-${id}`;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {eventData?.map((data: any, index: number) => (
          <SwiperSlide className='' key={index}>
            <div className='mb-3'>
              <Image
                src={data.image}
                alt='logo'
                width={318}
                height={240}
                className='rounded-xl bg-gray-500 h-[240px] w-full object-cover'
              />
            </div>
            <div className='flex flex-col gap-1 text-[#4A62A2] font-semibold mb-3'>
              <div className={`text-sm font-semibold`}>{data.date}</div>
              <div className={`text-xl ${className}`}>
                <Link href={`/event/${data.title}`}>{data.title}</Link>
              </div>
              <div className='text-[#848484] text-sm font-normal'>
                {data.location}
              </div>
            </div>
            <div className={`text-lg text-[#4A62A2] font-bold ${className}`}>
              {formatPriceToRupiah(data.price)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`next-navigation-${id} cursor-pointer absolute right-[25px] top-[100px] z-10
       bg-white size-12 rounded-full shadow-md flex items-center justify-center`}
      >
        <MdOutlineKeyboardArrowRight className='size-6' />
      </div>
      <div
        className={`prev-navigation-${id} cursor-pointer absolute left-[25px] top-[100px] z-10
       bg-white size-12 rounded-full shadow-md flex items-center justify-center`}
      >
        <MdOutlineKeyboardArrowLeft className='size-6' />
      </div>
    </div>
  );
};
export default CarouselCard;

// notes https://codesandbox.io/p/github/toanlbbhsoft/swiper-nextjs/main?file=%2Fapp%2F_components%2FDemoSlider.tsx%3A34%2C50-34%2C54

// const eventData = [
//   {
//     image: '/assets/landingPage/carouselData/imageSelected.png',
//     date: '18 May, 2023 • 7.30 PM',
//     title: 'Parade Sihir - Bandung',
//     location: 'Lapangan Pussenif - Bandung',
//     price: 250000,
//   },
//   {
//     image: '/assets/landingPage/carouselData/imageSelected2.png',
//     date: '18 May, 2023 • 7.30 PM',
//     title: 'Parade Sihir - Bandung',
//     location: 'Lapangan Pussenif - Bandung',
//     price: 250000,
//   },
//   {
//     image: '/assets/landingPage/carouselData/imageSelected3.png',
//     date: '18 May, 2023 • 7.30 PM',
//     title: 'Parade Sihir - Bandung',
//     location: 'Lapangan Pussenif - Bandung',
//     price: 250000,
//   },
//   {
//     image: '/assets/landingPage/carouselData/imageSelected4.png',
//     date: '18 May, 2023 • 7.30 PM',
//     title: 'Parade Sihir - Bandung',
//     location: 'Lapangan Pussenif - Bandung',
//     price: 250000,
//   },
// ];
