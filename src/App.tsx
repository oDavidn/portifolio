import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import MainContent from "./components/mainContent/mainContent";
import Footer from "./components/footer/footer";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import ContactForm from "./components/contactForm/contactForm";

function App() {
  return (
      <div className="App">
        <div className="main">
          <div className="center">
            <Header/>
            <BrowserRouter>
              <Routes>
                <Route path={"/"} element={<MainContent/>}/>
                <Route path={"/contact"} element={<ContactForm/>}/>
              </Routes>
            </BrowserRouter>
            <Footer/>
          </div>
        </div>
      </div>
  );
}

export default App;
