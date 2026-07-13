const RESOURCES = [
  {
    name: "Emergency Services",
    number: "000",
    description: "For police, fire, or ambulance in a life-threatening emergency.",
  },
  {
    name: "Lifeline",
    number: "13 11 14",
    description: "24/7 crisis support and suicide prevention.",
  },
  {
    name: "Beyond Blue",
    number: "1300 22 4636",
    description: "24/7 support for anxiety, depression, and mental wellbeing.",
  },
  {
    name: "Suicide Call Back Service",
    number: "1300 659 467",
    description: "24/7 telephone and online counselling for people affected by suicide.",
  },
  {
    name: "1800RESPECT",
    number: "1800 737 732",
    description: "24/7 support for domestic, family, and sexual violence.",
  },
  {
    name: "Kids Helpline",
    number: "1800 55 1800",
    description: "24/7 confidential support for young people aged 5–25.",
  },
  {
    name: "MensLine Australia",
    number: "1300 78 99 78",
    description: "24/7 support for men with emotional or relationship concerns.",
  },
];

export default function EmergencyResourcesPage() {
  return (
    <main className="pt-32 pb-24 bg-background">
      <section className="max-w-3xl mx-auto px-8 mb-12 text-center">
        <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-6 block">
          Support
        </span>
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6">
          Emergency Resources
        </h1>
        <p className="font-body text-lg text-on-surface-variant leading-relaxed">
          If you or someone you know is in crisis, help is available right
          now. Our counselling service is not a crisis response service —
          please use the resources below if you need immediate support.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-8 mb-12">
        <div className="bg-error-container text-on-error-container rounded-lg p-8 text-center">
          <p className="font-headline text-2xl mb-2">
            In immediate danger? Call 000.
          </p>
          <p className="font-body">
            If it is not safe to speak, use 106 (National Relay Service) or
            text emergency services where available.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-8">
        <div className="grid gap-4">
          {RESOURCES.map((r) => (
            <div
              key={r.name}
              className="bg-surface p-6 rounded-lg border border-outline-variant/30 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              <div>
                <h3 className="font-headline text-xl text-primary">
                  {r.name}
                </h3>
                <p className="font-body text-on-surface-variant text-sm mt-1">
                  {r.description}
                </p>
              </div>
              <a
                href={`tel:${r.number.replace(/\s/g, "")}`}
                className="font-label text-lg font-bold text-primary whitespace-nowrap"
              >
                {r.number}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
