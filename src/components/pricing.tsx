import { Check, Minus } from "lucide-react";

const included: { text: string; extra?: boolean }[] = [
  { text: "Domain regisztráció és beállítás" },
  { text: "Email fiók és küldés beállítás" },
  { text: "Teljes testreszabás a márkádhoz" },
  { text: "Adatmigráció igény esetén" },
  { text: "Betanítás és támogatás" },
  { text: "Egyedi funkciók felárasak", extra: true },
];

export function Pricing() {
  return (
    <section id="arak" className="bg-muted px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-heading text-center text-3xl font-bold sm:text-4xl">
          Átlátható árazás, rejtett díjak nélkül
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          Nincs platformfüggés.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
          <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {/* Setup */}
            <div className="p-8 text-center">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Egyszeri beüzemelés
              </p>
              <p className="mt-4 font-heading text-4xl font-bold">
                200 000
                <span className="text-lg font-normal text-muted-foreground">
                  {" "}
                  Ft
                </span>
              </p>
              <ul className="mt-6 space-y-3 text-left text-sm">
                {included.map((item) => (
                  <li key={item.text} className="flex items-start gap-2">
                    {item.extra ? (
                      <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    ) : (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    )}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Monthly */}
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Havi díj
              </p>
              <p className="mt-4 font-heading text-4xl font-bold">
                4 000
                <span className="text-lg font-normal text-muted-foreground">
                  {" "}
                  Ft/hó
                </span>
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Szerver, domain fenntartás, email küldés
              </p>
            </div>
          </div>

          <div className="border-t border-border bg-muted/50 px-8 py-4 text-center text-sm text-muted-foreground">
            Nincs hűségidő. Bármikor leállíthatod a szolgáltatást.
          </div>
        </div>
      </div>
    </section>
  );
}
