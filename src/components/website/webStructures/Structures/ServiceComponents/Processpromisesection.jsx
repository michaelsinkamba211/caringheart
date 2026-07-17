import { motion } from "framer-motion";
import { LuHeartHandshake } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const ProcessPromiseSection = () => (
    <section className="py-10 bg-ivory">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto text-center"
            >
                <div className="w-11 h-11 rounded-sm bg-navy/8 flex items-center justify-center mx-auto mb-6">
                    <LuHeartHandshake size={18} className="text-navy" />
                </div>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-magenta/8 text-magenta border border-magenta/15 mb-6">
                    Our Promise
                </span>

                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-snug mb-4">
                    Every step of your care journey,<br className="hidden sm:block" />
                    <span className="text-navy">comfortable and respectful.</span>
                </h2>

                <p className="text-sm text-slate-500 leading-relaxed">
                    We are committed to making every step of your care journey comfortable,
                    respectful, and centered around your family's needs.
                </p>
            </motion.div>
        </div>
    </section>
);

export default ProcessPromiseSection;