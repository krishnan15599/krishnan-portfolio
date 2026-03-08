"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, MessageSquare, Wallet, PieChart, Layout, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Animora — Anime Chat AI",
        description: "A Full-Stack Next.js application for immersive AI-driven character conversations.",
        features: [
            {
                title: "AI-Powered Chat Integration & Real-time Interaction",
                content: "Developed a high-performance AI-powered chat platform using Next.js (App Router) and React 19, integrating OpenRouter/Hugging Face APIs to enable real-time, context-aware conversations with AI-driven anime characters."
            },
            {
                title: "Efficient Client-Side Data Persistence",
                content: "Engineered a robust offline-first message persistence system using IndexedDB (via IDB library), optimizing application performance by reducing server load and ensuring seamless access to chat history across browser sessions."
            },
            {
                title: "Scalable Architecture & Modern UI/UX",
                content: "Built a visually stunning, responsive interface with Tailwind CSS 4 and Lucide Icons, implementing secure user authentication via Clerk and leveraging Supabase for scalable backend infrastructure and character metadata management."
            }
        ],
        icon: Sparkles,
        image: "/assets/animore-home.png",
        tech: ["Next.js 16", "TypeScript", "React 19", "OpenRouter", "Supabase", "Clerk", "IndexedDB", "TailwindCSS v4"],
        impact: "Significantly reduced LLM latency and costs via custom server-side JSON caching.",
        color: "from-purple-600 to-pink-600",
        link: "/animora",
        github: "https://github.com/krishnan15599/anime-chat",
        external: "https://anime-character-seven.vercel.app",
    },
];

export function Projects() {
    return (
        <section id="work" className="py-24 bg-gray-950/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black mb-4"
                        >
                            Selected <span className="text-blue-500">Work</span>
                        </motion.h2>
                        <p className="text-gray-400 text-lg max-w-xl">
                            Highlighting enterprise SaaS solutions, side projects, and product impact.
                        </p>
                    </div>

                    <motion.a
                        href="https://github.com"
                        target="_blank"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <span>View GitHub</span>
                        <Github className="w-5 h-5" />
                    </motion.a>
                </div>

                <div className="max-w-4xl mx-auto">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="h-full group flex flex-col"
                        >
                            <div className="relative h-full flex flex-col p-8 md:p-12 rounded-3xl glass border border-white/5 hover:border-white/10 transition-all overflow-hidden">
                                {/* Background Glow */}
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.03] blur-3xl transition-opacity pointer-events-none`} />

                                <div className="flex items-start justify-between mb-8 z-10">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-lg shadow-black/20`}>
                                        <project.icon className="w-8 h-8" />
                                    </div>
                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.external && (
                                            <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors z-10">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-8 text-lg leading-relaxed z-10">
                                    {project.description}
                                </p>

                                {/* Features List */}
                                {project.features && (
                                    <div className="grid grid-cols-1 gap-6 mb-10 z-10">
                                        {project.features.map((f, idx) => (
                                            <div key={idx} className="space-y-2">
                                                <h4 className="text-base font-bold text-white flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                    {f.title}
                                                </h4>
                                                <p className="text-sm text-gray-500 leading-relaxed pl-3.5 border-l border-white/5">
                                                    {f.content}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Optional Image Rendering for the Project */}
                                {project.image && (
                                    <div className="relative w-full h-64 md:h-80 mb-10 rounded-2xl overflow-hidden border border-white/10 z-10 group-hover:border-white/20 transition-colors">
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} preview`}
                                            fill
                                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 mb-10 mt-auto z-10">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs font-semibold text-gray-400">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-white/5 z-10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] mt-1.5 flex-shrink-0" />
                                        <span className="text-base font-medium text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                                            {project.impact}
                                        </span>
                                    </div>
                                    {project.link && (
                                        <div className="mt-8 flex justify-end">
                                            <Link href={project.link} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-purple-400 group-hover:text-purple-400 transition-colors">
                                                View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
