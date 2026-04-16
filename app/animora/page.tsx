"use client";

import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, Sparkles, Database, Layout } from "lucide-react";
import Link from "next/link";

export default function AnimoraProject() {
    return (
        <main className="min-h-screen bg-[#0f172a] text-white selection:bg-indigo-500/30">
            <Navbar />

            {/* Extremely Subtle background flair */}
            <div className="pt-32 pb-24 border-b border-white/5 bg-slate-900/50 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Link href="/#work" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Projects</span>
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                    >
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-slate-800 rounded-full border border-slate-700">
                                    Personal Project
                                </span>
                                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-400 bg-slate-800 rounded-full border border-slate-700">
                                    Full-Stack
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-[#f1f5f9]">
                                Animora <span className="text-gradient">AI</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-[#94a3b8] leading-relaxed font-medium">
                                A Full-Stack Next.js application for immersive AI-driven character conversations.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/krishnan15599/anime-chat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 flex items-center gap-2 font-medium transition-colors shadow-sm text-[#f1f5f9]"
                            >
                                <Github className="w-5 h-5" />
                                Source Code
                            </a>
                            <a
                                href="https://anime-character-seven.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 flex items-center gap-2 font-medium transition-colors shadow-lg shadow-indigo-600/20 border border-indigo-400/20"
                            >
                                <ExternalLink className="w-5 h-5" />
                                Live Demo
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="py-24 max-w-7xl mx-auto px-4">
                {/* Screenshots Grid */}
                <div className="mb-24 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden glass border border-white/5 p-2 bg-white/5"
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/assets/animore-home.png" alt="Animora Home Page" fill className="object-cover object-top" />
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass border border-white/5 p-2 bg-white/5"
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image src="/assets/animora_chats.png" alt="Animora Chat Interface" fill className="object-cover object-top" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-rows-2 gap-8"
                        >
                            <div className="relative w-full h-full rounded-3xl overflow-hidden glass border border-white/5 p-2 bg-white/5 min-h-[250px]">
                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                    <Image src="/assets/clerk.png" alt="Animora Authentication" fill className="object-cover object-center" />
                                </div>
                            </div>
                            <div className="relative w-full h-full rounded-3xl overflow-hidden glass border border-white/5 p-2 bg-white/5 min-h-[250px]">
                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                    <Image src="/assets/loginandsingup.png" alt="Animora Login Flow" fill className="object-cover object-center" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
                    <div className="space-y-16">
                        <section>
                             <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-[#f1f5f9]">
                                <Sparkles className="w-8 h-8 text-indigo-500" />
                                Project Overview
                            </h2>
                            <p className="text-lg text-[#94a3b8] leading-relaxed">
                                Animora is a responsive web application that brings varying anime personas to life. Users can log in, browse a directory of featured characters, and engage in real-time, in-character messaging. The system leverages state-of-the-art LLMs via OpenRouter, cleverly prompted to strictly adhere to distinct, colorful character personalities without breaking the fourth wall.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <Database className="w-8 h-8 text-slate-500" />
                                Technical Challenges Conquered
                            </h2>

                             <div className="space-y-8">
                                <div className="p-8 rounded-3xl bg-[#1e293b] border border-slate-700 relative overflow-hidden group shadow-xl">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />
                                    <h3 className="text-xl font-bold mb-4 text-[#f1f5f9]">Handling API Latency & Cost</h3>
                                    <p className="text-[#94a3b8] leading-relaxed relative z-10">
                                        Calling LLMs takes time and money. I built a server-side caching layer that maps normalized user messages to corresponding character responses. If a user repeats a greeting or known question, the cache serves it instantly without hitting the OpenRouter endpoint.
                                    </p>
                                </div>

                                <div className="p-8 rounded-3xl bg-[#1e293b] border border-slate-700 relative overflow-hidden group shadow-xl">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/5 rounded-full blur-3xl group-hover:bg-slate-500/10 transition-colors pointer-events-none" />
                                    <h3 className="text-xl font-bold mb-4 text-[#f1f5f9]">State Management for Chat</h3>
                                    <p className="text-[#94a3b8] leading-relaxed relative z-10">
                                        Traditional React state resets on refresh. I implemented IndexedDB (idb) into the application to durably map and auto-increment message chains back to their specific `charSlug`, keeping chat loads lightning fast across sessions without breaking state.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Layout className="w-8 h-8 text-indigo-500" />
                                Key Features
                            </h2>
                             <ul className="space-y-6 text-lg text-[#94a3b8]">
                                <li className="flex gap-4">
                                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                                    <span><strong className="text-[#f1f5f9]">AI Persona Engine:</strong> Dynamically injected system prompts configure the AI model on the fly to understand a specific character's tagline, personality, and lore.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                                    <span><strong className="text-[#f1f5f9]">Dual-Layer Caching Architecture:</strong> Server-side file-based cache intercepts repetitive queries saving API costs, paired with Local State Persistence using IndexedDB wrappers.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                                    <span><strong className="text-[#f1f5f9]">Modern Authentication Flow:</strong> Fully secured routes and personalized user experiences powered by Clerk Auth and Webhooks.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                                    <span><strong className="text-[#f1f5f9]">Responsive & Accessible Design:</strong> Mobile-first UI with a polished chat interface, dynamic category grids, and Dark/Light theme toggle powered by next-themes.</span>
                                </li>
                            </ul>
                        </section>
                    </div>

                    <div>
                        <div className="sticky top-32 p-8 rounded-3xl glass border border-white/5">
                            <h3 className="text-sm font-bold mb-6 uppercase tracking-widest text-gray-500">Architecture Stack</h3>
                            <div className="flex flex-col gap-3">
                                {[
                                    "Next.js 16 (App Router)",
                                    "React 19",
                                    "TypeScript",
                                    "TailwindCSS v4",
                                    "OpenRouter (Mistral 7B)",
                                    "Supabase",
                                    "Clerk Auth",
                                    "IndexedDB",
                                    "File-system Caching"
                                ].map(tech => (
                                    <div key={tech} className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm font-medium text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-slate-700 transition-colors cursor-default shadow-sm">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
