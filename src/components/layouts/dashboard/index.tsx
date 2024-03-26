import Head from 'next/head';
import React from 'react';
import NavbarDashboard from './navbar';
import SidebarDashboard from './sidebar';

const LayoutDashboard = (props: any) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className=' w-screen h-screen overflow-hidden'>
        <div className='relative w-full h-screen overflow-auto '>
          <div className='sticky top-0'>
            <NavbarDashboard />
          </div>
          <div className='flex'>
            <SidebarDashboard />
            <div className={`${props.className}`}>{props.children} </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutDashboard;
