import { Dialog, DialogPanel } from '@headlessui/react';
import { ArrowRightOnRectangleIcon, Bars3Icon, ChevronDownIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SharedData } from '../types';
import Dropdown from './DropDown';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
    const { auth } = usePage<SharedData>().props;
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/80">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo & Brand */}
                <Link href="/home" className="group flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 text-xl font-bold text-white shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-105">
                        Q
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-slate-800 dark:text-white">Quizz</span>
                </Link>

                {/* Desktop Right Side Actions */}
                <div className="hidden items-center space-x-4 md:flex">
                    <ThemeSwitcher />
                    <LanguageSwitcher />

                    {/* Divider */}
                    <div className="hidden h-6 w-px bg-slate-200 sm:block dark:bg-slate-700"></div>

                    {/* User Profile */}
                    {auth.user ? (
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600 focus:outline-none dark:text-gray-200 dark:hover:text-indigo-400">
                                    <div className="flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 text-xs font-bold text-white shadow-md ring-2 ring-white/20">
                                        <img src={auth.user.profile_photo_url} alt={auth.user.name} className="h-full w-full object-cover" />
                                    </div>
                                    <ChevronDownIcon className="hidden h-4 w-4 sm:block" />
                                </button>
                            </Dropdown.Trigger>

                            <Dropdown.Content
                                width="48"
                                contentClasses="py-1 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-xl rounded-xl"
                            >
                                <div className="border-b border-gray-100 px-4 py-3 dark:border-gray-700">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Signed in as</p>
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{auth.user.email}</p>
                                </div>

                                <Dropdown.Link
                                    href="/profile"
                                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50"
                                >
                                    <UserIcon className="mr-2 h-4 w-4" />
                                    Profile
                                </Dropdown.Link>

                                <div className="my-1 border-t border-gray-100 dark:border-gray-700" />

                                <Dropdown.Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="flex w-full items-center px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                                >
                                    <ArrowRightOnRectangleIcon className="mr-2 h-4 w-4" />
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link
                                href="/login"
                                className="px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-purple-600 dark:text-slate-200 dark:hover:text-purple-400"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/register"
                                className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:scale-105 hover:shadow-blue-500/40"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <LanguageSwitcher />
                    <ThemeSwitcher />

                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-7 w-7" aria-hidden="true" />
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar Dialog */}
            <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm dark:bg-black/50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 transition-transform duration-300 ease-in-out sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-slate-900">
                    <div className="flex items-center justify-between">
                        <Link href="/welcome" className="-m-1.5 flex items-center space-x-3 p-1.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 text-lg font-bold text-white">
                                Q
                            </div>
                            <span className="text-lg font-bold text-slate-800 dark:text-white">Quizz</span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/20">
                            <div className="space-y-2 py-6">
                                {/* Add main nav links here if any were hidden on desktop, currently most are actions */}
                            </div>

                            <div className="space-y-4 py-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-base leading-7 font-semibold text-gray-900 dark:text-white">{t('Appearance')}</span>
                                    <ThemeSwitcher />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-base leading-7 font-semibold text-gray-900 dark:text-white">{t('Language')}</span>
                                    <LanguageSwitcher />
                                </div>

                                <div className="my-4 border-t border-gray-200 dark:border-gray-700" />

                                {auth.user ? (
                                    <>
                                        <div className="flex items-center gap-3 px-3 py-2">
                                            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 text-sm font-bold text-white shadow-md ring-2 ring-white/20">
                                                <img src={auth.user.profile_photo_url} alt={auth.user.name} className="h-full w-full object-cover" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{auth.user.name}</span>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">{auth.user.email}</span>
                                            </div>
                                        </div>
                                        <Link
                                            href="/profile"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800"
                                        >
                                            {t('Profile')}
                                        </Link>
                                        <Link
                                            href="/logout"
                                            method="post"
                                            as="button"
                                            className="-mx-3 block w-full rounded-lg px-3 py-2.5 text-left text-base leading-7 font-semibold text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/10"
                                        >
                                            Log out
                                        </Link>
                                    </>
                                ) : (
                                    <div className="flex flex-col gap-3">
                                        <Link
                                            href="/login"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="block w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2.5 text-center text-base leading-7 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
