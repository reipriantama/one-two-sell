import TitleEvent from '@/components/ui/main/titleCarousel';
import CarouselCard from '../../../../ui/main/carousel/carouselCard';

const SelectedEvent = ({ eventData }: { eventData: any }) => {
  return (
    <div className=' pb-12'>
      <div className='px-12'>
        <TitleEvent titleText='Event Pilihan' />
      </div>
      <CarouselCard eventData={eventData} className='' />
    </div>
  );
};
export default SelectedEvent;
