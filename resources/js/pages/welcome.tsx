import { Head, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { BoltIcon, CpuChipIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

export default function Welcome() {
    const { t } = useTranslation();

    return (
        <>
            <Head title={t('welcome.welcome_title')} />
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans transition-colors duration-300 overflow-x-hidden selection:bg-blue-500 selection:text-white">
                <Navbar />

                {/* Hero Section */}
                <main className="relative isolate pt-14">
                    {/* Animated Background */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-blue-500/20 blur-[120px]" />
                        <div className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-purple-500/20 blur-[120px] delay-1000" />
                        <div className="absolute top-[40%] left-[40%] h-[300px] w-[300px] animate-pulse rounded-full bg-indigo-500/10 blur-[100px] delay-500" />
                    </div>

                    <div className="py-24 sm:py-32 lg:pb-40 relative z-10">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-7xl drop-shadow-sm">
                                    {t('welcome.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">{t('welcome.title_highlight')}</span>
                                </h1>
                                <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
                                    {t('welcome.subtitle')}
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <Link
                                        href="/login"
                                        className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200"
                                    >
                                        {t('welcome.cta_start')}
                                    </Link>
                                    <Link href="/about" className="group text-sm font-semibold leading-6 text-slate-900 dark:text-white flex items-center gap-1">
                                        {t('welcome.cta_learn')} <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Stats / Features Grid */}
                            <div className="mt-20 flow-root sm:mt-24">
                                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                                        {[
                                            { icon: BoltIcon, title: t('welcome.feature_realtime'), desc: t('welcome.feature_realtime_desc'), color: 'text-blue-500' },
                                            { icon: CpuChipIcon, title: t('welcome.feature_ai'), desc: t('welcome.feature_ai_desc'), color: 'text-purple-500' },
                                            { icon: TrophyIcon, title: t('welcome.feature_competitive'), desc: t('welcome.feature_competitive_desc'), color: 'text-yellow-500' },
                                            { icon: UserGroupIcon, title: t('welcome.feature_community'), desc: t('welcome.feature_community_desc'), color: 'text-green-500' },
                                        ].map((feature, idx) => (
                                            <div key={idx} className="mx-auto flex max-w-xs flex-col gap-y-4 group">
                                                <div className={`mx-auto h-14 w-14 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                                    <feature.icon className="h-8 w-8" />
                                                </div>
                                                <div className="space-y-1">
                                                    <dt className="text-sm font-bold leading-7 text-slate-500 dark:text-slate-400 uppercase tracking-wider">{feature.title}</dt>
                                                    <dd className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{feature.desc}</dd>
                                                </div>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-white/80 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 backdrop-blur-sm">
                    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                                        Q
                                    </div>
                                    <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                                        Quizz
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
                                    Experience the next generation of quiz games. Powered by AI and real-time technology.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Product</h3>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li><Link href="/features" className="hover:text-blue-500">Features</Link></li>
                                    <li><Link href="/pricing" className="hover:text-blue-500">Pricing</Link></li>
                                    <li><Link href="/faq" className="hover:text-blue-500">FAQ</Link></li>
                                    <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Legal</h3>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li><Link href="/privacy" className="hover:text-blue-500">Privacy Policy</Link></li>
                                    <li><Link href="/terms" className="hover:text-blue-500">Terms of Service</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                                &copy; {new Date().getFullYear()} Quizz Inc. All rights reserved.
                            </p>
                            <div className="flex space-x-6">
                                {/* Placeholder Social Icons */}
                                {['Twitter', 'GitHub', 'Discord'].map((social) => (
                                    <a key={social} href="#" className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 text-xs uppercase font-bold tracking-wider">
                                        {social}
                                    </a>
                                ))}
                            </div>
                            <span className="text-slate-400 text-xs italic">{t('welcome.footer')}</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
