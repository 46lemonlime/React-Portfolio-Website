import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Construction from "../pages/Construction";
import Error from "../pages/Error";

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
