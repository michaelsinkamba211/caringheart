import React from 'react';
import PartnershipsHeroSection from '../Structures/CommunityPartnership/PartnershipsHeroSection';
import PartnerTypesSection from '../Structures/CommunityPartnership/PartnerTypesSection';
import PartnerCommitmentSection from '../Structures/CommunityPartnership/PartnerCommitmentSection';
import ReferralFormSection from '../Structures/CommunityPartnership/ReferralFormSection';

const CommunityPartnershipsStructure = () => {
  return (
    <>
      <div id="partnerships-hero"><PartnershipsHeroSection /></div>
      <div id="partner-types"><PartnerTypesSection /></div>
      <div id="partner-commitment"><PartnerCommitmentSection /></div>
      <div id="referral-form"><ReferralFormSection /></div>
    </>
  );
};

export default CommunityPartnershipsStructure;