import { ChartBarIcon, HomeIcon, UserIcon } from '@heroicons/react/24/outline';
import { Link, usePage } from '@inertiajs/react'; // Cleaned up unused import
import { Swords } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function BottomNav() {
    const { url } = usePage();
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Hide on scroll logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show if scrolling up or at the top
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true);
            }
            // Hide if scrolling down and past threshold
            else if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navItems = [
        {
            name: 'Home',
            href: '/',
            icon: HomeIcon,
            active: url === '/' || url.startsWith('/dashboard'),
        },
        {
            name: 'Battle',
            href: '/lobby',
            icon: Swords,
            active: url.startsWith('/lobby'),
        },
        {
            name: 'Leaderboard',
            href: '/leaderboard',
            icon: ChartBarIcon,
            active: url.startsWith('/leaderboard'),
        },
        {
            name: 'Me',
            href: '/profile',
            icon: UserIcon,
            active: url.startsWith('/profile'),
        },
    ];

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 p-4 pb-6 md:hidden transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-[200%]'
                }`}
        >
            {/* Glassmorphism Pill Container */}
            <div className="mx-auto flex max-w-sm items-center justify-between rounded-2xl border border-white/10 bg-slate-900/80 px-6 py-3 shadow-2xl backdrop-blur-lg backdrop-saturate-150 supports-[backdrop-filter]:bg-slate-900/60 dark:border-slate-800 dark:bg-slate-950/80">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`group flex flex-col items-center gap-1 transition-all duration-300 ${item.active ? 'scale-110' : 'opacity-60 hover:opacity-100'
                            }`}
                    >
                        <div
                            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${item.active
                                ? 'bg-gradient-to-tr from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30'
                                : 'bg-transparent group-hover:bg-white/5'
                                }`}
                        >
                            <item.icon
                                className={`h-5 w-5 transition-colors ${item.active ? 'text-white' : 'text-slate-400 dark:text-slate-300'
                                    }`}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
