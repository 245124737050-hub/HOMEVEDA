import { useState } from 'react';
import { Download, Smartphone, X } from 'lucide-react';
import { Language } from '../types/remedy';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  lang: Language;
  variant?: 'primary' | 'subtle';
}

export function PWAInstallButton({ lang, variant = 'subtle' }: PWAInstallButtonProps) {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={install}
        className={
          variant === 'primary'
            ? 'inline-flex items-center gap-2 min-h-[42px] px-4 py-2 rounded-xl bg-[#3E6248] text-white text-xs sm:text-sm font-semibold hover:bg-[#2F4D38] transition-colors whitespace-nowrap shrink-0 cursor-pointer'
            : 'inline-flex items-center gap-2 min-h-[38px] px-3.5 py-1.5 rounded-xl border border-[#C6D6C8] bg-[#EEF3EE] text-xs font-semibold text-[#26412E] hover:bg-[#DCE7DD] transition-colors whitespace-nowrap shrink-0 cursor-pointer'
        }
      >
        <Download className="w-4 h-4 shrink-0" />
        <span>{lang === 'en' ? 'Install Offline App' : 'ఆఫ్‌లైన్ యాప్ ఇన్‌స్టాల్ చేయండి'}</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className="inline-flex items-center gap-2 min-h-[38px] px-3.5 py-1.5 rounded-xl border border-[#D8D3C5] bg-white text-xs font-medium text-[#2A352C] hover:bg-[#F2EEE4] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <Smartphone className="w-4 h-4 shrink-0 text-[#3E6248]" />
          <span>{lang === 'en' ? 'Add to Home Screen' : 'హోమ్ స్క్రీన్‌కు జోడించండి'}</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div
              role="dialog"
              aria-modal="true"
              className="w-full max-w-sm rounded-2xl bg-[#FAF8F3] border border-[#DFDAD0] p-6 space-y-4 shadow-xl"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-[#1D261F]">
                  {lang === 'en' ? 'Install HomeVeda on iPhone / iPad' : 'iPhone / iPad లో ఇన్‌స్టాల్ చేయండి'}
                </h3>
                <button
                  type="button"
                  onClick={() => setShowIOSGuide(false)}
                  aria-label="Close"
                  className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-[#546156] hover:bg-[#EFEBE0] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <ol className="space-y-2 text-sm text-[#324235] leading-relaxed">
                <li>
                  {lang === 'en'
                    ? '1. Tap the Share button in Safari’s toolbar.'
                    : '1. Safari టూల్‌బార్‌లో ఉన్న Share బటన్‌ను నొక్కండి.'}
                </li>
                <li>
                  {lang === 'en'
                    ? '2. Scroll down and tap Add to Home Screen to access your saved remedies offline anytime.'
                    : '2. క్రిందికి స్క్రోల్ చేసి Add to Home Screen నొక్కండి — అప్పుడు ఇంటర్నెట్ లేకపోయినా మీ సేవ్ చేసిన చిట్కాలను చూడవచ్చు.'}
                </li>
              </ol>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="w-full min-h-[42px] rounded-xl bg-[#3E6248] text-white text-sm font-medium hover:bg-[#2F4D38] transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Got it' : 'సరే'}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
}
