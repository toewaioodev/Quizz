import Navbar from '@/components/Navbar';
import { BoltIcon, CpuChipIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Head, Link } from '@inertiajs/react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import React, { useRef } from 'react';

function Hero3D() {
    const { t } = useTranslation();
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set((clientX - left) / width - 0.5);
        y.set((clientY - top) / height - 0.5);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    return (
        <main className="relative isolate pt-14" onMouseMove={onMouseMove}>
            {/* Animated Background */}
            {/* <div className="absolute inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] animate-pulse rounded-full bg-blue-200/40 dark:bg-blue-600/20 blur-[120px]" />
                <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] animate-pulse rounded-full bg-purple-200/40 dark:bg-purple-600/20 blur-[120px] delay-1000" />
                <div className="absolute top-[20%] left-[50%] h-[400px] w-[400px] -translate-x-1/2 animate-pulse rounded-full bg-indigo-200/30 dark:bg-indigo-500/10 blur-[100px] delay-500" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div> */}

            <div className="relative z-10 py-1 lg:pb-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-x-16 lg:items-center">
                        {/* Left Content */}
                        <div className="max-w-2xl text-center lg:col-span-6 lg:text-left z-20 relative">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-6 backdrop-blur-md dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                                    </span>
                                    Next Gen Quiz Platform
                                </div>
                                <h1 className="text-5xl font-black tracking-tight text-slate-900 drop-shadow-sm sm:text-7xl dark:text-white">
                                    {t('welcome.title')}{' '}
                                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                                        {t('welcome.title_highlight')}
                                    </span>
                                </h1>
                                <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300">
                                    {t('welcome.subtitle')}
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                    <Link
                                        href="/login"
                                        className="relative overflow-hidden rounded-2xl bg-slate-900 dark:bg-white px-8 py-4 text-base font-bold text-white dark:text-slate-900 shadow-xl shadow-blue-500/20 transition-transform hover:scale-105 active:scale-95"
                                    >
                                        <span className="relative z-10">{t('welcome.cta_start')}</span>
                                        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-100 dark:to-indigo-100 opacity-0 transition-opacity hover:opacity-10 dark:hover:opacity-100"></div>
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="group flex items-center gap-1 text-sm leading-6 font-semibold text-slate-900 dark:text-white transition-colors hover:text-blue-600 dark:hover:text-blue-300"
                                    >
                                        {t('welcome.cta_learn')}{' '}
                                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right 3D Scene */}
                        <div className="mt-16 lg:mt-0 lg:col-span-6 perspective-1000">
                            <motion.div
                                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                                className="relative aspect-square max-w-lg mx-auto lg:mr-0"
                            >
                                {/* Main Card - Float Center */}
                                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(50px)" }}>
                                    <div className="w-64 h-80 rounded-3xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-slate-900/60 backdrop-blur-xl shadow-2xl p-6 flex flex-col items-center gap-4 transition-colors">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-0.5">
                                            <div className="w-full h-full rounded-full bg-white dark:bg-slate-950 flex items-center justify-center">
                                                <TrophyIcon className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-black text-slate-900 dark:text-white">Victory!</div>
                                            <div className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">+250 PTS</div>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-800/50 rounded-xl p-3 mt-auto">
                                            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                                                <span>Accuracy</span>
                                                <span className="text-green-500 dark:text-green-400">92%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <div className="h-full w-[92%] bg-green-500 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Element 1 - Top Left */}
                                <motion.div
                                    className="absolute top-10 left-0 w-40 p-4 rounded-2xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-slate-800/60 backdrop-blur-md shadow-xl transition-colors"
                                    style={{ transform: "translateZ(80px) translate(-20%, -20%)" }}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center">
                                            <BoltIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 dark:text-slate-400">Speed</div>
                                            <div className="text-sm font-bold text-slate-900 dark:text-white">1.2s</div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Element 2 - Bottom Right */}
                                <motion.div
                                    className="absolute bottom-20 right-0 w-48 p-4 rounded-2xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-slate-800/60 backdrop-blur-md shadow-xl transition-colors"
                                    style={{ transform: "translateZ(100px) translate(20%, 20%)" }}
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="w-8 h-8 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center">
                                                <UserGroupIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                            </div>
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 dark:text-slate-400">Live Match</div>
                                            <div className="text-sm font-bold text-slate-900 dark:text-white">Searching...</div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Element 3 - Behind */}
                                <div
                                    className="absolute inset-0 rounded-full border border-blue-500/10 dark:border-blue-500/20 border-dashed animate-[spin_10s_linear_infinite]"
                                    style={{ transform: "translateZ(-50px) scale(1.2)" }}
                                ></div>
                                <div
                                    className="absolute inset-0 rounded-full border border-purple-500/5 dark:border-purple-500/10 border-dashed animate-[spin_15s_linear_infinite_reverse]"
                                    style={{ transform: "translateZ(-80px) scale(1.5)" }}
                                ></div>
                            </motion.div>
                        </div>
                    </div>


                    {/* Bento Grid Features */}
                    <div className="mt-32 sm:mt-40">
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">Everything you need to compete</h2>
                            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Advanced features powered by modern web technology.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                            {/* Feature 1 - Large */}
                            <div className="md:col-span-2 relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 group">
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors"></div>
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                                        <BoltIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('welcome.feature_realtime')}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{t('welcome.feature_realtime_desc')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 group">
                                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[80px] group-hover:bg-purple-500/20 dark:group-hover:bg-purple-500/30 transition-colors"></div>
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                                        <CpuChipIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('welcome.feature_ai')}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{t('welcome.feature_ai_desc')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 group">
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-full blur-[80px] group-hover:bg-yellow-500/20 dark:group-hover:bg-yellow-500/30 transition-colors"></div>
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 dark:bg-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-4">
                                        <TrophyIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('welcome.feature_competitive')}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{t('welcome.feature_competitive_desc')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 4 - Large */}
                            <div className="md:col-span-2 relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 group">
                                <div className="absolute bottom-0 right-0 -mr-16 -mb-16 w-64 h-64 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-[80px] group-hover:bg-green-500/20 dark:group-hover:bg-green-500/30 transition-colors"></div>
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className="w-12 h-12 rounded-2xl bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                                        <UserGroupIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t('welcome.feature_community')}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{t('welcome.feature_community_desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default function Welcome() {
    const { t } = useTranslation();

    return (
        <>
            <Head title={t('welcome.welcome_title')} />
            <div className="min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-900 transition-colors duration-300 selection:bg-blue-500 selection:text-white dark:bg-slate-950 dark:text-white">
                <Navbar />
                <Hero3D />

                {/* Footer */}
                <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/50">
                    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 text-lg font-bold text-white">
                                        Q
                                    </div>
                                    <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">Quizz</span>
                                </div>
                                <p className="max-w-xs text-sm text-slate-500 dark:text-slate-400">
                                    Experience the next generation of quiz games. Powered by AI and real-time technology.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-4 text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">Product</h3>
                                <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                    <li>
                                        <Link href="/features" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                            Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4 text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">Legal</h3>
                                <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                    <li>
                                        <Link href="/privacy" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                            Terms of Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row dark:border-white/10">
                            <p className="text-xs leading-5 text-slate-500 dark:text-slate-500">
                                &copy; {new Date().getFullYear()} Quizz Inc. All rights reserved.
                            </p>
                            <div className="flex space-x-6">
                                <a
                                    key="Github"
                                    href="https://github.com/toewaioo/quizz"
                                    className="text-xs font-bold tracking-wider text-slate-400 uppercase hover:text-slate-500 dark:hover:text-slate-300 dark:text-slate-400"
                                >
                                    Github
                                </a>
                            </div>
                            <span className="text-xs text-slate-500 italic">{t('welcome.footer')}</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
