import { useTranslation } from 'react-i18next';

export default function MatchFoundState() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center space-y-8 animate-in zoom-in duration-300">
            <div className="relative h-40 w-40">
                <div className="absolute inset-0 animate-ping rounded-full bg-green-500/30 duration-700"></div>
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl shadow-green-500/50">
                    <span className="text-6xl">⚔️</span>
                </div>
            </div>
            <div className="text-center">
                <h1 className="text-5xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
                    {t('MATCH FOUND!')}
                </h1>
                <p className="mt-4 text-xl font-medium text-emerald-400">{t('Prepare for battle...')}</p>
            </div>
        </div>
    );
}
