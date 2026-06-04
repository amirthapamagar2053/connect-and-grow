import Link from "next/link";

const counsellors = [
  {
    name: "Barada Koirala",
    title: "Counsellor",
    photo: "/barada.jpeg",
    objectPosition: "center 38%",
    bio: "A qualified Counsellor with a Bachelor's degree in Counselling and over 12 hours of Continuing Professional Development (CPD). Passionate about supporting individuals and couples through life's challenges in a safe, compassionate, and non-judgmental environment.",
    specialties: [
      "Grief & Loss",
      "Domestic Violence",
      "Trauma",
      "Anxiety",
      "Depression",
      "Workplace Stress",
      "Relationship Difficulties",
    ],
    approach:
      "Client-centred and evidence-based, incorporating mindfulness-based techniques to support emotional regulation, self-awareness, and personal growth.",
    quote:
      "My goal is to provide a supportive therapeutic space where clients feel heard, respected, and empowered on their journey toward healing and positive change.",
  },
  {
    name: "Thelma Bennett",
    title: "Counsellor",
    photo: "/thelma.jpeg",
    objectPosition: "center 42%",
    bio: "A compassionate and dedicated counselling professional with a Bachelor's degree in Counseling and over one year of experience in general counselling. Specialising in mental health and trauma-informed care, committed to providing support to individuals dealing with depression, anxiety, and other challenges.",
    specialties: [
      "Depression",
      "Anxiety",
      "Trauma-Informed Care",
      "Mental Health",
    ],
    approach:
      "Utilises evidence-based practices to foster a safe and empowering environment that promotes healing and growth.",
    quote:
      "I am committed to creating a space where every client feels empowered to overcome their challenges and discover their own strength.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-32 bg-background">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-8 mb-24 text-center">
        <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-6 block">
          Our Team
        </span>
        <h1 className="font-headline text-6xl md:text-8xl leading-[0.9] text-primary mb-8">
          Meet Our <br />
          <span className="italic font-light">Counsellors</span>
        </h1>
        <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
          Our qualified counsellors are dedicated to supporting you through
          life&apos;s challenges in a safe, compassionate, and non-judgmental
          environment.
        </p>
      </section>

      {/* Counsellor cards */}
      <section className="max-w-7xl mx-auto px-8 mb-32 space-y-24">
        {counsellors.map((c, i) => (
          <div
            key={c.name}
            className={`grid md:grid-cols-12 gap-16 items-center ${
              i % 2 === 1 ? "md:[direction:rtl]" : ""
            }`}
          >
            {/* Photo */}
            <div className={`md:col-span-5 relative ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
                <img
                  className="w-full h-full object-cover"
                  style={{ objectPosition: c.objectPosition }}
                  src={c.photo}
                  alt={c.name}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-surface p-6 rounded-lg shadow-2xl max-w-xs hidden lg:block border border-outline-variant/50">
                <p className="font-headline italic text-lg text-primary leading-snug">
                  &quot;{c.quote}&quot;
                </p>
              </div>
            </div>

            {/* Info */}
            <div className={`md:col-span-7 space-y-6 ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
              <div>
                <h2 className="font-headline text-4xl md:text-5xl text-primary mb-1">
                  {c.name}
                </h2>
                <p className="font-label text-sm uppercase tracking-[0.2em] text-secondary">
                  {c.title}
                </p>
              </div>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                {c.bio}
              </p>
              <div>
                <p className="font-body text-sm uppercase tracking-widest text-secondary mb-3 font-semibold">
                  Specialties
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.specialties.map((s) => (
                    <span
                      key={s}
                      className="bg-secondary-container text-on-secondary-container text-sm px-4 py-1.5 rounded-full font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <p className="font-body text-on-surface-variant leading-relaxed border-l-4 border-secondary pl-4 italic">
                {c.approach}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Philosophy */}
      <section className="bg-surface-container py-32 rounded-lg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="font-headline text-5xl text-primary mb-4">
              Our Therapeutic Philosophy
            </h2>
            <div className="h-px w-24 bg-outline-variant mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "favorite",
                title: "Safe & Compassionate Space",
                text: "Creating a non-judgmental environment where individuals and couples feel safe to explore life's challenges with genuine care and respect.",
              },
              {
                icon: "psychology",
                title: "Client-Centred Practice",
                text: "An evidence-based, client-centred approach that helps build resilience, improve emotional well-being, and develop practical coping strategies.",
              },
              {
                icon: "spa",
                title: "Mindfulness Integration",
                text: "Incorporating mindfulness-based techniques to support emotional regulation, self-awareness, and lasting personal growth.",
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

      {/* CTA */}
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
