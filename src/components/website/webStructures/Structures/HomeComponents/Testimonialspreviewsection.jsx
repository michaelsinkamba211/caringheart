import { motion } from "framer-motion";
import { LuQuote, LuStar } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const TESTIMONIALS = [
    {
        quote: "The caregivers treated my mother with such kindness and respect. They truly became part of our family.",
        tag: "Example",
        delay: 0,
    },
    {
        quote: "Professional, dependable, and compassionate. We couldn't have asked for better care.",
        tag: "Example",
        delay: 0.15,
    },
];

const TestimonialsPreviewSection = () => (
    <section className="py-10 bg-ivory">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-lg mb-10"
            >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-navy/8 text-navy border border-navy/15 mb-5">
                    What Families Say
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight">
                    Trust is earned, one<br />
                    <span className="text-magenta">family at a time</span>
                </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
                {TESTIMONIALS.map(({ quote, tag, delay }) => (
                    <motion.div
                        key={quote}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay }}
                        className="relative p-6 rounded-sm border border-slate-100 bg-white"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <LuStar key={i} size={13} className="text-magenta fill-magenta" />
                                ))}
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-sm">
                                {tag}
                            </span>
                        </div>
                        <LuQuote size={18} className="text-navy/15 mb-2" />
                        <p className="text-sm text-slate-600 leading-relaxed italic">
                            &ldquo;{quote}&rdquo;
                        </p>
                    </motion.div>
                ))}
            </div>

            <p className="text-xs text-slate-400 mt-6">
                As we begin serving our community, real client stories will replace these examples.
            </p>
        </div>
    </section>
);

export default TestimonialsPreviewSection;