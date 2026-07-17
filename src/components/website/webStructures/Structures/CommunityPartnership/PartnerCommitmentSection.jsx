import { motion } from "framer-motion";
import { LuCircleCheck } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const COMMITMENTS = [
    "Prompt and professional communication",
    "Personalized care planning",
    "Reliable, compassionate caregivers",
    "Respect for client preferences and dignity",
    "Collaborative coordination with healthcare professionals",
    "A shared commitment to improving quality of life",
];

const PartnerCommitmentSection = () => (
    <section className="py-10 bg-ivory">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto rounded-sm bg-white border border-slate-100 p-8 sm:p-10"
            >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-navy/8 text-navy border border-navy/15 mb-5">
                    Our Commitment to Our Partners
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight mb-6">
                    What you can<br />
                    <span className="text-magenta">expect from us</span>
                </h2>

                <div className="grid sm:grid-cols-2 gap-3">
                    {COMMITMENTS.map((item) => (
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

export default PartnerCommitmentSection;
