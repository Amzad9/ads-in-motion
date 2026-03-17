import Link from "next/link";

const cards = [
  {
    title: "Campaign Consultation",
    body: "Best for planning your first flight or expanding into a new market. We’ll recommend vehicles, routes, and timing.",
    time: "30–45 min",
    price: "Free consult",
    href: "/contact",
  },
  {
    title: "Event Coverage Planning",
    body: "For concerts, sports, festivals, and launches. We map venues, traffic, and key windows of attention.",
    time: "30 min",
    price: "By quote",
    href: "/contact",
  },
  {
    title: "Multi-City Proposal",
    body: "Ideal for brands needing a detailed scope with multiple markets, dates, and creative variations.",
    time: "45–60 min",
    price: "By quote",
    href: "/contact",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#d3dbe0]">
      {children}
    </span>
  );
}

function Icon({ d }: { d: string }) {
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
      <path d={d} />
    </svg>
  );
}

export default function ServicesBookingSection() {
  return (
    <section className="bg-[#111a22] px-4 py-10 sm:px-8 sm:py-14">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
            Book a Service Appointment
          </h2>
          <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
            Choose an option below to start planning. We’ll follow up to confirm
            details and recommend the best setup.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-[0_16px_34px_rgba(0,0,0,0.35)]"
            >
              <h3 className="text-xl font-black uppercase leading-tight text-[#f6fbfc]">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#c7d2d9]">
                {card.body}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Tag>
                  <span className="mr-2 inline-flex rounded-full bg-[#9ec2cd]/12 p-2 text-[#9ec2cd]">
                    <Icon d="M12 8v5l3 2" />
                  </span>
                  {card.time}
                </Tag>
                <Tag>
                  <span className="mr-2 inline-flex rounded-full bg-[#9ec2cd]/12 p-2 text-[#9ec2cd]">
                    <Icon d="M12 3v18M7 8h10M7 16h10" />
                  </span>
                  {card.price}
                </Tag>
              </div>

              <div className="mt-7">
                <Link
                  href={card.href}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10"
                >
                  Select
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
