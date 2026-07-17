import React from 'react';
import FAQHeroSection from '../Structures/ContactComponents/Faqherosection';
import FAQAccordionSection from '../Structures/ContactComponents/Faqaccordionsection';
import CTASection from '../Structures/HomeComponents/Ctasection';

const FAQStructure = () => {
  return (
    <>
      <div id="faq-hero"><FAQHeroSection /></div>
      <div id="faq-accordion"><FAQAccordionSection /></div>
      <div id="cta"><CTASection /></div>
    </>
  );
};

export default FAQStructure;