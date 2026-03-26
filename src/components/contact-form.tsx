"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kapcsolat" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-md text-center">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Beszéljünk!
        </h2>
        <p className="mt-4 text-muted-foreground">
          Add meg az email címed és 24 órán belül felveszem Veled a
          kapcsolatot.
        </p>

        {status === "success" ? (
          <div className="mt-8 rounded-xl border border-success/30 bg-success/5 p-6">
            <p className="font-semibold text-success">
              Köszönöm! 24 órán belül felveszem Veled a kapcsolatot.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-3">
            <input
              type="text"
              required
              minLength={2}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Hogyan szólíthatlak?"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
            />
            <div className="flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="pelda@email.hu"
                className="min-w-0 flex-1 rounded-lg border border-border bg-background px-4 py-3 shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-sm transition hover:bg-accent/90 disabled:opacity-50"
              >
                {status === "loading" ? "Küldés..." : "Érdekel!"}
              </button>
            </div>
            <label className="flex items-start gap-2 text-left text-sm text-muted-foreground">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-accent"
              />
              <span>
                Elfogadom az{" "}
                <a
                  href="/adatkezelesi-tajekoztato"
                  target="_blank"
                  className="text-accent underline"
                >
                  adatkezelési tájékoztatót
                </a>
                .
              </span>
            </label>
            {status === "error" && (
              <p className="mt-3 text-sm text-destructive">
                Hiba történt, próbáld újra.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
