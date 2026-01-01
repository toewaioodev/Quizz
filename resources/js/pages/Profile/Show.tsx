import React from 'react';
import { Head, usePage, useForm } from '@inertiajs/react';
import { SharedData } from '../../types';
import Navbar from '../../Components/Navbar';
import { useTranslation } from 'react-i18next';

export default function Profile({ status }: { status?: string }) {
    const { t } = useTranslation();
    const user = usePage<SharedData>().props.auth.user;

    const { data, setData, patch, processing, recentlySuccessful } = useForm({
        settings: {
            difficulty: user.settings?.difficulty || 'medium',
        },
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-gray-100 transition-colors duration-300">
            <Head title="Profile" />
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
                <div className="bg-white dark:bg-slate-900 shadow sm:rounded-lg p-6 space-y-6">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            {t('Profile Information')}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {t("Update your account's profile information and settings.")}
                        </p>
                    </header>

                    <div className="space-y-4">
                        <div>
                            <label className="block font-medium text-sm text-gray-700 dark:text-gray-300">
                                {t('Name')}
                            </label>
                            <div className="mt-1 p-2 bg-gray-100 dark:bg-slate-800 rounded-md">
                                {user.name}
                            </div>
                        </div>

                        <div>
                            <label className="block font-medium text-sm text-gray-700 dark:text-gray-300">
                                {t('Email')}
                            </label>
                            <div className="mt-1 p-2 bg-gray-100 dark:bg-slate-800 rounded-md">
                                {user.email}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 shadow sm:rounded-lg p-6 space-y-6">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            {t('App Settings')}
                        </h2>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {t('Customize your experience within the application.')}
                        </p>
                    </header>

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <label htmlFor="difficulty" className="block font-medium text-sm text-gray-700 dark:text-gray-300">
                                {t('Default Difficulty')}
                            </label>
                            <select
                                id="difficulty"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                                value={data.settings.difficulty}
                                onChange={(e) => setData('settings', { ...data.settings, difficulty: e.target.value })}
                            >
                                <option value="easy">{t('Easy')}</option>
                                <option value="medium">{t('Medium')}</option>
                                <option value="hard">{t('Hard')}</option>
                            </select>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                {t('This difficulty will be selected by default when you start a quiz.')}
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                            >
                                {t('Save')}
                            </button>

                            {recentlySuccessful && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {t('Saved.')}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
