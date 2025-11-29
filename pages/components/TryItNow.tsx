import React, { useState, useEffect, useRef } from 'react';
import { UploadCloud, FileText, CheckCircle, ArrowRight, Terminal } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const TryItNow: React.FC = () => {
    const { t } = useLanguage();
    const [status, setStatus] = useState<'idle' | 'uploading' | 'complete'>('idle');
    const [progress, setProgress] = useState(0);
    const [fileData, setFileData] = useState<{ name: string; size: string } | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (status === 'uploading') {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setTimeout(() => setStatus('complete'), 500);
                        return 100;
                    }
                    const increment = Math.random() * 8;
                    return Math.min(prev + increment, 100);
                });
            }, 100);
            return () => clearInterval(interval);
        }
    }, [status]);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            let sizeStr = '';
            if (file.size < 1024 * 1024) {
                sizeStr = `${(file.size / 1024).toFixed(1)} KB`;
            } else {
                sizeStr = `${(file.size / (1024 * 1024)).toFixed(1)} MB`;
            }

            setFileData({
                name: file.name,
                size: sizeStr
            });
            setStatus('uploading');
            setProgress(0);
        }
    };

    const handleReset = () => {
        setStatus('idle');
        setProgress(0);
        setFileData(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <section className="py-32 bg-canvas relative overflow-hidden border-t border-black/5">

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="font-mono text-xs font-bold mb-4 tracking-widest uppercase text-accent-orange border border-accent-orange/20 inline-block px-3 py-1 bg-orange-50">{t('tryItNow.systemDemo')}</div>
                    <h2 className="text-5xl md:text-6xl font-serif italic mb-4 text-black">{t('tryItNow.ingestData')}</h2>
                    <p className="text-gray-600 font-mono text-sm max-w-xl mx-auto">
                        {t('tryItNow.processDescription')}
                    </p>
                </div>

                {/* The Upload Card - Technical Terminal Style */}
                <div className="bg-white border-2 border-black sharp shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto overflow-hidden">

                    {/* Terminal Header */}
                    <div className="bg-black text-white p-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Terminal size={14} />
                            <span className="font-mono text-[10px] uppercase tracking-wider">{t('tryItNow.protocol')}</span>
                        </div>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 bg-white/20"></div>
                            <div className="w-2 h-2 bg-white/20"></div>
                        </div>
                    </div>

                    <div className="p-12 min-h-[350px] flex flex-col items-center justify-center relative bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-fixed">

                        {status === 'idle' && (
                            <>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    className="hidden"
                                    accept=".pdf,.png,.jpg,.jpeg,.docx"
                                />
                                <div
                                    onClick={handleUploadClick}
                                    className="w-full h-full flex flex-col items-center justify-center text-center cursor-pointer group animate-in fade-in duration-500"
                                >
                                    <div className="w-24 h-24 border-2 border-dashed border-gray-300 flex items-center justify-center mb-6 group-hover:border-black group-hover:bg-gray-50 transition-all sharp">
                                        <UploadCloud className="text-gray-400 group-hover:text-black transition-colors" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-serif italic mb-2">{t('tryItNow.selectSource')}</h3>
                                    <p className="text-gray-400 text-xs font-mono mb-8 uppercase tracking-wide">
                                        {t('tryItNow.supports')}
                                    </p>

                                    <button className="px-6 py-2 bg-black text-white font-mono text-xs sharp uppercase tracking-widest hover:bg-accent-deepBlue transition-colors">
                                        {t('tryItNow.browseFiles')}
                                    </button>
                                </div>
                            </>
                        )}

                        {status === 'uploading' && (
                            <div className="w-full max-w-sm animate-in fade-in duration-300">
                                <div className="border border-black p-4 mb-6 bg-white sharp flex items-start gap-4 shadow-sm">
                                    <FileText className="text-black mt-1" size={20} />
                                    <div className="flex-1 min-w-0">
                                        <div className="font-bold text-sm font-mono truncate">
                                            {fileData?.name}
                                        </div>
                                        <div className="text-[10px] text-gray-500 font-mono mt-1">
                                            SIZE: {fileData?.size} | STATUS: {t('tryItNow.parsing')}
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="h-4 w-full border border-black p-0.5 sharp mb-2">
                                    <div
                                        className="h-full bg-accent-deepBlue transition-all duration-300 ease-out"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between text-[10px] font-mono text-gray-500">
                                    <span>{t('tryItNow.processingChunks')}</span>
                                    <span>{Math.round(progress)}%</span>
                                </div>
                            </div>
                        )}

                        {status === 'complete' && (
                            <div className="w-full flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="w-16 h-16 border-2 border-green-600 text-green-600 sharp flex items-center justify-center mb-6 bg-green-50">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-serif italic mb-2">{t('tryItNow.extractionComplete')}</h3>
                                <p className="text-gray-500 text-xs font-mono uppercase tracking-wide mb-8">
                                    {t('tryItNow.dataExtractedFrom')} <span className="text-black font-bold">{fileData?.name}</span>
                                </p>

                                <div className="flex flex-col w-full max-w-xs gap-3">
                                    <button className="w-full py-4 bg-black text-white font-mono font-bold text-xs uppercase tracking-widest hover:bg-accent-deepBlue transition-colors flex items-center justify-center gap-2 sharp shadow-lg">
                                        {t('tryItNow.accessReport')} <ArrowRight size={14} />
                                    </button>
                                    <button onClick={handleReset} className="w-full py-3 text-gray-500 font-mono text-[10px] uppercase tracking-widest hover:text-black underline transition-colors">
                                        {t('tryItNow.processNewFile')}
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Status Footer */}
                    <div className="bg-gray-100 border-t border-black p-2 flex justify-between items-center text-[9px] font-mono text-gray-500 uppercase tracking-wider">
                        <div>
                            {t('tryItNow.avgProcessingTime')}
                        </div>
                        <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${status === 'uploading' ? 'bg-orange-500 animate-pulse' : 'bg-green-500'}`}></div>
                            {t('tryItNow.secureConnection')}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TryItNow;