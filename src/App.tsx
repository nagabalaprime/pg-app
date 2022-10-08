import React from "react";
import "./App.scss";
import ContactFormPage from "./pages/ContactForm/ContactFormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDetailsPage from "./pages/ContactDetails/ContactDetailsPage";
import RequireAuth from "./utils/context/Auth/RequiredAuth";
import LoginPage from './pages/LoginPage/LoginPage';
import {AuthProvider} from "./utils/context/AuthProvider";
import StayerDetailsPage from "./pages/StayerDetails/StayerDetailsPage";
import ViewUserInfoPage from "./pages/ViewUserInfo/ViewUserInfoPage";
import AdminPage from "./pages/Admin/AdminPage";
import RoomDetailsPage from "./pages/RoomDetailsPage/RoomDetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          
          <Route element={<RequireAuth allowedRoles={['admin']} />}>
            <Route path="/" element={<AdminPage />} >
            <Route path="/" element={<ContactDetailsPage />} />
              <Route path="/contact" element={<ContactDetailsPage />} />
              <Route path="/stayer" element={<StayerDetailsPage />} />
              <Route path="/viewUser" element={<ViewUserInfoPage/>}  />
              <Route path="/rooms" element={<RoomDetailsPage/>}  />
            </Route>
          </Route>
          {/* <Route element={<RequireAuth allowedRoles={['admin']} />}>
            <Route path="/contact" element={<ContactDetailsPage />} />
          </Route> */}
          <Route path="/contact" element={<ContactFormPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
