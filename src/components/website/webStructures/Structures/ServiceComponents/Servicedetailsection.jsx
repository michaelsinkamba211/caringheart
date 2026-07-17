import { motion } from "framer-motion";
import { LuCircleCheck } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

/**
 * Shared layout for every individual service section.
 * @param {object} props
 * @param {string} props.tag        - eyebrow label, e.g. "Daily Living"
 * @param {string} props.title      - service name
 * @param {string} props.description - lead paragraph
 * @param {string[]} props.includes - "what's included" checklist items
 * @param {React.ComponentType} props.icon - lucide icon component
 * @param {boolean} props.reverse   - flip icon panel to the right
 * @param {"white"|"ivory"} props.bg - alternating section background
 */
const ServiceDetailSection = ({
    tag,
    title,
    description,
    includes,
    icon: Icon,
    image,
    reverse = false,
    bg = "white"
}) => (
    <section className={`py-10 ${bg === "ivory" ? "bg-ivory" : "bg-white"}`}>
        <FontLoader />
        <div className="max-w-325 mx-auto">
            <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center`}>

                {/* icon panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-2/5 flex justify-center"
                >
                    <div className="w-full max-w-md rounded-sm overflow-hidden">

                        {image ? (
                            <div className="w-full lg:w-[480px] h-[500px] rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ) : (
                            Icon && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <Icon size={64} className="text-magenta" strokeWidth={1.25} />
                                </div>
                            )
                        )}
                    </div>
                </motion.div>

                {/* content */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-3/5"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-magenta/8 text-magenta border border-magenta/15 mb-4">
                        {tag}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight mb-4">
                        {title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-lg">
                        {description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-2.5">
                        {includes.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                                <LuCircleCheck size={16} className="text-navy shrink-0 mt-0.5" />
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default ServiceDetailSection;