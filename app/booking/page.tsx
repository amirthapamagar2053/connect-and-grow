"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// SETUP INSTRUCTIONS
//
// 1. CAL.COM — each counsellor needs their own Cal.com account + event type.
//    Replace the calLink for each counsellor below.
//    Sign up free at https://cal.com
//
// 2. PAYMENT + EMAILS (no custom backend needed) — on each counsellor's
//    Cal.com event type, go to Apps → Stripe, connect their Stripe account,
//    then set a price under the event type's "Payment" tab. With this
//    enabled, Cal.com collects payment as part of the booking flow itself:
//    the booking is only confirmed once Stripe payment succeeds, and
//    Cal.com automatically emails BOTH the client and the counsellor
//    (its built-in host + attendee confirmation emails) the moment that
//    happens — nothing else to wire up.
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

// Cal's embed SDK shares internal state across instances that use the same
// namespace. Switching between counsellors forces the <Cal> component to
// unmount/remount (it can't react to a changed calLink otherwise), so each
// counsellor gets its own namespace to avoid the old iframe's teardown
// racing with the new one's setup under a shared default namespace.
function namespaceFor(calLink: string) {
  return calLink.replace(/[^a-zA-Z0-9_-]/g, "-");
}

export default function BookingPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState<{
    title?: string;
    startTime?: string;
  } | null>(null);

  const counsellor = selected !== null ? COUNSELLORS[selected] : null;

  useEffect(() => {
    if (!counsellor) return;

    const namespace = namespaceFor(counsellor.calLink);
    let cal: Awaited<ReturnType<typeof getCalApi>> | null = null;
    const onBookingSuccessful = (
      e: CustomEvent<{ data: { title?: string; startTime?: string; paymentRequired: boolean } }>
    ) => {
      const detail = e.detail.data;
      // This fires as soon as a booking is *created*, even when it's only
      // pending payment. Don't show our "confirmed" screen (which unmounts
      // the Cal iframe) until payment is actually done — otherwise we tear
      // down the iframe before Cal's own payment step gets to render.
      if (detail.paymentRequired) return;
      setConfirmed({ title: detail.title, startTime: detail.startTime });
    };

    (async function () {
      try {
        cal = await getCalApi({ namespace });
        cal("on", {
          action: "bookingSuccessfulV2",
          callback: onBookingSuccessful,
        });
      } catch (err) {
        console.error("Cal embed API failed to initialize:", err);
      }
    })();

    return () => {
      try {
        cal?.("off", {
          action: "bookingSuccessfulV2",
          callback: onBookingSuccessful,
        });
      } catch {
        // Cal instance may already be torn down — safe to ignore.
      }
    };
  }, [counsellor]);

  return (
    <main className="pt-32 pb-24 bg-background">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 mb-16">
        <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-4 block">
          Book a Session
        </span>
        <h1 className="font-headline text-5xl md:text-7xl italic text-primary leading-tight mb-6">
          Find your time <br className="hidden md:block" />for yourself.
        </h1>
        <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
          Choose your counsellor and pick a time — payment is completed
          securely in the same step.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-8 space-y-16">

        {confirmed ? (
          /* Confirmation state */
          <section className="bg-surface rounded-xl border border-outline-variant/40 shadow-sm p-10 md:p-16 text-center">
            <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">
              You&apos;re all set{counsellor ? `, thank you` : ""}!
            </h2>
            <p className="text-on-surface-variant max-w-md mx-auto leading-relaxed mb-2">
              Your session{counsellor ? ` with ${counsellor.name}` : ""} is
              confirmed
              {confirmed.startTime &&
                ` for ${new Date(confirmed.startTime).toLocaleString(undefined, {
                  dateStyle: "full",
                  timeStyle: "short",
                })}`}
              .
            </p>
            <p className="text-on-surface-variant max-w-md mx-auto leading-relaxed">
              A confirmation email is on its way to your inbox, and{" "}
              {counsellor?.name ?? "your counsellor"} has been notified too —
              no further action needed.
            </p>
            <button
              onClick={() => {
                setConfirmed(null);
                setSelected(null);
              }}
              className="mt-8 text-primary font-semibold hover:underline underline-offset-4"
            >
              Book another session
            </button>
          </section>
        ) : (
          <>
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

            {/* Step 2 — Calendar + payment (handled inline by Cal.com) */}
            {counsellor && (
              <>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-outline-variant/30" />
                  <span className="text-outline/50 text-sm font-medium">next</span>
                  <div className="flex-1 h-px bg-outline-variant/30" />
                </div>

                <section className="pb-8">
                  <div className="flex items-start gap-5 mb-8">
                    <span className="font-headline text-5xl text-outline/30 leading-none select-none">02</span>
                    <div>
                      <h2 className="font-headline text-3xl text-primary">Choose your time &amp; pay</h2>
                      <p className="text-on-surface-variant mt-1">
                        Booking with <span className="font-semibold text-on-surface">{counsellor.name}</span> — pick an available slot, then complete secure payment right here to confirm.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container flex-shrink-0">
                      <span className="material-symbols-outlined text-xl">lock</span>
                    </div>
                    <span className="text-sm text-on-surface-variant">
                      Secure payment via Stripe — your session is confirmed the
                      moment payment completes, and confirmation emails go out
                      to you and {counsellor.name} automatically.
                    </span>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-outline-variant/40 shadow-sm bg-surface">
                    <Cal
                      key={counsellor.calLink}
                      calLink={counsellor.calLink}
                      namespace={namespaceFor(counsellor.calLink)}
                      style={{ width: "100%", height: "700px", overflow: "scroll" }}
                      config={{ layout: "month_view" }}
                    />
                  </div>
                </section>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}
