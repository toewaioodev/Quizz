import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 font-sans p-4">
            <Head title="Register" />

            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-3xl" />

                <div className="text-center mb-8 relative z-10">
                    <Link href="/" className="inline-block mb-4 hover:scale-105 transition-transform duration-300">
                        <div className="h-16 w-16 mx-auto rounded-2xl bg-gradient-to-tr from-pink-600 to-orange-600 flex items-center justify-center text-white font-bold text-3xl shadow-xl shadow-pink-500/30">
                            Q
                        </div>
                    </Link>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
                        Get Started
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">
                        Create your challenger profile
                    </p>
                </div>

                <form onSubmit={submit} className="space-y-5 relative z-10">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 pl-1" htmlFor="name">
                            Display Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full pl-4 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-pink-500 dark:focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            autoFocus
                            placeholder="Your Username"
                        />
                        {errors.name && <div className="text-red-500 text-xs mt-1.5 font-bold pl-1 animate-pulse">{errors.name}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 pl-1" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full pl-4 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-pink-500 dark:focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            placeholder="name@example.com"
                        />
                        {errors.email && <div className="text-red-500 text-xs mt-1.5 font-bold pl-1 animate-pulse">{errors.email}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 pl-1" htmlFor="password">
                            Password
                        </label>
                        <div className="relative group">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                className="w-full pl-4 pr-12 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-pink-500 dark:focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                required
                                placeholder="Create a password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                            >
                                {showPassword ? (
                                    <EyeSlashIcon className="w-5 h-5" />
                                ) : (
                                    <EyeIcon className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                        {errors.password && <div className="text-red-500 text-xs mt-1.5 font-bold pl-1 animate-pulse">{errors.password}</div>}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 pl-1" htmlFor="password_confirmation">
                            Confirm Password
                        </label>
                        <div className="relative group">
                            <input
                                id="password_confirmation"
                                type={showConfirmPassword ? 'text' : 'password'}
                                className="w-full pl-4 pr-12 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-pink-500 dark:focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                                placeholder="Confirm your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                            >
                                {showConfirmPassword ? (
                                    <EyeSlashIcon className="w-5 h-5" />
                                ) : (
                                    <EyeIcon className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full py-4 px-6 bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-500 hover:to-orange-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-pink-500/30 transform transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-2 disabled:transform-none"
                    >
                        {processing ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Creating Account...
                            </span>
                        ) : (
                            'Sign Up'
                        )}
                    </button>

                    <div className="text-center pt-2">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="text-pink-600 dark:text-pink-400 font-bold hover:underline decoration-2 underline-offset-2 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
                            >
                                Log in
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
