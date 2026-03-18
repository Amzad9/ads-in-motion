import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
};

export function PageHero({ title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-bg.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-black/20" />
      </div>

      <div className="container relative mx-auto max-w-[1200px] px-6 py-14">
        <h1 className="font-display text-balance text-[52px] font-bold leading-[0.98] text-white md:text-[64px]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-[720px] text-[18px] leading-7 text-white/85">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
