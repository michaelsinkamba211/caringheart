import React from "react";
import { motion } from "framer-motion";
import {
    LuHeartPulse, LuClipboardList, LuUserCheck,
    LuMail, LuPhone, LuMapPin,
} from "react-icons/lu";
import { FontLoader } from "../../ui/fonts";


const SITE_NAME = "Caring Hearts Home Care Solutions";
const LOGO_SRC = "/logo/caringHeartsLogo.png";

const SECTIONS = [
    {
        icon: LuClipboardList,
        title: "How We May Use Your Information",
        content: [
            "To coordinate and deliver your personalized care.",
            "To communicate with healthcare providers when authorized by you or your family.",
            "To process billing and payment for services rendered.",
            "To meet legal and regulatory obligations under applicable Massachusetts and federal law.",
            "To review and improve the quality of the care we provide.",
        ],
    },
    {
        icon: LuUserCheck,
        title: "Your Rights",
        content: [
            "Right to request access to your care and billing records.",
            "Right to request corrections to information you believe is inaccurate.",
            "Right to request reasonable restrictions on certain disclosures, where permitted by law.",
            "Right to receive confidential communications about your care.",
            "Right to receive a copy of this Notice of Privacy Practices at any time.",
            "Right to file a complaint if you believe your privacy rights have been violated, without fear of retaliation.",
        ],
    },
    {
        icon: LuHeartPulse,
        title: "Our Commitment",
        content: [
            "We maintain the confidentiality of all client information in accordance with applicable privacy laws.",
            "Information is shared only with those directly involved in coordinating your care, or as required by law.",
            "Every caregiver and staff member is trained on client confidentiality and professional ethics.",
        ],
    },
];

const SectionCard = ({ section, index }) => {
    const Icon = section.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className="bg-white border border-slate-100 rounded-sm p-5 sm:p-6"
        >
            <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-sm bg-navy/8 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-navy" />
                </div>
                <div className="flex-1 min-w-0">
                    <h2 className="text-base font-bold text-slate-800 mb-3">{section.title}</h2>
                    <ul className="space-y-2.5">
                        {section.content.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-2 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

// Note: this replaces Fiero's financial-regulation "Compliance" page.
// Caring Hearts' equivalent trust document is a Notice of Privacy Practices,
// covering how health/care information is used — the closer fit for a home care agency.
const Compliance = () => {
    return (
        <div className="min-h-screen bg-slate-50 mt-5">
            <FontLoader />

            {/* ── Header ── */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-325 mx-auto px-4 sm:px-6 py-14 text-center">
                    <div className="flex items-center justify-center gap-2.5 mb-6">
                        <img src={LOGO_SRC} alt={SITE_NAME} className="w-8 h-8 object-contain" />
                        <span className="text-sm font-bold uppercase tracking-wide text-slate-800">{SITE_NAME}</span>
                    </div>
                    <div className="w-14 h-14 rounded-sm bg-navy/10 flex items-center justify-center mx-auto mb-5">
                        <LuHeartPulse size={26} className="text-navy" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-light text-slate-800 mb-2">
                        Notice of Privacy Practices
                    </h1>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-magenta">
                        Last updated: July 2026
                    </p>
                </div>
            </div>

            <div className="max-w-325 mx-auto px-4 sm:px-6 py-10 space-y-4">

                {/* Intro */}
                <div className="bg-white border border-slate-100 rounded-sm p-5 sm:p-6">
                    <p className="text-sm text-slate-600 leading-relaxed">
                        {SITE_NAME} respects the privacy of your personal and health information. We are
                        committed to maintaining the confidentiality of all client information in accordance
                        with applicable federal and Massachusetts privacy laws.
                    </p>
                </div>

                {SECTIONS.map((section, i) => (
                    <SectionCard key={i} section={section} index={i} />
                ))}

                {/* Contact */}
                <div className="bg-white border border-slate-100 rounded-sm p-5 sm:p-6">
                    <h3 className="text-base font-bold text-slate-800 mb-4">Contact Our Privacy Officer</h3>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        Questions regarding this Notice or your privacy rights may be directed to:
                    </p>
                    <div className="space-y-3">
                        {[
                            { icon: LuMail, text: "info@caringheartssolutions.com" },
                            { icon: LuPhone, text: "(857) 277-9073" },
                            { icon: LuMapPin, text: "303 Wyman Street, Suite 300, Waltham, MA 02451" },
                        ].map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-sm bg-magenta/10 flex items-center justify-center shrink-0">
                                    <Icon size={13} className="text-magenta" />
                                </div>
                                <span className="text-sm text-slate-700">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-center text-[11px] text-slate-400 pb-6">
                    © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Compliance;