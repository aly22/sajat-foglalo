import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="font-heading text-lg font-bold">
          IdőpontFoglalóm
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/rolam" className="text-muted-foreground transition hover:text-foreground">
            Rólam
          </Link>
          <Link
            href="/#kapcsolat"
            className="rounded-lg bg-accent px-4 py-2 font-semibold text-accent-foreground transition hover:bg-accent/90"
          >
            Ajánlatot kérek
          </Link>
        </nav>
      </div>
    </header>
  );
}
