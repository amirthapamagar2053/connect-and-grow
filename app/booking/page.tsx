"use client";

import Cal from "@calcom/embed-react";
import Script from "next/script";
import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// SETUP INSTRUCTIONS
//
// 1. CAL.COM — each counsellor needs their own Cal.com account + event type.
//    Replace the calLink for each counsellor below.
//    Sign up free at https://cal.com
//
// 2. STRIPE — replace buy-button-id and publishable-key.
//    Stripe Dashboard → Products → create product → "Create buy button"
// ─────────────────────────────────────────────────────────────────────────────

const COUNSELLORS = [
  {
    name: "Barada Koirala",
    title: "Counsellor",
    photo: "/barada.jpeg",
    objectPosition: "center 38%",
    calLink: "amir-thapa-wdlxml/30min", // ← replace with Barada's Cal.com link
    specialties: ["Grief & Loss", "Trauma", "Anxiety", "Depression", "Workplace Stress"],
  },
  {
    name: "Thelma Bennett",
    title: "Counsellor",
    photo: "/thelma.jpeg",
    objectPosition: "center 42%",
    calLink: "THELMA_CAL_USERNAME/discovery-call", // ← replace with Thelma's Cal.com link
    specialties: ["Depression", "Anxiety", "Trauma-Informed Care", "Mental Health"],
  },
];

const STRIPE_BUY_BUTTON_ID = "buy_btn_PLACEHOLDER";   // ← replace
const STRIPE_PUBLISHABLE_KEY = "pk_live_PLACEHOLDER";  // ← replace

export default function BookingPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const counsellor = selected !== null ? COUNSELLORS[selected] : null;

  return (
    <main className="pt-32 pb-24 bg-background">
      <Script src="https://js.stripe.com/v3/buy-button.js" strategy="lazyOnload" />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 mb-16">
        <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-4 block">
          Book a Session
        </span>
        <h1 className="font-headline text-5xl md:text-7xl italic text-primary leading-tight mb-6">
          Find your time <br className="hidden md:block" />for healing.
        </h1>
        <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
          Choose your counsellor, pick a time, and complete payment — all in
          one place.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-16">

        {/* Step 1 — Choose counsellor */}
        <section>
          <div className="flex items-start gap-5 mb-8">
            <span className="font-headline text-5xl text-outline/30 leading-none select-none">01</span>
            <div>
              <h2 className="font-headline text-3xl text-primary">Choose your counsellor</h2>
              <p className="text-on-surface-variant mt-1">
                Select who you&apos;d like to work with.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {COUNSELLORS.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setSelected(i)}
                className={`text-left rounded-xl border-2 overflow-hidden transition-all duration-300 shadow-sm group ${
                  selected === i
                    ? "border-primary shadow-lg"
                    : "border-outline-variant/40 hover:border-primary/50"
                }`}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={c.photo}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: c.objectPosition }}
                  />
                </div>
                <div className="p-6 bg-surface">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-headline text-xl text-primary">{c.name}</h3>
                      <p className="text-secondary text-sm font-label uppercase tracking-widest">{c.title}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 flex items-center justify-center transition-all ${
                      selected === i ? "border-primary bg-primary" : "border-outline-variant"
                    }`}>
                      {selected === i && (
                        <span className="material-symbols-outlined text-on-primary text-sm">check</span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {c.specialties.slice(0, 3).map((s) => (
                      <span key={s} className="text-xs bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Step 2 — Calendar (only shown after counsellor selected) */}
        {counsellor && (
          <>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-outline-variant/30" />
              <span className="text-outline/50 text-sm font-medium">next</span>
              <div className="flex-1 h-px bg-outline-variant/30" />
            </div>

            <section>
              <div className="flex items-start gap-5 mb-8">
                <span className="font-headline text-5xl text-outline/30 leading-none select-none">02</span>
                <div>
                  <h2 className="font-headline text-3xl text-primary">Choose your time</h2>
                  <p className="text-on-surface-variant mt-1">
                    Booking with <span className="font-semibold text-on-surface">{counsellor.name}</span> — only available slots are shown.
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-outline-variant/40 shadow-sm bg-surface">
                <Cal
                  key={counsellor.calLink}
                  calLink={counsellor.calLink}
                  style={{ width: "100%", height: "700px", overflow: "scroll" }}
                  config={{ layout: "month_view" }}
                />
              </div>
            </section>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-outline-variant/30" />
              <span className="text-outline/50 text-sm font-medium">then</span>
              <div className="flex-1 h-px bg-outline-variant/30" />
            </div>

            {/* Step 3 — Payment */}
            <section className="pb-8">
              <div className="flex items-start gap-5 mb-8">
                <span className="font-headline text-5xl text-outline/30 leading-none select-none">03</span>
                <div>
                  <h2 className="font-headline text-3xl text-primary">Complete payment</h2>
                  <p className="text-on-surface-variant mt-1">
                    Secure checkout via Stripe. Your session is confirmed once payment is complete.
                  </p>
                </div>
              </div>

              <div className="bg-surface rounded-xl border border-outline-variant/40 p-8 md:p-12 shadow-sm">
                <div className="space-y-3 mb-8">
                  <h3 className="font-headline text-2xl text-primary">Initial Consultation</h3>
                  <p className="text-on-surface-variant">
                    50-minute session with {counsellor.name}. Safe, confidential, and evidence-based.
                  </p>
                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-xl">lock</span>
                    </div>
                    <span className="text-sm text-on-surface-variant">
                      Secure payment via Stripe — no card details stored
                    </span>
                  </div>
                </div>
                <stripe-buy-button
                  buy-button-id={STRIPE_BUY_BUTTON_ID}
                  publishable-key={STRIPE_PUBLISHABLE_KEY}
                />
              </div>
            </section>
          </>
        )}

      </div>
    </main>
  );
}
