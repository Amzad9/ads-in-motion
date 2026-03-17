'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PrimaryButton } from "./PrimaryButton";

const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Lock body scroll when mobile menu is open (like reference header)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/70 aim-nav-blur dark:bg-brand-teal-950/60">
      <div className="container mx-auto flex h-[86px] items-center justify-between px-6">
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

        {/* Desktop nav (shown on large screens and up) */}
        <nav className="hidden items-center gap-10 text-[15px] font-extrabold tracking-widest text-brand-teal-900 lg:flex">
          {nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative py-2 uppercase hover:text-brand-teal-800"
              >
                <span className="relative">
                  {item.label}
                  {isActive ? (
                    <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded bg-brand-teal-900" />
                  ) : null}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <PrimaryButton href="/contact" className="h-12 px-7 text-[13px]">
            GET ADVERTISING
          </PrimaryButton>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md border border-brand-teal-900/30 bg-white/80 px-3 py-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-teal-900 shadow-sm lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <span className="mr-2 text-xs">Menu</span>
          <span className="relative block h-[14px] w-4">
            <span
              className={`absolute left-0 h-[2px] w-full rounded bg-brand-teal-900 transition-transform duration-200 ${
                isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-full rounded bg-brand-teal-900 transition-opacity duration-150 ${
                isOpen ? "top-1/2 opacity-0" : "top-1/2 -translate-y-1/2"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-full rounded bg-brand-teal-900 transition-transform duration-200 ${
                isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

        {/* Mobile overlay - tap to close (phones + tablets) */}
      <div
          className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

        {/* Mobile / tablet slide-in menu (right-side drawer, above overlay) */}
      <div
          className={`fixed top-0 right-0 bottom-0 z-[70] flex h-screen w-full sm:w-[75%] md:w-[60%] max-w-none flex-col bg-white shadow-2xl transition-transform duration-300 ease-out dark:bg-brand-teal-950 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
              <span className="text-sm font-black uppercase tracking-[0.18em] text-brand-teal-900 dark:text-white">
                Ads in Motion
              </span>
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="rounded-md p-1 text-sm font-bold uppercase tracking-[0.18em] text-brand-teal-900 hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
              aria-label="Close navigation menu"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 px-5 py-4">
            {nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-lg px-3 py-3 text-sm font-extrabold uppercase tracking-[0.18em] ${
                    isActive
                      ? "bg-brand-teal-900 text-white"
                      : "text-brand-teal-900 hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-border px-5 py-4">
            <PrimaryButton
              href="/contact"
              className="h-11 w-full justify-center text-[12px]"
              onClick={closeMenu}
            >
              GET ADVERTISING
            </PrimaryButton>
          </div>
        </div>
    </header>
  );
}
