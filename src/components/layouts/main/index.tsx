import Head from 'next/head';
import Footer from './footer';
import Navbar from './navbar';

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className=''>
        <Navbar hidden={props.hidden} />
        <div className={` ${props.className}`}>{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
