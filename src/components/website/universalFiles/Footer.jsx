
import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { message } from "antd";
import {
    LuArrowRight, LuPhone, LuMail, LuMapPin, LuClock,
    LuShield, LuBadgeCheck, LuHeadphones,
} from "react-icons/lu";

import {
    LuFacebook,
    LuInstagram,
    LuTwitter,
    LuYoutube,
    LuMusic2,
} from "react-icons/lu";


const SITE_NAME = "Caring Hearts";
const LOGO_SRC = "/logo/caringheartlogo.jpg";
const PHONE_DISPLAY = "(857) 277-9073";
const PHONE_TEL = "+18572779073";
const EMAIL = "info@caringheartssolutions.com";
// Quick Links — real routes, since Caring Hearts is a multi-page site
const QUICK_LINKS = [
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Why Choose Us", to: "/why-choose-us" },
    { name: "FAQs", to: "/faq" },
    { name: "Meet Our Caregivers", to: "/caregivers" },
    { name: "Careers", to: "/careers" },
    { name: "Contact Us", to: "/contact" },
];

const LEGAL_LINKS = [
    { name: "Privacy Policy", to: "/privacy-policy" },
    { name: "Terms & Conditions", to: "/terms-and-conditions" },
    { name: "Notice of Privacy Practices", to: "/notice-of-privacy-practices" },
];

const Footer = () => {
    return (
        <footer className="bg-navy border-t border-white/10">
            {/* Main Footer Content */}
            <div className="max-w-325 mx-auto px-2 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Column 1: Brand & Trust Badges */}
                    <div className="lg:col-span-4">
                        <div className="mb-6">
                            <div className="flex items-center gap-2.5 mb-3">
                                <div className="relative">
                                    <img src={LOGO_SRC} alt={SITE_NAME} className="w-10 h-10 object-contain rounded-sm" />
                                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-magenta rounded-full border-2 border-navy" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">{SITE_NAME}</h3>
                                    <p className="text-magenta text-[10px] font-semibold uppercase tracking-wider">
                                        Compassionate Care Beyond the Rest
                                    </p>
                                </div>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed mb-6">
                                Compassionate, personalized non-medical home care that helps seniors and
                                adults live safely and independently at home — serving Waltham and
                                Greater Boston, Massachusetts.
                            </p>
                        </div>

                        {/* Trust Badges */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-white/80 text-sm">
                                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                                    <LuShield className="w-3 h-3 text-magenta" />
                                </div>
                                <span>Registered, Bonded &amp; Insured</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/80 text-sm">
                                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                                    <LuBadgeCheck className="w-3 h-3 text-magenta" />
                                </div>
                                <span>Background-Checked Caregivers</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/80 text-sm">
                                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                                    <LuHeadphones className="w-3 h-3 text-magenta" />
                                </div>
                                <span>Dedicated Care Team Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.to}>
                                    <NavLink
                                        to={link.to}
                                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                        className="text-white/60 hover:text-magenta transition-colors duration-200 text-sm flex items-center gap-2 group cursor-pointer"
                                    >
                                        <LuArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services Info (descriptive, not clickable) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
                            Our Services
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                "Personal Care Assistance",
                                "Companion Care",
                                "Homemaking & Meal Prep",
                                "Alzheimer's & Dementia Care",
                                "24-Hour & Live-In Care",
                                "Respite Care",
                            ].map((service) => (
                                <li key={service} className="text-white/60 text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-magenta" />
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5">
                            Contact Us
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-1">
                                    <p className="text-white/40 text-xs">Phone</p>
                                    <p className="text-white text-sm font-medium">{PHONE_DISPLAY}</p>
                                    <a
                                        href={`tel:${PHONE_TEL}`}
                                        className="inline-flex items-center gap-1 text-[.6rem] font-semibold text-magenta bg-magenta/15 border border-magenta/25 px-2 py-1 rounded-sm hover:bg-magenta/25 transition-colors mt-1.5"
                                    >
                                        <LuPhone className="w-3 h-3" /> Call
                                    </a>
                                </div>
                            </div>

                            <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 group">
                                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                                    <LuMail className="w-3 h-3 text-magenta" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs">Email</p>
                                    <p className="text-white text-sm font-medium">{EMAIL}</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-3">
                                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <LuMapPin className="w-3 h-3 text-magenta" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs">Office</p>
                                    <p className="text-white/80 text-sm">

                                        303 Wyman Street, Suite 300 PMB 17296683<br /> Waltham, MA 02451


                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 pt-2">
                                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <LuClock className="w-3 h-3 text-magenta" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs">Business Hours</p>
                                    <p className="text-white/80 text-sm">Mon–Fri: 8:00 AM – 5:00 PM</p>
                                    <p className="text-white/80 text-sm">Sat/Sun: 9:00 AM – 5:00 PM</p>
                                    <p className="text-white/40 text-xs mt-0.5">24/7 emergency support available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer — slightly darker than the top for a subtle seam */}
            <div className="border-t border-white/10 bg-black/15">
                <div className="max-w-325 mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <div className="text-center md:text-left">
                            <p className="text-white/40 text-xs">
                                © {new Date().getFullYear()} {SITE_NAME} Home Care Solutions LLC. All rights reserved.
                            </p>
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
                            {LEGAL_LINKS.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                    className="text-white/50 hover:text-magenta transition-colors"
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/share/1borqwCL3b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-magenta hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                                aria-label="Facebook"
                            >
                                <LuFacebook className="w-3 h-3" />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/caring_heartssolutions?igsh=MTV0N2hyM21tOGozOQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-magenta hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                                aria-label="Instagram"
                            >
                                <LuInstagram className="w-3 h-3" />
                            </a>

                            {/* TikTok */}
                            <a
                                href="https://www.tiktok.com/@caring.hearts.home?_r=1&_t=ZT-98EPMmAT7kM"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-magenta hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                                aria-label="TikTok"
                            >
                                <LuMusic2 className="w-3 h-3" />
                            </a>

                            {/* X (Twitter) */}
                            <a
                                href="https://x.com/caringhearzxt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-magenta hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                                aria-label="X"
                            >
                                <LuTwitter className="w-3 h-3" />
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://www.youtube.com/@CaringHeartsHomeCareSolutions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-magenta hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                                aria-label="YouTube"
                            >
                                <LuYoutube className="w-3 h-3" />
                            </a>
                        </div>
                    </div>

                    {/* Regulatory / Reassurance Note */}
                    <div className="mt-4 text-center">
                        <p className="text-white/30 text-[11px]">
                            {SITE_NAME} Home Care Solutions LLC provides non-medical home care services
                            only. All caregivers are background-checked, reference-verified, and
                            dependently insured. Information on this site is for general purposes only
                            and is not medical advice.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;