import {Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
// import Contact from './Contact';

const Switcher = () => {
  return (
    <Routes>
      <Route path = "/" element = {<LandingPage />}/>
    </Routes> 
  );
};

export default Switcher;
