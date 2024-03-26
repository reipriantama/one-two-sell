import CarouselCard from '../../../../ui/main/carousel/carouselCard';

const SelectedEvent = ({ eventData }: { eventData: any }) => {
  return (
    <div className=' pb-12'>
      <div className='px-12 flex justify-between items-end mb-6'>
        <div className='text-2xl font-semibold'>Event Pilihan</div>
        {/* link ke halaman lihat semua */}
        <div className='text-sm text-[#757575] font-medium'>Lihat Semua</div>
      </div>
      <CarouselCard eventData={eventData} className='' />
    </div>
  );
};
export default SelectedEvent;
