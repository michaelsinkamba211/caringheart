import { motion } from "framer-motion";
import { LuHeart, LuGraduationCap, LuFileHeart, LuCalendarClock, LuUsers, LuSparkles } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const DIFFERENTIATORS = [
    {
        icon: LuHeart,
        title: "Compassionate Care",
        desc: "We treat every client with dignity, respect, and genuine kindness — never just as a task on a schedule.",
    },
    {
        icon: LuGraduationCap,
        title: "Experienced Caregivers",
        desc: "Our caregivers are carefully selected, trained, and committed to providing outstanding care.",
    },
    {
        icon: LuFileHeart,
        title: "Personalized Care Plans",
        desc: "Every care plan is tailored to meet each client's unique needs, preferences, and routines.",
    },
    {
        icon: LuCalendarClock,
        title: "Flexible Care Options",
        desc: "Hourly, overnight, live-in, and 24-hour care designed around your schedule, not the other way around.",
    },
    {
        icon: LuUsers,
        title: "Family-Centered Approach",
        desc: "We communicate openly with families and work together to ensure the highest quality of care.",
    },
    {
        icon: LuSparkles,
        title: "Commitment to Excellence",
        desc: "Reliable, professional service — every visit, every time, with continuous quality improvement.",
    },
];

const DifferentiatorsSection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-4 sm:px-8">

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-lg mb-10"
            >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-magenta/8 text-magenta border border-magenta/15 mb-5">
                    What Sets Us Apart
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight">
                    Care beyond<br />
                    <span className="text-navy">the rest</span>
                </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {DIFFERENTIATORS.map(({ icon: Icon, title, desc }, i) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="p-6 rounded-sm border border-slate-100 bg-ivory hover:border-navy/20 transition-all"
                    >
                        <div className="w-11 h-11 rounded-sm bg-navy/8 flex items-center justify-center mb-4">
                            <Icon size={19} className="text-navy" />
                        </div>
                        <h3 className="text-sm font-bold text-slate-800 mb-2">{title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default DifferentiatorsSection;