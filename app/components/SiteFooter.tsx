import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer
      className="bg-brand-teal-900 py-10 text-white dark:bg-brand-teal-950"
    >
      <div className="container mx-auto grid items-start gap-10 px-6 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
        <Link href="/" className="flex items-center gap-3">
  <video
    src="/_users_865d197d-b7a0-4f2f-a38a-880d1f052484_generated_010bc847-1bf7-41aa-8311-0c737ed89008_generated_video_hd.mov"
    className="h-auto w-[120px] rounded-md"
    autoPlay
    loop
    muted
    playsInline
  />
</Link>
        </div>

        <div>
          <div className="text-[20px] font-extrabold tracking-widest">
            CONTACT DETAILS
          </div>
          <div className="mt-3 space-y-2 text-[15px] text-white/85">
            <div className="flex items-center gap-3">
              <span aria-hidden="true">📍</span>
              <span>123 Ads Lane, Houston, TX 77000</span>
            </div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true">📞</span>
              <span>(281) 725-0337</span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[20px] font-extrabold tracking-widest">LINKS</div>
          <div className="mt-3 grid gap-1 text-[15px] font-semibold uppercase text-white/85">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "About Us", href: "/about" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8">
          <div>
            <div className="text-[20px] font-extrabold tracking-widest">
              FOLLOW US
            </div>
            <div className="mt-3 flex items-center gap-4 text-white/90">
              {[
                { label: "Instagram", glyph: "◎" },
                { label: "Facebook", glyph: "f" },
                { label: "Twitter", glyph: "𝕏" },
              ].map((item) => (
                <span
                  key={item.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/10 text-sm font-bold"
                  aria-label={item.label}
                >
                  {item.glyph}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[20px] font-extrabold tracking-widest">
              HOURS
            </div>
            <div className="mt-3 text-[15px] text-white/85">
              <div>Mon-Sat: 8AM-6PM</div>
              <div>Sun: Closed</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
