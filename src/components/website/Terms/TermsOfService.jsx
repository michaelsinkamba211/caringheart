import React from "react";
import { motion } from "framer-motion";
import {
    LuFileText, LuCopyright, LuScale, LuGlobe, LuRefreshCw,
    LuMail, LuPhone, LuMapPin,
} from "react-icons/lu";
import { FontLoader } from "../../ui/fonts";

const SITE_NAME = "Caring Hearts Home Care Solutions";
const LOGO_SRC = "/logo/caringHeartsLogo.png";

const SECTIONS = [
    {
        icon: LuFileText,
        title: "Website Content",
        content: [
            "The information on this website is intended for general informational purposes only.",
            "Nothing on this site should be considered medical advice, diagnosis, or treatment.",
            "Always consult a qualified healthcare provider regarding any medical questions or conditions.",
        ],
    },
    {
        icon: LuCopyright,
        title: "Intellectual Property",
        content: [
            "All website content — text, graphics, logos, photographs, and designs — is the property of Caring Hearts Home Care Solutions unless otherwise stated.",
            "Unauthorized copying, reproduction, or distribution of this content is prohibited without written permission.",
        ],
    },
    {
        icon: LuScale,
        title: "Limitation of Liability",
        content: [
            "While we strive to keep all information accurate and current, we make no guarantees regarding the completeness or accuracy of website content.",
            "Caring Hearts Home Care Solutions is not liable for any decisions made based solely on information found on this website.",
        ],
    },
    {
        icon: LuGlobe,
        title: "External Links",
        content: [
            "Our website may include links to third-party resources for your convenience.",
            "We are not responsible for the content, accuracy, or privacy practices of those external websites.",
        ],
    },
    {
        icon: LuRefreshCw,
        title: "Changes to These Terms",
        content: [
            "We reserve the right to update these Terms and Conditions at any time without prior notice.",
            "Continued use of this website after changes are posted constitutes acceptance of the updated terms.",
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

const TermsOfService = () => {
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
                        <LuFileText size={26} className="text-navy" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-light text-slate-800 mb-2">Terms &amp; Conditions</h1>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-magenta">
                        Last updated: July 2026
                    </p>
                </div>
            </div>

            <div className="max-w-325 mx-auto px-4 sm:px-6 py-10 space-y-4">

                {/* Intro */}
                <div className="bg-white border border-slate-100 rounded-sm p-5 sm:p-6">
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Welcome to the {SITE_NAME} website. By accessing or using this website, you agree
                        to comply with the following Terms and Conditions.
                    </p>
                </div>

                {SECTIONS.map((section, i) => (
                    <SectionCard key={i} section={section} index={i} />
                ))}

                {/* Contact */}
                <div className="bg-white border border-slate-100 rounded-sm p-5 sm:p-6">
                    <h3 className="text-base font-bold text-slate-800 mb-4">Questions About These Terms?</h3>
                    <div className="space-y-3">
                        {[
                            { icon: LuMail, text: "info@caringheartssolutions.com" },
                            { icon: LuPhone, text: "(857) 277-9073" },
                            { icon: LuMapPin, text: "303 Wyman Street, Suite 300 PMB 17296683, Waltham, MA 02451" },
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

export default TermsOfService;