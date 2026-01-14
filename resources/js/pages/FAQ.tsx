import Navbar from '@/components/Navbar';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
    const { t } = useTranslation();

    return (
        <>
            <Head title={t('faq.title')} />
            <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white">
                <Navbar />
                <main className="mx-auto max-w-4xl px-6 py-16">
                    <div className="mb-16 text-center">
                        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                            {t('faq.title')}
                        </h1>
                        <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-400">{t('faq.subtitle')}</p>
                    </div>

                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <Disclosure
                                as="div"
                                key={item}
                                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
                            >
                                <DisclosureButton className="group flex w-full items-center justify-between text-left">
                                    <span className="text-lg font-semibold text-slate-900 dark:text-white">{t(`faq.q${item}`)}</span>
                                    <ChevronDownIcon className="h-5 w-5 text-slate-500 transition-transform group-data-[open]:rotate-180" />
                                </DisclosureButton>
                                <DisclosurePanel className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
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
