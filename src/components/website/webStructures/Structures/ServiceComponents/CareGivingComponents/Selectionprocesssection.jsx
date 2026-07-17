import { motion } from "framer-motion";
import {
    LuUserSearch, LuShieldCheck, LuPhoneCall, LuGraduationCap,
    LuHeartHandshake, LuBadgeCheck, LuBookOpen,
} from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const CRITERIA = [
    { icon: LuUserSearch,     label: "Carefully screened & interviewed" },
    { icon: LuShieldCheck,    label: "Background checked" },
    { icon: LuPhoneCall,      label: "Reference verified" },
    { icon: LuGraduationCap,  label: "Professionally trained" },
    { icon: LuHeartHandshake, label: "Compassionate & dependable" },
    { icon: LuBadgeCheck,     label: "Respectful of dignity & independence" },
    { icon: LuBookOpen,       label: "Committed to continuous learning" },
];

const SelectionProcessSection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 max-w-md"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-navy/8 text-navy border border-navy/15 mb-5">
                        Our Selection Process
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight mb-6">
                        Every caregiver earns<br />
                        <span className="text-magenta">a place on our team</span>
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Each caregiver is carefully selected through a comprehensive hiring process
                        that includes interviews, reference checks, background screening, and
                        verification of qualifications — before they ever meet a client.
                    </p>
                </motion.div>

                <div className="flex-1 grid sm:grid-cols-2 gap-3 w-full">
                    {CRITERIA.map(({ icon: Icon, label }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                            className="flex items-center gap-3 p-3.5 rounded-sm border border-slate-100 bg-ivory"
                        >
                            <div className="w-8 h-8 rounded-sm bg-white border border-slate-100 flex items-center justify-center shrink-0">
                                <Icon size={15} className="text-navy" />
                            </div>
                            <p className="text-xs font-semibold text-slate-700 leading-snug">{label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default SelectionProcessSection;