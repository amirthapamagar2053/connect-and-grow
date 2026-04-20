"use client";

import { FormEvent, useState } from "react";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(15);
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBooked(true);
  };

  if (booked) {
    return (
      <main className="pt-48 pb-24 px-6 text-center max-w-3xl mx-auto bg-background">
        <span className="material-symbols-outlined text-8xl text-primary mb-6">
          check_circle
        </span>
        <h1 className="font-headline text-5xl text-primary mb-4">
          Booking Confirmed!
        </h1>
        <p className="text-xl text-on-surface-variant mb-8">
          We&apos;ve sent a confirmation email with all the details for your
          session on October {selectedDate}th.
        </p>
        <button
          onClick={() => setBooked(false)}
          className="bg-inverse-surface text-inverse-on-surface px-10 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity"
        >
          Book Another Session
        </button>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h1 className="font-headline text-5xl md:text-7xl italic text-primary leading-tight mb-6">
            Find your time for healing.
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Select a session that fits your rhythm. We&apos;ve designed this
            space to be as calm as the care we provide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-surface-container-low rounded-lg p-8 md:p-12 border border-outline-variant/40">
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-headline text-3xl text-on-surface">
                October 2024
              </h2>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors"
                >
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
                <button
                  type="button"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-container text-primary hover:bg-surface-container-high transition-colors"
                >
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-y-6 text-center">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div
                  key={day}
                  className="text-secondary font-medium uppercase tracking-widest text-xs"
                >
                  {day}
                </div>
              ))}
              {[...Array(31)].map((_, i) => (
                <div
                  key={i}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedDate(i + 1)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setSelectedDate(i + 1);
                  }}
                  className="relative py-4 flex items-center justify-center cursor-pointer group"
                >
                  {selectedDate === i + 1 && (
                    <div className="absolute inset-0 m-auto w-12 h-12 bg-primary rounded-lg -z-10 shadow-lg"></div>
                  )}
                  <span
                    className={`${
                      selectedDate === i + 1
                        ? "text-on-primary font-bold"
                        : "text-on-surface font-medium"
                    } group-hover:scale-110 transition-transform`}
                  >
                    {i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-surface-container rounded-lg p-8 md:p-10 flex-1 border border-outline-variant/40">
              <h3 className="font-headline text-2xl text-on-surface mb-8">
                Available Slots
              </h3>
              <p className="text-on-surface-variant mb-8 font-body">
                Tuesday, Oct {selectedDate}th
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"].map(
                  (time) => (
                    <button
                      key={time}
                      type="button"
                      className="py-4 px-6 rounded-lg bg-surface border border-outline-variant text-on-surface font-semibold hover:border-primary transition-all"
                    >
                      {time}
                    </button>
                  ),
                )}
                <button
                  type="button"
                  className="py-4 px-6 rounded-lg bg-surface border border-outline-variant text-on-surface font-semibold opacity-50 cursor-not-allowed"
                >
                  Booked
                </button>
              </div>
            </div>
            <div className="bg-secondary-container rounded-lg p-8 md:p-10">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">
                  info
                </span>
                <div>
                  <h4 className="text-on-secondary-container font-bold mb-1">
                    Session Duration
                  </h4>
                  <p className="text-on-secondary-container/80 text-sm">
                    All initial consultations are 50 minutes long to ensure we
                    have ample time to listen and connect.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-12 bg-surface rounded-lg p-8 md:p-16 shadow-md border border-outline-variant/40">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="font-headline text-4xl text-on-surface mb-6">
                  Final Details
                </h3>
                <p className="text-on-surface-variant text-lg mb-8">
                  Tell us a little about yourself so we can prepare for our
                  time together.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 text-on-surface">
                    <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">lock</span>
                    </div>
                    <span>HIPAA Compliant &amp; Secure</span>
                  </div>
                </div>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-widest text-secondary font-semibold">
                      Full Name
                    </label>
                    <input
                      required
                      className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/40 text-on-surface"
                      placeholder="Jane Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-widest text-secondary font-semibold">
                      Email Address
                    </label>
                    <input
                      required
                      className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/40 text-on-surface"
                      placeholder="jane@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-widest text-secondary font-semibold">
                    Reason for visit (Optional)
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline/40 text-on-surface"
                    placeholder="Briefly share what's on your mind..."
                    rows={3}
                  ></textarea>
                </div>
                <button
                  className="w-full bg-inverse-surface text-inverse-on-surface py-5 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  type="submit"
                >
                  Confirm Booking
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
