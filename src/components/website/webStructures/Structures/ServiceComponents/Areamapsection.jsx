import { motion } from "framer-motion";
import { LuMapPin, LuPhone } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const AreaMapSection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-sm border border-slate-100 overflow-hidden"
            >
                {/* Replace the query string with your exact office address/place once confirmed */}
                <iframe
                    title="Caring Hearts Home Care Solutions — Waltham Office"
                    src="https://www.google.com/maps?q=303+Wyman+Street+Suite+300+Waltham+MA+02451&output=embed"
                    width="100%"
                    height="380"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 bg-ivory">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-sm bg-navy/8 flex items-center justify-center shrink-0">
                            <LuMapPin size={16} className="text-navy" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-800">
                                303 Wyman Street, Suite 300
                            </p>
                            <p className="text-xs text-slate-500">Waltham, MA 02451</p>
                        </div>
                    </div>
                    <a
                        href="tel:+18574055050"
                        className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold text-white bg-magenta hover:bg-magenta/90 transition-all"
                    >
                        <LuPhone size={14} />
                        (857) 405-5050
                    </a>
                </div>
            </motion.div>
        </div>
    </section>
);

export default AreaMapSection;