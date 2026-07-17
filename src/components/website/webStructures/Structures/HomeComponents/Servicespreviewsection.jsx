import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
    LuUserRound, LuMessageCircleHeart, LuSprayCan, LuUtensils,
    LuPill, LuBrain, LuMoon, LuCar,
} from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const SERVICES = [
    { icon: LuUserRound,          label: "Personal Care Assistance" },
    { icon: LuMessageCircleHeart, label: "Companion Care" },
    { icon: LuSprayCan,           label: "Homemaking" },
    { icon: LuUtensils,           label: "Meal Preparation" },
    { icon: LuPill,               label: "Medication Reminders" },
    { icon: LuBrain,              label: "Alzheimer's & Dementia Care" },
    { icon: LuMoon,               label: "24-Hour & Live-In Care" },
    { icon: LuCar,                label: "Transportation & Errands" },
];

const ServicesPreviewSection = () => (
    <section className="py-10 bg-ivory">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-lg mb-10"
            >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-magenta/8 text-magenta border border-magenta/15 mb-5">
                    Our Services
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight">
                    Support for every<br />
                    <span className="text-navy">stage of care</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {SERVICES.map(({ icon: Icon, label }, i) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex flex-col items-start gap-3 p-4 rounded-sm border border-slate-100 bg-white hover:border-navy/20 hover:-translate-y-0.5 transition-all"
                    >
                        <div className="w-9 h-9 rounded-sm bg-navy/8 flex items-center justify-center">
                            <Icon size={16} className="text-navy" />
                        </div>
                        <p className="text-xs font-semibold text-slate-700 leading-snug">{label}</p>
                    </motion.div>
                ))}
            </div>

            <NavLink to="/services">
                <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-5 py-2.5 rounded-sm font-semibold text-sm text-navy border border-navy/30 bg-white hover:bg-navy/5 transition-all"
                >
                    Explore All Services
                </motion.button>
            </NavLink>
        </div>
    </section>
);

export default ServicesPreviewSection;