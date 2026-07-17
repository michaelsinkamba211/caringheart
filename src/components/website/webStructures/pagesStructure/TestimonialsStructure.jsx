import React from 'react';
import TestimonialsHeroSection from '../Structures/TestimonialComponents/Testimonialsherosection';
import TestimonialsGridSection from '../Structures/TestimonialComponents/Testimonialsgridsection';
import CommitmentBadgesSection from '../Structures/TestimonialComponents/Commitmentbadgessection';


const TestimonialsStructure = () => {
  return (
    <>
      <div id="testimonials-hero"><TestimonialsHeroSection /></div>
      <div id="testimonials-grid"><TestimonialsGridSection /></div>
      <div id="commitment-badges"><CommitmentBadgesSection /></div>
      <div id="cta"><CTASection /></div>
    </>
  );
};

export default TestimonialsStructure;