import TitleEvent from '@/components/ui/main/titleCarousel';
import CarouselCard from '../../../../ui/main/carousel/carouselCard';

const RecomendationEvent = ({ eventData }: { eventData: any }) => {
  return (
    <div className=''>
      <div className=''>
        <div className='px-12 '>
          <TitleEvent titleText='Rekomendasi Event Serupa' />
        </div>
        <CarouselCard eventData={eventData} className='' />
      </div>
    </div>
  );
};

export default RecomendationEvent;
