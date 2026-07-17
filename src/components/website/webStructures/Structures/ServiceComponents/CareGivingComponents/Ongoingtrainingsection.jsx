import { motion } from "framer-motion";
import {
    LuBrain, LuShield, LuHandHeart, LuMessageCircle,
    LuSiren, LuLock, LuScale, LuUserRound,
} from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const TOPICS = [
    { icon: LuBrain,          label: "Dementia & Alzheimer's Care" },
    { icon: LuShield,         label: "Infection Prevention" },
    { icon: LuHandHeart,      label: "Personal Care Techniques" },
    { icon: LuMessageCircle,  label: "Communication Skills" },
    { icon: LuSiren,          label: "Emergency Preparedness" },
    { icon: LuLock,           label: "Client Safety" },
    { icon: LuScale,          label: "Professional Ethics" },
    { icon: LuUserRound,      label: "Person-Centered Care" },
];

const OngoingTrainingSection = () => (
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
                    Ongoing Training
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight">
                    Exceptional caregivers<br />
                    <span className="text-navy">never stop learning</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {TOPICS.map(({ icon: Icon, label }, i) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex flex-col items-start gap-3 p-4 rounded-sm border border-slate-100 bg-ivory hover:border-navy/20 transition-all"
                    >
                        <div className="w-9 h-9 rounded-sm bg-navy/8 flex items-center justify-center">
                            <Icon size={16} className="text-navy" />
                        </div>
                        <p className="text-xs font-semibold text-slate-700 leading-snug">{label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default OngoingTrainingSection;