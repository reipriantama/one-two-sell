import TitleEvent from '@/components/ui/main/titleCarousel';
import CarouselCard from '../../../../ui/main/carousel/carouselCard';

const PopularWeek = ({ eventData }: { eventData: any }) => {
  return (
    <div>
      <div className='pb-12'>
        <div className='px-12'>
          <TitleEvent
            titleText='Populer Minggu Ini'
            className='text-navy-blue'
          />
        </div>
        <CarouselCard eventData={eventData} className='' />
      </div>
    </div>
  );
};

export default PopularWeek;
