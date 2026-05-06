"use client";

import { Instagram, Twitter, Youtube, Music2 } from "lucide-react";

export function ProfileHeader() {
  return (
    <header className="w-full py-8 px-4 flex flex-col items-center gap-6">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[var(--primary)] font-bold text-xl tracking-widest uppercase">
          LinkPriv
        </span>
      </div>

      {/* Avatar */}
      <div className="relative">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[var(--primary)] to-amber-600 p-1">
          <div className="w-full h-full rounded-full bg-[var(--card)] flex items-center justify-center overflow-hidden">
            <span className="text-4xl md:text-5xl font-bold text-[var(--primary)]">
              M
            </span>
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-[var(--background)]" />
      </div>

      {/* Name & Bio */}
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2">
          Mc Mirella
        </h1>
        <p className="text-[var(--muted-foreground)] text-sm md:text-base max-w-xs">
          Cantora e compositora. Conteudo exclusivo apenas para assinantes VIP.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-4">
        <a
          href="https://instagram.com/mcmirella"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:bg-[var(--muted)] transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://twitter.com/mcmirella"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:bg-[var(--muted)] transition-colors"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="https://youtube.com/@mcmirella"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:bg-[var(--muted)] transition-colors"
        >
          <Youtube className="w-5 h-5" />
        </a>
        <a
          href="https://open.spotify.com/artist/mcmirella"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:bg-[var(--muted)] transition-colors"
        >
          <Music2 className="w-5 h-5" />
        </a>
      </div>

      {/* CTA Button */}
      <button className="mt-2 px-8 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold rounded-full hover:opacity-90 transition-opacity">
        Assinar VIP
      </button>
    </header>
  );
}
