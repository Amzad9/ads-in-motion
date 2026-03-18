'use client';

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import GallerySection from "../components/GallerySection";
import { siteContact } from "../components/siteConfig";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h12" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0b1118] text-[#eaf4f6]">
      <section className="relative overflow-hidden bg-[#0f141a] px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b1118] via-[#0b1118]/75 to-[#0b1118]/45" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(244,180,0,0.12)_0%,rgba(0,0,0,0)_55%)]" />

        <div className="container mx-auto">
          <div className="relative z-10 max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d3dbe0] shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:text-sm">
              Visual Portfolio
            </p>
            <h1 className="font-display mt-5 text-5xl font-bold uppercase leading-[0.9] text-[#f6fbfc] drop-shadow-[0_3px_6px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-7xl">
              Unleash Your Imagination
              <br />
              With Our Campaign Gallery
            </h1>
            <p className="mt-5 max-w-[44rem] text-base leading-7 text-[#d3dbe0] sm:text-lg sm:leading-8">
              Explore a curated selection of visuals that showcase display
              impact, route presence, and real-world campaign style. The most
              effective work keeps messaging simple, high-contrast, and easy to
              process at a glance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f4b400] bg-gradient-to-b from-[#f4b400] to-[#e2a200] px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_16px_rgba(244,180,0,0.35)] transition hover:brightness-105 sm:px-8 sm:text-base"
              >
                Schedule A Consultation
                <ArrowRightIcon />
              </Link>
              <a
                href={siteContact.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f6fbfc] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-white/10 sm:px-8 sm:text-base"
              >
                Call {siteContact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          {/* <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-[#f6fbfc] sm:text-3xl">
                Campaign Preview Slider
              </h2>
              <p className="mt-2 text-sm text-[#c6d3db] sm:text-base">
                Swipe through sample campaign visuals from our portfolio.
              </p>
            </div>
          </div> */}

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 1.5, spaceBetween: 24 },
              1024: { slidesPerView: 1.5, spaceBetween: 28 },
            }}
            className="pb-10 portfolio-swiper"
          >
            {[
              {
                src: "/portfolio/clean_img1.png",
                title: "Mobile Billboard Truck",
              },
              {
                src: "/portfolio/clean_img2.png",
                title: "Night LED Billboard Campaign",
              },
              {
                src: "/portfolio/clean_img3.png",
                title: "Brand Awareness in Crowded Street",
              },
              {
                src: "/portfolio/clean_img4.png",
                title: "Advertising Analytics Visualization",
              },
              {
                src: "/portfolio/clean_img5.png",
                title: "Event Promotion Billboard",
              },
            ].map(({ src, title }) => (
              <SwiperSlide key={src}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#111821] shadow-[0_12px_26px_rgba(0,0,0,0.35)]">
                  <div className="relative h-[220px] w-full sm:h-[460px]">
                    <Image
                      src={src}
                      alt={title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="mt-1 text-2xl font-bold text-[#f6fbfc]">
                      {title}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <style jsx global>{`
        .portfolio-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.45);
          opacity: 1;
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          background: #ffffff;
        }
      `}</style>
    </main>
  );
}
