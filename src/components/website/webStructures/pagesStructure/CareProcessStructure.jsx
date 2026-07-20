import React from 'react';
import ProcessPromiseSection from '../Structures/ServiceComponents/Processpromisesection';
import CTASection from '../Structures/HomeComponents/Ctasection';
import ProcessStepsSection from '../Structures/ServiceComponents/Processstepssection';
import CareProcessHeroesSection from '../Structures/ServiceComponents/CareProcessHeroesSection';

const CareProcessStructure = () => {
  return (
    <>
      <div id="process-hero"><CareProcessHeroesSection /></div>
      <div id="process-steps"><ProcessStepsSection /></div>
      <div id="process-promise"><ProcessPromiseSection /></div>
      <div id="cta"><CTASection /></div>
    </>
  );
}

export default CareProcessStructure;