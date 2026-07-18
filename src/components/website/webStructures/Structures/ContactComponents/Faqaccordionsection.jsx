import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuChevronDown, LuPhone } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";
import faqImage from "/src/assets/servicesimages/faqs.jpg";


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
            <div className="max-w-325 mx-auto px-4 sm:px-8">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">

                    {/* ── Left: image, vertically centered and sticky-centered on desktop ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-2/5 lg:sticky lg:top-1/2 lg:-translate-y-1/2"
                    >
                        <div className="relative rounded-sm overflow-hidden">
                            <img
                                src={faqImage}
                                alt="A caregiver answering a question with a warm smile"
                                className="w-full h-72 lg:h-[420px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

                            {/* still-have-questions callout, overlaid bottom-left */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                                <p className="text-white text-sm font-semibold mb-2">
                                    Still have questions?
                                </p>
                                <a
                                    href="tel:+18572779073"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-semibold text-navy bg-white hover:bg-white/90 transition-all"
                                >
                                    <LuPhone size={13} />
                                    Call (857) 277-9073
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right: accordion ── */}
                    <div className="w-full lg:w-3/5 space-y-3">
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
            </div>
        </section>
    );
};

export default FAQAccordionSection;