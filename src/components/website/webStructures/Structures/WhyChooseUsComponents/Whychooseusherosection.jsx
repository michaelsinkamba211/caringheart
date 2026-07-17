import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { LuHouse, LuChevronRight } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const WhyChooseUsHeroSection = () => (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <FontLoader />
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-magenta/15 blur-3xl" />
        <div className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-325 mx-auto px-4 sm:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-center justify-center gap-1.5 text-xs text-white/50 mb-6">
                    <NavLink to="/home" className="flex items-center gap-1 hover:text-white/80 transition-colors">
                        <LuHouse size={12} /> Home
                    </NavLink>
                    <LuChevronRight size={12} />
                    <span className="text-white/80">Why Choose Us</span>
                </div>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-white/10 text-white/80 border border-white/15 mb-5">
                    Why Choose Us
                </span>

                <h1 className="text-3xl sm:text-4xl font-light text-white leading-tight mb-4 max-w-xl mx-auto">
                    We focus on the<br />
                    <span className="text-magenta font-normal">whole person</span>
                </h1>

                <p className="text-sm text-white/60 leading-relaxed max-w-lg mx-auto">
                    Families trust Caring Hearts Home Care Solutions because we care for more
                    than just the task in front of us — not just the care someone needs today.
                </p>
            </motion.div>
        </div>
    </section>
);

export default WhyChooseUsHeroSection;