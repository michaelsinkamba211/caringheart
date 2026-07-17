import {
    HomeStructure,
    AboutStructure,
    ServicesStructure,
    WhyChooseUsStructure,
    CareProcessStructure,
    ServiceAreasStructure,
    CaregiversStructure,
    CareersStructure,
    ContactStructure,
    FAQStructure,
    TestimonialsStructure,
    PaymentsStructure,
    CommunityPartnershipsStructure,
    PrivacyPolicyStructure,
    TermsStructure,
    NoticeOfPrivacyPracticesStructure,
} from "../components/website/webStructures/pagesStructure";

export const websiteRoutes = [
    // ── Home ──
    { path: "/", element: <HomeStructure />, index: true },
    { path: "home", element: <HomeStructure /> },
    { path: "index", element: <HomeStructure /> },

    // ── Core pages ──
    { path: "about", element: <AboutStructure /> },
    { path: "services", element: <ServicesStructure /> },
    { path: "why-choose-us", element: <WhyChooseUsStructure /> },
    { path: "care-process", element: <CareProcessStructure /> },
    { path: "service-areas", element: <ServiceAreasStructure /> },
    { path: "caregivers", element: <CaregiversStructure /> },
    // { path: "resources", element: <ResourcesStructure /> },       // enable once built
    { path: "careers", element: <CareersStructure /> },

    // ── Contact & consultation ──
    // ConsultationFormSection lives inside ContactStructure (id="consultation"),
    // so /consultation aliases to the same page rather than a separate one.
    { path: "contact", element: <ContactStructure /> },
    { path: "consultation", element: <ContactStructure /> },

    // ── Supporting pages ──
    { path: "faq", element: <FAQStructure /> },
    { path: "testimonials", element: <TestimonialsStructure /> },
    { path: "payments", element: <PaymentsStructure /> },
    { path: "community-partnerships", element: <CommunityPartnershipsStructure /> },

    // ── Terms & Policies ──
    // Paths match what Footer.jsx's LEGAL_LINKS already point to.
    { path: "privacy-policy", element: <PrivacyPolicyStructure /> },
    { path: "terms-and-conditions", element: <TermsStructure /> },
    { path: "notice-of-privacy-practices", element: <NoticeOfPrivacyPracticesStructure /> },
];