import { motion } from "framer-motion";
import {
    LuStethoscope, LuClipboardPlus, LuUserRound, LuSprayCan, LuMessageCircleHeart, LuMoon,
} from "react-icons/lu";
import { FontLoader } from "../../../../../ui/fonts";
const POSITIONS = [
    { icon: LuStethoscope,       title: "Home Health Aide (HHA)" },
    { icon: LuClipboardPlus,     title: "Certified Nursing Assistant (CNA)" },
    { icon: LuUserRound,         title: "Personal Care Assistant (PCA)" },
    { icon: LuSprayCan,          title: "Homemaker" },
    { icon: LuMessageCircleHeart, title: "Companion Caregiver" },
    { icon: LuMoon,              title: "Live-In Caregiver" },
];

const PositionsSection = () => (
    <section className="py-10 bg-ivory">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-lg mb-10"
            >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-navy/8 text-navy border border-navy/15 mb-5">
                    Positions We Hire
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight">
                    Find your role<br />
                    <span className="text-magenta">on our team</span>
                </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {POSITIONS.map(({ icon: Icon, title }, i) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-center gap-4 p-5 rounded-sm bg-white border border-slate-100 hover:border-navy/20 transition-all"
                    >
                        <div className="w-11 h-11 rounded-sm bg-navy/8 flex items-center justify-center shrink-0">
                            <Icon size={19} className="text-navy" />
                        </div>
                        <p className="text-sm font-bold text-slate-800">{title}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default PositionsSection;