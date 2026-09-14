"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

export function HeroMedia() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);
  const inViewRef = useRef(true);
  const [videoAllowed, setVideoAllowed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  // Decide si conviene cargar el video: respeta "reducir movimiento", ahorro de datos y conexiones lentas.
  // La carga se difiere hasta que el navegador está libre para no competir con el contenido inicial.
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    const slowNetwork = Boolean(connection?.saveData) || /(^|-)2g$/.test(connection?.effectiveType ?? "");

    const syncPreference = () => setVideoAllowed(!reducedMotion.matches && !slowNetwork);
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(syncPreference, { timeout: 2000 })
      : window.setTimeout(syncPreference, 600);

    reducedMotion.addEventListener("change", syncPreference);
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      reducedMotion.removeEventListener("change", syncPreference);
    };
  }, []);

  // Reproduce solo mientras la portada está visible y la pestaña activa.
  useEffect(() => {
    const video = videoRef.current;
    const hero = wrapperRef.current?.parentElement;
    if (!videoAllowed || !video || !hero) return;

    const sync = () => {
      const shouldPlay = inViewRef.current && !document.hidden && !userPausedRef.current;
      if (shouldPlay && video.paused) void video.play().catch(() => undefined);
      if (!shouldPlay && !video.paused) video.pause();
    };

    const observer = new IntersectionObserver(([entry]) => {
      inViewRef.current = entry.isIntersecting;
      sync();
    }, { threshold: 0.2 });
    observer.observe(hero);

    // En pantallas táctiles, tocar la portada pausa o reanuda el video.
    const handleTap = (event: PointerEvent) => {
      if (event.pointerType === "mouse") return;
      if ((event.target as HTMLElement).closest("a, button")) return;
      userPausedRef.current = !userPausedRef.current;
      setUserPaused(userPausedRef.current);
      sync();
    };

    document.addEventListener("visibilitychange", sync);
    hero.addEventListener("pointerup", handleTap);
    sync();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      hero.removeEventListener("pointerup", handleTap);
    };
  }, [videoAllowed]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    userPausedRef.current = !userPausedRef.current;
    setUserPaused(userPausedRef.current);
    if (userPausedRef.current) video.pause();
    else void video.play().catch(() => undefined);
  };

  const showVideo = videoAllowed && !videoFailed;

  return (
    <>
      <div ref={wrapperRef} className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-video-poster-v2.webp"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="object-cover"
        />

        {videoAllowed && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero-video-poster-v2.webp"
            // React re-dispatches <source> errors to the video; a source skipped by its
            // media query or codec also fires one, so only the last source counts as a real failure.
            onError={(event) => {
              if (event.target === event.currentTarget) setVideoFailed(true);
            }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              showVideo ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Móvil: recorte vertical 720×1280. Escritorio: 1920×1080. AV1 primero, H.264 como respaldo. */}
            <source src="/media/gm-hero-mobile.webm" type='video/webm; codecs="av01.0.05M.10"' media="(max-width: 767px)" />
            <source src="/media/gm-hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
            <source src="/media/gm-hero-1080.webm" type='video/webm; codecs="av01.0.08M.10"' />
            <source src="/media/gm-hero-1080.mp4" type="video/mp4" onError={() => setVideoFailed(true)} />
          </video>
        )}
      </div>

      {/* Control discreto: aparece al pasar el cursor por la portada, con teclado o cuando el video está en pausa. */}
      {showVideo && (
        <button
          type="button"
          onClick={togglePlayback}
          className={`absolute bottom-6 right-6 z-20 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink-2)]/55 px-3 py-1.5 font-sans text-xs font-medium text-white/85 backdrop-blur-sm transition-opacity duration-300 hover:text-white focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-8 lg:right-12 ${
            userPaused ? "opacity-100" : "opacity-0 group-hover/hero:opacity-100"
          }`}
        >
          {userPaused ? <Play className="h-3.5 w-3.5" aria-hidden="true" /> : <Pause className="h-3.5 w-3.5" aria-hidden="true" />}
          {userPaused ? "Reproducir video" : "Pausar video"}
        </button>
      )}
    </>
  );
}
