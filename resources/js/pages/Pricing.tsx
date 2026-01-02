import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { useTranslation } from 'react-i18next';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function Pricing() {
    const { t } = useTranslation();

    const plans = ['free', 'pro', 'team'];

    return (
        <>
            <Head title={t('pricing.title')} />
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans transition-colors duration-300">
                <Navbar />
                <main className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                            {t('pricing.title')}
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t('pricing.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {plans.map((plan) => (
                            <div key={plan} className={`relative flex flex-col p-8 rounded-3xl ${plan === 'pro' ? 'bg-slate-900 dark:bg-slate-800 text-white ring-4 ring-blue-600 ring-opacity-50 scale-105 shadow-2xl' : 'bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700'}`}>
                                {plan === 'pro' && (
                                    <div className="absolute top-0 right-0 -mr-1 -mt-1 w-24 h-24 overflow-hidden rounded-tr-3xl">
                                        <div className="absolute transform rotate-45 bg-blue-600 text-center text-white font-semibold py-1 left-[-25px] top-[32px] w-[170px]">
                                            Popular
                                        </div>
                                    </div>
                                )}
                                <h3 className={`text-xl font-bold mb-2 ${plan === 'pro' ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                                    {t(`pricing.${plan}_name`)}
                                </h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-extrabold">{t(`pricing.${plan}_price`)}</span>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">/{t('pricing.month')}</span>
                                </div>
                                <ul className="mb-8 space-y-4 flex-1">
                                    {[1, 2, 3, 4].map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm">
                                            <CheckIcon className={`w-5 h-5 flex-shrink-0 ${plan === 'pro' ? 'text-blue-400' : 'text-blue-600'}`} />
                                            <span className={plan === 'pro' ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}>
                                                {t(`pricing.${plan}_feature_${feature}`)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all ${plan === 'pro' ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white'}`}>
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
