import React from 'react';
import ContactHeroSection from '../Structures/ContactComponents/Contactherosection';
import ContactDetailsSection from '../Structures/ContactComponents/Contactdetailssection';
import ConsultationFormSection from '../Structures/ContactComponents/Consultationformsection';
import OfficeMapSection from '../Structures/ContactComponents/Officemapsection';

const ContactStructure = () => {
  return (
    <>
      <div id="contact-hero"><ContactHeroSection /></div>
      <div id="contact-details"><ContactDetailsSection /></div>
      <div id="consultation-form"><ConsultationFormSection /></div>
      <div id="office-map"><OfficeMapSection /></div>
    </>
  );
};

export default ContactStructure;