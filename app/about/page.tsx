import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const aboutCards = [
  {
    title: "What We Do",
    body: "Ads in Motion delivers mobile billboard and digital display advertising—helping brands reach people on the streets, near venues, and across key city routes.",
    icon: <CompassIcon />,
  },
  {
    title: "Why We Do It",
    body: "Strong campaigns need visibility where people actually are. Mobile advertising adds eye-level visibility, location targeting, and flexible scheduling that complements other media.",
    icon: <SparkIcon />,
  },
  {
    title: "Why Choose Us",
    body: "We combine route planning, scheduling, and creative guidance—so your message lands in the right places, at the right times, with consistent execution and clear communication.",
    icon: <ShieldIcon />,
  },
];

const differenceCards = [
  {
    title: "City-Wide Coverage",
    body: "Consistent impressions across high-traffic corridors and neighborhoods.",
    image: "/abouts/ex1.png",
    alt: "City streets and route coverage",
  },
  {
    title: "Event Targeting",
    body: "Focus attention near venues, festivals, and high-density gathering areas.",
    image: "/abouts/ex2.png",
    alt: "Event-specific advertising coverage",
  },
  {
    title: "High-Visibility LED",
    body: "Bright, high-impact screens designed for day and night viewing.",
    image: "/abouts/ex3.png",
    alt: "High-visibility LED display",
  },
  {
    title: "Creative Flexibility",
    body: "Update messaging quickly for launches, promos, or time-sensitive flights.",
    image: "/abouts/ex4.png",
    alt: "Creative messaging flexibility",
  },
  {
    title: "Campaign Reporting",
    body: "Clear communication, optimization suggestions, and next-flight planning.",
    image: "/abouts/ex5.png",
    alt: "Campaign tracking and reporting",
  },
];

