import React from "react";
import Header from "../../components/common/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/common/Footer";

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
