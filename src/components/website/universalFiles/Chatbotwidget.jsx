import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    LuMessageCircle, LuX, LuSend, LuPhone, LuMail, LuBot, LuUser,
} from "react-icons/lu";
import { FontLoader } from "../../ui/fonts";

/**
 * Knowledge base — every entry is matched against the user's message by
 * simple keyword scoring (see findAnswer below). Keep `keywords` lowercase
 * and specific; overly generic words (e.g. "care", "home") match everything
 * and drag unrelated entries into the results.
 */
const KNOWLEDGE_BASE = [
    // ── Greetings & pleasantries ──
    {
        keywords: ["hello", "hi there", "hey there", "good morning", "good afternoon", "good evening"],
        answer: "Hello! I'm happy to help with any questions about Caring Hearts Home Care Solutions — feel free to ask about our services, service areas, pricing, or anything else.",
    },
    {
        keywords: ["thank you", "thanks", "appreciate it"],
        answer: "You're very welcome! Is there anything else I can help you with?",
    },

    // ── Services overview ──
    {
        keywords: ["service", "services", "offer", "provide", "help with", "what do you do"],
        answer: "We provide personalized non-medical home care, including personal care assistance, companion care, homemaking, meal preparation, medication reminders, Alzheimer's & dementia care, live-in and 24-hour care, transportation, respite care, recreational & social engagement, and post-hospital recovery support.",
    },
    {
        keywords: ["personal care", "bathing", "dressing", "grooming", "hygiene", "toileting"],
        answer: "Our Personal Care Assistance helps clients safely manage daily personal care — bathing, dressing, grooming, mobility, and toileting — while maintaining dignity and independence.",
    },
    {
        keywords: ["companion", "companionship", "lonely", "loneliness", "company", "socialize"],
        answer: "Companion Care provides meaningful companionship, conversation, and emotional support to reduce loneliness, plus accompaniment to appointments and favorite activities.",
    },
    {
        keywords: ["homemaking", "housekeeping", "laundry", "cleaning", "grocery shopping", "tidying"],
        answer: "Our Homemaking service covers light housekeeping, laundry, organizing, and grocery shopping — keeping the home safe and comfortable.",
    },
    {
        keywords: ["meal", "meals", "cooking", "nutrition", "diet", "food prep"],
        answer: "We offer Meal Preparation — nutritious meal planning and cooking tailored to each client's dietary needs and personal preferences.",
    },
    {
        keywords: ["recreational", "social engagement", "activities", "hobbies", "outings"],
        answer: "We support Recreational & Social Engagement — helping clients stay active and connected through hobbies, activities, and outings they enjoy.",
    },

    // ── Service areas ──
    {
        keywords: ["area", "areas", "waltham", "location", "serve my", "zip code", "town", "city", "region", "boston"],
        answer: "We're based in Waltham, MA and also serve Watertown, Belmont, Newton, Weston, Lexington, Lincoln, Arlington, Cambridge, Brighton, Allston, Brookline, Needham, Wellesley, Burlington, Somerville, Medford, Winchester, and select Boston neighborhoods. Don't see your town? Contact us — we may still be able to help.",
    },

    // ── Getting started / process ──
    {
        keywords: ["start", "started", "begin", "how do i", "get going", "first step"],
        answer: "Getting started is easy — just contact us to schedule a free, no-obligation care consultation. We'll discuss your needs and build a personalized care plan from there.",
    },
    {
        keywords: ["how soon", "how quickly", "how fast", "when can", "timeline"],
        answer: "In many cases we can begin care within a few days of your consultation, depending on caregiver availability and the complexity of the care plan.",
    },
    {
        keywords: ["consultation", "what happens", "assessment", "in-home visit"],
        answer: "Your free in-home consultation covers health and daily living needs, personal preferences and routines, home safety, family expectations, and the schedule/level of support needed — then we build your care plan from that conversation.",
    },
    {
        keywords: ["care process", "steps", "how does it work", "process"],
        answer: "Our process has 6 steps: 1) Contact our team, 2) Free in-home consultation, 3) Personalized care plan, 4) Caregiver matching, 5) Care begins, 6) Ongoing care management with regular check-ins and adjustments.",
    },

    // ── Care types ──
    {
        keywords: ["24 hour", "24-hour", "overnight", "live-in", "live in", "night", "around the clock", "round the clock"],
        answer: "Yes — we offer both 24-hour and live-in care, with rotating caregiver shifts to ensure continuous, attentive support day and night.",
    },
    {
        keywords: ["respite", "break", "time off", "relief for family caregiver"],
        answer: "Our respite care gives family caregivers time to rest while ensuring their loved one continues receiving quality care — available short-term or on a flexible schedule.",
    },
    {
        keywords: ["hospital", "discharge", "recovery", "post-hospital", "after surgery"],
        answer: "We offer post-hospital recovery support to help with the transition from hospital to home — including mobility assistance, medication reminders, and follow-up appointment coordination.",
    },
    {
        keywords: ["dementia", "alzheimer", "memory care", "memory loss"],
        answer: "Yes — we provide specialized Alzheimer's & Dementia Care, with caregivers trained in structured routines, home safety monitoring, and calming, patient communication.",
    },
    {
        keywords: ["transportation", "errands", "rides", "driving", "appointments"],
        answer: "Yes — we provide safe transportation to medical appointments, grocery shopping, errands, and social outings.",
    },
    {
        keywords: ["medication", "pills", "prescription", "meds"],
        answer: "We offer medication reminders to help clients stay on schedule with prescribed medications — this is non-medical reminder support, not medication administration.",
    },

    // ── Caregivers ──
    {
        keywords: ["background", "screened", "insured", "registered", "bonded", "trust", "vetted", "safe"],
        answer: "Every caregiver undergoes background checks, interviews, and reference verification before joining our team, and Caring Hearts is registered, bonded, and insured as an agency.",
    },
    {
        keywords: ["how are caregivers selected", "hiring process", "who are your caregivers", "caregiver qualifications"],
        answer: "Each caregiver goes through a comprehensive hiring process — interviews, reference checks, background screening, and qualification verification. Beyond skills, we look for genuine compassion, patience, and integrity.",
    },
    {
        keywords: ["caregiver training", "ongoing education", "how are caregivers trained"],
        answer: "Caregivers receive ongoing training in dementia & Alzheimer's care, infection prevention, personal care techniques, communication, emergency preparedness, client safety, and professional ethics.",
    },
    {
        keywords: ["matched", "matching", "choose my caregiver", "pick a caregiver", "who will be my caregiver"],
        answer: "We thoughtfully match clients with caregivers based on compatibility, experience, language preferences, and schedule — building a relationship, not just filling a shift.",
    },
    {
        keywords: ["change caregiver", "different caregiver", "not a good fit", "switch caregiver"],
        answer: "Absolutely. We want every match to feel right for both the client and caregiver — if it's not working, let us know and we'll work to find a better fit.",
    },

    // ── Care plans ──
    {
        keywords: ["care plan change", "adjust", "update plan", "more hours", "less hours"],
        answer: "Yes — we regularly review care plans and adjust services as needs change, whether that means more hours, additional services, or a different level of care.",
    },

    // ── About / values ──
    {
        keywords: ["mission", "what is your mission"],
        answer: "Our mission is to enrich lives through compassionate, personalized home care that promotes dignity, independence, comfort, and peace of mind.",
    },
    {
        keywords: ["vision", "what is your vision"],
        answer: "Our vision is to become one of Massachusetts' most trusted providers of non-medical home care, recognized for excellence, compassion, and outstanding service.",
    },
    {
        keywords: ["values", "core values", "what do you stand for", "believe in"],
        answer: "Our core values are Compassion, Integrity, Respect, Excellence, Dignity, and Family Partnership — they shape every care plan we build.",
    },
    {
        keywords: ["who are you", "about your company", "about caring hearts", "company history"],
        answer: "Caring Hearts Home Care Solutions provides compassionate, personalized non-medical home care throughout Massachusetts, helping seniors and adults maintain independence, dignity, and quality of life at home.",
    },

    // ── Pricing / payment ──
    {
        keywords: ["cost", "price", "pricing", "how much", "afford", "expensive", "rate", "fees"],
        answer: "Costs vary based on the level and hours of care you choose, so there's no one-size-fits-all number. During your free consultation, we'll provide a personalized, transparent estimate with no hidden fees.",
    },
    {
        keywords: ["pay", "payment", "insurance", "long-term care insurance", "veteran", "va benefits", "medicaid", "medicare"],
        answer: "We accept private pay, long-term care insurance (subject to policy eligibility), veterans' benefits for qualifying individuals, and select employer or community assistance programs.",
    },

    // ── Careers ──
    {
        keywords: ["job", "career", "hire", "hiring", "apply", "position", "employment", "work for"],
        answer: "We're always looking for compassionate caregivers! We hire Home Health Aides, CNAs, Personal Care Assistants, Homemakers, Companion Caregivers, and Live-In Caregivers. Visit our Careers page to apply.",
    },
    {
        keywords: ["why work here", "benefits of working", "employee benefits"],
        answer: "We offer competitive pay, flexible scheduling, ongoing training, supportive leadership, career growth opportunities, and genuinely meaningful work — caregiving is more than a job here.",
    },

    // ── Partnerships / referrals ──
    {
        keywords: ["referral", "refer a patient", "doctor", "social worker", "case manager", "partner with you"],
        answer: "We welcome partnerships with hospitals, physicians, case managers, and other healthcare and community organizations. You can submit a secure referral on our Community Partnerships page.",
    },

    // ── Resources / blog ──
    {
        keywords: ["blog", "articles", "resources", "read about", "learn more about", "guides"],
        answer: "Our Resources section covers topics like signs a loved one may need home care, understanding dementia care, fall prevention, healthy aging, and choosing the right home care agency.",
    },

    // ── Testimonials ──
    {
        keywords: ["reviews", "testimonials", "other clients", "feedback", "ratings"],
        answer: "We're a growing agency and are committed to earning every family's trust — as clients share their experiences, we'll proudly feature real reviews on our Testimonials page.",
    },

    // ── Contact ──
    {
        keywords: ["hours", "open", "office hours", "business hours", "when are you open"],
        answer: "Our office is open Monday–Friday, 8:00 AM – 5:00 PM, and Sartuday - Sunday 9:00AM - 5:00PM with 24/7 emergency support available outside regular business hours.",
    },
    {
        keywords: ["phone", "call", "number", "contact number"],
        answer: "You can call us at (857) 277-9073 — we're happy to answer any questions.",
    },
    {
        keywords: ["email", "e-mail", "email address"],
        answer: "You can reach us by email at info@caringheartssolutions.com.",
    },
    {
        keywords: ["address", "office", "where are you located", "where is your office"],
        answer: "Our office is at 303 Wyman Street, Suite 300 PMB 17296683, Waltham, MA 02451.",
    },
];

