export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <span suppressHydrationWarning>© {new Date().getFullYear()} SajátFoglaló. Minden jog fenntartva.</span>
        <div className="flex gap-4">
          <a
            href="/rolam"
            className="transition hover:text-foreground"
          >
            Rólam
          </a>
          <a
            href="/adatkezelesi-tajekoztato"
            className="transition hover:text-foreground"
          >
            Adatkezelési tájékoztató
          </a>
        </div>
      </div>
    </footer>
  );
}
