import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-32 bg-background">
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7">
            <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-6 block">
              Meet Your Practitioner
            </span>
            <h1 className="font-headline text-6xl md:text-8xl leading-[0.9] text-primary mb-8">
              Guided by <br />
              <span className="italic font-light">Empathy,</span> <br />
              Rooted in Science.
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-xl">
              I am Dr. Helena Sterling, a clinical psychologist dedicated to
              helping individuals navigate the complexities of the human
              experience through a lens of radical compassion and evidence-based
              practice.
            </p>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCynml5_uDdHT-Uri7YjfDSkc3hcKINdmw4PihzNfbCQRcp0skljQ3wVZx7HnDRFI2uHij96rvK4Io3iqbwz9bfV1CIdm2bXj8f65-Ein3jTn_7quBh74QLdN1Wtpvx9nRotKI5EPwwNu1l-t8qMCnJBLgnQ5QikqBKQYzjlaHzKP-a3iqZDTMRJaCKEWEbCjztfGZc3nFkP0Ea-m407suyiYwLVZUeemmmP43pxdb_lUnP4tghdVy7I5eGHoY0qAfjcvdcPC9rOmY"
                alt="Dr Sterling"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-surface p-8 rounded-lg shadow-2xl max-w-xs hidden lg:block border border-outline-variant/50">
              <p className="font-headline italic text-2xl text-primary leading-tight">
                &quot;True healing begins when we stop fighting our own shadows
                and start listening to what they have to teach us.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-32 rounded-lg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="font-headline text-5xl text-primary mb-4">
              The Therapeutic Philosophy
            </h2>
            <div className="h-px w-24 bg-outline-variant mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "spa",
                title: "Mindful Presence",
                text: "Integration of somatic awareness and mindfulness practices to ground the nervous system and build emotional resilience.",
              },
              {
                icon: "psychology",
                title: "Cognitive Reframing",
                text: "Utilizing CBT and DBT frameworks to challenge limiting belief systems while honoring biological responses.",
              },
              {
                icon: "diversity_1",
                title: "Relational Depth",
                text: "Focusing on the therapeutic alliance as a transformative space for practicing secure attachment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface p-10 rounded-lg shadow-sm transition-transform hover:-translate-y-2 duration-500 border border-outline-variant/40"
              >
                <div className="bg-secondary-container w-14 h-14 rounded-full flex items-center justify-center mb-8 text-on-secondary-container">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="font-headline text-2xl text-primary mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 my-32">
        <div className="bg-primary text-on-primary rounded-lg p-16 md:p-24 text-center relative overflow-hidden">
          <h2 className="font-headline text-4xl md:text-5xl mb-8 relative z-10">
            Shall we begin your <br /> journey together?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link
              href="/booking"
              className="bg-surface text-primary px-10 py-4 rounded-lg font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Book a Discovery Call
            </Link>
            <Link
              className="text-on-primary font-medium hover:underline underline-offset-8 transition-all"
              href="/services"
            >
              View Private Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
