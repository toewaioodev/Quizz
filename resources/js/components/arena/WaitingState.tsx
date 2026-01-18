import { useTranslation } from 'react-i18next';

export default function WaitingState() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center space-y-8 py-10">
            <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/20 duration-1000"></div>
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                    <span className="text-4xl">📡</span>
                </div>
            </div>
            <div className="text-center">
                <h2 className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-3xl font-bold text-transparent">{t('Searching for Opponent')}</h2>
                <p className="mt-2 text-slate-400">{t('Connecting to global matchmaking server...')}</p>
            </div>
            <button onClick={() => window.history.back()} className="mt-8 rounded-full border border-white/10 px-6 py-2 text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
                {t('Cancel')}
            </button>
        </div>
    );
}
