import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronDown } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const FAQS = [
    {
        q: "What is home care?",
        a: "Home care is non-medical support delivered in a client's own home — things like personal care, companionship, homemaking, meal preparation, and transportation — that helps someone remain safe and independent without moving to a facility.",
    },
    {
        q: "What services do you provide?",
        a: "We provide personalized non-medical home care, including personal care, companionship, homemaking, respite care, dementia care, meal preparation, transportation, and live-in care.",
    },
    {
        q: "How do I get started?",
        a: "Simply contact us to schedule a complimentary, no-obligation care consultation. We'll discuss your needs and build a personalized care plan from there.",
    },
    {
        q: "How quickly can services begin?",
        a: "In many cases we can begin care within a few days of your consultation, depending on caregiver availability and the complexity of the care plan. Ask us about your specific timeline during your consultation.",
    },
    {
        q: "Do you provide 24-hour or overnight care?",
        a: "Yes. We offer both 24-hour and live-in care depending on your needs, with rotating caregiver shifts to ensure continuous, attentive support.",
    },
    {
        q: "Are your caregivers screened and insured?",
        a: "Yes. Every caregiver undergoes background checks, interviews, and reference verification before joining our team, and we are licensed, bonded, and insured as an agency.",
    },
    {
        q: "Can I change my caregiver if it's not the right fit?",
        a: "Absolutely. We want every match to feel right for both the client and caregiver — if it's not working, let us know and we'll work to find a better fit.",
    },
    {
        q: "Can care plans change over time?",
        a: "Yes. We regularly review care plans and adjust services as needs change, whether that means more hours, additional services, or a different level of care.",
    },
    {
        q: "How do I pay for services?",
        a: "We accept private pay, long-term care insurance (subject to policy eligibility), veterans' benefits for qualifying individuals, and select employer or community assistance programs. We'll walk through your options during your consultation.",
    },
    {
        q: "What are your office hours?",
        a: "Our office is open Monday–Friday, 8:00 AM – 5:00 PM, with 24/7 emergency support available outside regular business hours.",
    },
];

const FAQItem = ({ item, isOpen, onToggle }) => (
    <div className="border border-slate-100 rounded-sm bg-white overflow-hidden">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
        >
            <span className="text-sm font-semibold text-slate-800">{item.q}</span>
            <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
            >
                <LuChevronDown size={16} className="text-navy" />
            </motion.span>
        </button>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                >
                    <p className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">
                        {item.a}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const FAQAccordionSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-10 bg-ivory">
            <FontLoader />
            <div className="max-w-325 mx-auto px-2">
                <div className="max-w-2xl mx-auto space-y-3">
                    {FAQS.map((item, i) => (
                        <FAQItem
                            key={item.q}
                            item={item}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordionSection;