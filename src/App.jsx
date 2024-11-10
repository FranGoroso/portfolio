import React from 'react';
import CustomHeader from './components/customHeader/CustomHeader';
import PresentationContainer from './components/presentationContainer/PresentationContainer';
import AboutMeContainer from './components/aboutMe/AboutMeContainer'

const App = () => (
  <div>
    <CustomHeader />
    <PresentationContainer/>
    <AboutMeContainer/>
  </div>
);

export default App;
