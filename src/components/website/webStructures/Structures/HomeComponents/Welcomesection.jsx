import { motion } from "framer-motion";
import { LuHeartHandshake, LuUsers, LuHouse } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const BULLETS = [
    { icon: LuHeartHandshake, title: "Personalized Care Plans", desc: "Every plan is built around the individual — their needs, routines, and preferences." },
    { icon: LuUsers,          title: "Compassionate Caregivers", desc: "Carefully screened, trained, and matched caregivers who treat every client like family." },
    { icon: LuHouse,          title: "Family-Centered Care",     desc: "Open communication with families every step of the way, for real peace of mind." },
];

const WelcomeSection = () => (
    <section className="py-10 bg-white">
        <FontLoader />
        <div className="max-w-325 mx-auto px-2">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                {/* left */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 max-w-lg"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-navy/8 text-navy border border-navy/15 mb-5">
                        Welcome Home
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight mb-6">
                        There&apos;s no place<br />
                        <span className="text-magenta">like home</span>
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed mb-8">
                        At Caring Hearts Home Care Solutions, we deliver exceptional non-medical
                        home care that allows individuals to remain safe, comfortable, and
                        independent in familiar surroundings. Whether your loved one needs a few
                        hours of companionship a week or around-the-clock support, our dedicated
                        caregivers provide care with{" "}
                        <span className="font-semibold text-slate-700">compassion, dignity, and respect.</span>
                    </p>
                </motion.div>

                {/* right — bullets */}
                <div className="flex-1 space-y-4 w-full">
                    {BULLETS.map(({ icon: Icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-4 p-4 rounded-sm border border-slate-100 bg-ivory hover:border-magenta/20 hover:bg-magenta/3 transition-all"
                        >
                            <div className="w-10 h-10 rounded-sm bg-white border border-slate-100 flex items-center justify-center shrink-0">
                                <Icon size={17} className="text-magenta" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-800 mb-1">{title}</p>
                                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default WelcomeSection;