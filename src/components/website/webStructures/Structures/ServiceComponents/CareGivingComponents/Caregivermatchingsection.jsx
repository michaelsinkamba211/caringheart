import { motion } from "framer-motion";
import { LuHeart, LuBriefcase, LuLanguages, LuCalendarClock } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const FACTORS = [
    { icon: LuHeart,          label: "Personality & compatibility" },
    { icon: LuBriefcase,      label: "Relevant experience" },
    { icon: LuLanguages,      label: "Language preferences" },
    { icon: LuCalendarClock,  label: "Schedule compatibility" },
];

const CaregiverMatchingSection = () => (
    <section className="py-10 bg-ivory">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-sm bg-navy p-8 sm:p-10"
            >
                <div className="max-w-2xl mb-8">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-white/10 text-white/80 border border-white/15 mb-5">
                        Thoughtful Matching
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-white leading-tight mb-3">
                        We match the right caregiver<br />
                        <span className="text-magenta font-normal">to every client</span>
                    </h2>
                    <p className="text-sm text-white/60 leading-relaxed">
                        Every client has unique preferences, personalities, and care needs. Whenever
                        possible, we thoughtfully pair clients with caregivers based on:
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {FACTORS.map(({ icon: Icon, label }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="flex flex-col items-center text-center gap-3 p-4 rounded-sm bg-white/5 border border-white/10"
                        >
                            <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center">
                                <Icon size={17} className="text-magenta" />
                            </div>
                            <p className="text-xs font-semibold text-white/90 leading-snug">{label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default CaregiverMatchingSection;