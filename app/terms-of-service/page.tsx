export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Our Services",
      body: "Connect & Grow provides counselling services delivered face-to-face, via telehealth, and via Zoom. By booking a session, you agree to these terms.",
    },
    {
      title: "Booking & Cancellations",
      body: "Appointments are booked through our online scheduling system. If you need to reschedule or cancel, please do so with as much notice as possible so the time can be offered to another client.",
    },
    {
      title: "Payments",
      body: "Session fees are processed securely through Stripe at the time of booking. By completing payment, you authorise the charge for the session booked.",
    },
    {
      title: "Not a Crisis Service",
      body: "Our counselling services are not a substitute for emergency medical or psychiatric care. If you or someone else is in immediate danger, please call 000 or visit your nearest emergency department. See our Emergency Resources page for further support options.",
    },
    {
      title: "Professional Conduct",
      body: "Our counsellors adhere to professional and ethical standards of practice. Sessions are conducted in a respectful, non-judgmental, and confidential manner.",
    },
    {
      title: "Limitation of Liability",
      body: "While we are committed to providing quality care, counselling outcomes cannot be guaranteed. We are not liable for indirect or consequential outcomes arising from the use of our services.",
    },
    {
      title: "Changes to These Terms",
      body: "We may update these terms from time to time. Continued use of our services after changes are posted constitutes acceptance of the updated terms.",
    },
  ];

  return (
    <main className="pt-32 pb-24 bg-background">
      <section className="max-w-3xl mx-auto px-8 mb-16 text-center">
        <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-6 block">
          Legal
        </span>
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6">
          Terms of Service
        </h1>
        <p className="font-body text-lg text-on-surface-variant leading-relaxed">
          Please read these terms carefully before booking a session with us.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-8 space-y-10">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-headline text-2xl text-primary mb-3">
              {s.title}
            </h2>
            <p className="font-body text-on-surface-variant leading-relaxed">
              {s.body}
            </p>
          </div>
        ))}
        <p className="font-body text-sm text-on-surface-variant/70 pt-6 border-t border-outline-variant/30">
          Last updated: {new Date().getFullYear()}
        </p>
      </section>
    </main>
  );
}
