import Link from "next/link";

import { siteContact } from "../components/siteConfig";

const contactOptions = [
  {
    title: "Call Or Text",
    body: "Speak directly with Ads in Motion about campaign goals, timelines, markets, and scheduling.",
    value: siteContact.phone,
    href: siteContact.phoneHref,
    icon: <PhoneIcon />,
  },
  {
    title: "Email",
    body: "Use email for consultation requests, campaign planning, and proposal coordination.",
    value: siteContact.emailShowroom,
    href: `mailto:${siteContact.emailShowroom}`,
    icon: <MailIcon />,
  },
  {
    title: "Operations Support",
    body: "Current clients can use operations support for changes, coordination, and ongoing communication.",
    value: siteContact.emailOperations,
    href: `mailto:${siteContact.emailOperations}`,
    icon: <ShieldCheckIcon />,
  },
];

const visitReasons = [
  "Review campaign priorities and budget considerations",
  "Discuss city-wide coverage, event zones, and timing/dayparts",
  "Evaluate creative, messaging, and deployment approach",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b1118] text-[#eaf4f6]">
      <section className="relative overflow-hidden bg-[#0f141a] px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b1118] via-[#0b1118]/75 to-[#0b1118]/45" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(244,180,0,0.12)_0%,rgba(0,0,0,0)_55%)]" />

        <div className="container mx-auto w-full">
          <div className="relative z-10 max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d3dbe0] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
              Contact Ads in Motion
            </p>
            <h1 className="font-display mt-5 text-4xl font-bold uppercase leading-[0.9] text-[#f6fbfc] drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-6xl">
              Better Yet,
              <br />
              Call, Text, Or Message Us
            </h1>
            <p className="mt-5 max-w-[720px] text-base leading-7 text-[#d3dbe0] sm:text-lg sm:leading-8">
              Schedule a consultation to discuss markets, dates, route targeting,
              and creative planning for your mobile billboard campaign.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={siteContact.phoneHref}
                className="w-full rounded-full border border-[#f4b400] bg-gradient-to-b from-[#f4b400] to-[#e2a200] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_16px_rgba(244,180,0,0.35)] transition hover:brightness-105 sm:w-auto sm:px-8 sm:text-base"
              >
                Call {siteContact.phone}
              </a>
              <a
                href={`mailto:${siteContact.emailShowroom}`}
                className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-auto sm:px-8 sm:text-base"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111a22] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto w-full">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contactOptions.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-[0_16px_34px_rgba(0,0,0,0.28)] transition hover:border-white/20"
              >
                <span className="inline-flex rounded-full bg-[#9ec2cd]/12 p-3 text-[#9ec2cd]">
                  {item.icon}
                </span>
                <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-[#f4fbfd]">
                  {item.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-[#c7d2d9]">
                  {item.body}
                </p>
                <p className="mt-5 break-words whitespace-normal text-sm font-black uppercase tracking-[0.16em] text-[#f4b400]">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#0b1118] to-[#070b10] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto w-full">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] lg:col-span-7 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                Consultation
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
                Start With A Clear Campaign Conversation
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                Our consults help you define priorities, confirm the market and
                timing, and choose the best route strategy for your objective.
              </p>

              <div className="mt-7 grid gap-3">
                {visitReasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-4"
                  >
                    <span className="mt-0.5 rounded-full bg-[#9ec2cd]/12 p-2 text-[#9ec2cd]">
                      <SendIcon />
                    </span>
                    <p className="text-base leading-7 text-[#d4dde2]">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${siteContact.emailShowroom}`}
                  className="inline-flex items-center justify-center rounded-full border border-[#f4b400] bg-gradient-to-b from-[#f4b400] to-[#e2a200] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_14px_rgba(244,180,0,0.32)] transition hover:brightness-105 sm:w-fit sm:px-8 sm:text-base"
                >
                  Book Via Email
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:w-fit sm:px-8 sm:text-base"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-[24px] border border-white/10 bg-[#0b1118] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
                <div className="flex items-start gap-3">
                  <span className="rounded-full bg-[#9ec2cd]/12 p-3 text-[#9ec2cd]">
                    <MapPinIcon />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                      Address
                    </p>
                    <p className="mt-3 text-lg font-black text-[#f6fbfc]">
                      {siteContact.addressLines[0]}
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#cfd8dd]">
                      {siteContact.addressLines[1]}
                      <br />
                      {siteContact.addressLines[2]}
                    </p>
                    <a
                      href={siteContact.directionsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.14em] text-[#f4b400] transition hover:text-[#ffd66b]"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#0b1118] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
                <div className="flex items-start gap-3">
                  <span className="rounded-full bg-[#9ec2cd]/12 p-3 text-[#9ec2cd]">
                    <ClockIcon />
                  </span>
                  <div className="w-full">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                      Hours
                    </p>
                    <div className="mt-4 space-y-3">
                      {siteContact.businessHours.map((item) => (
                        <div
                          key={item}
                          className="flex flex-col gap-1 border-b border-white/10 pb-3 text-sm text-[#d4dde2] last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                        >
                          <span>{item.split(" - ")[0]}</span>
                          <span className="font-semibold uppercase tracking-widest text-[#c0ccd2]">
                            {item.split(" - ")[1]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111a22] px-4 pb-10 sm:px-8 sm:pb-14">
        <div className="container mx-auto w-full">
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0b1118] shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
            <div className="flex flex-col gap-3 border-b border-white/10 px-6 py-5 sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9ec2cd]">
                Map
              </p>
              <h2 className="font-display text-3xl font-bold leading-[0.95] text-[#f0f7f8] sm:text-4xl">
                Visit Us
              </h2>
              <p className="max-w-3xl text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
                Use the map to find our location and share details about your
                campaign before you arrive or call.
              </p>
            </div>

            <div className="h-[320px] w-full sm:h-[380px] lg:h-[420px]">
              <iframe
                title="Ads in Motion map"
                src="https://www.google.com/maps?q=123%20Ads%20Lane%2C%20Houston%2C%20TX%2077000&z=15&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function IconSvg({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function PhoneIcon() {
  return (
    <IconSvg>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z" />
    </IconSvg>
  );
}

function MailIcon() {
  return (
    <IconSvg>
      <path d="M4 4h16v16H4z" opacity="0" />
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </IconSvg>
  );
}

function ShieldCheckIcon() {
  return (
    <IconSvg>
      <path d="M12 3 20 7v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7z" />
      <path d="M9.3 12.2 11 14l3.8-4.4" />
    </IconSvg>
  );
}

function SendIcon() {
  return (
    <IconSvg>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </IconSvg>
  );
}

function MapPinIcon() {
  return (
    <IconSvg>
      <path d="M12 22s7-4.5 7-12a7 7 0 0 0-14 0c0 7.5 7 12 7 12Z" />
      <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </IconSvg>
  );
}

function ClockIcon() {
  return (
    <IconSvg>
      <path d="M12 8v5l3 2" />
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </IconSvg>
  );
}
