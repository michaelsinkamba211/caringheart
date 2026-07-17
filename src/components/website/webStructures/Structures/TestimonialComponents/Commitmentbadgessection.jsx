import { motion } from "framer-motion";
import { LuHeart, LuShieldCheck, LuHandHeart, LuBriefcase, LuUserRound, LuSmile } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const BADGES = [
    { icon: LuHeart,        label: "Compassion" },
    { icon: LuShieldCheck,  label: "Reliability" },
    { icon: LuHandHeart,    label: "Respect" },
    { icon: LuBriefcase,    label: "Professionalism" },
    { icon: LuUserRound,    label: "Personalized Care" },
    { icon: LuSmile,        label: "Peace of Mind" },
];

const CommitmentBadgesSection = () => (
    <section className="py-10 bg-ivory">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-lg mx-auto mb-10"
            >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-navy/8 text-navy border border-navy/15 mb-5">
                    Our Commitment
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight">
                    Your family&apos;s trust is<br />
                    <span className="text-magenta">the greatest compliment</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {BADGES.map(({ icon: Icon, label }, i) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="flex flex-col items-center text-center gap-3 p-5 rounded-sm bg-white border border-slate-100"
                    >
                        <div className="w-10 h-10 rounded-sm bg-magenta/8 flex items-center justify-center">
                            <Icon size={17} className="text-magenta" />
                        </div>
                        <p className="text-xs font-bold text-slate-700">{label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default CommitmentBadgesSection;