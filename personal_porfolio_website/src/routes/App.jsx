import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/home-page";
import AboutMe from "../pages/about-page";
import Contact from "../pages/contact-page";
import Projects from "../pages/portfolio-page";
import Services from "../pages/services-page";
import Construction from "../pages/construction-page";
import Error from "../pages/error-page";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AboutMe" element={<AboutMe />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/construction" element={<Construction />} />
          <Route exact path="/*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
