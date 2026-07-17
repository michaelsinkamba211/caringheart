import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { LuCalculator, LuCircleCheck, LuArrowRight } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const POINTS = [
    "A customized care plan built around your specific needs",
    "A clear, itemized explanation of costs before care begins",
    "No hidden fees — transparent, personalized pricing",
];

const CostEstimateSection = () => (
    <section className="py-10 bg-ivory">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto rounded-sm bg-navy p-8 sm:p-10 text-center"
            >
                <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center mx-auto mb-6">
                    <LuCalculator size={22} className="text-magenta" />
                </div>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-white/10 text-white/80 border border-white/15 mb-5">
                    Personalized Cost Estimates
                </span>

                <h2 className="text-2xl sm:text-3xl font-light text-white leading-tight mb-4">
                    Every care plan is priced<br />
                    <span className="text-magenta font-normal">around your needs</span>
                </h2>

                <p className="text-sm text-white/60 leading-relaxed max-w-xl mx-auto mb-8">
                    Care costs vary based on the level and hours of support you choose — there's
                    no one-size-fits-all number. During your complimentary consultation, we'll
                    discuss your needs and provide:
                </p>

                <div className="grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-9">
                    {POINTS.map((point) => (
                        <div key={point} className="flex items-start gap-2 p-4 rounded-sm bg-white/5 border border-white/10 text-left">
                            <LuCircleCheck size={16} className="text-magenta shrink-0 mt-0.5" />
                            <p className="text-xs text-white/80 leading-relaxed">{point}</p>
                        </div>
                    ))}
                </div>

                <NavLink to="/consultation">
                    <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-sm font-semibold text-sm text-white bg-magenta hover:bg-magenta/90 transition-all"
                    >
                        Get Your Personalized Estimate
                        <LuArrowRight size={15} />
                    </motion.button>
                </NavLink>
            </motion.div>
        </div>
    </section>
);

export default CostEstimateSection;