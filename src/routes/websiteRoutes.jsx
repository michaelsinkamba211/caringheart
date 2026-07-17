import PrivacyPolicy from "../components/website/Terms/PrivacyPolicy.jsx";
import TermsOfService from "../components/website/Terms/TermsOfService.jsx";
import Compliance from "../components/website/Terms/Compliance.jsx";
import HomePageStructure from "/src/components/website/webStructures/pagesStructure/HomeStructure.jsx";
import AboutStructure from "../components/website/webStructures/pagesStructure/AboutStructure.jsx";
import ServicesStructure from "../components/website/webStructures/pagesStructure/ServicesStructure.jsx";
import FAQStructure from "../components/website/webStructures/pagesStructure/FAQStructure.jsx";
import TestimonialsStructure from "../components/website/webStructures/pagesStructure/TestimonialsStructure.jsx";
import PaymentsStructure from "../components/website/webStructures/pagesStructure/PaymentsStructure.jsx";
import CommunityPartnershipsStructure from "../components/website/webStructures/pagesStructure/CommunityPartnershipsStructure.jsx";
import PrivacyPolicyStructure from "../components/website/webStructures/pagesStructure/PrivacyPolicyStructure.jsx";
import TermsStructure from "../components/website/webStructures/pagesStructure/TermsStructure.jsx";
import NoticeOfPrivacyPracticesStructure from "../components/website/webStructures/pagesStructure/NoticeOfPrivacyPracticesStructure.jsx";
import ContactStructure from "../components/website/webStructures/pagesStructure/ContactStructure.jsx";
import CareersStructure from "../components/website/webStructures/pagesStructure/CareersStructure.jsx";
import CareProcessStructure from "../components/website/webStructures/pagesStructure/CareProcessStructure.jsx";
import ServiceAreasStructure from "../components/website/webStructures/pagesStructure/ServiceAreasStructure.jsx";
import HomeStructure from "../components/website/webStructures/pagesStructure/HomeStructure.jsx";
import WhyChooseUsStructure from "../components/website/webStructures/pagesStructure/WhyChooseUsStructure.jsx";

export const websiteRoutes = [
    // ── Home ──
    { path: "/", element: <HomeStructure />, index: true },
    { path: "home", element: <HomeStructure /> },
    { path: "index", element: <HomeStructure /> },
    { path: "about", element: <AboutStructure /> },
    { path: "services", element: <ServicesStructure /> },
    { path: "why-choose-us", element: <WhyChooseUsStructure /> },
    { path: "care-process", element: <CareProcessStructure /> },
    { path: "service-areas", element: <ServiceAreasStructure /> },
    { path: "careers", element: <CareersStructure /> },
    { path: "contact", element: <ContactStructure /> },
    { path: "consultation", element: <ContactStructure /> },
    { path: "faq", element: <FAQStructure /> },
    { path: "testimonials", element: <TestimonialsStructure /> },
    { path: "payments", element: <PaymentsStructure /> },
    { path: "community-partnerships", element: <CommunityPartnershipsStructure /> },
    { path: "privacy-policy", element: <PrivacyPolicyStructure /> },
    { path: "terms-and-conditions", element: <TermsStructure /> },
    { path: "notice-of-privacy-practices", element: <NoticeOfPrivacyPracticesStructure /> },
];