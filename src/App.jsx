import React from 'react';
import CustomHeader from './components/customHeader/CustomHeader';
import PresentationContainer from './components/presentationContainer/PresentationContainer';
import AboutMeContainer from './components/aboutMe/AboutMeContainer'
import ProjectsContainer from './components/projects/ProjectsContainer';
import FormContainer from './components/formContainer/FormContainer'

const App = () => (
  <div>
    <CustomHeader />
    <PresentationContainer/>
    <AboutMeContainer/>
    <ProjectsContainer/>
    <FormContainer/>
  </div>
);

export default App;
