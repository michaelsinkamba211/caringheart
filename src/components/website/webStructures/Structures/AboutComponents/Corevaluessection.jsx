import { motion } from "framer-motion";
import { LuHeart, LuShieldCheck, LuHandHeart, LuSparkles, LuUserCheck, LuUsers } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const VALUES = [
    { icon: LuHeart,       label: "Compassion" },
    { icon: LuShieldCheck, label: "Integrity" },
    { icon: LuHandHeart,   label: "Respect" },
    { icon: LuSparkles,    label: "Excellence" },
    { icon: LuUserCheck,   label: "Dignity" },
    { icon: LuUsers,       label: "Family Partnership" },
];

const CoreValuesSection = () => (
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
                    Core Values
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight">
                    What guides us,<br />
                    <span className="text-navy">every visit</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {VALUES.map(({ icon: Icon, label }, i) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="flex flex-col items-center text-center gap-3 p-6 rounded-sm border border-slate-100 bg-ivory hover:border-navy/20 transition-all"
                    >
                        <div className="w-11 h-11 rounded-sm bg-white border border-slate-100 flex items-center justify-center">
                            <Icon size={19} className="text-navy" />
                        </div>
                        <p className="text-sm font-bold text-slate-700">{label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default CoreValuesSection;