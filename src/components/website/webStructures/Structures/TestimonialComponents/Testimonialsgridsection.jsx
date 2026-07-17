import { motion } from "framer-motion";
import { LuQuote, LuStar } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const EXAMPLE_TESTIMONIALS = [
    {
        quote: "The caregivers treated my mother with such kindness and respect. They truly became part of our family.",
    },
    {
        quote: "Professional, dependable, and compassionate. We couldn't have asked for better care.",
    },
];

const PLACEHOLDER_COUNT = 4;

const TestimonialsGridSection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-lg mx-auto text-center mb-10"
            >
                <p className="text-sm text-slate-500 leading-relaxed">
                    We're committed to building lasting relationships through exceptional care.
                    As our clients share their experiences, we'll proudly feature their real
                    stories here.
                </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {EXAMPLE_TESTIMONIALS.map(({ quote }, i) => (
                    <motion.div
                        key={quote}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-sm border border-slate-100 bg-ivory"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, s) => (
                                    <LuStar key={s} size={13} className="text-magenta fill-magenta" />
                                ))}
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 bg-white border border-slate-100 px-2 py-0.5 rounded-sm">
                                Example
                            </span>
                        </div>
                        <LuQuote size={18} className="text-navy/15 mb-2" />
                        <p className="text-sm text-slate-600 leading-relaxed italic">
                            &ldquo;{quote}&rdquo;
                        </p>
                    </motion.div>
                ))}

                {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                    <motion.div
                        key={`placeholder-${i}`}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (EXAMPLE_TESTIMONIALS.length + i) * 0.1 }}
                        className="flex flex-col items-center justify-center gap-3 p-6 rounded-sm border border-dashed border-slate-200 bg-white text-center"
                    >
                        <LuQuote size={18} className="text-slate-200" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">
                            Coming Soon
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default TestimonialsGridSection;