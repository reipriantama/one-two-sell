import Footer from './footer';
import Navbar from './navbar';

const Layout = (props: any) => {
  return (
    <div className=''>
      <Navbar />
      <div className={` ${props.className}`}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
