import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import imageCompression from 'browser-image-compression';
import React, { Fragment, useRef, useState } from 'react';
import ReactCrop, { Crop, makeAspectCrop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number) {
    return centerCrop(
        makeAspectCrop(
            {
                unit: '%',
                width: 90,
            },
            aspect,
            mediaWidth,
            mediaHeight,
        ),
        mediaWidth,
        mediaHeight,
    );
}

function centerCrop(crop: Crop, mediaWidth: number, mediaHeight: number) {
    const { width, height } = crop;
    const x = (mediaWidth - width) / 2;
    const y = (mediaHeight - height) / 2;

    return { ...crop, x, y };
}

interface ImageCropperProps {
    isOpen: boolean;
    imageSrc: string | null;
    onClose: () => void;
    onCropComplete: (croppedFile: File) => void;
}

export default function ImageCropper({ isOpen, imageSrc, onClose, onCropComplete }: ImageCropperProps) {
    const [crop, setCrop] = useState<Crop>();
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
    const imgRef = useRef<HTMLImageElement>(null);
    const [aspect, setAspect] = useState<number | undefined>(1);
    const [processing, setProcessing] = useState(false);

    const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        if (aspect) {
            const { width, height } = e.currentTarget;
            setCrop(centerAspectCrop(width, height, aspect));
        }
    };

    const getCroppedImg = async (image: HTMLImageElement, crop: PixelCrop, fileName: string): Promise<File> => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            throw new Error('No 2d context');
        }

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height,
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(async (blob) => {
                if (!blob) {
                    reject(new Error('Canvas is empty'));
                    return;
                }

                // Compress the image
                const file = new File([blob], fileName, { type: 'image/jpeg' });
                const options = {
                    maxSizeMB: 0.5, // 500KB
                    maxWidthOrHeight: 500, // Resize to max 500px
                    useWebWorker: true,
                };

                try {
                    const compressedFile = await imageCompression(file, options);
                    resolve(compressedFile);
                } catch (error) {
                    reject(error);
                }

            }, 'image/jpeg', 0.9);
        });
    };

    const handleSave = async () => {
        if (completedCrop && imgRef.current && imageSrc) {
            setProcessing(true);
            try {
                const croppedFile = await getCroppedImg(imgRef.current, completedCrop, 'avatar.jpg');
                onCropComplete(croppedFile);
                onClose();
            } catch (e) {
                console.error(e);
            } finally {
                setProcessing(false);
            }
        }
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
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
                            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-slate-800">
                                <DialogTitle
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-slate-900 dark:text-white mb-4"
                                >
                                    Crop Profile Photo
                                </DialogTitle>

                                <div className="mt-2 flex justify-center">
                                    {imageSrc && (
                                        <ReactCrop
                                            crop={crop}
                                            onChange={(_, percentCrop) => setCrop(percentCrop)}
                                            onComplete={(c) => setCompletedCrop(c)}
                                            aspect={aspect}
                                            circularCrop
                                        >
                                            <img
                                                ref={imgRef}
                                                alt="Crop me"
                                                src={imageSrc}
                                                onLoad={onImageLoad}
                                                className="max-h-[60vh] object-contain"
                                            />
                                        </ReactCrop>
                                    )}
                                </div>

                                <div className="mt-4 flex justify-end gap-2">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 dark:bg-slate-700 dark:text-gray-200 dark:hover:bg-slate-600"
                                        onClick={onClose}
                                        disabled={processing}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50"
                                        onClick={handleSave}
                                        disabled={!completedCrop || processing}
                                    >
                                        {processing ? 'Processing...' : 'Save & Crop'}
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
