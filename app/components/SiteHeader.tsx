'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const overflowPrevRef = useRef<{
    bodyOverflow: string;
    htmlOverflow: string;
  } | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Lock scroll when mobile menu is open.
  // (Restores previous overflow values to avoid leaving the page stuck.)
  useEffect(() => {
    if (isOpen) {
      if (!overflowPrevRef.current) {
        overflowPrevRef.current = {
          bodyOverflow: document.body.style.overflow,
          htmlOverflow: document.documentElement.style.overflow,
        };
      }
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return;
    }

    // Menu closed: restore previous overflow values.
    if (overflowPrevRef.current) {
      document.body.style.overflow = overflowPrevRef.current.bodyOverflow;
      document.documentElement.style.overflow =
        overflowPrevRef.current.htmlOverflow;
      overflowPrevRef.current = null;
    }
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
        <nav className="hidden ml-auto items-end gap-10 text-[15px] font-semibold tracking-wide text-brand-teal-900 lg:flex pe-5">
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
          className="inline-flex items-center justify-center rounded-md border border-brand-teal-900/30 bg-white/80 px-3 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-teal-900 shadow-sm lg:hidden"
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

        {/* Mobile overlay + drawer (rendered only when open so it can't leave visual gaps) */}
      {isOpen ? (
        <>
          <div
            className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Mobile / tablet slide-in menu (right-side drawer, above overlay) */}
          <div className="fixed top-0 right-0 bottom-0 z-70 flex h-screen w-[85%] overflow-y-auto sm:w-[75%] md:w-[60%] max-w-none flex-col bg-white shadow-2xl dark:bg-brand-teal-950 lg:hidden">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
              <span className="text-sm font-bold uppercase tracking-[0.12em] text-brand-teal-900 dark:text-white">
                Ads in Motion
              </span>
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="rounded-md p-1 text-sm font-semibold uppercase tracking-[0.12em] text-brand-teal-900 hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
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
                  className={`flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-[0.12em] ${
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
        </>
      ) : null}
    </header>
  );
}
