"use client";

import { useState, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────────────────────────

const IconMenu = ({ className = "size-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" />
  </svg>
);

const IconX = ({ className = "size-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6l-12 12" /><path d="M6 6l12 12" />
  </svg>
);

const IconCheck = ({ className = "size-4" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12l5 5l10 -10" />
  </svg>
);

const IconArrowRight = ({ className = "size-4" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" />
  </svg>
);

const IconPlay = ({ className = "size-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6 4v16l13 -8z" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Video testimonial card — hover to play, leave to reset
// ─────────────────────────────────────────────────────────────────────────────

function VideoCard({ src, index }: { src: string; index: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handleEnter() {
    ref.current?.play();
    setPlaying(true);
  }
  function handleLeave() {
    if (ref.current) {
      ref.current.pause();
      ref.current.currentTime = 0;
    }
    setPlaying(false);
  }

  return (
    <div
      className="relative flex-shrink-0 w-44 sm:w-52 aspect-[9/16] bg-muted overflow-hidden cursor-pointer group transition-all duration-300"
      style={{
        border: playing ? "1px solid var(--primary)" : "1px solid var(--border)",
        boxShadow: playing ? "0 0 20px rgba(212,175,55,0.15)" : "none",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <video
        ref={ref}
        src={src}
        muted
        playsInline
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {/* Play overlay — fades out when playing */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 transition-opacity duration-300"
        style={{ opacity: playing ? 0 : 1 }}
      >
        <div className="size-14 rounded-full border border-primary/60 flex items-center justify-center backdrop-blur-sm">
          <IconPlay className="size-5 text-primary ml-0.5" />
        </div>
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Client {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Gold top bar when active */}
      <div
        className="absolute top-0 inset-x-0 h-0.5 bg-primary transition-opacity duration-300"
        style={{ opacity: playing ? 1 : 0 }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const BOOK_LINK = "https://calendly.com/buildandbrand/discovery";
const STRATEGY_LINK = "https://calendly.com/buildandbrand/strategy";

const TICKER = [
  "Content Strategy",
  "On-Site Filming",
  "Premium Editing",
  "Video Sales Letters",
  "Meta Ad Campaigns",
  "Landing Pages",
  "Lead Generation",
  "Authority Building",
  "Podcast Production",
  "Brand Storytelling",
];

const PROCESS = [
  {
    num: "01",
    title: "Strategy & Research",
    body: "We start by deeply understanding your market, competitors, and ideal clients. We craft a content strategy built around what actually moves the needle — not vanity metrics or random posting schedules.",
  },
  {
    num: "02",
    title: "High-End Production",
    body: "Professional on-site filming, cinema-grade equipment, and expert direction. Whether it's an authority-building podcast, a documentary-style case study, or a conversion-driven VSL — every frame is intentional.",
  },
  {
    num: "03",
    title: "Lead Gen & Distribution",
    body: "We build landing pages, run targeted Meta ads, and manage distribution so your content becomes a predictable, scalable lead generation system — not just posts that disappear into the feed.",
  },
];

const SERVICES = [
  {
    title: "Content Strategy",
    body: "Market research, scripting, content calendars, and messaging frameworks engineered to attract and convert high-ticket clients.",
  },
  {
    title: "On-Site Filming",
    body: "Professional crew and cinema-quality cameras at your office, job site, or a custom studio — wherever your story is best told.",
  },
  {
    title: "Premium Video Editing",
    body: "Color grading, motion graphics, captions, and platform-specific cuts optimized for YouTube, LinkedIn, Instagram, and Meta Ads.",
  },
  {
    title: "Video Sales Letters",
    body: "Conversion-engineered VSL scripts and productions designed to turn cold traffic into booked sales calls and closed deals.",
  },
  {
    title: "Meta Ad Campaigns",
    body: "Full-service paid social — copy, creative, audience targeting, A/B testing, and ongoing optimization built to scale.",
  },
  {
    title: "Landing Pages",
    body: "High-converting, purpose-built pages that capture leads from your paid and organic content without leaking potential clients.",
  },
];

const WHO_WE_SERVE = [
  "Real Estate Investors & Developers",
  "High-Ticket Service Providers",
  "Business Coaches & Consultants",
  "Financial Advisors & Wealth Managers",
  "Law Firms & Professional Services",
  "E-Commerce & SaaS Founders",
];

const TESTIMONIALS = [
  {
    name: "Andrew Pugni",
    location: "FL",
    quote: "Unbelievable experience. Very quick reliable and attention to detail. Very Passionate about the work.",
  },
  {
    name: "Isaiah Navarro",
    location: "FL",
    quote: "Honestly one of the best experiences I have ever had! They really go out of their way to make sure you are happy and comfortable.",
  },
  {
    name: "Marquis Williams",
    location: "FL",
    quote: "Great attention to clients to give them the look they want.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Shared styles
// ─────────────────────────────────────────────────────────────────────────────

const btnPrimary =
  "inline-flex shrink-0 items-center justify-center gap-2 font-heading text-sm font-bold tracking-wider whitespace-nowrap transition-all outline-none active:translate-y-px h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/85";

const btnOutline =
  "inline-flex shrink-0 items-center justify-center gap-2 font-heading text-sm font-bold tracking-wider whitespace-nowrap transition-all outline-none active:translate-y-px h-11 px-6 border border-border text-muted-foreground hover:border-primary/50 hover:text-primary";

const navLink =
  "inline-flex items-center justify-center text-xs font-medium whitespace-nowrap transition-colors h-8 px-2.5 text-muted-foreground hover:text-foreground";

const sectionLabel =
  "text-xs font-bold tracking-widest text-primary uppercase mb-4";

const inputClass =
  "w-full bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none px-4 h-11 font-heading transition-colors";

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormSent(true);
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-primary"
      >
        Skip to content
      </a>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-heading text-sm font-bold tracking-wider">
            <span className="text-primary">b</span>uild &amp; brand
          </a>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1">
            <a href="#what-we-do" className={navLink}>What We Do</a>
            <a href="#founder" className={navLink}>Our Founder</a>
            <a href="#contact" className={navLink}>Contact</a>
            <a
              href={BOOK_LINK}
              className="inline-flex items-center justify-center h-8 px-4 text-xs font-bold font-heading tracking-wider bg-primary text-primary-foreground hover:bg-primary/85 transition-colors ml-2"
            >
              Book a Call
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="sm:hidden inline-flex items-center justify-center size-9 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden border-t border-border bg-muted">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              <a href="#what-we-do" onClick={() => setMenuOpen(false)} className={navLink + " justify-start"}>What We Do</a>
              <a href="#founder" onClick={() => setMenuOpen(false)} className={navLink + " justify-start"}>Our Founder</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className={navLink + " justify-start"}>Contact</a>
              <div className="pt-3">
                <a href={BOOK_LINK} className={btnPrimary + " w-full justify-center"}>Book a Discovery Call</a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="main">

        {/* ── Hero ───────────────────────────────────────────────────────────── */}
        <section className="pt-20 pb-10 sm:pt-24 sm:pb-14 min-h-[calc(100vh-64px)] flex items-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

              {/* Left — text */}
              <div>
                <div className="inline-flex items-center gap-2.5 border border-border px-3 py-1.5 mb-6 text-xs text-muted-foreground tracking-widest uppercase">
                  <span className="size-1.5 rounded-full bg-primary flex-shrink-0" />
                  Premium Content &amp; Lead Generation
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                  We Turn Your Expertise
                  Into a Content Engine
                  That Drives{" "}
                  <span className="text-primary">Deal Flow.</span>
                </h1>

                <p className="mt-5 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg">
                  Stop wasting time on random posts. We handle the strategy, high-end filming, premium editing, and targeted lead generation ads — so you can close high-ticket clients.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a href={BOOK_LINK} className={btnPrimary}>
                    Book Free Discovery Call
                    <IconArrowRight className="size-4" />
                  </a>
                  <a href={STRATEGY_LINK} className={btnOutline}>
                    Strategy Session
                  </a>
                </div>

                <p className="mt-3 text-xs text-muted-foreground">
                  Free 30-min call · No commitment required
                </p>
              </div>

              {/* Right — video */}
              <div className="border border-border overflow-hidden">
                <video
                  src="/demo.mov"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto block"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ── Ticker ─────────────────────────────────────────────────────────── */}
        <div className="border-y border-border py-3.5 overflow-hidden bg-muted/30">
          <div className="marquee-track">
            {[...TICKER, ...TICKER].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3.5 text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap px-8"
              >
                <span className="size-1 rounded-full bg-primary flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Video Testimonials ─────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-10">
            <p className={sectionLabel}>Client Spotlight</p>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
                In Their Own Words.
              </h2>
              <p className="text-xs text-muted-foreground whitespace-nowrap pb-1 hidden sm:block">
                Hover to preview →
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="overflow-x-auto scrollbar-none -mx-4 sm:-mx-6">
              <div className="flex gap-3 pb-2 px-4 sm:px-6">
                {[1, 2, 3, 4].map((n, i) => (
                  <VideoCard key={i} src={`/testimonial-${n}.mov`} index={i} />
                ))}
                <div className="flex-shrink-0 w-4 sm:w-6" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Process / What We Do ───────────────────────────────────────────── */}
        <section id="what-we-do" className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <p className={sectionLabel}>The System</p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
                Three steps to a content system that converts.
              </h2>
            </div>

            <div className="border-t border-border divide-y divide-border">
              {PROCESS.map((step) => (
                <div
                  key={step.num}
                  className="py-12 grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-6 sm:gap-12 items-start"
                >
                  <div className="font-heading text-7xl font-bold text-primary/15 leading-none select-none">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ───────────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20 border-y border-border bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-10">
              <p className={sectionLabel}>What&apos;s Included</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
                Full-Service Production &amp; Distribution.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {SERVICES.map((s) => (
                <div key={s.title} className="bg-background p-8 sm:p-10 flex flex-col gap-5">
                  <div className="w-8 h-px bg-primary" />
                  <h3 className="font-heading text-base font-bold">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who We Serve ───────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-24 items-center">
              <div>
                <p className={sectionLabel}>Built For</p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight">
                  High-performers who need a content system that works.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  We don&apos;t work with everyone. Our process is built for entrepreneurs and professionals who have a proven offer, understand the value of premium positioning, and are ready to invest in a system that generates real ROI.
                </p>
                <a href={BOOK_LINK} className={btnPrimary}>
                  Book a Discovery Call
                  <IconArrowRight className="size-4" />
                </a>
              </div>
              <div className="flex flex-col border-t border-border">
                {WHO_WE_SERVE.map((item) => (
                  <div key={item} className="flex items-center gap-3.5 py-4 border-b border-border">
                    <IconCheck className="size-3.5 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ───────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20 border-y border-border bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-16 text-center">
              <p className={sectionLabel}>Client Testimonials</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
                What Our Clients Say.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border items-start">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="bg-background p-8 sm:p-10 flex flex-col gap-6">
                  <span className="font-heading text-5xl font-bold text-primary leading-none select-none">&ldquo;</span>
                  <div>
                    <p className="font-heading text-base font-bold">
                      {t.name}, {t.location}.
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Founder ────────────────────────────────────────────────────────── */}
        <section id="founder" className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <p className={sectionLabel}>The Founder</p>
            <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start mt-12">
              <div className="w-full max-w-xs">
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    src="/assets/100A6913_edited.jpg"
                    alt="Felix — Founder of Build &amp; Brand Media"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="font-heading text-3xl font-bold">Felix</h2>
                  <p className="text-primary text-sm mt-1">Founder &amp; Creative Director</p>
                </div>
                <div className="w-12 h-px bg-primary" />
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    My journey in visual storytelling started at 15 with my first camera, and since then, I&apos;ve mastered the art of creating media that is both visually stunning and strategically effective.
                  </p>
                  <p>
                    But working with high-level entrepreneurs — from real estate investors to top-tier service providers — I realized something important: business owners don&apos;t just need a camera guy. They need a growth partner.
                  </p>
                  <p>
                    At Build &amp; Brand Media, we don&apos;t just make content that looks good; we build systems that work. From on-site filming and high-end editing to running targeted lead generation ads, we craft purpose-driven assets designed to attract and convert.
                  </p>
                  <p>
                    Great content isn&apos;t just about aesthetics. It needs to serve a purpose, build your authority, and drive real business results. That&apos;s why we focus on bridging the gap between premium creativity and aggressive customer acquisition.
                  </p>
                  <p className="text-foreground font-medium">
                    If you&apos;re ready to build a media engine that stands out and actually scales your business — let&apos;s make it happen.
                  </p>
                </div>
                <div className="pt-2">
                  <a href={BOOK_LINK} className={btnPrimary}>
                    Book a Discovery Call
                    <IconArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────────────────────────── */}
        <section id="contact" className="py-16 sm:py-20 border-y border-border bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-24">

              {/* Info */}
              <div>
                <p className={sectionLabel}>Get In Touch</p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight">
                  Reach out to us!
                </h2>
                <div className="w-12 h-px bg-primary mb-8" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-10">
                  Ready to build a content system that generates real deal flow? Send us a message and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5">Email</p>
                    <a
                      href="mailto:Hello@buildandbrandllc.com"
                      className="font-heading text-sm font-bold hover:text-primary transition-colors"
                    >
                      Hello@buildandbrandllc.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1.5">Phone</p>
                    <a
                      href="tel:8137532620"
                      className="font-heading text-sm font-bold hover:text-primary transition-colors"
                    >
                      (813) 753-2620
                    </a>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                {formSent ? (
                  <div className="h-full flex flex-col items-center justify-center gap-4 py-16 text-center border border-border">
                    <div className="size-12 flex items-center justify-center border border-primary">
                      <IconCheck className="size-5 text-primary" />
                    </div>
                    <p className="font-heading text-base font-bold">Message Sent!</p>
                    <p className="text-sm text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      required
                      className={inputClass}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      required
                      className={inputClass}
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter Your Subject"
                      required
                      className={inputClass}
                    />
                    <select name="source" className={inputClass}>
                      <option value="">How did you hear about us?</option>
                      <option value="google">Google Search</option>
                      <option value="instagram">Instagram</option>
                      <option value="facebook">Facebook</option>
                      <option value="referral">Referral</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="other">Other</option>
                    </select>
                    <textarea
                      name="message"
                      placeholder="Enter Your Message"
                      rows={5}
                      required
                      className={inputClass + " h-auto py-3 resize-none"}
                    />
                    <button type="submit" className={btnPrimary + " justify-center mt-1"}>
                      Submit
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="relative border border-border p-10 sm:p-16 text-center">
              <span className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-primary" aria-hidden="true" />
              <span className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-primary" aria-hidden="true" />
              <span className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-primary" aria-hidden="true" />
              <span className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-primary" aria-hidden="true" />

              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-6">
                Ready to turn your expertise<br />
                into{" "}
                <span className="text-primary">consistent deal flow?</span>
              </h2>
              <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-sm leading-relaxed">
                Book your free 30-minute discovery call and let&apos;s map out the content growth strategy that&apos;s right for your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href={BOOK_LINK} className={btnPrimary}>
                  Book Free Discovery Call
                  <IconArrowRight className="size-4" />
                </a>
                <a href={STRATEGY_LINK} className={btnOutline}>
                  Strategy Session (Existing Clients)
                </a>
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                Free 30-min call · No commitment required
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-border py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="font-heading text-sm font-bold tracking-wider">
            <span className="text-primary">b</span>uild &amp; brand
          </a>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Build & Brand LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