const SUGGESTED_QUESTIONS = [
    "What services do you offer?",
    "Do you serve my area?",
    "How do I get started?",
    "How much does it cost?",
    "Are caregivers background checked?",
    "What are your core values?",
];

const PHONE_TEL = "+18572779073";
const PHONE_DISPLAY = "(857) 277-9073";
const EMAIL = "info@caringheartssolutions.com";

const WELCOME_MESSAGE = {
    role: "bot",
    text: "Hi! I'm here to help answer questions about Caring Hearts Home Care Solutions. What would you like to know?",
};

const FALLBACK_MESSAGE = {
    role: "bot",
    text: "I'm not sure about that one — but our care team can help directly.",
    fallback: true,
};

// Simple keyword-overlap scorer — not a real language model, just counts
// how many known keyword phrases appear in the user's message.
const findAnswer = (query) => {
    const q = query.toLowerCase();
    let best = null;
    let bestScore = 0;

    KNOWLEDGE_BASE.forEach((entry) => {
        const score = entry.keywords.reduce((acc, k) => (q.includes(k) ? acc + 1 : acc), 0);
        if (score > bestScore) {
            bestScore = score;
            best = entry;
        }
    });

    return bestScore > 0 ? best.answer : null;
};

const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([WELCOME_MESSAGE]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [messages, isTyping]);

    const sendMessage = (text) => {
        const trimmed = text.trim();
        if (!trimmed) return;

        setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
        setInput("");
        setIsTyping(true);

        // small delay so the reply doesn't feel like an instant lookup —
        // purely cosmetic, no actual processing happening here
        setTimeout(() => {
            const answer = findAnswer(trimmed);
            setMessages((prev) => [
                ...prev,
                answer ? { role: "bot", text: answer } : FALLBACK_MESSAGE,
            ]);
            setIsTyping(false);
        }, 500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(input);
    };

    return (
        <>
            <FontLoader />

            {/* ── Floating launcher button ── */}
            <motion.button
                onClick={() => setIsOpen((v) => !v)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-14 h-14 rounded-full bg-magenta text-white shadow-lg flex items-center justify-center"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                        <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                            <LuX size={22} />
                        </motion.span>
                    ) : (
                        <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                            <LuMessageCircle size={22} />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* ── Chat panel ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-22 right-5 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-2.5rem)] max-w-sm h-[70vh] max-h-[560px] rounded-sm bg-white border border-slate-200 shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* header */}
                        <div className="bg-navy px-5 py-4 flex items-center gap-3 shrink-0">
                            <div className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center shrink-0">
                                <LuBot size={18} className="text-magenta" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-bold text-white truncate">Caring Hearts Assistant</p>
                                <p className="text-[11px] text-white/50">Answers based on our services & policies</p>
                            </div>
                        </div>

                        {/* messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-ivory">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                    {m.role === "bot" && (
                                        <div className="w-7 h-7 rounded-sm bg-navy flex items-center justify-center shrink-0 mt-0.5">
                                            <LuBot size={13} className="text-magenta" />
                                        </div>
                                    )}
                                    <div className={`max-w-[80%] rounded-sm px-3.5 py-2.5 text-sm leading-relaxed ${
                                        m.role === "user"
                                            ? "bg-magenta text-white"
                                            : "bg-white border border-slate-100 text-slate-700"
                                    }`}>
                                        {m.text}
                                        {m.fallback && (
                                            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-slate-100">
                                                <a
                                                    href={`tel:${PHONE_TEL}`}
                                                    className="flex items-center gap-2 text-xs font-semibold text-navy hover:text-magenta transition-colors"
                                                >
                                                    <LuPhone size={13} /> Call {PHONE_DISPLAY}
                                                </a>
                                                <a
                                                    href={`mailto:${EMAIL}`}
                                                    className="flex items-center gap-2 text-xs font-semibold text-navy hover:text-magenta transition-colors"
                                                >
                                                    <LuMail size={13} /> Email {EMAIL}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                    {m.role === "user" && (
                                        <div className="w-7 h-7 rounded-sm bg-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                                            <LuUser size={13} className="text-slate-500" />
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex gap-2 justify-start">
                                    <div className="w-7 h-7 rounded-sm bg-navy flex items-center justify-center shrink-0">
                                        <LuBot size={13} className="text-magenta" />
                                    </div>
                                    <div className="bg-white border border-slate-100 rounded-sm px-4 py-3 flex gap-1 items-center">
                                        {[0, 1, 2].map((d) => (
                                            <motion.span
                                                key={d}
                                                animate={{ opacity: [0.3, 1, 0.3] }}
                                                transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }}
                                                className="w-1.5 h-1.5 rounded-full bg-slate-400"
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* suggested questions — shown until the person sends their first message */}
                            {messages.length === 1 && !isTyping && (
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {SUGGESTED_QUESTIONS.map((q) => (
                                        <button
                                            key={q}
                                            onClick={() => sendMessage(q)}
                                            className="px-3 py-1.5 rounded-sm text-xs font-medium text-navy bg-navy/8 border border-navy/15 hover:bg-navy/15 transition-colors cursor-pointer"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* input */}
                        <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-slate-100 bg-white shrink-0">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask a question…"
                                className="flex-1 px-3.5 py-2.5 bg-ivory border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800 placeholder-slate-400"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="w-10 h-10 rounded-sm bg-magenta text-white flex items-center justify-center shrink-0 disabled:opacity-40 hover:bg-magenta/90 transition-colors cursor-pointer"
                                aria-label="Send"
                            >
                                <LuSend size={15} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatbotWidget;