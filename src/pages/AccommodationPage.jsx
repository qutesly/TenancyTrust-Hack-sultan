import React from "react";
import Header2 from "../components/Header2";
import Container from "../components/Container";
import CategoriesSection from "../components/Category-section/CategoriesSection";
import ContactSection from "../components/Category-section/ContactSection";
import { useParams } from "react-router-dom";

const AccommodationPage = () => {
  const { id } = useParams();

  return (
    <>
      <Header2 />
      <Container className={"mt-28 mb-10"}>
        <CategoriesSection accommodationId={id} />
        <div className="border-t border-t-gray-500 py-4 w-full h-[2px]" />
        <ContactSection accommodationId={id} />
      </Container>
    </>
  );
};

export default AccommodationPage;
