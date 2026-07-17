import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
    LuHouse, LuInfo, LuLayoutGrid, LuHeartHandshake, LuMail, LuPhone,
} from "react-icons/lu";
import { FontLoader } from "../../ui/fonts";
const NAV_ITEMS = [
    { name: "Home", path: "/home", icon: LuHouse },
    { name: "About", path: "/about", icon: LuInfo },
    { name: "Services", path: "/services", icon: LuLayoutGrid },
    { name: "Why Choose Us", path: "/why-choose-us", icon: LuHeartHandshake },
    { name: "Contact", path: "/contact", icon: LuMail },
];

const SITE_NAME = "Caring Hearts";
const SITE_TAGLINE = "Home Care Solutions";
const LOGO_SRC = "/src/assets/logo/caringheartlogo.jpg";
const PHONE_DISPLAY = "(857) 405-5050";
const PHONE_TEL = "+18574055050";

const Navbar = () => {
    const { pathname } = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navBg = scrolled
        ? "bg-white/95 border-b border-slate-100 shadow-sm"
        : "bg-white border-b border-slate-100";

    return (
        <>
            <FontLoader />

            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
                <div className="max-w-325 mx-auto px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between gap-4">

                    {/* ── Logo ── */}
                    <NavLink
                        to="/home"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex items-center gap-2 shrink-0 cursor-pointer"
                    >
                        <div className="relative">
                            <img
                                src={LOGO_SRC}
                                alt={SITE_NAME}
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                            />
                            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-magenta rounded-full border-2 border-white" />
                        </div>

                        <div>
                            <p className="text-xs font-bold uppercase leading-tight text-left tracking-wide text-slate-800">
                                {SITE_NAME}
                            </p>
                            <p className="text-[.5rem] font-semibold tracking-widest uppercase leading-tight text-navy">
                                {SITE_TAGLINE}
                            </p>
                        </div>
                    </NavLink>

                    {/* ── Desktop nav links ── */}
                    <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
                        {NAV_ITEMS.map(({ name, path }) => {
                            const active = pathname === path;
                            return (
                                <NavLink
                                    key={path}
                                    to={path}
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                    className={`relative px-3.5 py-2 text-sm font-semibold transition-all duration-150 rounded-sm cursor-pointer
                                        ${active ? "text-navy" : "text-slate-600 hover:text-navy"}`}
                                >
                                    {name}
                                    {active && (
                                        <motion.span
                                            layoutId="nav-indicator"
                                            className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-magenta"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </NavLink>
                            );
                        })}
                    </nav>

                    {/* ── Right CTAs ── */}
                    <div className="flex items-center gap-2 shrink-0">
                        <a href={`tel:${PHONE_TEL}`} className="hidden sm:block">
                            <motion.button
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-1.5 px-3.5 py-2 rounded-sm font-semibold text-xs sm:text-sm
                                    text-slate-700 border border-slate-200
                                    hover:border-navy/30 hover:bg-slate-50 transition-all"
                            >
                                <LuPhone size={14} />
                                {PHONE_DISPLAY}
                            </motion.button>
                        </a>

                        <NavLink to="/consultation">
                            <motion.button
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.97 }}
                                className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-sm font-semibold text-xs sm:text-sm
                                    text-white bg-magenta hover:bg-magenta/90 transition-all"
                            >
                                Free Consultation
                            </motion.button>
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;