import { motion } from "framer-motion";
import { LuQuote } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const OurStorySection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                {/* left — narrative */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 max-w-lg"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-navy/8 text-navy border border-navy/15 mb-5">
                        Our Story
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight mb-6">
                        Built on one simple<br />
                        <span className="text-magenta">belief</span>
                    </h2>
                    <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
                        <p>
                            At Caring Hearts Home Care Solutions, our mission is simple — to provide
                            compassionate, dependable, and personalized home care that empowers
                            individuals to live safely and comfortably in their own homes.
                        </p>
                        <p>
                            We understand that every client has unique needs, which is why we take the
                            time to develop individualized care plans that honor each person&apos;s
                            preferences, independence, and dignity.
                        </p>
                        <p>
                            Our caregivers are carefully selected not only for their professional
                            skills, but for their{" "}
                            <span className="font-semibold text-slate-700">
                                kindness, patience, integrity, and dedication to serving others.
                            </span>
                        </p>
                    </div>
                </motion.div>

                {/* right — pull quote callout */}
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex-1 w-full"
                >
                    <div className="rounded-sm bg-ivory border border-slate-100 p-8">
                        <LuQuote size={28} className="text-navy/20 mb-4" />
                        <p className="text-lg sm:text-xl font-light text-slate-700 leading-snug mb-4">
                            Quality home care goes beyond assisting with daily activities.
                            It is about{" "}
                            <span className="text-navy font-normal">
                                building relationships, preserving independence,
                            </span>{" "}
                            and bringing peace of mind to families.
                        </p>
                        <div className="w-10 h-0.5 bg-magenta" />
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default OurStorySection;