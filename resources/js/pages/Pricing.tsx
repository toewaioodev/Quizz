import Navbar from '@/components/Navbar';
import { CheckIcon } from '@heroicons/react/24/outline';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
    const { t } = useTranslation();

    const plans = ['free', 'pro', 'team'];

    return (
        <>
            <Head title={t('pricing.title')} />
            <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white">
                <Navbar />
                <main className="mx-auto max-w-7xl px-6 py-16">
                    <div className="mb-16 text-center">
                        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                            {t('pricing.title')}
                        </h1>
                        <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-400">{t('pricing.subtitle')}</p>
                    </div>

                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
                        {plans.map((plan) => (
                            <div
                                key={plan}
                                className={`relative flex flex-col rounded-3xl p-8 ${plan === 'pro' ? 'ring-opacity-50 scale-105 bg-slate-900 text-white shadow-2xl ring-4 ring-blue-600 dark:bg-slate-800' : 'border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/50'}`}
                            >
                                {plan === 'pro' && (
                                    <div className="absolute top-0 right-0 -mt-1 -mr-1 h-24 w-24 overflow-hidden rounded-tr-3xl">
                                        <div className="absolute top-[32px] left-[-25px] w-[170px] rotate-45 transform bg-blue-600 py-1 text-center font-semibold text-white">
                                            Popular
                                        </div>
                                    </div>
                                )}
                                <h3 className={`mb-2 text-xl font-bold ${plan === 'pro' ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                                    {t(`pricing.${plan}_name`)}
                                </h3>
                                <div className="mb-6 flex items-baseline gap-1">
                                    <span className="text-4xl font-extrabold">{t(`pricing.${plan}_price`)}</span>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">/{t('pricing.month')}</span>
                                </div>
                                <ul className="mb-8 flex-1 space-y-4">
                                    {[1, 2, 3, 4].map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm">
                                            <CheckIcon className={`h-5 w-5 flex-shrink-0 ${plan === 'pro' ? 'text-blue-400' : 'text-blue-600'}`} />
                                            <span className={plan === 'pro' ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}>
                                                {t(`pricing.${plan}_feature_${feature}`)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full rounded-xl px-6 py-3 font-bold transition-all ${plan === 'pro' ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600'}`}
                                >
                                    {t(`pricing.${plan}_cta`)}
                                </button>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}
