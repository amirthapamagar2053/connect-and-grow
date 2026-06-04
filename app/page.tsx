import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-24 bg-background">
      <section className="relative min-h-[921px] flex items-center px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-12 gap-12 items-center w-full">
          <div className="md:col-span-7 z-10 space-y-8">
            <span className="uppercase tracking-[0.2em] text-secondary font-label text-sm font-bold">
              Cultivating Inner Peace
            </span>
            <h1 className="text-6xl md:text-8xl leading-[1.1] text-primary tracking-tight font-light font-headline">
              A sanctuary for <br />
              <span className="italic">healing the mind.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed font-body">
              Navigate life&apos;s complexities with professional guidance in a
              space designed for clarity, safety, and profound personal growth.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/booking"
                className="bg-inverse-surface text-inverse-on-surface px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl hover:opacity-90 transition-all"
              >
                Book an Appointment
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 px-8 py-4 text-primary font-semibold hover:bg-surface-container-low rounded-lg transition-colors group"
              >
                Our Philosophy
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative h-full min-h-[500px]">
            <div className="absolute inset-0 bg-surface-container-low rounded-lg -rotate-3 translate-x-4 translate-y-4"></div>
            <img
              alt="Therapy Office"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl z-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLvXeqLVDV0E6Z3LcpsBqBIt0qGzpfW3Xbt5MmuWkh5xjgsu1FHbhDqXR6WKR2NuD2dYw9FBd-3T5I2PAUEhDxMRL7A-5zYB6lWabsuFj8qGWYVBleSDsVEggzHfUjArcERHcMFkZN7Fld70sSGVzlNECoKmy7zb4NndTY-RchZW01KU5CcbPlPNYQtWtkIFmfKsSBFzBMvXSTLmrXEMA9gw3Z-Fab_D9WmF3gGQaiwRMJnslN3_rz82_e1xZB0yO-I_z7qb1ml1o"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-24 rounded-lg mx-4 md:mx-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl text-primary mb-6 font-headline">
                Rooted in science, <br />
                defined by empathy.
              </h2>
              <p className="text-on-surface-variant text-lg">
                We combine evidence-based clinical practices with a deeply
                humanistic approach to help you reclaim your narrative.
              </p>
            </div>
            <div className="h-[1px] flex-grow mx-12 bg-outline-variant/30 hidden lg:block"></div>
            <span className="font-headline italic text-2xl text-secondary">
              01. Perspective
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface p-10 rounded-lg flex flex-col gap-6 shadow-sm border border-outline-variant/30">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="text-2xl text-primary font-semibold font-headline">
                Evidence Based
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Utilizing Cognitive Behavioral Therapy (CBT) and Mindfulness
                practices tailored to your unique journey.
              </p>
            </div>
            <div className="bg-surface-variant p-10 rounded-lg flex flex-col gap-6 shadow-sm border border-outline-variant/40 md:translate-y-12">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <h3 className="text-2xl text-primary font-semibold font-headline">
                Absolute Privacy
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                A secure environment where your vulnerability is honored with
                the highest standards of confidentiality.
              </p>
            </div>
            <div className="bg-surface p-10 rounded-lg flex flex-col gap-6 shadow-sm border border-outline-variant/30">
              <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined">spa</span>
              </div>
              <h3 className="text-2xl text-primary font-semibold font-headline">
                Holistic Care
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Addressing the mind-body connection to foster sustainable
                well-being and long-term emotional resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="font-label text-secondary uppercase tracking-widest text-sm font-bold mb-4">
            Meet Our Team
          </h3>
          <h2 className="text-5xl text-primary font-headline">
            Qualified counsellors <span className="italic">here for you.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[
            {
              name: "Barada Koirala",
              title: "Counsellor",
              photo: "/barada.jpeg",
              objectPosition: "center 38%",
              summary:
                "Supporting individuals and couples through grief, trauma, anxiety, depression, and relationship difficulties with a client-centred, evidence-based approach.",
            },
            {
              name: "Thelma Bennett",
              title: "Counsellor",
              photo: "/thelma.jpeg",
              objectPosition: "center 42%",
              summary:
                "Specialising in mental health and trauma-informed care, committed to helping individuals dealing with depression, anxiety, and other challenges.",
            },
          ].map((c) => (
            <div
              key={c.name}
              className="bg-surface rounded-lg overflow-hidden shadow-sm border border-outline-variant/30 group"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.photo}
                  alt={c.name}
                  style={{ objectPosition: c.objectPosition }}
                  className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-8 space-y-3">
                <div>
                  <h3 className="font-headline text-2xl text-primary">{c.name}</h3>
                  <p className="font-label text-sm uppercase tracking-widest text-secondary">{c.title}</p>
                </div>
                <p className="text-on-surface-variant leading-relaxed">{c.summary}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-block bg-inverse-surface text-inverse-on-surface px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Meet Our Counsellors
          </Link>
        </div>
      </section>
    </main>
  );
}
