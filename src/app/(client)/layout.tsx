import React, { ReactNode } from "react";
import Header from "../_components/Header/Header";
import Footer from "../_components/Footer/Footer";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
