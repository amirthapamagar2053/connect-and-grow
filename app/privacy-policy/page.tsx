export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      body: "When you book a session, contact us, or use our website, we may collect information such as your name, email address, and details you choose to share during scheduling or correspondence. We only collect what's needed to provide our services to you.",
    },
    {
      title: "How We Use Your Information",
      body: "Your information is used to schedule and manage appointments, communicate with you about your care, process payments, and improve our services. We do not sell your personal information to third parties.",
    },
    {
      title: "Confidentiality of Counselling Records",
      body: "What you share with your counsellor during sessions is treated as strictly confidential, in line with professional counselling standards. Information is only disclosed without consent where required by law, such as where there is a serious risk of harm.",
    },
    {
      title: "Third-Party Services",
      body: "We use trusted third-party providers — Cal.com for appointment scheduling and Stripe for payment processing — to operate our booking system. These providers have their own privacy policies governing how they handle your data.",
    },
    {
      title: "Data Security",
      body: "We take reasonable steps to protect your personal information from unauthorised access, loss, or misuse, consistent with applicable privacy laws.",
    },
    {
      title: "Your Rights",
      body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us using the details on our Contact page.",
    },
  ];

  return (
    <main className="pt-32 pb-24 bg-background">
      <section className="max-w-3xl mx-auto px-8 mb-16 text-center">
        <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-6 block">
          Legal
        </span>
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6">
          Privacy Policy
        </h1>
        <p className="font-body text-lg text-on-surface-variant leading-relaxed">
          Your privacy and confidentiality matter to us. This page explains
          how we collect, use, and protect your information.
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
