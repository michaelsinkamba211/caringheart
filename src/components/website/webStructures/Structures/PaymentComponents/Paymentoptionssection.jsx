import { motion } from "framer-motion";
import { LuWallet, LuFileCheck, LuMedal, LuBuilding2 } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const OPTIONS = [
    {
        icon: LuWallet,
        title: "Private Pay",
        desc: "Pay directly for services with full flexibility over your care plan and schedule.",
    },
    {
        icon: LuFileCheck,
        title: "Long-Term Care Insurance",
        desc: "We work with clients to coordinate billing, subject to your policy's eligibility and coverage.",
    },
    {
        icon: LuMedal,
        title: "Veterans' Benefits",
        desc: "Available for qualifying individuals — ask us about eligibility and how to get started.",
    },
    {
        icon: LuBuilding2,
        title: "Employer / Community Assistance",
        desc: "Some employer or community assistance programs may help offset the cost of care, where available.",
    },
];

const PaymentOptionsSection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-lg mb-10"
            >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-navy/8 text-navy border border-navy/15 mb-5">
                    Payment Options
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight">
                    We currently<br />
                    <span className="text-magenta">accept</span>
                </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
                {OPTIONS.map(({ icon: Icon, title, desc }, i) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex gap-4 p-6 rounded-sm border border-slate-100 bg-ivory"
                    >
                        <div className="w-11 h-11 rounded-sm bg-white border border-slate-100 flex items-center justify-center shrink-0">
                            <Icon size={19} className="text-navy" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-800 mb-1.5">{title}</p>
                            <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default PaymentOptionsSection;