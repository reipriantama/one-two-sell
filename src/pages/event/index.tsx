import EventCard from '@/components/feature/eventPage/eventCard';
import FilterTop from '@/components/feature/eventPage/filter';
import SideBarEvent from '@/components/feature/eventPage/sideBar';
import Layout from '@/components/layouts';
import Head from 'next/head';
import eventData from '@/data/eventData.json';
import Pagination from '@/components/feature/eventPage/pagination';

const AllEvent = () => {
  return (
    <>
      
      <Layout className='flex'>
        <SideBarEvent />
        <div className='pl-6 py-7 pr-12 flex-1'>
          <FilterTop />
          <EventCard eventData={eventData} />
          <Pagination />
        </div>
      </Layout>
    </>
  );
};

export default AllEvent;
