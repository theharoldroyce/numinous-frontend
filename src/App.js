import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from 'axios';

import NavBAr from "./frontend/NavBAr";
import HomePage from './client/HomePage';
import EventPage from './client/EventPage';
import ArtistPage from './client/ArtistPage';
import MerchPage from './client/MerchPage';
import AboutPage from './client/AboutPage';
import ContactPage from './client/ContactPage';
import Foother from "./frontend/Foother";

import Register from "./client/Registraion";
import LoginPage from "./client/LoginPage";
import Error from "./frontend/Error";
import Hero from "./components/Hero";




/*axios.defaults.baseURL= process.env.AXIOS_BASE_URL; */
axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});




function App() {
  return (
    <>
      <Router>
        <NavBAr/>
        <Routes>
          <Route path="/register" element={localStorage.getItem(`auth_token`) ? <Navigate to='/' /> : <Register />} />
          <Route path="/login" element={localStorage.getItem(`auth_token`) ? <Navigate to='/' /> : <LoginPage />} />
          <Route path="*" element={<Error />} />
          <Route path="/"  element={<HomePage />} />
          <Route path="/event" element={<EventPage/>} />
          <Route path="/artist" element={<ArtistPage/>} />
          <Route path="/merch" element={<MerchPage/>} />
          <Route path="/event" element={<EventPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/hero" element={<Hero/>} />
        </Routes>
        <Foother/>
      </Router>
    </>
  );
}

export default App;

