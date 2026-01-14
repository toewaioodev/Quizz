import Navbar from '@/components/Navbar';
import { BoltIcon, CpuChipIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Head, Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Welcome() {
    const { t } = useTranslation();

    return (
        <>
            <Head title={t('welcome.welcome_title')} />
            <div className="min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-900 transition-colors duration-300 selection:bg-blue-500 selection:text-white dark:bg-slate-950 dark:text-white">
                <Navbar />

                {/* Hero Section */}
                <main className="relative isolate pt-14">
                    {/* Animated Background */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-blue-500/20 blur-[120px]" />
                        <div className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-purple-500/20 blur-[120px] delay-1000" />
                        <div className="absolute top-[40%] left-[40%] h-[300px] w-[300px] animate-pulse rounded-full bg-indigo-500/10 blur-[100px] delay-500" />
                    </div>

                    <div className="relative z-10 py-24 sm:py-10 lg:pb-40">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <h1 className="text-5xl font-black tracking-tight text-slate-900 drop-shadow-sm sm:text-7xl dark:text-white">
                                    {t('welcome.title')}{' '}
                                    <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
                                        {t('welcome.title_highlight')}
                                    </span>
                                </h1>
                                <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">{t('welcome.subtitle')}</p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <Link
                                        href="/login"
                                        className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/20 transition-all duration-200 hover:scale-105 hover:shadow-blue-500/40"
                                    >
                                        {t('welcome.cta_start')}
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="group flex items-center gap-1 text-sm leading-6 font-semibold text-slate-900 dark:text-white"
                                    >
                                        {t('welcome.cta_learn')}{' '}
                                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            {/* Stats / Features Grid */}
                            <div className="mt-20 flow-root sm:mt-24">
                                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                                        {[
                                            {
                                                icon: BoltIcon,
                                                title: t('welcome.feature_realtime'),
                                                desc: t('welcome.feature_realtime_desc'),
                                                color: 'text-blue-500',
                                            },
                                            {
                                                icon: CpuChipIcon,
                                                title: t('welcome.feature_ai'),
                                                desc: t('welcome.feature_ai_desc'),
                                                color: 'text-purple-500',
                                            },
                                            {
                                                icon: TrophyIcon,
                                                title: t('welcome.feature_competitive'),
                                                desc: t('welcome.feature_competitive_desc'),
                                                color: 'text-yellow-500',
                                            },
                                            {
                                                icon: UserGroupIcon,
                                                title: t('welcome.feature_community'),
                                                desc: t('welcome.feature_community_desc'),
                                                color: 'text-green-500',
                                            },
                                        ].map((feature, idx) => (
                                            <div key={idx} className="group mx-auto flex max-w-xs flex-col gap-y-4">
                                                <div
                                                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-slate-800 ${feature.color} transition-transform duration-300 group-hover:scale-110`}
                                                >
                                                    <feature.icon className="h-8 w-8" />
                                                </div>
                                                <div className="space-y-1">
                                                    <dt className="text-sm leading-7 font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                                                        {feature.title}
                                                    </dt>
                                                    <dd className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                                        {feature.desc}
                                                    </dd>
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
                <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
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
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li>
                                        <Link href="/features" className="hover:text-blue-500">
                                            Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing" className="hover:text-blue-500">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq" className="hover:text-blue-500">
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="hover:text-blue-500">
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4 text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">Legal</h3>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li>
                                        <Link href="/privacy" className="hover:text-blue-500">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms" className="hover:text-blue-500">
                                            Terms of Service
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row dark:border-slate-800">
                            <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                                &copy; {new Date().getFullYear()} Quizz Inc. All rights reserved.
                            </p>
                            <div className="flex space-x-6">
                                <a
                                    key="Github"
                                    href="https://github.com/toewaioo/quizz"
                                    className="text-xs font-bold tracking-wider text-slate-400 uppercase hover:text-slate-500 dark:hover:text-slate-300"
                                >
                                    Github
                                </a>
                            </div>
                            <span className="text-xs text-slate-400 italic">{t('welcome.footer')}</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
