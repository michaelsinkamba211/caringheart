import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { LuCalendarCheck, LuPhone } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const CTASection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-sm bg-navy px-6 sm:px-12 py-12 sm:py-16 text-center"
            >
                {/* subtle accent shape */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-magenta/20 blur-2xl" />

                <h2 className="relative text-2xl sm:text-3xl font-light text-white leading-snug mb-3 max-w-xl mx-auto">
                    Let us help you or your loved one <br className="hidden sm:block" />
                
                    live comfortably at <span className="text-magenta font-normal">home.</span>
                </h2>
                <p className="relative text-sm text-white/60 mb-8">
                    Schedule your FREE in-home care consultation today.
                </p>

                <div className="relative flex flex-wrap items-center justify-center gap-3">
                    <NavLink to="/consultation">
                        <motion.button
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-sm font-semibold text-sm text-white bg-magenta hover:bg-magenta/90 transition-all"
                        >
                            <LuCalendarCheck size={16} />
                            Schedule a Free Care Consultation
                        </motion.button>
                    </NavLink>

                    <a href="tel:+18572779073">
                        <motion.button
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-sm font-semibold text-sm text-white border border-white/25 hover:bg-white/5 transition-all"
                        >
                            <LuPhone size={16} />
                            Call Us Today
                        </motion.button>
                    </a>
                </div>
            </motion.div>
        </div>
    </section>
);

export default CTASection;