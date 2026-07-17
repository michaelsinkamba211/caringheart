import React from 'react';
import PaymentsHeroSection from '../Structures/PaymentComponents/Paymentsherosection';
import PaymentOptionsSection from '../Structures/PaymentComponents/Paymentoptionssection';
import CostEstimateSection from '../Structures/PaymentComponents/Costestimatesection';


const PaymentsStructure = () => {
  return (
    <>
      <div id="payments-hero"><PaymentsHeroSection /></div>
      <div id="payment-options"><PaymentOptionsSection /></div>
      <div id="cost-estimate"><CostEstimateSection /></div>
      <div id="cta"><CTASection /></div>
    </>
  );
};

export default PaymentsStructure;