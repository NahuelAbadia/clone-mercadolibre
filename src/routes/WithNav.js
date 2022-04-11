import React from 'react';
import Navbar from '../components/layout/Navbar';
import { Outlet } from 'react-router';

const WithNav = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default WithNav;