import { createFileRoute } from "@tanstack/react-router";
import heroBottle from "@/assets/hero-bottle.jpg";

const STORE_URL = "https://sarkar.store/";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SARKAR NOIR — Own the Night | Sarkar Perfume" },
      {
        name: "description",
        content:
          "Discover SARKAR NOIR by Sarkar Perfume — a sophisticated evening fragrance blending bergamot, black pepper, lavender, cedarwood, oud, amber and musk.",
      },
      { property: "og:title", content: "SARKAR NOIR — Own the Night | Sarkar Perfume" },
      {
        property: "og:description",
        content:
          "An elegant evening fragrance of spice, woods, oud and amber. ₹1,499 from Sarkar Perfume.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "SARKAR NOIR — Own the Night" },
      {
        name: "twitter:description",
        content: "A sophisticated evening fragrance from Sarkar Perfume. ₹1,499.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "SARKAR NOIR",
          brand: { "@type": "Brand", name: "Sarkar Perfume" },
          description:
            "SARKAR NOIR is an elegant evening fragrance blending bergamot, black pepper, lavender, cedarwood, oud, amber and musk.",
          offers: {
            "@type": "Offer",
            price: "1499",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: STORE_URL,
          },
        }),
      },
    ],
  }),
});

const NOTES = [
  {
    label: "Top Notes",
    subtitle: "The Opening",
    items: ["Bergamot", "Black Pepper"],
  },
  {
    label: "Heart Notes",
    subtitle: "The Character",
    items: ["Lavender", "Cedarwood"],
  },
  {
    label: "Base Notes",
    subtitle: "The Memory",
    items: ["Oud", "Amber", "Musk"],
  },
];

const BENEFITS = [
  {
    title: "Sophisticated Profile",
    copy: "A composition balanced between fresh spice and deep, warm woods.",
  },
  {
    title: "Long-Lasting Impression",
    copy: "Built on oud, amber and musk so the trail lingers well past the moment.",
  },
  {
    title: "Made For Evenings",
    copy: "Dinners, celebrations, late conversations — Noir belongs after dark.",
  },
  {
    title: "The Sarkar Experience",
    copy: "Crafted and presented with the care behind every Sarkar fragrance.",
  },
];

function NoteMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M12 2c3 4.5 5.5 7.2 5.5 11a5.5 5.5 0 1 1-11 0C6.5 9.2 9 6.5 12 2Z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a
            href="#top"
            className="font-display text-lg tracking-[0.42em] text-foreground"
            aria-label="Sarkar home"
          >
            SARKAR
          </a>
          <div className="hidden items-center gap-8 text-xs tracking-[0.2em] text-muted-foreground sm:flex">
            <a className="transition-colors hover:text-gold" href="#essence">
              ESSENCE
            </a>
            <a className="transition-colors hover:text-gold" href="#notes">
              NOTES
            </a>
            <a className="transition-colors hover:text-gold" href="#product">
              PRODUCT
            </a>
          </div>
          <a
            href={STORE_URL}
            className="rounded-sm border border-gold/60 px-4 py-2 text-[11px] tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            SHOP
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden bg-noir-gradient pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-8">
            <div className="animate-rise text-center md:text-left">
              <p className="text-[11px] tracking-[0.42em] text-gold-soft">SARKAR PERFUME</p>
              <h1 className="mt-5 text-5xl leading-[0.95] font-light tracking-[0.12em] sm:text-6xl lg:text-7xl">
                <span className="text-gold-gradient">SARKAR</span>
                <span className="block">NOIR</span>
              </h1>
              <div className="hairline mx-auto mt-6 w-28 md:mx-0" />
              <p className="mt-6 font-display text-2xl text-foreground/90 italic sm:text-3xl">
                Own the Night.
              </p>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base md:mx-0">
                An unforgettable blend of spice, woods, oud and amber.
              </p>
              <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
                <a
                  href={STORE_URL}
                  className="inline-flex min-h-12 items-center justify-center rounded-sm bg-gold px-9 text-xs tracking-[0.28em] text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  SHOP NOW
                </a>
                <a
                  href="#notes"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm border border-border px-9 text-xs tracking-[0.28em] text-foreground/85 transition-colors hover:border-gold/70 hover:text-gold"
                >
                  DISCOVER NOTES
                </a>
              </div>
            </div>

            <figure className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full bg-gold/12 blur-3xl"
              />
              <img
                src={heroBottle}
                width={800}
                height={1000}
                fetchPriority="high"
                decoding="async"
                alt="SARKAR NOIR eau de parfum bottle, official Sarkar Perfume product image"
                className="h-auto w-full rounded-sm object-cover"
              />
              <figcaption className="mt-3 text-center text-[10px] tracking-[0.28em] text-muted-foreground">
                PRODUCT IMAGE PLACEHOLDER — REPLACE WITH OFFICIAL SARKAR IMAGE
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Essence */}
        <section id="essence" className="border-y border-border/60 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl font-light tracking-[0.22em] sm:text-4xl">
              THE ESSENCE OF NOIR
            </h2>
            <div className="hairline mx-auto mt-6 w-24" />
            <p className="mt-8 font-display text-xl leading-relaxed text-foreground/90 sm:text-2xl">
              An elegant evening fragrance created for those who want to leave a memorable
              impression.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Fresh bergamot and spicy black pepper open the fragrance, followed by lavender and
              cedarwood, while oud, amber and musk create a warm and sophisticated finish.
            </p>
          </div>
        </section>

        {/* Notes */}
        <section id="notes" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center">
              <p className="text-[11px] tracking-[0.42em] text-gold-soft">THE COMPOSITION</p>
              <h2 className="mt-4 text-3xl font-light tracking-[0.22em] sm:text-4xl">
                FRAGRANCE NOTES
              </h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {NOTES.map((group) => (
                <article
                  key={group.label}
                  className="group rounded-sm border border-border bg-card/50 p-8 text-center transition-colors hover:border-gold/50"
                >
                  <div className="flex justify-center">
                    <NoteMark />
                  </div>
                  <h3 className="mt-5 text-sm tracking-[0.3em] text-gold uppercase">
                    {group.label}
                  </h3>
                  <p className="mt-1 font-display text-base text-muted-foreground italic">
                    {group.subtitle}
                  </p>
                  <div className="hairline mx-auto mt-6 w-16" />
                  <ul className="mt-6 space-y-2 font-display text-xl text-foreground/90">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Product */}
        <section id="product" className="border-y border-border/60 bg-card/30 py-20 sm:py-28">
          <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 md:grid-cols-2">
            <div className="relative mx-auto w-full max-w-xs">
              <img
                src={heroBottle}
                width={640}
                height={800}
                loading="lazy"
                decoding="async"
                alt="SARKAR NOIR 100ml perfume bottle shown for purchase"
                className="h-auto w-full rounded-sm object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-light tracking-[0.22em] sm:text-4xl">SARKAR NOIR</h2>
              <p className="mt-4 font-display text-3xl text-gold">₹1,499</p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Own the night with a fragrance designed to make your presence unforgettable.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={STORE_URL}
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-sm bg-gold px-8 text-xs tracking-[0.28em] text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  BUY NOW
                </a>
                <a
                  href={STORE_URL}
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-sm border border-gold/50 px-8 text-xs tracking-[0.28em] text-gold transition-colors hover:bg-gold/10"
                >
                  EXPLORE SARKAR
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-center text-3xl font-light tracking-[0.22em] sm:text-4xl">
              WHY SARKAR NOIR
            </h2>
            <div className="hairline mx-auto mt-6 w-24" />
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((b, i) => (
                <article key={b.title}>
                  <p className="font-display text-2xl text-gold/70">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-sm tracking-[0.2em] text-foreground uppercase">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Brand experience */}
        <section className="relative overflow-hidden bg-noir-gradient py-24 text-center sm:py-32">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-3xl leading-tight font-light tracking-[0.16em] sm:text-5xl">
              MAKE YOUR PRESENCE
              <span className="block text-gold-gradient">UNFORGETTABLE.</span>
            </h2>
            <p className="mt-6 font-display text-lg text-muted-foreground italic sm:text-xl">
              Some fragrances are noticed. Others are remembered.
            </p>
            <a
              href={STORE_URL}
              className="mt-10 inline-flex min-h-12 items-center justify-center rounded-sm bg-gold px-10 text-xs tracking-[0.28em] text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              SHOP NOW
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl tracking-[0.42em]">SARKAR</p>
            <p className="mt-3 text-sm tracking-[0.2em] text-gold-soft">SARKAR NOIR</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Official Store:{" "}
              <a href={STORE_URL} className="text-gold hover:underline">
                sarkar.store
              </a>
            </p>
          </div>
          <nav aria-label="Footer" className="text-sm text-muted-foreground">
            <ul className="space-y-2">
              <li>
                <a href={STORE_URL} className="hover:text-gold">
                  Shop
                </a>
              </li>
              <li>
                <a href="#essence" className="hover:text-gold">
                  About
                </a>
              </li>
              <li>
                <a href={STORE_URL} className="hover:text-gold">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-start gap-4">
            {["Instagram", "Facebook", "X"].map((name) => (
              <a
                key={name}
                href={STORE_URL}
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-[10px] tracking-widest text-muted-foreground transition-colors hover:border-gold/60 hover:text-gold"
              >
                {name[0]}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sarkar Perfume. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
