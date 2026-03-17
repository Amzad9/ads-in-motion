import Image from "next/image";

const testimonials = [
  {
    name: "David K.",
    quote:
      "Our property is now completely secure. The team has efficient and professional.",
    avatar: "/testimonial/test1.png",
  },
  {
    name: "Sarah M.",
    quote:
      "The new surveillance system is fantastic and easy to use. I feel much safer.",
    avatar: "/testimonial/test2.png",
  },
  {
    name: "Robert S.",
    quote:
      "Peace of mind is everything, and this company delivery a top-totoch security solution.",
    avatar: "/testimonial/test3.png",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-8 dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="rounded-[20px] bg-surface-2 px-5 py-8 shadow-soft ring-1 ring-black/5 sm:px-8 sm:py-10">
          <h3 className="font-display text-center text-[30px] font-black leading-[1] text-black dark:text-foreground sm:text-[36px] md:text-[40px]">
            TESTIMONIALS
          </h3>

          <div className="mt-8 grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-10">
            {testimonials.map((t) => (
              <div key={t.name} className="flex gap-5">
                <div className="shrink-0">
                  <Image
                    src={t.avatar}
                    alt=""
                    width={84}
                    height={84}
                    className="h-[84px] w-[84px] rounded-full ring-4 ring-white/80"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-brand-gold-500">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx} aria-hidden="true" className="text-[18px]">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 text-[15px] leading-6 text-black/80 dark:text-foreground/85">
                    “{t.quote}”
                  </p>
                  <div className="mt-2 text-[15px] font-semibold text-black dark:text-foreground">
                    - {t.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
