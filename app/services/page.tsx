import Link from "next/link";
import ServicesBookingSection from "../components/ServicesBookingSection";
import { siteContact } from "../components/siteConfig";

const proposalPoints = [
  "Highly targeted route planning based on audience and goals",
  "High-visibility, eye-level displays built for strong recall",
  "Flexible flights for events, launches, and competitive targeting",
];

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h12" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PointIcon({ kind }: { kind: 0 | 1 | 2 }) {
  const paths: Record<number, string[]> = {
    0: ["M9 5h6v2H9z", "M7 9h10v10H7z", "M9 13h6"],
    1: ["M9 7h6", "M10 7V5h4v2", "M7 9h10v10H7z"],
    2: ["M7 7h10", "M8 11h8", "M9 15h6", "M7 20h10"],
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[kind].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0b1118] text-[#eaf4f6]">
      <section className="relative overflow-hidden bg-[#0f141a] px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(244,180,0,0.14)_0%,rgba(0,0,0,0)_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,17,24,0.95),rgba(11,17,24,0.65),rgba(11,17,24,0.45))]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

        <div className="container mx-auto">
          <div className="relative z-10 max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d3dbe0] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
              Online Appointments
            </p>
            <h1 className="font-display mt-5 text-4xl font-black uppercase leading-[0.9] text-[#f6fbfc] drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-6xl">
              Services
              <br />
              And Campaign Consultations
            </h1>
            <p className="mt-5 max-w-[720px] text-base leading-7 text-[#d3dbe0] sm:text-lg sm:leading-8">
              Browse consultation options for campaign planning, route
              targeting, event coverage, and multi-market proposals. Mobile
              billboards are designed to deliver noticeable, moving messages in
              high-traffic areas—so your brand can reach people where they live,
              work, and play.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center rounded-full border border-[#7f97a6] bg-[#9ec2cd]/12 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#ddecf1]">
                All Services
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#d3dbe0] transition hover:bg-white/10"
              >
                Proposals
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesBookingSection />

      <section className="bg-gradient-to-b from-[#0b1118] to-[#070b10] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <div className="grid gap-6 rounded-[24px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:grid-cols-12 lg:p-8">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                Proposal Support
              </p>
              <h2 className="font-display mt-3 text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
                Need a Detailed Scope or Proposal?
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                We work with brands and teams to define practical campaign
                priorities, align scope with budget, and plan the right routes
                and timing for each market.
              </p>

              <div className="mt-7 grid gap-3">
                {proposalPoints.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-4"
                  >
                    <span className="mt-0.5 rounded-full bg-[#9ec2cd]/12 p-2 text-[#9ec2cd]">
                      <PointIcon kind={(index as 0 | 1 | 2) ?? 0} />
                    </span>
                    <p className="text-base leading-7 text-[#d4dde2]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f4b400] bg-gradient-to-b from-[#f4b400] to-[#e2a200] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_14px_rgba(244,180,0,0.32)] transition hover:brightness-105 sm:w-fit sm:px-8 sm:text-base"
                >
                  Request Proposal
                  <ArrowRightIcon />
                </Link>
                <a
                  href={siteContact.phoneHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-fit sm:px-8 sm:text-base"
                >
                  Call {siteContact.phone}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0b1118] p-5 shadow-inner lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                Appointment Notes
              </p>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#cfd8dd]">
                <p>
                  Each option is designed to make scheduling simple and help
                  start the conversation with the right level of detail.
                </p>
                <p>
                  We&apos;ll confirm your market, dates, and objective—then share a
                  recommended vehicle and route plan designed for visibility and
                  frequency.
                </p>
                <p>
                  For complex requests, we can coordinate proposal reviews and
                  follow-up consultations through the contact team.
                </p>
                <p className="text-[#c9d4da]">
                  Industry-reported studies often cite strong ad notice and
                  recall for mobile billboards, with potential for tens of
                  thousands of daily impressions per vehicle depending on route,
                  traffic, and timing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
