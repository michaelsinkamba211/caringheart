import { motion } from "framer-motion";
import { LuQuote } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

// NOTE: placeholder name, title, and quote — swap in the real founder's
// words and a real photo once available. Keeping the section optional per
// the site plan; safe to omit entirely by not rendering <FounderMessageSection />.
const FOUNDER = {
    initials: "CH",
    name: "The Caring Hearts Founding Team",
    title: "Founders, Caring Hearts Home Care Solutions",
    quote: "We started Caring Hearts because we believe every family deserves a caregiver they can trust completely — someone who treats their loved one the way they'd want their own family treated. That belief still shapes every care plan we build today.",
};

const FounderMessageSection = () => (
    <section className="py-10 bg-navy">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto text-center"
            >
                <LuQuote size={28} className="text-magenta/60 mx-auto mb-6" />

                <p className="text-lg sm:text-xl font-light text-white leading-relaxed mb-8">
                    &ldquo;{FOUNDER.quote}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-3">
                    <div className="w-11 h-11 rounded-sm bg-white/10 border border-white/15 flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {FOUNDER.initials}
                    </div>
                    <div className="text-left">
                        <p className="text-sm font-bold text-white">{FOUNDER.name}</p>
                        <p className="text-xs text-white/50">{FOUNDER.title}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

export default FounderMessageSection;