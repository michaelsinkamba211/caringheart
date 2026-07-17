import { useState } from "react";
import { motion } from "framer-motion";
import { message } from "antd";
import { LuSend } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const SERVICES = [
    "Personal Care Assistance",
    "Companion Care",
    "Homemaking",
    "Meal Preparation",
    "Medication Reminders",
    "Alzheimer's & Dementia Care",
    "Live-In / 24-Hour Care",
    "Respite Care",
    "Not sure yet",
];

const initialForm = {
    name: "",
    email: "",
    phone: "",
    relationship: "",
    service: "",
    message: "",
};

const ConsultationFormSection = () => {
    const [form, setForm] = useState(initialForm);
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
            messageApi.error("Please share your name, email, and phone number.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            messageApi.error("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        try {
            // NOTE: placeholder endpoint — wire this up to your actual consultations/leads API.
            const res = await fetch("/api/consultations/request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.message || "Something went wrong sending your request.");
            }

            setSubmitted(true);
            setForm(initialForm);
            messageApi.success("Request sent — we'll be in touch within one business day.");
        } catch (err) {
            messageApi.error(err.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <section id="consultation" className="py-10 bg-ivory scroll-mt-24">
                <FontLoader />
                <div className="max-w-325 mx-auto px-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-lg mx-auto text-center rounded-sm bg-white border border-emerald-200 p-10"
                    >
                        <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-5">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">Thank you for reaching out!</h3>
                        <p className="text-sm text-slate-500">
                            A member of our team will contact you within one business day to schedule
                            your free consultation.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="consultation" className="py-10 bg-ivory scroll-mt-24">
            {contextHolder}
            <FontLoader />
            <div className="max-w-325 mx-auto px-2">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto rounded-sm bg-white border border-slate-100 p-8 sm:p-10"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-magenta/8 text-magenta border border-magenta/15 mb-5">
                        Free Care Consultation
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight mb-2">
                        Request Your Free<br />
                        <span className="text-navy">Care Consultation</span>
                    </h2>
                    <p className="text-sm text-slate-500 mb-8">
                        Complete the form below and a member of our team will contact you promptly
                        to discuss your care needs.
                    </p>

                    <div className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                disabled={loading}
                                className="px-4 py-2.5 bg-ivory border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800 placeholder-slate-400"
                            />
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone number"
                                disabled={loading}
                                className="px-4 py-2.5 bg-ivory border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800 placeholder-slate-400"
                            />
                        </div>

                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            disabled={loading}
                            className="w-full px-4 py-2.5 bg-ivory border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800 placeholder-slate-400"
                        />

                        <div className="grid sm:grid-cols-2 gap-4">
                            <select
                                name="relationship"
                                value={form.relationship}
                                onChange={handleChange}
                                disabled={loading}
                                className="px-4 py-2.5 bg-ivory border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800"
                            >
                                <option value="">I'm inquiring for...</option>
                                <option value="self">Myself</option>
                                <option value="parent">A parent</option>
                                <option value="spouse">A spouse</option>
                                <option value="other-family">Another family member</option>
                                <option value="professional">A client (I'm a care professional)</option>
                            </select>

                            <select
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                disabled={loading}
                                className="px-4 py-2.5 bg-ivory border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800"
                            >
                                <option value="">Service of interest</option>
                                {SERVICES.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </div>

                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us a bit about your care needs (optional)"
                            rows={4}
                            disabled={loading}
                            className="w-full px-4 py-2.5 bg-ivory border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800 placeholder-slate-400 resize-none"
                        />

                        <motion.button
                            onClick={handleSubmit}
                            disabled={loading}
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-sm font-semibold text-sm text-white bg-magenta hover:bg-magenta/90 transition-all disabled:opacity-50"
                        >
                            {loading ? (
                                <>
                                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Sending…
                                </>
                            ) : (
                                <>
                                    <LuSend size={15} />
                                    Request Free Consultation
                                </>
                            )}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ConsultationFormSection;