import { useState } from "react";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AccommodationPage from "./pages/AccommodationPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/accommodation/:id" element={<AccommodationPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
