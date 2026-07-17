import { motion } from "framer-motion";
import { FontLoader } from "../../../../ui/fonts";

// NOTE: no real caregiver profiles/photos yet — placeholder cards, same
// "Coming Soon" pattern used in TestimonialsPreviewSection. Swap the array
// for real { name, role, photo, bio } entries once staff opt in to be featured.
const PLACEHOLDER_COUNT = 3;

const CaregiverProfilesSection = () => (
    <section className="py-10 bg-ivory">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-lg mb-10"
            >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-navy/8 text-navy border border-navy/15 mb-5">
                    Our Team
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight">
                    Faces of<br />
                    <span className="text-magenta">Caring Hearts</span>
                </h2>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-5">
                {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="rounded-sm bg-white border border-slate-100 overflow-hidden"
                    >
                        <div className="aspect-square bg-navy/8 flex items-center justify-center">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-navy/40 bg-white border border-navy/10 px-2.5 py-1 rounded-sm">
                                Coming Soon
                            </span>
                        </div>
                        <div className="p-4">
                            <div className="h-3 w-2/3 rounded-sm bg-slate-100 mb-2" />
                            <div className="h-2.5 w-1/2 rounded-sm bg-slate-100" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <p className="text-xs text-slate-400 mt-6">
                We're introducing our caregiving team here soon — with permission from each
                team member to be featured.
            </p>
        </div>
    </section>
);

export default CaregiverProfilesSection;