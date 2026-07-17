import { motion } from "framer-motion";
import {
    LuHospital, LuActivity, LuBedDouble, LuBuilding, LuStethoscope, LuClipboardList,
    LuUsers, LuLandmark, LuHeartHandshake, LuScale, LuFlower2, LuShield,
    LuHeartPulse, LuHandHeart,
} from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const PARTNER_TYPES = [
    { icon: LuHospital,      label: "Hospitals" },
    { icon: LuActivity,      label: "Rehabilitation Centers" },
    { icon: LuBedDouble,     label: "Skilled Nursing Facilities" },
    { icon: LuBuilding,      label: "Assisted Living Communities" },
    { icon: LuStethoscope,   label: "Physicians & Primary Care" },
    { icon: LuClipboardList, label: "Case Managers" },
    { icon: LuUsers,         label: "Social Workers" },
    { icon: LuLandmark,      label: "Councils on Aging" },
    { icon: LuHeartHandshake, label: "Senior Centers" },
    { icon: LuScale,         label: "Elder Law Attorneys" },
    { icon: LuFlower2,       label: "Hospice & Palliative Care" },
    { icon: LuShield,        label: "Faith-Based Organizations" },
    { icon: LuHeartPulse,    label: "Veterans' Organizations" },
    { icon: LuHandHeart,     label: "Community Health Programs" },
];

const PartnerTypesSection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-lg mb-10"
            >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-magenta/8 text-magenta border border-magenta/15 mb-5">
                    We Welcome Partnerships With
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight">
                    Organizations across<br />
                    <span className="text-navy">the care continuum</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {PARTNER_TYPES.map(({ icon: Icon, label }, i) => (
                    <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 }}
                        className="flex items-center gap-3 p-4 rounded-sm border border-slate-100 bg-ivory"
                    >
                        <div className="w-9 h-9 rounded-sm bg-navy/8 flex items-center justify-center shrink-0">
                            <Icon size={16} className="text-navy" />
                        </div>
                        <p className="text-xs font-semibold text-slate-700 leading-snug">{label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default PartnerTypesSection;
