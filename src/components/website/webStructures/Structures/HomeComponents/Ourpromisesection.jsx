import { motion } from "framer-motion";
import { LuHeart } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const OurPromiseSection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto text-center"
            >
                <div className="w-11 h-11 rounded-sm bg-magenta/8 flex items-center justify-center mx-auto mb-6">
                    <LuHeart size={18} className="text-magenta" />
                </div>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-navy/8 text-navy border border-navy/15 mb-6">
                    Our Promise
                </span>

                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-snug mb-4">
                    Every client deserves to feel <br className="hidden sm:block" />
                    respected, valued, and <span className="text-magenta">cared for.</span>
                </h2>

                <p className="text-sm text-slate-500 leading-relaxed">
                    We treat every individual like family — delivering compassionate care that
                    promotes independence, dignity, and peace of mind. Because to us, every
                    client is family.
                </p>
            </motion.div>
        </div>
    </section>
);

export default OurPromiseSection;