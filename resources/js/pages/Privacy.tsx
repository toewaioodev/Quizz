import Navbar from '@/components/Navbar';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Privacy() {
    const { t } = useTranslation();

    return (
        <>
            <Head title={t('privacy.title')} />
            <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white">
                <Navbar />
                <main className="mx-auto max-w-4xl px-6 py-16">
                    <h1 className="mb-8 text-4xl font-bold">{t('privacy.title')}</h1>
                    <div className="prose dark:prose-invert max-w-none space-y-6">
                        <section>
                            <h2 className="mb-4 text-2xl font-bold">{t('privacy.section1_title')}</h2>
                            <p className="text-slate-600 dark:text-slate-400">{t('privacy.section1_content')}</p>
                        </section>
                        <section>
                            <h2 className="mb-4 text-2xl font-bold">{t('privacy.section2_title')}</h2>
                            <p className="text-slate-600 dark:text-slate-400">{t('privacy.section2_content')}</p>
                        </section>
                        <section>
                            <h2 className="mb-4 text-2xl font-bold">{t('privacy.section3_title')}</h2>
                            <p className="text-slate-600 dark:text-slate-400">{t('privacy.section3_content')}</p>
                        </section>
                        <p className="mt-12 text-sm text-slate-500">
                            {t('privacy.last_updated')}: {new Date().toLocaleDateString()}
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
