"use client";

import { Lock, Play, Image as ImageIcon } from "lucide-react";

const contentItems = [
  { id: 1, type: "photo", locked: true },
  { id: 2, type: "video", locked: true },
  { id: 3, type: "photo", locked: true },
  { id: 4, type: "photo", locked: false },
  { id: 5, type: "video", locked: true },
  { id: 6, type: "photo", locked: true },
  { id: 7, type: "photo", locked: true },
  { id: 8, type: "video", locked: true },
  { id: 9, type: "photo", locked: true },
];

export function ContentGrid() {
  return (
    <section className="flex-1 w-full max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          Conteudo Exclusivo
        </h2>
        <span className="text-sm text-[var(--muted-foreground)]">
          {contentItems.length} itens
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {contentItems.map((item) => (
          <ContentCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

function ContentCard({
  type,
  locked,
}: {
  id: number;
  type: "photo" | "video";
  locked: boolean;
}) {
  return (
    <div className="relative aspect-square rounded-lg overflow-hidden bg-[var(--card)] group cursor-pointer">
      {/* Placeholder background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)] to-[var(--muted)]" />

      {/* Content type indicator */}
      <div className="absolute top-2 right-2 z-10">
        {type === "video" ? (
          <div className="w-6 h-6 rounded-full bg-[var(--background)]/70 flex items-center justify-center">
            <Play className="w-3 h-3 text-[var(--foreground)] fill-current" />
          </div>
        ) : (
          <div className="w-6 h-6 rounded-full bg-[var(--background)]/70 flex items-center justify-center">
            <ImageIcon className="w-3 h-3 text-[var(--foreground)]" />
          </div>
        )}
      </div>

      {/* Lock overlay */}
      {locked && (
        <div className="absolute inset-0 bg-[var(--background)]/60 backdrop-blur-sm flex flex-col items-center justify-center gap-2 group-hover:bg-[var(--background)]/70 transition-colors">
          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
            <Lock className="w-5 h-5 text-[var(--primary)]" />
          </div>
          <span className="text-xs text-[var(--muted-foreground)] font-medium">
            VIP
          </span>
        </div>
      )}

      {/* Hover effect for unlocked */}
      {!locked && (
        <div className="absolute inset-0 bg-[var(--background)]/0 group-hover:bg-[var(--background)]/30 transition-colors flex items-center justify-center">
          <span className="text-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
            Ver
          </span>
        </div>
      )}
    </div>
  );
}
