import { motion } from "framer-motion";
import { LuPhone, LuMail, LuMapPin, LuClock } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const DETAILS = [
    {
        icon: LuPhone,
        label: "Phone",
        value: "(857) 277-9073",
        href: "tel:+18572779073",
    },
    {
        icon: LuMail,
        label: "Email",
        value: "info@caringheartssolutions.com",
        href: "mailto:info@caringheartssolutions.com",
    },
    {
        icon: LuMapPin,
        label: "Office",
        value: "303 Wyman Street, Suite 300 PMB 17296683, Waltham, MA 02451",
    },
    {
        icon: LuClock,
        label: "Business Hours",
        value: "Mon–Fri: 8:00 AM – 5:00 PM & Sart-Sun  9:00 AM – 5:00PM ",
        sub: "24/7 emergency support available",
    },
];

const ContactDetailsSection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {DETAILS.map(({ icon: Icon, label, value, sub, href }, i) => {
                    const content = (
                        <>
                            <div className="w-11 h-11 rounded-sm bg-navy/8 flex items-center justify-center mb-4">
                                <Icon size={19} className="text-navy" />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                                {label}
                            </p>
                            <p className="text-sm font-semibold text-slate-800 leading-snug">{value}</p>
                            {sub && <p className="text-xs text-slate-400 mt-1">{sub}</p>}
                        </>
                    );

                    const cardClass = "block h-full p-6 rounded-sm border border-slate-100 bg-ivory hover:border-navy/20 transition-all";

                    return (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                        >
                            {href ? (
                                <a href={href} className={cardClass}>{content}</a>
                            ) : (
                                <div className={cardClass}>{content}</div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default ContactDetailsSection;