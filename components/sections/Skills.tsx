"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Wrench, Layout } from "lucide-react";

const skillGroups = [
    {
        title: "Core Frontend",
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
            <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-6"
                    >
                        Tech Stack & <span className="text-blue-500">Competencies</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A specialized toolkit for modern enterprise-grade frontend engineering.
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
                            className="p-8 rounded-3xl glass border border-white/5 hover:border-blue-500/20 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 transition-colors group-hover:text-white">
                                    <group.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                                    {group.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-default">
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
