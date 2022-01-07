import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/heroSection/heroSection';
import InterviewSection from './components/interviewSection/interviewSection';
import Footer from './components/footer/footer';
import Cards from './components/cards/cards';
import FinalFooter from './components/finalFooter/finalFooter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <InterviewSection/>
      <Footer backgroundColor={'#590dff'} btnBackground={'black'} btnColor={'white'} >Decoding the capability of <br/> Artificial Intelligence</Footer>
      <div className="black-bg"></div>
      <Cards/>
      <Footer backgroundColor={'black'} btnBackground={'#16F3BF'} btnColor={'black'} >Keep up with the <br/> Latest on AI</Footer>
      <FinalFooter/>
    </div>
  );
}

export default App;
