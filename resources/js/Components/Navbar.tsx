import { Link, usePage } from '@inertiajs/react';
import { SharedData } from '../types';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import Dropdown from './DropDown';
import { ChevronDownIcon, UserIcon, ArrowRightOnRectangleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';

export default function Navbar() {
    const { auth } = usePage<SharedData>().props;
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-300">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">

                {/* Logo & Brand */}
                <Link href="/lobby" className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                        Q
                    </div>
                    <span className="font-extrabold text-xl tracking-tight text-slate-800 dark:text-white">
                        Quizz
                    </span>
                </Link>

                {/* Desktop Right Side Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <ThemeSwitcher />
                    <LanguageSwitcher />

                    {/* Divider */}
                    <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>

                    {/* User Profile */}
                    {auth.user ? (
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none">
                                    <div className="cursor-pointer w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center text-xs font-bold text-white shadow-md ring-2 ring-white/20">
                                        {auth.user.name.charAt(0)}
                                    </div>
                                    <ChevronDownIcon className="hidden sm:block w-4 h-4" />
                                </button>
                            </Dropdown.Trigger>

                            <Dropdown.Content width="48" contentClasses="py-1 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-xl rounded-xl">
                                <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Signed in as</p>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{auth.user.email}</p>
                                </div>

                                <Dropdown.Link href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                    <UserIcon className="w-4 h-4 mr-2" />
                                    Profile
                                </Dropdown.Link>

                                <div className="border-t border-gray-100 dark:border-gray-700 my-1" />

                                <Dropdown.Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 w-full text-left"
                                >
                                    <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link
                                href="/login"
                                className="px-5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/register"
                                className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
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
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 ease-in-out">
                    <div className="flex items-center justify-between">
                        <Link href="/lobby" className="flex items-center space-x-3 -m-1.5 p-1.5">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                                Q
                            </div>
                            <span className="font-bold text-lg text-slate-800 dark:text-white">Quizz</span>
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

                            <div className="py-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Appearance</span>
                                    <ThemeSwitcher />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Language</span>
                                    <LanguageSwitcher />
                                </div>

                                <div className="border-t border-gray-200 dark:border-gray-700 my-4" />

                                {auth.user ? (
                                    <>
                                        <div className="flex items-center gap-3 px-3 py-2">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center text-sm font-bold text-white shadow-md ring-2 ring-white/20">
                                                {auth.user.name.charAt(0)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{auth.user.name}</span>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">{auth.user.email}</span>
                                            </div>
                                        </div>
                                        <Link
                                            href="/profile"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            href="/logout"
                                            method="post"
                                            as="button"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 w-full text-left"
                                        >
                                            Log out
                                        </Link>
                                    </>
                                ) : (
                                    <div className="flex flex-col gap-3">
                                        <Link
                                            href="/login"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="block w-full text-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2.5 text-base font-semibold leading-7 text-white shadow-lg hover:shadow-xl transition-all"
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
