import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
