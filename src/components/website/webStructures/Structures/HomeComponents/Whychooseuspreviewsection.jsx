import { motion } from "framer-motion";
import { LuCircleCheck } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const REASONS = [
    "Personalized care plans built around each client",
    "Compassionate, background-checked caregivers",
    "Flexible scheduling — hourly to 24-hour care",
    "Dependable, professional service every visit",
    "Family-centered communication throughout",
    "Locally owned & community focused",
];

const WhyChooseUsPreviewSection = () => (
    <section className="py-10 bg-navy">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 max-w-sm"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-white/10 text-white/80 border border-white/15 mb-5">
                        Why Choose Us
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-white leading-tight mb-4">
                        Care beyond<br />
                        <span className="text-magenta font-normal">the rest</span>
                    </h2>
                    <p className="text-sm text-white/60 leading-relaxed">
                        Families trust Caring Hearts because we focus on the whole person —
                        not just the care they need today.
                    </p>
                </motion.div>

                <div className="flex-1 grid sm:grid-cols-2 gap-3 w-full">
                    {REASONS.map((reason, i) => (
                        <motion.div
                            key={reason}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                            className="flex items-start gap-2.5 p-3.5 rounded-sm bg-white/5 border border-white/10"
                        >
                            <LuCircleCheck size={16} className="text-magenta shrink-0 mt-0.5" />
                            <p className="text-xs text-white/80 leading-relaxed">{reason}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default WhyChooseUsPreviewSection;