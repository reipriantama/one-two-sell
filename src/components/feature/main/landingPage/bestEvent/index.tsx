import TitleEvent from '@/components/ui/main/titleCarousel';
import CarouselCard from '../../../../ui/main/carousel/carouselCard';

const BestEvent = ({ eventData }: { eventData: any }) => {
  return (
    <div className=' py-12 bg-navy-blue '>
      <div className='px-12 '>
        <TitleEvent titleText='Event Terlaris' className='text-white' />
      </div>
      <div>
        <CarouselCard eventData={eventData} className='text-white' />
      </div>
    </div>
  );
};

export default BestEvent;
