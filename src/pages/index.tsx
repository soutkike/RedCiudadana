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
const Index = () => {
  return (
    <>
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
