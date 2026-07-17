import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const NotListedSection = () => (
    <section className="py-10 bg-ivory">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center gap-5 rounded-sm bg-white border border-slate-100 p-7 sm:p-8"
            >
                <div className="w-11 h-11 rounded-sm bg-magenta/8 flex items-center justify-center shrink-0">
                    <LuMessageCircleQuestion size={20} className="text-magenta" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-base font-bold text-slate-800 mb-1.5">
                        Don't See Your Community?
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        If your city or town isn't listed, please contact us. Depending on your
                        location and care needs, we may still be able to provide services or
                        discuss future expansion.
                    </p>
                </div>
                <NavLink to="/contact" className="shrink-0">
                    <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-5 py-2.5 rounded-sm font-semibold text-sm text-white bg-navy hover:bg-navy/90 transition-all whitespace-nowrap"
                    >
                        Contact Us
                    </motion.button>
                </NavLink>
            </motion.div>
        </div>
    </section>
);

export default NotListedSection;