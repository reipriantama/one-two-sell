import { Inter } from 'next/font/google';
import Layout from '@/components/layouts/main';
import FilterBar from '@/components/feature/main/landingPage/filterBar';
import Banner from '@/components/feature/main/landingPage/banner';
import SellerFav from '@/components/feature/main/landingPage/sellerFav';
import TitleCarousel from '@/components/feature/main/landingPage/titleCarousel';
import SelectedEvent from '@/components/feature/main/landingPage/selectedEvent';
import BestEvent from '@/components/feature/main/landingPage/bestEvent';
import eventData from '@/data/eventData.json';
import PopularWeek from '@/components/feature/main/landingPage/popularWeek';
import PopularCity from '@/components/feature/main/landingPage/popularCity';
import Button from '@/components/ui/main/button';
import { MdOutlineChevronRight } from 'react-icons/md';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
