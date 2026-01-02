import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { useTranslation } from 'react-i18next';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
    const { t } = useTranslation();

    return (
        <>
            <Head title={t('faq.title')} />
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans transition-colors duration-300">
                <Navbar />
                <main className="max-w-4xl mx-auto px-6 py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                            {t('faq.title')}
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            {t('faq.subtitle')}
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <Disclosure as="div" key={item} className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                <DisclosureButton className="group flex w-full items-center justify-between text-left">
                                    <span className="text-lg font-semibold text-slate-900 dark:text-white">
                                        {t(`faq.q${item}`)}
                                    </span>
                                    <ChevronDownIcon className="w-5 h-5 text-slate-500 group-data-[open]:rotate-180 transition-transform" />
                                </DisclosureButton>
                                <DisclosurePanel className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {t(`faq.a${item}`)}
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}
