export function Footer() {
  return (
    <footer className="w-full py-6 px-4 border-t border-[var(--border)]">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--muted-foreground)]">
        <div className="flex items-center gap-2">
          <span className="text-[var(--primary)] font-semibold">LinkPriv</span>
          <span>•</span>
          <span>Conteudo Exclusivo</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-[var(--foreground)] transition-colors">
            Termos
          </a>
          <a href="#" className="hover:text-[var(--foreground)] transition-colors">
            Privacidade
          </a>
          <a href="#" className="hover:text-[var(--foreground)] transition-colors">
            Suporte
          </a>
        </div>
      </div>
    </footer>
  );
}
