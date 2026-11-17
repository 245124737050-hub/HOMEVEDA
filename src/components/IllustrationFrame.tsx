import { useState } from 'react';
import { Sprout } from 'lucide-react';

interface IllustrationFrameProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}

export function IllustrationFrame({
  src,
  alt,
  fallbackTitle,
  className = '',
}: IllustrationFrameProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#E7EDE6] via-[#F2EDE2] to-[#E5DFD2] text-[#3E6248] p-6 text-center ${className}`}
      >
        <Sprout className="w-10 h-10 mb-3 opacity-80" strokeWidth={1.5} />
        <p className="font-display text-base font-medium text-[#2F4D38]">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
