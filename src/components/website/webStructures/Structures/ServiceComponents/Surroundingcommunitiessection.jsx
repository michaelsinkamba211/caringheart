import { motion } from "framer-motion";
import { LuMapPinned } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const COMMUNITIES = [
    "Watertown", "Belmont", "Newton", "Weston", "Lexington", "Lincoln",
    "Arlington", "Cambridge", "Brighton", "Allston", "Brookline", "Needham",
    "Wellesley", "Burlington", "Somerville", "Medford", "Winchester", "Boston (select neighborhoods)",
];

const SurroundingCommunitiesSection = () => (
    <section className="py-10 bg-ivory">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-lg mb-8"
            >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-navy/8 text-navy border border-navy/15 mb-5">
                    Surrounding Communities
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight">
                    Also serving the<br />
                    <span className="text-magenta">Greater Boston area</span>
                </h2>
            </motion.div>

            <div className="flex flex-wrap gap-2.5">
                {COMMUNITIES.map((town, i) => (
                    <motion.span
                        key={town}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-sm bg-white border border-slate-100 text-sm text-slate-700"
                    >
                        <LuMapPinned size={13} className="text-navy shrink-0" />
                        {town}
                    </motion.span>
                ))}
            </div>

            <p className="text-xs text-slate-400 mt-6">
                These communities are commonly served by home care providers based in Waltham
                and the surrounding Greater Boston region.
            </p>
        </div>
    </section>
);

export default SurroundingCommunitiesSection;