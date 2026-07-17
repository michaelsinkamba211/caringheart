import React from 'react';
import CTASection from '../Structures/HomeComponents/Ctasection';
import ServiceAreasHeroSection from '../Structures/ServiceComponents/Serviceareasherosection';
import PrimaryAreaSection from '../Structures/ServiceComponents/Primaryareasection';
import SurroundingCommunitiesSection from '../Structures/ServiceComponents/Surroundingcommunitiessection';
import AreaMapSection from '../Structures/ServiceComponents/Areamapsection';
import NotListedSection from '../Structures/ServiceComponents/Notlistedsection';

const ServiceAreasStructure = () => {
  return (
    <>
      <div id="areas-hero"><ServiceAreasHeroSection /></div>
      <div id="primary-area"><PrimaryAreaSection /></div>
      <div id="surrounding-communities"><SurroundingCommunitiesSection /></div>
      <div id="area-map"><AreaMapSection /></div>
      <div id="not-listed"><NotListedSection /></div>
      <div id="cta"><CTASection /></div>
    </>
  );
};

export default ServiceAreasStructure;