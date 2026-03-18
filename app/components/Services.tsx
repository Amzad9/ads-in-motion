import { CompassIcon, ShieldIcon, SparkleIcon } from "lucide-react";
import Image from "next/image";

export function Services() {
  const aboutCards = [
    {
      title: "What We Do",
      body: "Ads in Motion delivers mobile billboard and digital display advertising—helping brands reach people on the streets, near venues, and across key city routes.",
      icon: <CompassIcon />,
    },
    {
      title: "Why We Do It",
      body: "Strong campaigns need visibility where people actually are. Mobile advertising adds eye-level visibility, location targeting, and flexible scheduling that complements other media.",
      icon: <SparkleIcon />,
    },
    {
      title: "Why Choose Us",
      body: "We combine route planning, scheduling, and creative guidance—so your message lands in the right places, at the right times, with consistent execution and clear communication.",
      icon: <ShieldIcon />,
    },
  ];  
  return (
    <>
    <section id="services" className="bg-white py-8 dark:bg-background">
      <div className="container mx-auto grid items-center gap-10 px-4 sm:px-6 md:grid-cols-12">
        <div
          className="relative col-span-12 md:col-span-7 overflow-hidden rounded-[22px] bg-surface shadow-soft ring-1 ring-black/5"
          /* Match the actual image aspect ratio (features.png is 1264x541). */
          style={{ aspectRatio: "1264 / 541" }}
        >
          <Image
            src="/features.png"
            alt="Mobile advertising"
            fill
            sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw"
            className="object-cover"
          />
        </div>

        <div className="col-span-12 md:col-span-5">
          <h2 className="font-display text-[22px] lg:text-[46px] font-bold leading-[0.98] text-brand-teal-900 dark:text-foreground">
            PREMIUM MOBILE ADVERTISING <br />
            SERVICES
          </h2>
          <ul className="mt-6 space-y-3 text-[22px] font-medium text-foreground">
            {["City-Wide Campaigns", "Event-Specific Coverage", "Digital Integration"].map(
              (item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="h-[10px] w-[10px] rounded-full bg-brand-teal-900" />
                  <span>{item}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
    <section className="bg-[#111a22] px-4 py-8 sm:px-8">
        <div className="container mx-auto w-full">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
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
                className="rounded-2xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-5 shadow-[0_16px_34px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-[#9ec2cd]">{card.icon}</div>
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase leading-tight text-[#f4fbfd]">
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
    </>
  );
}
