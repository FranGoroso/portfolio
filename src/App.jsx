import React, { useEffect } from 'react';
import CustomHeader from './components/customHeader/CustomHeader';
import PresentationContainer from './components/presentationContainer/PresentationContainer';
import AboutMeContainer from './components/aboutMe/AboutMeContainer';
import ProjectsContainer from './components/projects/ProjectsContainer';
import FormContainer from './components/formContainer/FormContainer';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div>
      <CustomHeader />
      <div id="inicio">
        <PresentationContainer />
      </div>
      <div id="about-me">
        <AboutMeContainer />
      </div>
      <div id="trabajo">
        <ProjectsContainer />
      </div>
      <div id="contacto">
        <FormContainer />
      </div>
    </div>
  );
};

export default App;
