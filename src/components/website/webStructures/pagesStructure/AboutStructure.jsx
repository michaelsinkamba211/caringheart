import React from 'react';
import AboutHeroSection from '../Structures/AboutComponents/AboutHeroSection';
import OurStorySection from '../Structures/AboutComponents/Ourstorysection';
import MissionVisionSection from '../Structures/AboutComponents/Missionvisionsection';
import CoreValuesSection from '../Structures/AboutComponents/Corevaluessection';
import FounderMessageSection from '../Structures/AboutComponents/Foundermessagesection';
import CTASection from '../Structures/HomeComponents/Ctasection';


const AboutStructure = () => {
  return (
    <>
      <div id="about-hero"><AboutHeroSection /></div>
      <div id="our-story"><OurStorySection /></div>
      <div id="mission-vision"><MissionVisionSection /></div>
      <div id="core-values"><CoreValuesSection /></div>
      <div id="founder-message"><FounderMessageSection /></div>
      <div id="cta"><CTASection/></div>
    </>
  );
};

export default AboutStructure;