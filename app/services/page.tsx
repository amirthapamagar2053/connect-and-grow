import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Counselling Services",
  description:
    "Individual and couples counselling, grief and loss support, and trauma-informed therapy in Sydney, NSW — face-to-face, by phone or via Google Meet.",
  alternates: { canonical: "/services/" },
  openGraph: { title: "Counselling Services | Connect & Grow", description: "Individual and couples counselling, grief and loss support, and trauma-informed therapy in Sydney, NSW — face-to-face, by phone or via Google Meet.", url: "/services/", images: [OG_IMAGE] },
};


export default function ServicesPage() {
  return (
    <main className="pt-32 pb-24 bg-background">
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="max-w-3xl">
          <span className="font-label text-sm uppercase tracking-[0.2em] text-secondary mb-6 block">
            Our Services
          </span>
          <h1 className="text-6xl md:text-7xl font-light text-primary leading-[1.1] mb-8 italic font-headline">
            A Sanctuary for <span className="block">Your Wellness Journey.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Explore our diverse range of therapeutic services in Sydney, each
            designed with a gentle, patient-centred approach to foster
            resilience and inner peace.
          </p>
          <p className="mt-6 flex items-center gap-2 text-secondary font-medium">
            <span className="material-symbols-outlined">event_available</span>
            Face-to-face across Sydney, or by telehealth and Google Meet
            Australia-wide.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 group relative overflow-hidden bg-surface-container rounded-lg p-12 flex flex-col justify-between min-h-[450px] border border-outline-variant/40 shadow-sm hover:shadow-xl transition-shadow duration-500">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="text-4xl font-medium text-primary mb-4 font-headline">
                Individual Therapy
              </h3>
              <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
                Personalized sessions focused on your unique path. We create a
                safe, compassionate space to process emotions, overcome personal
                challenges, and cultivate self-discovery.
              </p>
            </div>
            <Link
              href="/booking"
              className="relative z-10 flex items-center gap-2 text-primary font-semibold tracking-wide cursor-pointer group-hover:gap-4 transition-all"
            >
              Learn More{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            {/* A decorative background image sat here, loaded from a
                lh3.googleusercontent.com/aida-public/… URL left over from the
                design mockup. Those URLs are temporary and both had already
                started 404ing, so the card rendered the alt text "background"
                where the texture should have been. Drop a real image into
                public/ and restore this block if you want the texture back. */}
          </div>

          <div className="md:col-span-4 group bg-surface-container-high rounded-lg p-8 flex flex-col justify-between border border-outline-variant/40 shadow-sm hover:shadow-xl transition-shadow duration-500">
            <div>
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container">
                <span className="material-symbols-outlined">diversity_2</span>
              </div>
              <h3 className="text-2xl font-medium text-primary mb-4 font-headline">
                Couples Counselling
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Rekindle connection and improve communication through
                evidence-based approaches.
              </p>
            </div>
            {/* A square photo sat here, from a dead mockup URL (see the note in
                the card above). The card had no call to action of its own
                because the photo filled this space — the link below replaces
                it, so the card now matches its sibling and the booking page
                gets an internal link from every service card. To put a photo
                back, add it to public/ and restore:

                <div className="aspect-square w-full rounded-lg overflow-hidden mb-4">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="/couples-counselling.webp"
                    alt="<describe what the photo shows>"
                  />
                </div> */}
            <Link
              href="/booking"
              className="flex items-center gap-2 text-primary font-semibold tracking-wide cursor-pointer group-hover:gap-4 transition-all"
            >
              Learn More{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: "family_restroom",
              title: "Family Therapy",
              text: "Strengthen family bonds and improve communication in a supportive, structured environment.",
            },
            {
              icon: "groups",
              title: "Group Therapy",
              text: "Connect with others facing similar challenges in a guided, confidential group setting.",
            },
            {
              icon: "emoji_people",
              title: "Teen Counselling",
              text: "Specialised support to help adolescents navigate emotional and developmental challenges.",
            },
            {
              icon: "work",
              title: "Workplace Wellness",
              text: "Corporate programs designed to support employee mental health and resilience.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="bg-surface p-8 rounded-lg border border-outline-variant/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container">
                <span className="material-symbols-outlined">{s.icon}</span>
              </div>
              <h3 className="text-xl font-medium text-primary mb-3 font-headline">
                {s.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8">
        <div className="bg-primary text-on-primary rounded-lg p-16 md:p-24 text-center relative overflow-hidden">
          <h2 className="font-headline text-4xl md:text-5xl mb-8 relative z-10">
            Ready to take the <br /> first step?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link
              href="/booking"
              className="bg-surface text-primary px-10 py-4 rounded-lg font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Book an Appointment
            </Link>
            <Link
              className="text-on-primary font-medium hover:underline underline-offset-8 transition-all"
              href="/about"
            >
              Meet Our Counsellors
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
