import { motion } from "framer-motion";
import {
    LuUserRound, LuMessageCircleHeart, LuSprayCan, LuUtensils, LuPill,
    LuBrain, LuMoon, LuSun, LuCar, LuHeartHandshake, LuActivity,
} from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const SERVICES = [
    { icon: LuUserRound,          label: "Personal Care Assistance",     sectionId: "personal-care" },
    { icon: LuMessageCircleHeart, label: "Companion Care",               sectionId: "companion-care" },
    { icon: LuSprayCan,           label: "Homemaking",                   sectionId: "homemaking" },
    { icon: LuUtensils,           label: "Meal Preparation",             sectionId: "meal-preparation" },
    { icon: LuPill,                label: "Medication Reminders",        sectionId: "medication-reminders" },
    { icon: LuBrain,               label: "Alzheimer's & Dementia Care", sectionId: "dementia-care" },
    { icon: LuMoon,                label: "Live-In Care",                sectionId: "live-in-care" },
    { icon: LuSun,                 label: "24-Hour Care",                sectionId: "24-hour-care" },
    { icon: LuCar,                 label: "Transportation & Errands",    sectionId: "transportation" },
    { icon: LuHeartHandshake,      label: "Respite Care",                sectionId: "respite-care" },
    { icon: LuActivity,            label: "Post-Hospital Recovery",      sectionId: "post-hospital-recovery" },
];

const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
    });
};

const ServicesGridSection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {SERVICES.map(({ icon: Icon, label, sectionId }, i) => (
                    <motion.button
                        key={sectionId}
                        onClick={() => scrollToSection(sectionId)}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        whileHover={{ y: -2 }}
                        className="flex flex-col items-start gap-3 p-4 rounded-sm border border-slate-100 bg-ivory hover:border-navy/20 transition-all text-left cursor-pointer"
                    >
                        <div className="w-9 h-9 rounded-sm bg-navy/8 flex items-center justify-center">
                            <Icon size={16} className="text-navy" />
                        </div>
                        <p className="text-xs font-semibold text-slate-700 leading-snug">{label}</p>
                    </motion.button>
                ))}
            </div>
        </div>
    </section>
);

export default ServicesGridSection;