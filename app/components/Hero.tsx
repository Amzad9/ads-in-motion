import Image from "next/image";
import { BarChart3, MonitorPlay, Route } from "lucide-react";
import { PrimaryButton } from "./PrimaryButton";

export function Hero() {
  
  return (
    <>
    <section className="relative overflow-hidden min-h-[600px] z-0">
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/ to-transparent" />
      </div>

      <div className="container relative mx-auto px-6 pb-14 pt-14 md:pb-10 md:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-[800px_1fr]">
          <div>
            <h1 className="font-display text-balance text-[52px] font-semibold leading-[0.98] text-white md:text-[64px]">
              MAKE YOUR BRAND MOBILE. <br />
              DOMINATE THE STREETS.
            </h1>
            <p className="mt-5 max-w-[520px] text-[18px] leading-7 text-white/85">
              Strategic mobile billboard and digital advertising solutions,
              delivering your message directly to your target audience. United
              States wide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryButton href="/contact" className="h-12 px-8 text-[13px]">
                CONSULT AN AD EXPERT
              </PrimaryButton>
              <PrimaryButton
                href="/portfolio"
                variant="outline"
                className="h-12 px-8 text-[13px]"
              >
                EXPLORE AD VEHICLES
              </PrimaryButton>
            </div>
          </div>

        
        </div>
      </div>
    </section>
    <section className="pb-8 -mt-16 z-10 relative sm:-mt-20 md:-mt-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-7 md:mt-12 md:grid-cols-3">
            {[
              {
                title: "TARGETED ROUTES.",
                body: "Optimize your ad reach with route planning tailored to specific demographics or events.",
                icon: Route,
              },
              {
                title: "DATA-DRIVEN IMPACT.",
                body: "Real-time campaign tracking and performance metrics to measure ROI and effectiveness.",
                icon: BarChart3,
              },
              {
                title: "HIGH-VISIBILITY DISPLAYS.",
                body: "Large, ultra-bright LED screens ensure your ads are seen day or night, in any weather.",
                icon: MonitorPlay,
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex items-start gap-5 rounded-[18px] bg-surface p-5 shadow-card ring-1 ring-black/5 dark:bg-surface sm:p-6"
                >
                  <div className="grid h-[60px] w-[80px] place-items-center rounded-[14px] bg-white ring-1 ring-black/5 dark:bg-white/90 sm:h-[68px] sm:w-[92px]">
                    <Icon className="h-8 w-8 text-brand-teal-900 sm:h-10 sm:w-10" />
                  </div>
                  <div>
                    <div className="text-[16px] font-extrabold tracking-tight text-black dark:text-foreground sm:text-[18px]">
                      {card.title}
                    </div>
                    <p className="mt-2 text-[13px] leading-5 text-muted sm:text-[14px]">
                      {card.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </section>
    </>
  );
}
