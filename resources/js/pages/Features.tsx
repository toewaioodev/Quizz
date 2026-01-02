import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { useTranslation } from 'react-i18next';
import { BoltIcon, CpuChipIcon, TrophyIcon, UserGroupIcon, GlobeAltIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const icons: Record<string, any> = {
    realtime: BoltIcon,
    ai: CpuChipIcon,
    competitive: TrophyIcon,
    community: UserGroupIcon,
    global: GlobeAltIcon,
    stats: ChartBarIcon
};

export default function Features() {
    const { t } = useTranslation();

    const featureKeys = ['realtime', 'ai', 'competitive', 'community', 'global', 'stats'];

    return (
        <>
            <Head title={t('features.title')} />
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans transition-colors duration-300">
                <Navbar />
                <main className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                            {t('features.title')}
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t('features.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featureKeys.map((key) => {
                            const Icon = icons[key] || BoltIcon;
                            return (
                                <div key={key} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{t(`features.${key}_title`)}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {t(`features.${key}_desc`)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </main>
            </div>
        </>
    );
}
