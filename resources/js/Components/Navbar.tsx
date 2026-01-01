import { Link, usePage } from '@inertiajs/react';
import { SharedData } from '../types';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import Dropdown from './DropDown';
import { ChevronDownIcon, UserIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    const { auth } = usePage<SharedData>().props;
    const { t } = useTranslation();

    return (
        <header className="bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">

                {/* Logo & Brand */}
                <Link href="/lobby" className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                        Q
                    </div>
                    <span className="font-extrabold text-xl tracking-tight text-slate-800 dark:text-white">
                        Quizz
                    </span>
                </Link>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-4">
                    <ThemeSwitcher />
                    <LanguageSwitcher />

                    {/* Divider */}
                    <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>

                    {/* User Profile */}
                    {/* <Link href="/profile" className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                            {auth.user.name.charAt(0)}
                        </div>
                        <span className="text-sm font-semibold truncate max-w-[100px] text-slate-700 dark:text-slate-200">
                            {auth.user.name}
                        </span>
                    </Link> */}
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none">
                                <div className="cursor-pointer w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
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

                    {/* Logout */}
                    {/* <Link
                        href='/logout'
                        method="post"
                        as="button"
                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
                        title="Logout"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </Link> */}
                </div>
            </div>
        </header>
    );
}
