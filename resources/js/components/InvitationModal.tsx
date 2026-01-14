import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import axios from 'axios';
import { router } from '@inertiajs/react';
import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface InvitationModalProps {
    isOpen: boolean;
    inviterName: string;
    inviterAvatar?: string;
    matchId: string;
    onClose: () => void;
}

export default function InvitationModal({ isOpen, inviterName, inviterAvatar, matchId, onClose }: InvitationModalProps) {
    const { t } = useTranslation();

    const [isAccepting, setIsAccepting] = useState(false);

    const handleAccept = () => {
        setIsAccepting(true);
        axios.post(`/match/${matchId}/accept`)
            .then(() => {
                onClose();
                setTimeout(() => {
                    router.visit(`/arena/${matchId}`);
                }, 100);
            })
            .catch(error => {
                onClose();
                console.error("Failed to join match", error);
                alert("Failed to join match. It may be full or expired.");
                setIsAccepting(false);

            });
    };

    const handleDecline = () => {
        if (isAccepting) return;
        onClose();
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[100]" onClose={handleDecline}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-slate-900">
                                <DialogTitle
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                                >
                                    {t('Game Invitation')}
                                </DialogTitle>
                                <div className="mt-4 flex flex-col items-center">
                                    <div className="relative mb-4 h-24 w-24">
                                        <div className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-20"></div>
                                        <img
                                            src={inviterAvatar || `https://ui-avatars.com/api/?name=${inviterName}`}
                                            alt={inviterName}
                                            className="relative h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg dark:border-slate-800"
                                        />
                                    </div>
                                    <p className="mb-6 text-center text-gray-500 dark:text-gray-400">
                                        <span className="font-bold text-gray-900 dark:text-white">{inviterName}</span> {t('has challenged you to a battle!')}
                                    </p>

                                    <div className="flex w-full gap-3">
                                        <button
                                            type="button"
                                            disabled={isAccepting}
                                            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none disabled:opacity-50 dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:bg-gray-800"
                                            onClick={handleDecline}
                                        >
                                            {t('Decline')}
                                        </button>
                                        <button
                                            type="button"
                                            disabled={isAccepting}
                                            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-blue-500/40 focus:outline-none disabled:opacity-70 disabled:hover:scale-100"
                                            onClick={handleAccept}
                                        >
                                            {isAccepting ? (
                                                <>
                                                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                                    {t('Joining...')}
                                                </>
                                            ) : (
                                                t('Accept')
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
