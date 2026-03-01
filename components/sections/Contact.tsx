"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, ArrowRight } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="p-8 md:p-16 rounded-[3rem] glass border border-white/5 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]"
                            >
                                Let's Build Something <span className="text-gradient">Great</span>
                            </motion.h2>

                            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                                I'm open to frontend roles in SaaS/product companies, especially Angular-heavy stacks or real-time platforms.
                            </p>

                            <div className="space-y-6">
                                <a href="mailto:Krishnan15599@gmail.com" className="flex items-center gap-6 group">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 uppercase font-bold tracking-widest mb-1">Email Me</div>
                                        <div className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">Krishnan15599@gmail.com</div>
                                    </div>
                                </a>

                                <a href="tel:+919994094528" className="flex items-center gap-6 group">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 uppercase font-bold tracking-widest mb-1">Call Me</div>
                                        <div className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">+91 99940 94528</div>
                                    </div>
                                </a>
                            </div>

                            <div className="mt-12 flex gap-4">
                                {[
                                    { icon: Linkedin, href: "#", color: "hover:bg-blue-600" },
                                    { icon: Github, href: "#", color: "hover:bg-gray-800" },
                                ].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`p-4 rounded-2xl bg-white/5 border border-white/5 text-gray-400 hover:text-white transition-all ${social.color}`}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-400 ml-1">Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full p-4 rounded-2xl bg-white/5 border border-white/5 focus:border-blue-500/50 outline-none focus:ring-1 focus:ring-blue-500/20 transition-all text-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-400 ml-1">Email</label>
                                        <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-2xl bg-white/5 border border-white/5 focus:border-blue-500/50 outline-none focus:ring-1 focus:ring-blue-500/20 transition-all text-white" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-400 ml-1">Message</label>
                                    <textarea placeholder="Hi Krishnan, I'd like to talk about..." rows={5} className="w-full p-4 rounded-2xl bg-white/5 border border-white/5 focus:border-blue-500/50 outline-none focus:ring-1 focus:ring-blue-500/20 transition-all text-white resize-none" />
                                </div>
                                <button className="w-full py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center justify-center gap-2 transition-all group overflow-hidden relative shadow-lg shadow-blue-600/20">
                                    <span className="relative z-10">Send Message</span>
                                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

            <footer className="mt-24 py-12 border-t border-white/5 text-center">
                <p className="text-gray-500 text-sm">
                    © 2026 Krishnan K | Built with Next.js + Tailwind | Hosted on Vercel
                </p>
            </footer>
        </section>
    );
}
