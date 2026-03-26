"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const MOBILE_SCREENSHOTS = ["01-booking-mobile", "02-email-confirmation", "03-admin-mobile", "04-appointments"];

function getImageDimensions(src: string) {
  const isMobile = MOBILE_SCREENSHOTS.some((s) => src.includes(s));
  return isMobile ? { width: 900, height: 1260 } : { width: 1800, height: 1260 };
}

export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
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
        {alt && (
          <p className="mt-3 text-center text-sm text-white/80">{alt}</p>
        )}
        <button
          onClick={onClose}
          aria-label="Bezarás"
          className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg"
          style={{ zIndex: 60 }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
