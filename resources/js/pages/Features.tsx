import Navbar from '@/components/Navbar';
import { BoltIcon, ChartBarIcon, CpuChipIcon, GlobeAltIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

const icons: Record<string, any> = {
    realtime: BoltIcon,
    ai: CpuChipIcon,
    competitive: TrophyIcon,
    community: UserGroupIcon,
    global: GlobeAltIcon,
    stats: ChartBarIcon,
};

export default function Features() {
    const { t } = useTranslation();

    const featureKeys = ['realtime', 'ai', 'competitive', 'community', 'global', 'stats'];

    return (
        <>
            <Head title={t('features.title')} />
            <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white">
                <Navbar />
                <main className="mx-auto max-w-7xl px-6 py-16">
                    <div className="mb-16 text-center">
                        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                            {t('features.title')}
                        </h1>
                        <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-400">{t('features.subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {featureKeys.map((key) => {
                            const Icon = icons[key] || BoltIcon;
                            return (
                                <div
                                    key={key}
                                    className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
                                >
                                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold">{t(`features.${key}_title`)}</h3>
                                    <p className="leading-relaxed text-slate-600 dark:text-slate-400">{t(`features.${key}_desc`)}</p>
                                </div>
                            );
                        })}
                    </div>
                </main>
            </div>
        </>
    );
}
