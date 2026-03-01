"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 w-full text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8 p-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10"
                    >
                        <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
                            Open to new opportunities
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
                        I'm <span className="text-gradient">Krishnan K</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-medium mb-12 leading-relaxed">
                        Frontend Engineer <span className="text-blue-500">|</span> Building Scalable SaaS Experiences
                    </p>

                    <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-16 leading-relaxed">
                        Product-focused developer with 2+ years crafting omnichannel CRM platforms —
                        real-time dashboards, WhatsApp/RCS campaigns, and Angular-powered enterprise UIs at <span className="text-white font-semibold">Msgkart</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.a
                            href="#work"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-white text-gray-950 font-bold flex items-center gap-2 group transition-all"
                        >
                            View My Work
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full glass font-bold flex items-center gap-2 transition-all"
                        >
                            Get in Touch
                            <Mail className="w-4 h-4" />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 uppercase text-[10px] tracking-[0.3em]"
                >
                    <span>Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ArrowDown className="w-4 h-4" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
