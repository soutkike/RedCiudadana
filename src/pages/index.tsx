import * as React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Team from "../components/Team";
import Humans from "../components/Humans";
import Citizens from "../components/Citizens";
import Resources from "../components/Resources";
import Footer from "../components/Footer";
import Docs from "../components/Docs";
import Encuestas from "../components/Encuestas";
import Map from "../components/Map";
import { Helmet } from "react-helmet";

import favicon16 from "../images/favicons.ico/favicon-16x16.png";

const Index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Red MoCaALTAMA</title>
        <link rel="icon" type="image/png" href={favicon16} sizes="16x16" />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Team />
      <Humans />
      <Citizens />
      <Resources />
      <Docs />
      <Encuestas />
      <Map />
      <Footer />
    </>
  );
};

export default Index;
