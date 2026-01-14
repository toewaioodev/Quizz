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
        <div className="md:px-4 z-20 w-full max-w-5xl px-2">
            <div className="relative flex items-center justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-3 shadow-2xl backdrop-blur-xl transition-all md:p-4">
                {/* Decorative Glows */}
                <div className="pointer-events-none absolute -left-10 top-0 h-24 w-24 bg-blue-500/20 blur-[50px]"></div>
                <div className="pointer-events-none absolute -right-10 bottom-0 h-24 w-24 bg-purple-500/20 blur-[50px]"></div>

                {/* Left: User */}
                <div className="flex flex-1 items-center gap-2 md:gap-4">
                    <div className="relative">
                        <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-blue-500/50 md:h-14 md:w-14 md:ring-4">
                            <img
                                src={user.profile_photo_url || user.avatar}
                                alt={user.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[8px] md:h-5 md:w-5 md:text-[10px]">
                            🔵
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="max-w-[70px] truncate text-xs font-bold text-white md:max-w-[120px] md:text-base">
                            {user.name}
                        </span>
                        <div className="flex items-center gap-1">
                            <div className="flex items-center rounded-md bg-blue-500/20 px-1.5 py-0.5 text-blue-300 md:px-2 md:py-1">
                                <span className="text-[10px] font-black tracking-wide md:text-xs">PTS</span>
                                <span className="ml-1 text-xs font-black text-white md:ml-1.5 md:text-sm">{score}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center: Timer / VS */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {status === 'QUESTION_ACTIVE' || status === 'ROUND_RESULT' ? (
                        <div className="relative flex items-center justify-center">
                            {/* Pulse Effect */}
                            {timer <= 5 && (
                                <div className="absolute h-full w-full animate-ping rounded-full bg-red-500/30 opacity-75"></div>
                            )}

                            <div className="relative h-14 w-14 md:h-20 md:w-20">
                                <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        className="text-slate-700/50"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        strokeDasharray="283"
                                        strokeDashoffset={283 - (283 * timer) / 15}
                                        className={`transition-all duration-1000 ease-linear ${timer <= 5 ? 'text-red-500 shadow-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]'
                                            }`}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className={`text-xl font-black md:text-3xl ${timer <= 5 ? 'scale-110 text-red-400' : 'text-white'} transition-all`}>
                                        {timer}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 font-black text-slate-500 backdrop-blur-md md:h-16 md:w-16">
                            <span className="text-sm md:text-xl">VS</span>
                        </div>
                    )}
                </div>

                {/* Right: Opponent */}
                <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
                    <div className="flex flex-col items-end">
                        <span className="max-w-[70px] truncate text-xs font-bold text-white md:max-w-[120px] md:text-base">
                            {opponent ? opponent.name : t('Waiting...')}
                        </span>
                        <div className="flex items-center gap-1">
                            <div className="flex items-center rounded-md bg-purple-500/20 px-1.5 py-0.5 text-purple-300 md:px-2 md:py-1">
                                <span className="text-[10px] font-black tracking-wide md:text-xs">PTS</span>
                                <span className="ml-1 text-xs font-black text-white md:ml-1.5 md:text-sm">{opponentScore}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className={`h-10 w-10 overflow-hidden rounded-full ring-2 transition-all md:h-14 md:w-14 md:ring-4 ${opponent ? 'ring-purple-500/50' : 'ring-slate-700'}`}>
                            {opponent ? (
                                <img
                                    src={opponent.profile_photo_url || opponent.avatar}
                                    alt={opponent.name}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="flex h-full w-full animate-pulse items-center justify-center bg-slate-800 text-slate-500">
                                    ?
                                </div>
                            )}
                        </div>
                        {opponent && (
                            <div className={`absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-slate-900 md:h-5 md:w-5 ${opponentPresent ? 'bg-green-500' : 'bg-red-500'}`}>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Round Indicator Below */}
            {currentQuestionIndex > 0 && (
                <div className="mt-2 flex justify-center">
                    <div className="rounded-full bg-black/30 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white/50 backdrop-blur-sm uppercase">
                        Round {currentQuestionIndex}/5
                    </div>
                </div>
            )}
        </div>
    );
}
