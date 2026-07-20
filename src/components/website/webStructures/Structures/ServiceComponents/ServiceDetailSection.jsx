import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuCircleCheck, LuChevronLeft, LuChevronRight, LuPlay } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

/**
 * Media slider — accepts a mix of images and videos and lets the person
 * swipe/click through them. Each item: { type: "image" | "video", src, poster?, alt? }
 * - image: rendered as a plain <img>
 * - video: rendered as <video controls>, using `poster` as the thumbnail
 *   frame before playback starts (falls back to a play-icon overlay if no
 *   poster is given)
 */
const MediaSlider = ({ media, title }) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    const hasMultiple = media.length > 1;
    const current = media[index];

    // Only start/stop playback once the slider actually scrolls into the viewport.
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.5 } // needs to be roughly half-visible before it counts as "in view"
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Play/pause the current video based on visibility — runs whenever visibility
    // changes or the active slide changes (e.g. swiping to a different video).
    useEffect(() => {
        const video = videoRef.current;
        if (!video || current.type !== "video") return;

        if (isInView) {
            video.play().catch(() => {
                // Autoplay can still be rejected in some browsers/contexts even
                // when muted — that's fine, the native controls let them press
                // play manually if this happens.
            });
        } else {
            video.pause();
        }
    }, [isInView, index, current.type]);

    const goTo = (newIndex) => {
        setDirection(newIndex > index ? 1 : -1);
        setIndex((newIndex + media.length) % media.length);
    };

    const handleDragEnd = (_, info) => {
        const threshold = 60;
        if (info.offset.x < -threshold) goTo(index + 1);
        else if (info.offset.x > threshold) goTo(index - 1);
    };

    return (
        <div ref={containerRef} className="relative w-full lg:w-[480px] h-[500px] rounded-lg overflow-hidden shadow-lg bg-navy">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={index}
                    custom={direction}
                    initial={{ x: direction >= 0 ? "100%" : "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction >= 0 ? "-100%" : "100%", opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    drag={hasMultiple ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    className="absolute inset-0"
                >
                    {current.type === "video" ? (
                        <video
                            key={current.src}
                            ref={videoRef}
                            src={current.src}
                            poster={current.poster}
                            muted
                            loop
                            controls
                            playsInline
                            preload="auto"
                            className="w-full h-full object-cover"
                        >
                            <track kind="captions" />
                        </video>
                    ) : (
                        <img
                            src={current.src}
                            alt={current.alt || title}
                            className="w-full h-full object-cover pointer-events-none"
                            draggable={false}
                        />
                    )}
                </motion.div>
            </AnimatePresence>

            {/* video indicator badge — informational only now, since playback starts automatically */}
            {current.type === "video" && (
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-navy/80 text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">
                    <LuPlay size={10} /> Video · Muted
                </div>
            )}

            {hasMultiple && (
                <>
                    <button
                        onClick={() => goTo(index - 1)}
                        aria-label="Previous"
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-navy shadow-md transition-colors cursor-pointer"
                    >
                        <LuChevronLeft size={16} />
                    </button>
                    <button
                        onClick={() => goTo(index + 1)}
                        aria-label="Next"
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-navy shadow-md transition-colors cursor-pointer"
                    >
                        <LuChevronRight size={16} />
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                        {media.map((m, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                    i === index ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/75"
                                }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const ServiceDetailSection = ({
    tag,
    title,
    description,
    includes,
    icon: Icon,
    media,
    reverse = false,
    bg = "white",
}) => (
    <section className={`py-10  px-2 ${bg === "ivory" ? "bg-ivory" : "bg-white"}`}>
        <FontLoader />
        <div className="max-w-325 mx-auto">
            <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center`}>

                {/* media panel — slider if `media` is provided, otherwise falls back to a plain icon block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-2/5 flex justify-center"
                >
                    {media && media.length > 0 ? (
                        <MediaSlider media={media} title={title} />
                    ) : (
                        <div className="w-full max-w-md aspect-square rounded-sm bg-navy flex items-center justify-center">
                            {Icon && <Icon size={64} className="text-magenta" strokeWidth={1.25} />}
                        </div>
                    )}
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