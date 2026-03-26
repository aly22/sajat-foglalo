import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-xs font-extrabold text-white">
            IF
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/rolam" className="text-muted-foreground transition hover:text-foreground">
            Rólam
          </Link>
          <Link
            href="/#kapcsolat"
            className="rounded-lg bg-accent px-4 py-2 font-semibold text-accent-foreground transition hover:bg-accent/90"
          >
            Érdekel
          </Link>
        </nav>
      </div>
    </header>
  );
}
