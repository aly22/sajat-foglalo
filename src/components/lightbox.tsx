"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const MOBILE_SCREENSHOTS = ["booking-form", "email-confirmation", "barber-calendar", "weekly-summary", "email-waitlist", "email-cancellation", "email-rating", "email-reminder", "email-reschedule"];

function getImageDimensions(src: string) {
  const isMobile = MOBILE_SCREENSHOTS.some((s) => src.includes(s));
  return isMobile ? { width: 1260, height: 1260 } : { width: 1800, height: 1260 };
}

export function Lightbox({
  src,
  alt,
  onClose,
  onPrev,
  onNext,
  counter,
}: {
  src: string;
  alt: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  counter?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          </div>
        )}
        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={4}
          doubleClick={{ mode: "toggle", step: 2 }}
        >
          <TransformComponent
            wrapperStyle={{ width: "100%", height: "100%" }}
          >
            <Image
              src={src}
              alt={alt}
              {...getImageDimensions(src)}
              onLoad={() => setLoaded(true)}
              className={`max-h-[85vh] w-auto rounded-lg object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          </TransformComponent>
        </TransformWrapper>
        {(alt || counter) && (
          <div className="mt-3 text-center text-sm text-white/80">
            {alt && <p>{alt}</p>}
            {counter && <p className="mt-1 text-white/50">{counter}</p>}
          </div>
        )}
        {onPrev && (
          <button
            onClick={onPrev}
            aria-label="Előző"
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white shadow-lg"
            style={{ zIndex: 60 }}
          >
            ‹
          </button>
        )}
        {onNext && (
          <button
            onClick={onNext}
            aria-label="Következő"
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white shadow-lg"
            style={{ zIndex: 60 }}
          >
            ›
          </button>
        )}
        <button
          onClick={onClose}
          aria-label="Bezárás"
          className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg"
          style={{ zIndex: 60 }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
