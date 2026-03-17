import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/assets/services-left.svg",
    alt: "Mobile Billboard Truck in City Traffic",
    title: "Mobile Billboard Truck in City Traffic",
  },
  {
    src: "/assets/truck-hero.svg",
    alt: "Night LED Mobile Billboard Campaign",
    title: "Night LED Mobile Billboard Campaign",
  },
  {
    src: "/assets/hero-bg.svg",
    alt: "Brand Awareness Visualization",
    title: "Brand Awareness Visualization",
  },
  {
    src: "/assets/services-left.svg",
    alt: "Advertising Impact Infographic Scene",
    title: "Advertising Impact Infographic Scene",
  },
  {
    src: "/assets/truck-hero.svg",
    alt: "Event Promotion with Mobile Billboard",
    title: "Event Promotion with Mobile Billboard",
  },
  {
    src: "/assets/services-left.svg",
    alt: "Digital Marketing + Billboard Integration",
    title: "Digital Marketing + Billboard Integration",
  },
  {
    src: "/assets/truck-hero.svg",
    alt: "Route Targeting Marketing Concept",
    title: "Route Targeting Marketing Concept",
  },
  {
    src: "/assets/hero-bg.svg",
    alt: "Vehicle Wrap Advertising",
    title: "Vehicle Wrap Advertising",
  },
  {
    src: "/assets/services-left.svg",
    alt: "High Traffic Highway Billboard Truck",
    title: "High Traffic Highway Billboard Truck",
  },
];

type Props = {
  fullWidth?: boolean;
  showHeader?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function GallerySection({
  fullWidth = true,
  showHeader = true,
  ctaHref,
  ctaLabel,
}: Props) {
  return (
    <section className="bg-[#111a22] px-4 py-10 sm:px-8 sm:py-14">
      <div
        className={
          fullWidth
            ? "container mx-auto w-full px-0"
            : "container mx-auto w-full"
        }
      >
        {showHeader ? (
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-black leading-[0.95] text-[#f0f7f8] sm:text-4xl lg:text-5xl">
              Visual Portfolio
            </h2>
            <p className="mt-4 text-base leading-7 text-[#c9d4da] sm:text-lg sm:leading-8">
              A selection of sample layouts and visuals. Replace these with real
              campaign imagery.
            </p>
          </div>
        ) : null}

        <div className="mx-auto mt-10 w-full px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((img, idx) => (
              <div
                key={`${img.src}-${idx}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_12px_26px_rgba(0,0,0,0.25)]"
              >
                <div className="relative h-[220px] w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-sm font-black uppercase tracking-wide text-[#f6fbfc]">
                    {img.title}
                  </div>
                  <div className="mt-1 text-sm text-[#c7d2d9]">
                    High-contrast creative + strong CTA.
                  </div>
                </div>
              </div>
            ))}
          </div>

          {ctaHref && ctaLabel ? (
            <div className="mt-10 flex justify-center">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:px-8 sm:text-base"
              >
                {ctaLabel}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
