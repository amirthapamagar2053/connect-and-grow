import Link from "next/link";

const COUNSELLORS = [
  {
    name: "Barada Koirala",
    title: "Counsellor",
    email: "baradacounsellor@gmail.com",
  },
  {
    name: "Thelma Bennett",
    title: "Counsellor",
    email: "thelmacounsellor@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 bg-background">
      <section className="max-w-3xl mx-auto px-8 mb-16 text-center">
        <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-6 block">
          Get in Touch
        </span>
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6">
          Contact Us
        </h1>
        <p className="font-body text-lg text-on-surface-variant leading-relaxed">
          Have a question before booking, or want to reach a counsellor
          directly? We&apos;d love to hear from you.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-8">
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {COUNSELLORS.map((c) => (
            <div
              key={c.name}
              className="bg-surface p-8 rounded-lg border border-outline-variant/30 shadow-sm text-center"
            >
              <h3 className="font-headline text-2xl text-primary mb-1">
                {c.name}
              </h3>
              <p className="font-label text-sm uppercase tracking-widest text-secondary mb-4">
                {c.title}
              </p>
              <a
                href={`mailto:${c.email}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
                {c.email}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-surface-container rounded-lg p-10 text-center">
          <h2 className="font-headline text-2xl text-primary mb-3">
            Ready to book a session instead?
          </h2>
          <p className="font-body text-on-surface-variant mb-6">
            Skip the email and find a time that works for you directly.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-inverse-surface text-inverse-on-surface px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl hover:opacity-90 transition-all"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
