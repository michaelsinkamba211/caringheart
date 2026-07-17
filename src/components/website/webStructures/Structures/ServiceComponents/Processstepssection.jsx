import { motion } from "framer-motion";
import {
    LuPhone, LuClipboardCheck, LuFileHeart, LuUsers, LuHeartHandshake, LuRefreshCw,
} from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const STEPS = [
    {
        icon: LuPhone,
        title: "Contact Our Team",
        desc: "Your journey begins with a phone call, email, or online inquiry. Our friendly care team will answer your questions and learn more about your loved one's needs.",
    },
    {
        icon: LuClipboardCheck,
        title: "Complimentary In-Home Consultation",
        desc: "We schedule a free, no-obligation consultation to discuss health needs, personal preferences, home safety, and family expectations.",
    },
    {
        icon: LuFileHeart,
        title: "Personalized Care Plan",
        desc: "Based on the assessment, we develop an individualized care plan built around the client's unique needs and wishes.",
    },
    {
        icon: LuUsers,
        title: "Caregiver Matching",
        desc: "We carefully match each client with a caregiver based on care needs, personality, experience, and schedule compatibility.",
    },
    {
        icon: LuHeartHandshake,
        title: "Care Begins",
        desc: "Your caregiver begins providing compassionate, reliable care according to the agreed-upon schedule.",
    },
    {
        icon: LuRefreshCw,
        title: "Ongoing Care Management",
        desc: "Our work doesn't stop once care begins — we regularly monitor care, communicate with families, and adjust plans as needs change.",
    },
];

const ProcessStepsSection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <div className="max-w-2xl mx-auto">
                {STEPS.map(({ icon: Icon, title, desc }, i) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="relative flex gap-5 pb-10 last:pb-0"
                    >
                        {/* connecting line */}
                        {i !== STEPS.length - 1 && (
                            <span className="absolute left-[21px] top-11 bottom-0 w-px bg-slate-200" />
                        )}

                        {/* step marker */}
                        <div className="relative shrink-0 w-11 h-11 rounded-sm bg-navy flex items-center justify-center">
                            <Icon size={18} className="text-white" />
                            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-magenta text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                                {i + 1}
                            </span>
                        </div>

                        <div className="pt-1.5">
                            <h3 className="text-base font-bold text-slate-800 mb-1.5">{title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default ProcessStepsSection;