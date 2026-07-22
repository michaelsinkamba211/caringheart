import React from "react";
import { motion } from "framer-motion";
import {
    LuShield, LuDatabase, LuEye, LuLock,
    LuMail, LuPhone, LuMapPin,
} from "react-icons/lu";
import { FontLoader } from "../../ui/fonts";
const SITE_NAME = "Caring Hearts Home Care Solutions";
const LOGO_SRC = "/logo/caringHeartsLogo.png";

const SECTIONS = [
    {
        icon: LuShield,
        title: "Information We Collect",
        content: [
            "Personal identification details — name, email address, phone number, and home address.",
            "Health and care-related information needed to build and deliver a personalized care plan.",
            "Emergency contact and family member details provided during intake.",
            "Employment application information for prospective caregivers.",
            "Device and usage data collected when you access our website.",
        ],
    },
    {
        icon: LuDatabase,
        title: "How We Use Your Information",
        content: [
            "To respond to inquiries and schedule a free care consultation.",
            "To coordinate and deliver personalized non-medical home care services.",
            "To communicate with families about care plans, scheduling, and updates.",
            "To process employment applications for caregiver positions.",
            "To meet legal and regulatory requirements applicable in Massachusetts.",
        ],
    },
    {
        icon: LuLock,
        title: "Data Protection",
        content: [
            "All personal information is stored securely and accessed only by authorized personnel.",
            "Access to client and employee records is limited to those with a legitimate business need.",
            "We do not sell or rent personal information to third parties.",
            "Information is retained only as long as necessary to provide services or meet legal obligations.",
        ],
    },
    {
        icon: LuEye,
        title: "Your Rights",
        content: [
            "Right to access and review the personal information we hold about you.",
            "Right to request correction of inaccurate or outdated information.",
            "Right to ask questions about how your information is collected and used.",
            "Right to file a concern if you believe your privacy has not been respected.",
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

const PrivacyPolicy = () => {
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
                        <LuShield size={26} className="text-navy" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-light text-slate-800 mb-2">Privacy Policy</h1>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-magenta">
                        Last updated: July 2026
                    </p>
                </div>
            </div>

            <div className="max-w-325 mx-auto px-4 sm:px-6 py-10 space-y-4">

                {/* Intro */}
                <div className="bg-white border border-slate-100 rounded-sm p-5 sm:p-6">
                    <p className="text-sm text-slate-600 leading-relaxed">
                        At {SITE_NAME}, we are committed to protecting the privacy and confidentiality of
                        our clients, families, employees, and website visitors. This Privacy Policy explains
                        how we collect, use, and safeguard your information when you use our website or
                        home care services.
                    </p>
                </div>

                {/* Sections */}
                {SECTIONS.map((section, i) => (
                    <SectionCard key={i} section={section} index={i} />
                ))}

                {/* Contact */}
                <div className="bg-white border border-slate-100 rounded-sm p-5 sm:p-6">
                    <h3 className="text-base font-bold text-slate-800 mb-4">Contact Us About Your Privacy</h3>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        If you have questions about this Privacy Policy or how your information is handled,
                        please reach out to us:
                    </p>
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

                {/* Bottom note */}
                <p className="text-center text-[11px] text-slate-400 pb-6">
                    © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;