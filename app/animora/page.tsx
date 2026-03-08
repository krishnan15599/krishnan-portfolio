"use client";

import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, Sparkles, Database, Layout } from "lucide-react";
import Link from "next/link";

export default function AnimoraProject() {
    return (
        <main className="min-h-screen bg-[#030712] text-white selection:bg-purple-500/30">
            <Navbar />

            <div className="pt-32 pb-24 border-b border-white/5 bg-gray-900/30 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
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
                                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10 rounded-full border border-purple-500/20">
                                    Personal Project
                                </span>
                                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                                    Full-Stack
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                                Animora <span className="text-gradient hover:opacity-80 transition-opacity">AI</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium">
                                A Full-Stack Next.js application for immersive AI-driven character conversations.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/krishnan15599/anime-chat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 flex items-center gap-2 font-medium transition-colors"
                            >
                                <Github className="w-5 h-5" />
                                Source Code
                            </a>
                            <a
                                href="https://anime-character-seven.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 flex items-center gap-2 font-medium transition-colors shadow-lg shadow-purple-600/20"
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
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Sparkles className="w-8 h-8 text-purple-500" />
                                Project Overview
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Animora is a responsive web application that brings varying anime personas to life. Users can log in, browse a directory of featured characters, and engage in real-time, in-character messaging. The system leverages state-of-the-art LLMs via OpenRouter, cleverly prompted to strictly adhere to distinct, colorful character personalities without breaking the fourth wall.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <Database className="w-8 h-8 text-blue-500" />
                                Technical Challenges Conquered
                            </h2>

                            <div className="space-y-8">
                                <div className="p-8 rounded-3xl glass border border-white/5 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
                                    <h3 className="text-xl font-bold mb-4 text-white">Handling API Latency & Cost</h3>
                                    <p className="text-gray-400 leading-relaxed relative z-10">
                                        Calling LLMs takes time and money. I built a server-side caching layer that maps normalized user messages to corresponding character responses. If a user repeats a greeting or known question, the cache serves it instantly without hitting the OpenRouter endpoint.
                                    </p>
                                </div>

                                <div className="p-8 rounded-3xl glass border border-white/5 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors pointer-events-none" />
                                    <h3 className="text-xl font-bold mb-4 text-white">State Management for Chat</h3>
                                    <p className="text-gray-400 leading-relaxed relative z-10">
                                        Traditional React state resets on refresh. I implemented IndexedDB (idb) into the application to durably map and auto-increment message chains back to their specific `charSlug`, keeping chat loads lightning fast across sessions without breaking state.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Layout className="w-8 h-8 text-pink-500" />
                                Key Features
                            </h2>
                            <ul className="space-y-6 text-lg text-gray-400">
                                <li className="flex gap-4">
                                    <span className="w-2 h-2 rounded-full bg-pink-500 mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                                    <span><strong className="text-white">AI Persona Engine:</strong> Dynamically injected system prompts configure the AI model on the fly to understand a specific character's tagline, personality, and lore.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-2 h-2 rounded-full bg-pink-500 mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                                    <span><strong className="text-white">Dual-Layer Caching Architecture:</strong> Server-side file-based cache intercepts repetitive queries saving API costs, paired with Local State Persistence using IndexedDB wrappers.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-2 h-2 rounded-full bg-pink-500 mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                                    <span><strong className="text-white">Modern Authentication Flow:</strong> Fully secured routes and personalized user experiences powered by Clerk Auth and Webhooks.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-2 h-2 rounded-full bg-pink-500 mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                                    <span><strong className="text-white">Responsive & Accessible Design:</strong> Mobile-first UI with a polished chat interface, dynamic category grids, and Dark/Light theme toggle powered by next-themes.</span>
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
                                    <div key={tech} className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors cursor-default">
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
