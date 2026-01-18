import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface QuestionDisplayProps {
    currentQuestion: any;
    status: string;
    lastRoundResult: any;
    hasAnswered: boolean;
    opponentAnswered: boolean;
    submitAnswer: (answer: string) => void;
    userAnswer: string | null;
}

const QuestionDisplay = memo(({ currentQuestion, status, lastRoundResult, hasAnswered, opponentAnswered, submitAnswer, userAnswer }: QuestionDisplayProps) => {
    const { t, i18n } = useTranslation();
    const isBurmese = i18n.language === 'my';

    const displayText = isBurmese && currentQuestion.text_my ? currentQuestion.text_my : currentQuestion.text;
    const displayOptions = isBurmese && currentQuestion.options_my ? currentQuestion.options_my : currentQuestion.options;

    // Animation delay for staggered reveal
    const getDelay = (index: number) => `${index * 10}ms`;

    // Play sound for correct/wrong answer on ROUND_RESULT
    useEffect(() => {
        if (status === 'ROUND_RESULT' && lastRoundResult && hasAnswered) {
            if (lastRoundResult.correct_option === userAnswer) {
                // Correct answer sound
                const audio = new Audio('/sounds/correct.mp3');
                audio.play().catch(() => { });
            } else {
                // Wrong answer sound
                const audio = new Audio('/sounds/wrong.mp3');
                audio.play().catch(() => { });
            }
        }
    }, [status, lastRoundResult, hasAnswered, userAnswer]);

    return (
        <div className="flex w-full flex-col">
            {/* Question Card */}
            <div className="relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl backdrop-blur-xl md:mb-10 md:p-10">
                {/* Top Glow */}
                <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[50px]"></div>

                <div className="relative z-10">
                    <span className="mb-4 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[10px] font-black tracking-widest text-blue-300 uppercase shadow-[0_0_10px_rgba(59,130,246,0.2)] md:text-xs">
                        {currentQuestion.category}
                    </span>
                    <h2 className="text-xl font-black leading-tight tracking-tight text-white md:text-3xl md:leading-snug">
                        {displayText}
                    </h2>
                </div>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 gap-3 md:gap-4">
                {displayOptions.map((opt: string, idx: number) => {
                    const canonicalOption = currentQuestion.options[idx];
                    const isSelected = userAnswer === canonicalOption;
                    const isCorrect = lastRoundResult?.correct_option === canonicalOption;
                    const showResult = status === 'ROUND_RESULT';

                    // Base Style
                    let buttonStyle = "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:border-white/20 hover:text-white";
                    let icon = <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-xs font-bold">{String.fromCharCode(65 + idx)}</span>;

                    // Interaction States
                    if (hasAnswered) {
                        buttonStyle = "opacity-50 cursor-default border-transparent bg-black/20 text-slate-500";
                        if (isSelected) {
                            buttonStyle = "border-blue-500/50 bg-blue-500/20 text-blue-200 opacity-100 ring-2 ring-blue-500/30";
                            icon = (
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white shadow-lg shadow-blue-500/40">
                                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                </div>
                            )
                        }
                    }

                    if (showResult) {
                        if (isCorrect) {
                            buttonStyle = "border-green-500 bg-green-500/20 text-white shadow-[0_0_30px_rgba(34,197,94,0.3)] scale-[1.02] z-10 ring-1 ring-green-400/50 opacity-100";
                            icon = (
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white shadow-lg shadow-green-500/40">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </div>
                            )
                        } else if (isSelected) {
                            buttonStyle = "border-red-500/50 bg-red-500/20 text-red-200 ring-1 ring-red-500/30 opacity-80";
                            icon = (
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-white shadow-lg shadow-red-500/40">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                                </div>
                            )
                        } else {
                            buttonStyle = "opacity-30 grayscale border-transparent bg-black/20";
                        }
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => submitAnswer(currentQuestion.options[idx])}
                            disabled={hasAnswered || showResult}
                            className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200 active:scale-[0.98] md:p-5 ${buttonStyle}`}
                            style={{ animationDelay: getDelay(idx) }}
                        >
                            <div className="shrink-0">{icon}</div>
                            <span className="text-base font-bold tracking-tight md:text-lg">{opt}</span>
                        </button>
                    );
                })}
            </div>

            {/* Opponent Answered Indicator */}
            {opponentAnswered && !lastRoundResult && (
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full px-4 md:-right-10 md:px-0">
                    {/* On Mobile showing this might be hard, so we make it absolute or fixed toast style */}
                </div>
            )}
            {opponentAnswered && !lastRoundResult && (
                <div className="pointer-events-none fixed bottom-24 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2 backdrop-blur-md md:bottom-10">
                    <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                    </span>
                    <span className="text-sm font-bold tracking-wide text-red-200 uppercase">{t('Opponent Answered')}</span>
                </div>
            )}
        </div>
    );
});

export default QuestionDisplay;
