import { motion } from "framer-motion";
import { LuMapPin } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const PrimaryAreaSection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 rounded-sm bg-ivory border border-slate-100 p-8 sm:p-10"
            >
                <div className="w-16 h-16 rounded-sm bg-navy flex items-center justify-center shrink-0">
                    <LuMapPin size={28} className="text-magenta" />
                </div>
                <div className="text-center sm:text-left">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-magenta mb-2">
                        Primary Service Area
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-slate-800 mb-2">
                        Waltham, Massachusetts
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                        Waltham is home base for Caring Hearts Home Care Solutions — where our
                        caregivers, care coordination, and office are rooted in the community we serve.
                    </p>
                </div>
            </motion.div>
        </div>
    </section>
);

export default PrimaryAreaSection;