import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <>
            <Head title={t('about.title')} />
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans transition-colors duration-300">
                <Navbar />
                <main className="max-w-4xl mx-auto px-6 py-12">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
                        {t('about.title')}
                    </h1>
                    <div className="prose dark:prose-invert max-w-none space-y-6">
                        <p className="text-lg text-slate-700 dark:text-slate-300">
                            {t('about.description')}
                        </p>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">{t('about.mission_title')}</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            {t('about.mission_desc')}
                        </p>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">{t('about.team_title')}</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            {t('about.team_desc')}
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
