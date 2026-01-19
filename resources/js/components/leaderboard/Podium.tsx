import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import { Link } from '@inertiajs/react';

interface PodiumPlayer {
    rank: number;
    name: string;
    avatar: string;
    points: number;
    id?: number;
    username?: string;
}

interface PodiumProps {
    players: PodiumPlayer[];
}

export function Podium({ players }: PodiumProps) {
    // Reorder for visual: 2nd, 1st, 3rd
    const ordered = [players[1], players[0], players[2]];

    return (
        <div className="flex items-end justify-center gap-14 px-4 pt-6 pb-2 sm:gap-5 sm:px-6 sm:pt-8 sm:pb-4">
            {ordered.map((player, index) => {
                const isFirst = player.rank === 1;
                const heights = ['h-20 sm:h-24', 'h-28 sm:h-32', 'h-16 sm:h-20'];
                const avatarSizes = ['w-11 h-11 sm:w-14 sm:h-14', 'w-12 h-12 sm:w-14 sm:h-14', 'w-10 h-10 sm:w-14 sm:h-14'];

                return (
                    <motion.div
                        key={player.rank}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index, type: 'spring' }}
                        className="flex flex-col items-center"
                    >
                        <Link href={`/u/${player.username || player.id}`} className="flex flex-col items-center group">
                            {/* Avatar */}
                            <div className={`relative mb-1.5 sm:mb-2 ${isFirst ? 'animate-float' : ''}`}>
                                {isFirst && (
                                    <motion.div
                                        initial={{ y: -10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="absolute -top-5 left-1/2 -translate-x-1/2 sm:-top-6"
                                    >
                                        <Crown className="h-5 w-5 fill-yellow-400 text-yellow-400 sm:h-6 sm:w-6" />
                                    </motion.div>
                                )}
                                <div className={`rounded-full p-0.5 transition-all group-hover:scale-105 ${isFirst ? 'gradient-success glow-success' : 'bg-border'}`}>
                                    <div className={`${avatarSizes[index]} bg-card overflow-hidden rounded-full`}>
                                        <img src={player.avatar} alt={player.name} className="h-full w-full object-cover" />
                                    </div>
                                </div>
                            </div>

                            <span className="text-card-foreground mb-0.5 max-w-[60px] truncate text-xs font-semibold transition-colors group-hover:text-blue-400 sm:mb-1 sm:max-w-[80px] sm:text-sm">
                                {player.name}
                            </span>
                            <span className="text-muted-foreground mb-1.5 text-[10px] sm:mb-2 sm:text-xs">{player.points.toLocaleString()} pts</span>
                        </Link>

                        {/* Podium base */}
                        <div
                            className={`w-16 sm:w-20 ${heights[index]} flex items-start justify-center rounded-t-xl pt-2 sm:rounded-t-2xl sm:pt-3 ${isFirst ? 'gradient-success glow-success' : 'bg-amber-300'
                                }`}
                        >
                            <span
                                className={`font-display text-xl font-bold sm:text-2xl ${isFirst ? 'text-success-foreground' : 'text-card-foreground'
                                    }`}
                            >
                                #{player.rank}
                            </span>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