const processSteps = [
  {
    title: "Step 1: Goals & Market",
    body: "We align on your objective, target audience, and market/city focus. Then we recommend a vehicle setup, timing, and expected coverage approach.",
  },
  {
    title: "Step 2: Creative Prep",
    body: "We confirm specs and help ensure the message is legible, high-contrast, and built for quick street-level viewing (few words, strong contrast, clear CTA).",
  },
  {
    title: "Step 3: Route Planning",
    body: "Routes are planned around high-traffic corridors, neighborhoods, and event zones based on your audience and goals.",
  },
  {
    title: "Step 4: Launch & Scheduling",
    body: "We deploy vehicles and run your flight with the agreed schedule/dayparts.",
  },
  {
    title: "Step 5: Optimize",
    body: "We optimize by adjusting routes, dayparts, and messaging when needed to improve visibility and consistency.",
  },
  {
    title: "Step 6: Wrap & Next Steps",
    body: "We share recap notes and planning recommendations for your next flight.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b1118] text-[#eaf4f6]">
      <section className="relative bg-[#0f141a] px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <div className="absolute inset-0">
          <Image
            src="/abouts/banner.png"
            alt=""
            fill
            priority
            className="object-cover opacity-95"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#0b1118] via-[#0b1118]/70 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

        <div className="container mx-auto w-full">
          <div className="relative z-10 max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d3dbe0] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
              ADS IN MOTION • MOBILE ADVERTISING
            </p>

            <h1 className="font-display mt-5 text-4xl font-black uppercase leading-[0.9] text-[#f6fbfc] drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-6xl">
              About
              <br />
              Ads in Motion
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#d3dbe0] sm:text-lg sm:leading-8">
              We provide premium mobile billboard and digital display campaigns
              for brands that want high visibility, location-based targeting,
              and strong audience notice.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="w-full rounded-full border border-[#f4b400] bg-gradient-to-b from-[#f4b400] to-[#e2a200] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_16px_rgba(244,180,0,0.35)] transition hover:brightness-105 sm:w-auto sm:px-8 sm:text-base"
              >
                Book A Consultation
              </Link>
              <Link
                href="/portfolio"
                className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-auto sm:px-8 sm:text-base"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111a22] px-4 pt-10 sm:px-8 sm:pt-14">
        <div className="container mx-auto w-full">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
              Built for Better Visibility
            </h2>
            <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
              We help clients stand out in real-world environments with route
              planning, strong creative, and consistent execution.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {aboutCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-[0_16px_34px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#9ec2cd]">{card.icon}</div>
                  <div>
                    <h3 className="font-display text-2xl font-black uppercase leading-tight text-[#f4fbfd]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#c7d2d9]">
                      {card.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

      
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#111a22] to-[#0b1118] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto w-full">
          <div className="grid gap-6 rounded-[22px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:grid-cols-12 lg:p-7">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl">
                Routes, Events & City Coverage
              </h2>
              <p className="mt-4 text-base leading-8 text-[#c9d4da] sm:text-lg">
                We plan campaigns around your audience—commuter corridors,
                neighborhood density, and event timing—so your message shows up
                where attention is highest.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="w-full rounded-full border border-[#f4b400] bg-gradient-to-b from-[#f4b400] to-[#e2a200] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_14px_rgba(244,180,0,0.32)] transition hover:brightness-105 sm:w-fit"
                >
                  Schedule A Consultation
                </Link>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-3xl border border-white/15 shadow-inner lg:col-span-7 lg:h-auto">
              <Image
                src="/assets/services-left.svg"
                alt="Mobile advertising campaign"
                fill
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto w-full">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-2xl font-black leading-none text-[#111a22] sm:text-3xl lg:text-4xl">
              Experience the Difference
            </h2>
            <p className="mt-4 text-base leading-7 text-[#111a22] sm:text-lg sm:leading-8">
              From city-wide flights to event coverage, our team helps brands run
              campaigns that are visible, targeted, and repeatable.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {differenceCards.map((card) => (
              <article
                key={card.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_12px_26px_rgba(0,0,0,0.25)]"
              >
                <div className="relative h-40 overflow-hidden rounded-xl border border-white/15">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
                <div className="mt-4">
                  <h3 className="text-md font-black uppercase leading-tight text-[#111a22]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#111a22]">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#0b1118] to-[#070b10] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto w-full">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
              Our Campaign Process
            </h2>
            <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
              A clear workflow keeps planning, execution, and optimization
              organized from kickoff through recap.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {processSteps.map((step) => (
              <details
                key={step.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
              >
                <summary className="cursor-pointer list-none">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-black text-[#f6fbfc] sm:text-xl">
                        {step.title}
                      </p>
                    </div>
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-black text-[#dbe3e7] transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>
                <p className="mt-3 text-base leading-7 text-[#c9d4da]">
                  {step.body}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto w-full">
          <div className="grid gap-6 rounded-[22px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:grid-cols-12 lg:p-8">
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl font-black leading-[0.95] text-[#111a22] sm:text-4xl">
                Better yet, Call or Message Us
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Contact Ads in Motion to discuss campaign goals, markets, dates,
                and next steps.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="w-full rounded-full border border-[#f4b400] bg-linear-to-b from-[#f4b400] to-[#e2a200] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_14px_rgba(244,180,0,0.32)] transition hover:brightness-105 sm:w-fit sm:px-8 sm:text-base"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:12817250337"
                  className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#111a22] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-fit sm:px-8 sm:text-base"
                >
                  Call (281) 725-0337
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0b1118] p-5 shadow-inner lg:col-span-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,180,0,0.18)_0%,rgba(0,0,0,0)_60%)]" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f4b400]">
                  Office
                </p>
                <p className="mt-2 text-lg font-black text-[#f6fbfc]">
                  Ads in Motion
                </p>
                <p className="mt-2 text-base leading-7 text-[#cfd8dd]">
                  123 Ads Lane, Houston, TX 77000
                </p>
                <p className="mt-4 text-base leading-7 text-[#cfd8dd]">
                  (281) 725-0337
                </p>
                <p className="mt-4 text-sm leading-6 text-[#cfd8dd]">
                  Share your city, dates, and objective. We&apos;ll reply with a
                  recommended setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-white/15 bg-white/5">
      {children}
    </span>
  );
}

function CompassIcon() {
  return (
    <IconFrame>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M14.8 9.2 13 13l-3.8 1.8L11 11z" />
      </svg>
    </IconFrame>
  );
}

function SparkIcon() {
  return (
    <IconFrame>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2v6M12 16v6M4 12h6M14 12h6" />
        <path d="M6.2 6.2 10 10M14 14l3.8 3.8M17.8 6.2 14 10M10 14l-3.8 3.8" />
      </svg>
    </IconFrame>
  );
}

function ShieldIcon() {
  return (
    <IconFrame>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 3 20 7v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7z" />
        <path d="M9.3 12.2 11 14l3.8-4.4" />
      </svg>
    </IconFrame>
  );
}
