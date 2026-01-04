import { User } from '@/types';
import { useTranslation } from 'react-i18next';

interface ArenaHeaderProps {
    user: User;
    opponent: User | null;
    score: number;
    opponentScore: number;
    timer: number;
    currentQuestionIndex?: number;
    status: string;
    opponentPresent: boolean;
}

export default function ArenaHeader({
    user,
    opponent,
    score,
    opponentScore,
    timer,
    currentQuestionIndex = 0,
    status,
    opponentPresent
}: ArenaHeaderProps) {
    const { t } = useTranslation();

    return (
        <div className="w-full max-w-4xl z-20 mb-6 px-4">
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/50 p-4 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/50">

                {/* User Side */}
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <img
                            src={user.profile_photo_url || user.avatar}
                            alt={user.name}
                            className="h-12 w-12 rounded-full border-2 border-blue-500 object-cover shadow-md"
                        />
                        <div className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 border-white bg-green-500 dark:border-slate-900"></div>
                    </div>
                    <div className="hidden flex-col md:flex">
                        <span className="font-bold text-slate-900 dark:text-white max-w-[100px] truncate">{user.name}</span>
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{t('YOU')}</span>
                    </div>
                    <div className="ml-2 flex flex-col items-center rounded-lg bg-blue-100 px-3 py-1 dark:bg-blue-900/30">
                        <span className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400">{t('Score')}</span>
                        <span className="text-xl font-black text-blue-700 dark:text-blue-300">{score}</span>
                    </div>
                </div>

                {/* Center Status / Timer
                <div className="flex flex-col items-center">
                    {status === 'QUESTION_ACTIVE' ? (
                        <div className="relative flex items-center justify-center">
                            <div className="absolute inset-0 animate-pulse rounded-full bg-indigo-500/20 blur-xl"></div>
                            <div className={`flex h-16 w-16 items-center justify-center rounded-full border-4 shadow-lg backdrop-blur-sm transition-colors duration-300 ${timer < 5 ? 'border-red-500 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400' :
                                    'border-indigo-500 bg-white text-indigo-600 dark:bg-slate-800 dark:text-indigo-400'
                                }`}>
                                <span className="text-2xl font-black">{timer}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="rounded-full bg-slate-100 px-4 py-2 font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                            {status === 'WAITING_FOR_OPPONENT' ? t('Waiting...') :
                                status === 'STARTING' ? t('Get Ready') :
                                    status === 'GAME_OVER' ? t('Finished') :
                                        `${t('Round')} ${currentQuestionIndex + 1}`}
                        </div>
                    )}
                </div> */}
                {/* VS / Timer Centerpiece */}
                <div className="flex flex-col items-center">
                    {status === 'QUESTION_ACTIVE' || status === 'ROUND_RESULT' ? (
                        <div
                            className={`relative flex h-16 w-16 items-center justify-center rounded-full border-4 shadow-xl transition-all duration-300 md:h-20 md:w-20 ${timer <= 5 ? 'scale-110 border-red-500 bg-red-500/10' : 'border-white bg-white dark:border-slate-700 dark:bg-slate-800'}`}
                        >
                            <span className={`text-2xl font-black md:text-4xl ${timer <= 5 ? 'text-red-500' : 'text-slate-800 dark:text-white'}`}>
                                {timer}
                            </span>
                            <svg className="pointer-events-none absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
                                <circle
                                    className="stroke-current text-slate-200 opacity-20 dark:text-slate-700"
                                    strokeWidth="8"
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                />
                                <circle
                                    className={`stroke-current transition-all duration-1000 ease-linear ${timer <= 5 ? 'text-red-500' : 'text-blue-500'}`}
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    strokeDasharray="251.2"
                                    strokeDashoffset={251.2 - (251.2 * timer) / 15}
                                />
                            </svg>
                        </div>
                    ) : (
                        <div className="text-2xl font-black text-slate-300 italic md:text-4xl dark:text-slate-700">
                            {status === 'STARTING' ? 'VS' : status === 'WAITING_FOR_OPPONENT' ? t('WAITING') : ''}
                        </div>
                    )}
                    <div className="mt-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase md:text-xs">
                        {currentQuestionIndex ? `${t('Round')} ${currentQuestionIndex}/5` : ''}
                    </div>
                </div>

                {/* Opponent Side */}
                <div className="flex items-center gap-3 justify-end">
                    <div className="mr-2 flex flex-col items-center rounded-lg bg-purple-100 px-3 py-1 dark:bg-purple-900/30">
                        <span className="text-xs font-bold uppercase text-purple-600 dark:text-purple-400">{t('Score')}</span>
                        <span className="text-xl font-black text-purple-700 dark:text-purple-300">{opponentScore}</span>
                    </div>
                    <div className="hidden flex-col items-end md:flex">
                        <span className="font-bold text-slate-900 dark:text-white max-w-[100px] truncate text-right">
                            {opponent ? opponent.name : t('Searching...')}
                        </span>
                        <span className="text-xs font-bold text-purple-600 dark:text-purple-400">{t('OPPONENT')}</span>
                    </div>
                    <div className="relative">
                        {opponent ? (
                            <img
                                src={opponent.profile_photo_url || opponent.avatar}
                                alt={opponent.name}
                                className="h-12 w-12 rounded-full border-2 border-purple-500 object-cover shadow-md"
                            />
                        ) : (
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-300 bg-slate-200 dark:border-slate-700 dark:bg-slate-800">
                                <span className="text-xl">?</span>
                            </div>
                        )}

                        {opponent && (
                            <div className={`absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 border-white dark:border-slate-900 ${opponentPresent ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]' : 'bg-red-500'
                                }`}></div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
