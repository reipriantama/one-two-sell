import EventCard from '@/components/feature/eventPage/eventCard';
import FilterTop from '@/components/feature/eventPage/filter';
import SideBarEvent from '@/components/feature/eventPage/sideBar';
import Layout from '@/components/layouts';
import Head from 'next/head';

const AllEvent = () => {
  return (
    <div>
      <Head>
        <title>All Event</title>
      </Head>
      <Layout className='flex'>
        <SideBarEvent />
        <div className='pl-6 py-7 pr-12 flex-1'>
          <FilterTop />
          <EventCard />
          <div>ini halaman All Event</div>
        </div>
      </Layout>
    </div>
  );
};

export default AllEvent;
