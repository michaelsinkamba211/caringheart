import { motion } from "framer-motion";
import { LuCircleCheck } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const COMMITMENTS = [
    "Compassion first",
    "Personalized care plans",
    "Experienced caregivers",
    "Dependable scheduling",
    "Open family communication",
    "Respect for dignity and independence",
    "Continuous quality improvement",
    "Professional, ethical care",
];

const CommitmentListSection = () => (
    <section className="py-10 bg-ivory">
        <FontLoader />
        <div className="max-w-325 mx-auto px-4 sm:px-8">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto rounded-sm bg-white border border-slate-100 p-8 sm:p-10 text-center"
            >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-navy/8 text-navy border border-navy/15 mb-5">
                    We Are Committed To
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight mb-8">
                    Every care plan is built<br />
                    <span className="text-magenta">around the individual</span>
                </h2>

                <div className="grid sm:grid-cols-2 gap-3 text-left">
                    {COMMITMENTS.map((item, i) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-2.5 text-sm text-slate-600"
                        >
                            <LuCircleCheck size={16} className="text-navy shrink-0 mt-0.5" />
                            {item}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default CommitmentListSection;