import React from 'react';
import HeroSection from '../Structures/HomeComponents/Herosection';
import WelcomeSection from '../Structures/HomeComponents/Welcomesection';
import ServicesPreviewSection from '../Structures/HomeComponents/Servicespreviewsection';
import WhyChooseUsPreviewSection from '../Structures/HomeComponents/Whychooseuspreviewsection';
import OurPromiseSection from '../Structures/HomeComponents/Ourpromisesection';
import TestimonialsPreviewSection from '../Structures/HomeComponents/Testimonialspreviewsection';
import CTASection from '../Structures/HomeComponents/Ctasection';
import FAQAccordionSection from '../Structures/ContactComponents/Faqaccordionsection';

const HomeStructure = () => {
  return (
    <>
      <div id="hero"><HeroSection /></div>
      <div id="welcome"><WelcomeSection /></div>
      <div id="services-preview"><ServicesPreviewSection /></div>
      <div id="why-choose-us"><WhyChooseUsPreviewSection /></div>
      <div id="our-promise"><OurPromiseSection /></div>
      <div id="testimonials"><TestimonialsPreviewSection /></div>


         {/* FAQ Section */}
      <div id="faq">
        <FAQAccordionSection />
      </div>


      <div id="cta"><CTASection /></div>
    </>
  );
};

export default HomeStructure;