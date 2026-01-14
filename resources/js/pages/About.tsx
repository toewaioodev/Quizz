import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <>
            <Head title={t('about.title')} />
            <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white">
                <Navbar />
                <main className="mx-auto max-w-4xl px-6 py-12">
                    <h1 className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
                        {t('about.title')}
                    </h1>
                    <div className="prose dark:prose-invert max-w-none space-y-6">
                        <p className="text-lg text-slate-700 dark:text-slate-300">{t('about.description')}</p>
                        <h2 className="mt-8 mb-4 text-2xl font-semibold">{t('about.mission_title')}</h2>
                        <p className="text-slate-600 dark:text-slate-400">{t('about.mission_desc')}</p>
                        <h2 className="mt-8 mb-4 text-2xl font-semibold">{t('about.team_title')}</h2>
                        <p className="text-slate-600 dark:text-slate-400">{t('about.team_desc')}</p>
                    </div>
                </main>
            </div>
        </>
    );
}
