import React from "react";

// import components
import Header from "./Header";
import Footer from "./Footer";

// import animation
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Header />
      <ScrollToTop />
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
