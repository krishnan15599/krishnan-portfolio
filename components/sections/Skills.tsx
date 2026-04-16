"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Wrench, Layout } from "lucide-react";

const skillGroups = [
    {
        title: "Core Engineering",
        icon: Layout,
        skills: ["Angular", "React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3/SCSS", "Tailwind CSS", "RxJS"],
    },
    {
        title: "Real-time & Integrations",
        icon: Globe,
        skills: ["WebSocket", "REST APIs", "Razorpay Payments", "Wallet & Credit Engines"],
    },
    {
        title: "Tools & Practices",
        icon: Wrench,
        skills: ["Git", "Jira", "Figma", "Agile/Scrum", "Performance Optimization", "WCAG Accessibility"],
    },
    {
        title: "Domains",
        icon: Code2,
        skills: ["SaaS CRM", "Omnichannel (WhatsApp, RCS)", "Campaign Automation", "Analytics Dashboards", "Chat Systems"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* No extra background blobs */}

            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-6 text-[#f1f5f9]"
                    >
                        Tech Stack & <span className="text-indigo-500">Competencies</span>
                    </motion.h2>
                    <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
                        A specialized toolkit for modern enterprise-grade software engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((group, i) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-[#1e293b] border border-slate-700 hover:border-indigo-500/30 shadow-xl transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-indigo-600/10 text-indigo-400 group-hover:bg-indigo-600 transition-colors group-hover:text-white">
                                    <group.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-lg text-[#f1f5f9] group-hover:text-indigo-400 transition-colors">
                                    {group.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1.5 rounded-xl bg-slate-800 text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-slate-700 transition-all cursor-default border border-slate-700">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
