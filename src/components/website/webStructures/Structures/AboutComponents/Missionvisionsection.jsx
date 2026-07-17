import { motion } from "framer-motion";
import { LuTarget, LuEye } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const CARDS = [
    {
        icon: LuTarget,
        label: "Our Mission",
        text: "To enrich lives through compassionate, personalized home care that promotes dignity, independence, comfort, and peace of mind.",
        accent: "navy",
    },
    {
        icon: LuEye,
        label: "Our Vision",
        text: "To become one of Massachusetts' most trusted providers of non-medical home care, recognized for excellence, compassion, and outstanding service.",
        accent: "magenta",
    },
];

const MissionVisionSection = () => (
    <section className="py-10 bg-ivory">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <div className="grid sm:grid-cols-2 gap-5">
                {CARDS.map(({ icon: Icon, label, text, accent }, i) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white border border-slate-100 rounded-sm p-7"
                    >
                        <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-5 ${
                            accent === "navy" ? "bg-navy/8" : "bg-magenta/8"
                        }`}>
                            <Icon size={22} className={accent === "navy" ? "text-navy" : "text-magenta"} />
                        </div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">
                            {label}
                        </h3>
                        <p className="text-base text-slate-700 leading-relaxed font-light">
                            {text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default MissionVisionSection;