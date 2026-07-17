import { useState } from "react";
import { motion } from "framer-motion";
import { message } from "antd";
import { LuUpload, LuSend } from "react-icons/lu";
import { FontLoader } from "../../../../../ui/fonts";
const POSITIONS = [
    "Home Health Aide (HHA)",
    "Certified Nursing Assistant (CNA)",
    "Personal Care Assistant (PCA)",
    "Homemaker",
    "Companion Caregiver",
    "Live-In Caregiver",
];

const initialForm = { name: "", email: "", phone: "", position: "", message: "" };

const ApplicationFormSection = () => {
    const [form, setForm] = useState(initialForm);
    const [resume, setResume] = useState(null);
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.position) {
            messageApi.error("Please fill in your name, email, phone, and position.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            messageApi.error("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        try {
            const payload = new FormData();
            Object.entries(form).forEach(([key, value]) => payload.append(key, value));
            if (resume) payload.append("resume", resume);

            // NOTE: placeholder endpoint — wire this up to your actual careers/applications API.
            const res = await fetch("/api/careers/apply", {
                method: "POST",
                body: payload,
            });
            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.message || "Something went wrong submitting your application.");
            }

            setSubmitted(true);
            setForm(initialForm);
            setResume(null);
            messageApi.success("Application received — we'll be in touch soon!");
        } catch (err) {
            messageApi.error(err.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <section className="py-10 bg-ivory">
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
                        <h3 className="text-lg font-bold text-slate-800 mb-2">Thank you for applying!</h3>
                        <p className="text-sm text-slate-500">
                            We've received your application and will reach out if there's a fit.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-10 bg-ivory">
            {contextHolder}
            <FontLoader />
            <div className="max-w-325 mx-auto px-2">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto rounded-sm bg-white border border-slate-100 p-8 sm:p-10"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-widest bg-navy/8 text-navy border border-navy/15 mb-5">
                        Apply Now
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-slate-800 leading-tight mb-8">
                        Ready to join<br />
                        <span className="text-magenta">the Caring Hearts family?</span>
                    </h2>

                    <div className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Full name"
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

                        <select
                            name="position"
                            value={form.position}
                            onChange={handleChange}
                            disabled={loading}
                            className="w-full px-4 py-2.5 bg-ivory border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800"
                        >
                            <option value="">Position you're applying for</option>
                            {POSITIONS.map((p) => (
                                <option key={p} value={p}>{p}</option>
                            ))}
                        </select>

                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us a bit about yourself (optional)"
                            rows={4}
                            disabled={loading}
                            className="w-full px-4 py-2.5 bg-ivory border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent text-sm text-slate-800 placeholder-slate-400 resize-none"
                        />

                        <label className="flex items-center gap-3 px-4 py-3 rounded-sm border border-dashed border-slate-300 bg-ivory cursor-pointer hover:border-navy/30 transition-all">
                            <LuUpload size={16} className="text-navy shrink-0" />
                            <span className="text-sm text-slate-600 truncate">
                                {resume ? resume.name : "Upload resume (PDF or Word, optional)"}
                            </span>
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                                disabled={loading}
                                className="hidden"
                            />
                        </label>

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
                                    Submitting…
                                </>
                            ) : (
                                <>
                                    <LuSend size={15} />
                                    Submit Application
                                </>
                            )}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ApplicationFormSection;