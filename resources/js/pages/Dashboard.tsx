import CategoryGrid from '@/components/dashboard/CategoryGrid';
import DashboardHero from '@/components/dashboard/DashboardHero';
import BottomNav from '@/components/BottomNav';
import { Head, Link, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next'; // Assuming I want to translate things here too eventually, but for now just Navbar.
import Navbar from '../components/Navbar';
import { SharedData } from '../types';

// ... imports

export default function Dashboard({ categoryCounts, rank }: { categoryCounts: Record<string, number>; rank: number }) {
    const { t } = useTranslation();
    const user = usePage<SharedData>().props.auth.user;

    const categories = [
        {
            id: 'math',
            name: 'Mathematics',
            icon: '📐',
            color: 'from-blue-500 to-indigo-600',
            desc: 'Numbers, algebra, and geometry',
            image: '/images/math_bg.jpg',
        },
        {
            id: 'science',
            name: 'Science',
            icon: '🧬',
            color: 'from-green-500 to-emerald-600',
            desc: 'Physics, chemistry, and biology',
            image: '/images/science_bg.jpg',
        },
        {
            id: 'history',
            name: 'History',
            icon: '🏛️',
            color: 'from-orange-500 to-amber-600',
            desc: 'World events and civilizations',
            image: '/images/history_bg.jpg',
        },
        {
            id: 'geo',
            name: 'Geography',
            icon: '🌍',
            color: 'from-teal-500 to-cyan-600',
            desc: 'Countries, capitals, and maps',
            image: '/images/geo_bg.jpg',
        },
        {
            id: 'tech',
            name: 'Technology',
            icon: '💻',
            color: 'from-purple-500 to-violet-600',
            desc: 'Computers, coding, and innovations',
            image: '/images/tech_bg.jpg',
        },
        {
            id: 'arts',
            name: 'Arts & Lit',
            icon: '🎨',
            color: 'from-pink-500 to-rose-600',
            desc: 'Paintings, books, and culture',
            image: '/images/arts_bg.jpg',
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100 pb-20 md:pb-0">
            <Head title="Dashboard" />

            {/* Header */}
            <Navbar />

            <main className="mx-auto max-w-7xl  px-4 py-10 sm:px-6 lg:px-8">
                {/* Hero / Stats Section */}
                {/* Background decoration */}

                <DashboardHero user={user} rank={rank} />

                {/* Categories */}
                <CategoryGrid categories={categories} categoryCounts={categoryCounts} />

                <BottomNav />
            </main>
        </div>
    );
}
