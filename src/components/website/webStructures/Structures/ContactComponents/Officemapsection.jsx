import { motion } from "framer-motion";
import { LuMapPin } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const OfficeMapSection = () => (
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
                    height="340"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="flex items-center gap-3 p-5 sm:p-6 bg-ivory">
                    <div className="w-9 h-9 rounded-sm bg-navy/8 flex items-center justify-center shrink-0">
                        <LuMapPin size={16} className="text-navy" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-800">
                            303 Wyman Street, Suite 300 PMB 17296683
                        </p>
                        <p className="text-xs text-slate-500">Waltham, MA 02451</p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

export default OfficeMapSection;