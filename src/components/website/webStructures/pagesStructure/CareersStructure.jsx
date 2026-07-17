import React from 'react';
import CaregiversHeroSection from '../Structures/ServiceComponents/CareGivingComponents/Caregiversherosection';
import ApplicationFormSection from '../Structures/ServiceComponents/CareGivingComponents/Applicationformsection';
import QualificationsSection from '../Structures/ServiceComponents/CareGivingComponents/Qualificationssection';
import PositionsSection from '../Structures/ServiceComponents/CareGivingComponents/Positionssection';
import WhyJoinSection from '../Structures/ServiceComponents/CareGivingComponents/Whyjoinsection';
// import CaregiversHeroSection from '../Structures/ServiceComponents/CareGivingComponents/Caregiversherosection';

const CareersStructure = () => {
  return (
    <>
      <div id="careers-hero"><CaregiversHeroSection /></div>
      <div id="why-join"><WhyJoinSection /></div>
      <div id="positions"><PositionsSection /></div>
      <div id="qualifications"><QualificationsSection /></div>
      <div id="application-form"><ApplicationFormSection /></div>
    </>
  );
};

export default CareersStructure;