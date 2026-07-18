import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { LuShieldCheck, LuPhone, LuCalendarCheck } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";
import heroCaregiver from "/src/assets/HeroImages/homecaregiverimage.jpg";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-ivory min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-center">
            <FontLoader />

            {/* ── Full-bleed background photo, whole section ── */}
            <div className="absolute inset-0">
                <img
                    src={heroCaregiver}
                    alt="A caregiver sharing a warm moment with a senior client at home"
                    className="w-full h-full object-cover object-center"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/60 to-ivory/20
                        lg:bg-gradient-to-r lg:from-ivory lg:via-ivory/40 lg:to-transparent"
                />
            </div>

            <div className="relative z-10 w-full max-w-325 mx-auto px-2 py-24 sm:py-32 min-w-[320px]">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="max-w-lg w-full"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-navy/8 border border-navy/15 mb-6">
                        <span className="text-xs font-semibold text-navy tracking-wide uppercase">
                            Non-Medical Home Care
                            <span className="w-1.5 h-1.5 mx-2 rounded-sm bg-magenta inline-block" />
                            Waltham &amp; Greater Boston
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-4xl lg:text-5xl font-light leading-[1.1] mb-6 text-slate-800">
                        Compassionate care,<br />
                        <span className="text-navy">right at</span>{" "}
                        <span className="font-extralight text-slate-600">home.</span>
                    </h1>

                    <p className="text-sm text-slate-500 leading-relaxed max-w-md mb-10">
                        Caring Hearts Home Care Solutions helps seniors and adults live safely,
                        comfortably, and independently — with personalized, dependable non-medical
                        home care throughout Massachusetts.
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        <NavLink to="/consultation">
                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-sm font-semibold text-sm text-white bg-magenta hover:bg-magenta/90 transition-all"
                            >
                                <LuCalendarCheck size={16} />
                                Schedule a Free Consultation
                            </motion.button>
                        </NavLink>

                        <a href="tel:+18572779073">
                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-2 p-2 px-5 py-2.5 rounded-sm font-semibold text-sm text-slate-700 border border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white transition-all"
                            >
                                <LuPhone size={16} />
                                Call Us Today
                            </motion.button>
                        </a>
                    </div>

                    <div className="flex items-center gap-1.5 mt-5">
                        <LuShieldCheck size={13} className="text-navy shrink-0" />
                        <span className="text-xs text-slate-500">
                            Licensed, bonded &amp; insured
                            <span className="hidden sm:inline"> — every caregiver background-checked</span>
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;