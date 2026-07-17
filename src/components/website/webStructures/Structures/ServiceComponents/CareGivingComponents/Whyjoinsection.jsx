import { motion } from "framer-motion";
import {
    LuWallet, LuCalendarClock, LuGraduationCap, LuUsers,
    LuTrendingUp, LuHandHeart, LuSparkles,
} from "react-icons/lu";
import { FontLoader } from "../../../../../ui/fonts";

const BENEFITS = [
    { icon: LuWallet,        label: "Competitive Compensation" },
    { icon: LuCalendarClock, label: "Flexible Scheduling" },
    { icon: LuGraduationCap, label: "Ongoing Training" },
    { icon: LuUsers,         label: "Supportive Leadership" },
    { icon: LuTrendingUp,    label: "Career Growth Opportunities" },
    { icon: LuHandHeart,     label: "Respectful Work Environment" },
    { icon: LuSparkles,      label: "Meaningful, Life-Changing Work" },
];

const WhyJoinSection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-lg mb-10"
            >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-magenta/8 text-magenta border border-magenta/15 mb-5">
                    Why Join Us
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight">
                    A career that gives<br />
                    <span className="text-navy">as much as it takes</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {BENEFITS.map(({ icon: Icon, label }, i) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex flex-col items-start gap-3 p-4 rounded-sm border border-slate-100 bg-ivory hover:border-magenta/20 transition-all"
                    >
                        <div className="w-9 h-9 rounded-sm bg-magenta/8 flex items-center justify-center">
                            <Icon size={16} className="text-magenta" />
                        </div>
                        <p className="text-xs font-semibold text-slate-700 leading-snug">{label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default WhyJoinSection;