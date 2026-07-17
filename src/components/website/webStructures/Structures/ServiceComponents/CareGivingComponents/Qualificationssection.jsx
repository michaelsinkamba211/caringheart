import { motion } from "framer-motion";
import { LuCircleCheck } from "react-icons/lu";
import { FontLoader } from "../../../../../ui/fonts";
const QUALIFICATIONS = [
    "Compassionate attitude",
    "Dependability",
    "Strong communication skills",
    "Ability to work independently",
    "Reliable transportation (when required)",
    "Successful background screening",
    "Authorization to work in the United States",
];

const QualificationsSection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto rounded-sm bg-ivory border border-slate-100 p-8 sm:p-10"
            >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-magenta/8 text-magenta border border-magenta/15 mb-5">
                    Minimum Qualifications
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight mb-6">
                    What we look<br />
                    <span className="text-navy">for in every hire</span>
                </h2>

                <div className="grid sm:grid-cols-2 gap-3">
                    {QUALIFICATIONS.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                            <LuCircleCheck size={16} className="text-navy shrink-0 mt-0.5" />
                            {item}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default QualificationsSection;