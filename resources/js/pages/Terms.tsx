import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { useTranslation } from 'react-i18next';

export default function Terms() {
    const { t } = useTranslation();

    return (
        <>
            <Head title={t('terms.title')} />
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans transition-colors duration-300">
                <Navbar />
                <main className="max-w-4xl mx-auto px-6 py-16">
                    <h1 className="text-4xl font-bold mb-8">{t('terms.title')}</h1>
                    <div className="prose dark:prose-invert max-w-none space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">{t('terms.section1_title')}</h2>
                            <p className="text-slate-600 dark:text-slate-400">{t('terms.section1_content')}</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold mb-4">{t('terms.section2_title')}</h2>
                            <p className="text-slate-600 dark:text-slate-400">{t('terms.section2_content')}</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold mb-4">{t('terms.section3_title')}</h2>
                            <p className="text-slate-600 dark:text-slate-400">{t('terms.section3_content')}</p>
                        </section>
                        <p className="text-sm text-slate-500 mt-12">
                            {t('terms.last_updated')}: {new Date().toLocaleDateString()}
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
