import React from "react";
import Footer from "./footer/footer";
import Navbar from "./Navbar/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
