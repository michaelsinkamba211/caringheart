import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    LuHouse, LuInfo, LuLayoutGrid, LuHeartHandshake, LuMail, LuPhone,
    LuMenu, LuX,
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
const LOGO_SRC = "/logo/caringheartlogo.jpg";
const PHONE_DISPLAY = "(857) 405-5050";
const PHONE_TEL = "+18574055050";

const Navbar = () => {
    const { pathname } = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Lock body scroll while mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const navBg = scrolled
        ? "bg-white/95 border-b border-slate-100 shadow-sm"
        : "bg-white border-b border-slate-100";

    const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            <FontLoader />

            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
                <div className="max-w-325 mx-auto px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between gap-4">

                    {/* ── Logo ── */}
                    <NavLink
                        to="/home"
                        onClick={goTop}
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
                                    onClick={goTop}
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

                        <NavLink to="/consultation" className="hidden md:block" onClick={goTop}>
                            <motion.button
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.97 }}
                                className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-sm font-semibold text-xs sm:text-sm
                                    text-white bg-magenta hover:bg-magenta/90 transition-all"
                            >
                                Free Consultation
                            </motion.button>
                        </NavLink>

                        {/* ── Mobile hamburger toggle ── */}
                        <button
                            type="button"
                            onClick={() => setMenuOpen((o) => !o)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            className="md:hidden flex items-center justify-center w-9 h-9 rounded-sm
                                text-slate-700 border border-slate-200 hover:border-navy/30 hover:bg-slate-50
                                transition-all cursor-pointer"
                        >
                            {menuOpen ? <LuX size={18} /> : <LuMenu size={18} />}
                        </button>
                    </div>
                </div>

                {/* ── Mobile menu panel ── */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.nav
                            key="mobile-menu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="md:hidden overflow-hidden bg-white border-b border-slate-100 shadow-sm"
                        >
                            <div className="flex flex-col px-3 sm:px-4 py-2">
                                {NAV_ITEMS.map(({ name, path, icon: Icon }) => {
                                    const active = pathname === path;
                                    return (
                                        <NavLink
                                            key={path}
                                            to={path}
                                            onClick={goTop}
                                            className={`flex items-center gap-3 px-2 py-3 text-sm font-semibold rounded-sm transition-colors
                                                ${active ? "text-navy bg-slate-50" : "text-slate-600 hover:text-navy hover:bg-slate-50"}`}
                                        >
                                            <Icon size={16} />
                                            {name}
                                        </NavLink>
                                    );
                                })}

                                <a
                                    href={`tel:${PHONE_TEL}`}
                                    className="flex items-center gap-3 px-2 py-3 text-sm font-semibold text-slate-600 hover:text-navy rounded-sm transition-colors sm:hidden"
                                >
                                    <LuPhone size={16} />
                                    {PHONE_DISPLAY}
                                </a>

                                <NavLink to="/consultation" onClick={goTop} className="mt-1 mb-2">
                                    <button
                                        className="w-full px-4 py-2.5 rounded-sm font-semibold text-sm
                                            text-white bg-magenta hover:bg-magenta/90 transition-all cursor-pointer"
                                    >
                                        Free Consultation
                                    </button>
                                </NavLink>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Navbar;