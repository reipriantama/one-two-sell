// components/pages/allEvent.tsx

import Layout from '@/components/layouts/main';
import FilterTop from '@/components/feature/main/eventPage/filter';
import EventCard from '@/components/feature/main/eventPage/eventCard';
import Pagination from '@/components/feature/main/eventPage/pagination';
import SideBarEvent from '@/components/feature/main/eventPage/sideBar';
import eventData from '@/data/eventData.json';
import { EventDataType } from '@/types/eventData.type';

const AllEvent = () => {
  const formatPriceToRupiah = (price: number): string => {
    const formattedPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(price);
    return formattedPrice;
  };

  return (
    <Layout className='flex' title='Event'>
      <SideBarEvent />
      <div className='pl-6 py-7 pr-12 flex-1'>
        <FilterTop />
        {/* Mengirim prop eventData dan price ke EventCard */}
        <EventCard eventData={eventData} price={formatPriceToRupiah} />
        <Pagination />
      </div>
    </Layout>
  );
};

export default AllEvent;
