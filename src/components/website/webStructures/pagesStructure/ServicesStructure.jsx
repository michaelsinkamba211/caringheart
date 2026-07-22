import React from 'react';
import ServicesHeroSection from '../Structures/ServiceComponents/Servicesherosection';
import ServicesGridSection from '../Structures/ServiceComponents/Servicesgridsection';
import CTASection from '../Structures/HomeComponents/Ctasection';
import {
  CompanionCareSection, DementiaCareSection,
  HomemakingSection, LiveInCareSection, MealPreparationSection,
  MedicationRemindersSection, PersonalCareSection,
  PostHospitalRecoverySection, RespiteCareSection,
  TransportationSection, TwentyFourHourCareSection
} from '../Structures/ServiceComponents/ServiceSectionsForServices';
import { LaundrySection } from '../Structures/ServiceComponents/ServiceSectionsForServices';

const ServicesStructure = () => {
  return (
    <>
      <div id="services-hero"><ServicesHeroSection /></div>
      <div id="services-grid"><ServicesGridSection /></div>
      <div id="personal-care"><PersonalCareSection /></div>
      <div id="companion-care"><CompanionCareSection /></div>
      <div id="homemaking"><HomemakingSection /></div>
      <div id="meal-preparation"><MealPreparationSection /></div>
      <div id="medication-reminders"><MedicationRemindersSection /></div>
      <div id="dementia-care"><DementiaCareSection /></div>
      <div id="live-in-care"><LiveInCareSection /></div>
      <div id="24-hour-care"><TwentyFourHourCareSection /></div>
      <div id="transportation"><TransportationSection /></div>
      <div id="respite-care"><RespiteCareSection /></div>
      <div id="post-hospital-recovery"><PostHospitalRecoverySection /></div>
       <div id="laundry"><LaundrySection /></div>
      <div id="cta"><CTASection /></div>
    </>
  );
};
export default ServicesStructure;