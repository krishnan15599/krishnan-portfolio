"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
    {
        role: "Software Engineer",
        company: "Msgkart",
        location: "Bengaluru",
        date: "Dec 2024 – Present",
        points: [
            "Engineered Campaign Manager for WhatsApp, RCS & Voice — including scheduling, rechurn logic, credit consumption, and multi-channel workflows used daily by live clients.",
            "Built full Recharge Wallet system with real-time GST calculation, dynamic pricing, Razorpay integration, and secure transaction flows.",
            "Developed real-time Chat & Campaign Monitoring Dashboards powered by WebSockets for instant delivery/CTR/failure insights.",
            "Designed and implemented advanced WhatsApp and RCS Flowbuilders using DrawFlow, enabling node-based messaging automation and complex customer journey mapping.",
            "Developed a Media Manager and a reusable Angular component library — accelerating feature delivery and ensuring UI consistency across the platform.",
            "Collaborated in Agile sprints: planning, reviews, retros, and cross-team coordination for scalable SaaS architecture.",
        ],
    },
    {
        role: "Software Engineer",
        company: "Propass",
        location: "Coimbatore",
        date: "Nov 2023 – Nov 2024",
        points: [
            "Created responsive dashboards and customer-facing booking modules with React + Material UI.",
            "Built reusable UI components and optimized performance for high-traffic event/ticket flows.",
            "Integrated REST APIs to streamline user journeys — listings → booking → payments.",
        ],
    },
    {
        role: "Associate Software Engineer",
        company: "Tech Mahindra",
        location: "Remote/Office",
        date: "Initial Career",
        points: [
            "Completed enterprise training on application development & support workflows.",
            "Handled production support: data queries, issue resolution, and dev-team coordination.",
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Professional <span className="text-blue-500">Journey</span></h2>
                        <p className="text-gray-400 text-lg max-w-2xl">Building high-performance enterprise applications and scalable SaaS solutions.</p>
                    </motion.div>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.role + exp.company}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative p-8 md:p-12 glass rounded-3xl border border-white/5 hover:border-blue-500/20 transition-colors group overflow-hidden"
                        >
                            {/* Background accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-3xl -translate-y-4 translate-x-4 blur-3xl group-hover:bg-blue-600/10 transition-colors" />

                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400">
                                            <Briefcase className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                    </div>

                                    <div className="space-y-3 text-gray-500 font-medium">
                                        <div className="flex items-center gap-2">
                                            <Building2 className="w-4 h-4" />
                                            <span>{exp.company}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <ul className="space-y-4">
                                        {exp.points.map((point, j) => (
                                            <motion.li
                                                key={j}
                                                initial={{ opacity: 0, x: 10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: (i * 0.1) + (j * 0.05) }}
                                                className="flex items-start gap-4 text-gray-400 group/item"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                <span className="leading-relaxed group-hover/item:text-white transition-colors">{point}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
