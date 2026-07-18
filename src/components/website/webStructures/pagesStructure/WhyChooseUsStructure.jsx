import React from 'react';
import WhyChooseUsHeroSection from '../Structures/WhyChooseUsComponents/Whychooseusherosection';
import DifferentiatorsSection from '../Structures/WhyChooseUsComponents/Differentiatorssection';
import CommitmentListSection from '../Structures/WhyChooseUsComponents/Commitmentlistsection';
import CTASection from '../Structures/HomeComponents/Ctasection';
import FAQAccordionSection from '../Structures/ContactComponents/Faqaccordionsection';

const WhyChooseUsStructure = () => {
  return (
    <>
      <div id="why-hero"><WhyChooseUsHeroSection /></div>
      <div id="differentiators"><DifferentiatorsSection /></div>
      <div id="commitment-list"><CommitmentListSection /></div>
      <div id="faq">
        <FAQAccordionSection />
      </div>
      <div id="cta"><CTASection /></div>
    </>
  );
};

export default WhyChooseUsStructure;