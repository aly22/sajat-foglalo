"use client";

import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState("");
  const [features, setFeatures] = useState({
    bankkartyasFizetes: false,
    husegprogram: false,
    egyebFunkciok: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, businessName, email, category, features }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setBusinessName("");
        setCategory("");
        setFeatures({ bankkartyasFizetes: false, husegprogram: false, egyebFunkciok: false });
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
          Töltsd ki az alábbi űrlapot és 24 órán belül felveszem Veled a
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
            <p className="text-left text-xs text-muted-foreground"><span className="text-destructive">*</span> kötelező</p>
            <input
              type="text"
              required
              minLength={2}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Hogyan szólíthatlak? *"
              aria-label="Név"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
            />
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Vállalkozásod neve (opcionális)"
              aria-label="Vállalkozás neve"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="pelda@email.hu *"
              aria-label="Email cím"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Milyen típusú vállalkozásod van?"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm shadow-sm focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
            >
              <option value="">Milyen típusú vállalkozásod van?</option>
              <optgroup label="Szépségipar">
                <option value="Szépségszalon">Szépségszalon</option>
                <option value="Kozmetika">Kozmetika</option>
                <option value="Fodrászat / Hajstúdió">Fodrászat / Hajstúdió</option>
                <option value="Barbershop">Barbershop</option>
                <option value="Smink / Make-up">Smink / Make-up</option>
                <option value="Manikűr, Pedikűr">Manikűr, Pedikűr</option>
                <option value="Szempilla">Szempilla</option>
                <option value="Szolárium">Szolárium</option>
                <option value="Sminktetováló">Sminktetováló</option>
                <option value="Masszázsszalon">Masszázsszalon</option>
                <option value="Gyanta szalon">Gyanta szalon</option>
                <option value="Alakformáló stúdió">Alakformáló stúdió</option>
                <option value="Szemöldök">Szemöldök</option>
              </optgroup>
              <optgroup label="Egészségügy">
                <option value="Gyógytornász">Gyógytornász</option>
                <option value="Gyógymasszőr">Gyógymasszőr</option>
                <option value="Hajgyógyászat">Hajgyógyászat</option>
                <option value="Szépségklinika">Szépségklinika</option>
                <option value="Lézerközpont">Lézerközpont</option>
                <option value="Orvos">Orvos</option>
                <option value="Fogorvos">Fogorvos</option>
                <option value="Természetgyógyász">Természetgyógyász</option>
              </optgroup>
              <optgroup label="Sport és wellness">
                <option value="Személyi edző">Személyi edző</option>
                <option value="Csoportos edző">Csoportos edző</option>
              </optgroup>
              <option value="Egyéb">Egyéb</option>
            </select>
            <div className="space-y-2 text-left text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Igényelt egyedi funkciók (opcionális)</p>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={features.bankkartyasFizetes}
                  onChange={(e) => setFeatures({ ...features, bankkartyasFizetes: e.target.checked })}
                  className="h-4 w-4 rounded border-border accent-accent"
                />
                Bankkártyás előlegfizetés
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={features.husegprogram}
                  onChange={(e) => setFeatures({ ...features, husegprogram: e.target.checked })}
                  className="h-4 w-4 rounded border-border accent-accent"
                />
                Hűségprogram
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={features.egyebFunkciok}
                  onChange={(e) => setFeatures({ ...features, egyebFunkciok: e.target.checked })}
                  className="h-4 w-4 rounded border-border accent-accent"
                />
                Egyéb funkciók
              </label>
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
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-sm transition hover:bg-accent/90 disabled:opacity-50"
            >
              {status === "loading" ? "Küldés..." : "Érdekel!"}
            </button>
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
