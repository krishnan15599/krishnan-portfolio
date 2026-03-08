"use client";

import { motion } from "framer-motion";
import { User, Code2, Globe, Sparkles } from "lucide-react";

const stats = [
    { icon: User, label: "Experience", value: "2+ Years" },
    { icon: Code2, label: "Tech Stack", value: "Angular | React" },
    { icon: Globe, label: "Impact", value: "100+ Businesses" },
];

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                            Hey, I'm Krishnan — turning complex SaaS requirements into <span className="text-blue-500">intuitive solutions</span>.
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                I'm a software engineer passionate about building scalable, user-centric products in high-stakes SaaS environments. At <span className="text-white">Msgkart</span>, I develop omnichannel communication platforms that power WhatsApp Business, RCS messaging, and real-time analytics.
                            </p>
                            <p>
                                With strong roots in Angular & TypeScript, I create maintainable component architectures, real-time WebSocket UIs, and performance-optimized flows.
                            </p>
                            <p>
                                I thrive in Agile teams — from sprint planning to production monitoring — always prioritizing accessibility (WCAG), bundle optimization, and business impact.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl glass flex flex-col items-center text-center"
                                >
                                    <stat.icon className="w-6 h-6 text-blue-400 mb-3" />
                                    <span className="text-xl font-bold text-white mb-1">{stat.value}</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden glass relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 z-0" />
                            <div className="h-full w-full flex items-center justify-center relative z-10 p-12">
                                {/* This would be an image, using a placeholder icon for now or I can generate something */}
                                <Sparkles className="w-32 h-32 text-blue-500/40 animate-pulse" />
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="absolute top-10 right-10 p-4 glass rounded-2xl z-20 hidden md:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute bottom-10 left-10 p-4 glass rounded-2xl z-20 hidden md:block"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-gray-400 uppercase">Current Stack</span>
                                    <span className="text-sm font-bold">Angular / Next.js</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
