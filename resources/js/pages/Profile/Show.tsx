import React from 'react';
import { Head, usePage, useForm } from '@inertiajs/react';
import { SharedData } from '../../types';
import Navbar from '../../Components/Navbar';
import { useTranslation } from 'react-i18next';

export default function Profile({ status }: { status?: string }) {
    const { t } = useTranslation();
    const user = usePage<SharedData>().props.auth.user;

    const { data, setData, post, processing, recentlySuccessful, errors } = useForm({
        _method: 'PATCH',
        settings: {
            difficulty: user.settings?.difficulty || 'medium',
        },
        photo_url: user.profile_photo_path || '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/profile');
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-gray-100 transition-colors duration-300">
            <Head title="Profile" />
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
                <form onSubmit={submit} className="space-y-6">
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
                            {/* Profile Photo */}
                            <div className="flex items-center space-x-6">
                                <div className="shrink-0">
                                    <img
                                        className="h-16 w-16 object-cover rounded-full border-2 border-slate-200 dark:border-slate-700"
                                        src={data.photo_url || user.profile_photo_url || `https://ui-avatars.com/api/?name=${user.name}`}
                                        alt={user.name}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${user.name}`;
                                        }}
                                    />
                                </div>
                                <div className="grow">
                                    <label htmlFor="photo_url" className="block font-medium text-sm text-gray-700 dark:text-gray-300">
                                        {t('Profile Photo URL')}
                                    </label>
                                    <input
                                        id="photo_url"
                                        type="url"
                                        className="mt-1 block w-full border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm sm:text-sm"
                                        value={data.photo_url}
                                        onChange={(e) => setData('photo_url', e.target.value)}
                                        placeholder="https://example.com/photo.jpg"
                                    />
                                    {errors.photo_url && <div className="text-red-500 text-sm mt-1">{errors.photo_url}</div>}
                                </div>
                            </div>

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

                        <div className="space-y-6">
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
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}
