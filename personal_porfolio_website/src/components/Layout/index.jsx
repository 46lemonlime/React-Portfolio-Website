import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Header />
      <main>
        <div className="bg-primary w-full overflow-hidden min-h-screen">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
