import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <title>All Event</title>
      </Head>
      <div className=''>
        <Navbar />
        <div className={` ${props.className}`}>{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
