import { useState } from "react";
import { motion } from "framer-motion";
import { message } from "antd";
import { LuSend, LuLock } from "react-icons/lu";
import { FontLoader } from "../../../../ui/fonts";

const initialForm = {
    organization: "",
    contactName: "",
    email: "",
    phone: "",
    clientName: "",
    notes: "",
};

const ReferralFormSection = () => {
    const [form, setForm] = useState(initialForm);
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        if (!form.contactName.trim() || !form.email.trim() || !form.phone.trim()) {
            messageApi.error("Please share your name, email, and phone number.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            messageApi.error("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        try {
            // NOTE: placeholder endpoint — wire this up to your actual referrals API.
            // Referrals may include protected health information, so make sure the
            // real endpoint is submitted over HTTPS and handled per your privacy policy.
            const res = await fetch("/api/referrals/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.message || "Something went wrong submitting the referral.");
            }

            setSubmitted(true);
            setForm(initialForm);
            messageApi.success("Referral received — thank you for trusting us with your patient.");
        } catch (err) {
            messageApi.error(err.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <section className="py-10 bg-white">
                <FontLoader />
                <div className="max-w-325 mx-auto px-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-lg mx-auto text-center rounded-sm bg-ivory border border-emerald-200 p-10"
                    >
                        <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-5">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">Referral received</h3>
                        <p className="text-sm text-slate-500">
                            Thank you — our care team will follow up promptly to coordinate next steps.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-10 bg-white">
            {contextHolder}
            <FontLoader />
            <div className="max-w-325 mx-auto px-2">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto rounded-sm bg-ivory border border-slate-100 p-8 sm:p-10"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-magenta/8 text-magenta border border-magenta/15 mb-5">
                        <LuLock size={11} />
                        Secure Referral Form
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight mb-2">
                        Refer a Patient<br />
                        <span className="text-navy">or Client</span>
                    </h2>
                    <p className="text-sm text-slate-500 mb-8">
                        Please share only the information needed for us to make initial contact —
                        we'll follow up directly for any further details.
                    </p>

                    <div className="space-y-4">
                        <input
                            name="organization"
                            value={form.organization}
                            onChange={handleChange}
                            placeholder="Organization name"
                            disabled={loading}
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800 placeholder-slate-400"
                        />

                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                name="contactName"
                                value={form.contactName}
                                onChange={handleChange}
                                placeholder="Your name"
                                disabled={loading}
                                className="px-4 py-2.5 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800 placeholder-slate-400"
                            />
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone number"
                                disabled={loading}
                                className="px-4 py-2.5 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800 placeholder-slate-400"
                            />
                        </div>

                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            disabled={loading}
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800 placeholder-slate-400"
                        />

                        <input
                            name="clientName"
                            value={form.clientName}
                            onChange={handleChange}
                            placeholder="Patient / client name (optional)"
                            disabled={loading}
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800 placeholder-slate-400"
                        />

                        <textarea
                            name="notes"
                            value={form.notes}
                            onChange={handleChange}
                            placeholder="Referral notes — care needs, timing, or anything we should know (optional)"
                            rows={4}
                            disabled={loading}
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800 placeholder-slate-400 resize-none"
                        />

                        <motion.button
                            onClick={handleSubmit}
                            disabled={loading}
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-sm font-semibold text-sm text-white bg-navy hover:bg-navy/90 transition-all disabled:opacity-50"
                        >
                            {loading ? (
                                <>
                                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Submitting…
                                </>
                            ) : (
                                <>
                                    <LuSend size={15} />
                                    Submit Referral
                                </>
                            )}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ReferralFormSection;
