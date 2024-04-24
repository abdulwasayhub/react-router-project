import React from "react";
import Header from "./Header/Header";
import Footer from "./Header/Footer/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
