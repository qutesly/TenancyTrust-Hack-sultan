import React from "react";
import Container from "../components/Container";
import SearchSection from "../components/SearchSection";
import HeroImage from "../components/HeroImage";
import AvailableSection from "../components/AvailableSection";
import Header from "../components/header";

const Homepage = () => {
  return (
    <>
      <Header />

      <Container className={"mt-28 mb-10"}>
        <SearchSection />
        <HeroImage />
      </Container>
      <AvailableSection />
    </>
  );
};

export default Homepage;
