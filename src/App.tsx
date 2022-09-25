import React from "react";
import "./App.css";
import ContactFormPage from "./ContactForm/ContactFormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StayerDetailsPage from "./StayerDetails/StayerDetailsPage";

function App() {
  return (
    <div className="App">
      {/* <StayerDetailsPage /> */}
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<ContactFormPage />} />
          <Route path="/stayerDetails" element={<StayerDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
