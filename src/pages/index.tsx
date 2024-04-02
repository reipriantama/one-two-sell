import { Inter } from 'next/font/google';
import Layout from '@/components/layouts/main';
import Banner from '@/components/feature/main/landingPage/banner';
import SellerFav from '@/components/feature/main/landingPage/sellerFav';
import TitleCarousel from '@/components/feature/main/landingPage/titleCarousel';
import SelectedEvent from '@/components/feature/main/landingPage/selectedEvent';
import BestEvent from '@/components/feature/main/landingPage/bestEvent';
import PopularWeek from '@/components/feature/main/landingPage/popularWeek';
import PopularCity from '@/components/feature/main/landingPage/popularCity';
import Button from '@/components/ui/main/button';
import { MdOutlineChevronRight } from 'react-icons/md';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/eventData');
        const data = await res.json();
        setEventData(data);
      } catch (error) {
        console.log('error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Layout title='Home'>
        {/* <FilterBar /> */}
        <TitleCarousel />
        <SelectedEvent eventData={eventData} />
        <BestEvent eventData={eventData} />
        <Banner />
        <PopularWeek eventData={eventData} />
        <SellerFav />
        <PopularCity eventData={eventData} />
        <div className='flex justify-center pb-12'>
          <Button
            link='/event'
            buttonText='Lihat ke event lainnya'
            outline
            className='px-9 font-semibold '
            icon={<MdOutlineChevronRight className='size-' />}
          />
        </div>
      </Layout>
    </>
  );
}
