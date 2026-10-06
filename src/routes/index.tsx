import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import fashionEditorial from "@/assets/fashion-editorial.jpg";

// Replace this anchor with the supplied, verified partner offer destination.
const OFFER_DESTINATION = "https://linkthem.net/aff_c?offer_id=1238&aff_id=115643";
const DESKTOP_URL = "brdymlv.reviews750.com";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "THE STYLE REVIEW — Brandy Melville Product Reviewer" },
    { name: "description", content: "Explore an independent Brandy Melville product-review partner offer. Potential rewards up to $750, subject to eligibility, offer completion, and verification." },
    { property: "og:title", content: "THE STYLE REVIEW — Brandy Melville Product Reviewer" },
    { property: "og:description", content: "Your perspective, thoughtfully considered. Explore an independent Brandy Melville partner offer with clear terms and eligibility requirements." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const steps = [
  { title: "Explore the offer", copy: "Take a look at the opportunity and read the full terms before you decide." },
  { title: "Share your details", copy: "Enter the requested details on the partner’s secure page." },
  { title: "Review & participate", copy: "Review eligible products and complete 4–5 clearly disclosed partner offers, if you choose." },
  { title: "Meet the requirements", copy: "Rewards are only available if all official eligibility and verification requirements are met." },
];

function Index() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  if (isDesktop) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
        <div className="max-w-md">
          <p className="wordmark mb-6 text-xl">THE STYLE REVIEW</p>
          <h1 className="hero-title mb-4">📱 Open on your phone!</h1>
          <p className="mb-6 text-sm leading-7 text-muted-foreground">This page is designed for mobile. Please open the link below on your smartphone for the best experience.</p>
          <p className="mb-4 rounded-lg border border-border bg-secondary px-5 py-4 text-lg font-semibold text-rose-ink">{DESKTOP_URL}</p>
          <Button type="button" className="offer-button" onClick={() => navigator.clipboard?.writeText(`https://${DESKTOP_URL}`)}>Copy link to send to your phone</Button>
          <p className="mx-auto mt-4 text-[11px] leading-5 text-muted-foreground">Independent promotion — not affiliated with or endorsed by Brandy Melville.</p>
        </div>
      </main>
    );
  }
  return (
    <div>
      <header className="bg-masthead text-masthead-foreground">
        <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 sm:px-10">
          <a href="#" aria-label="The Style Review home" className="wordmark min-w-0 truncate text-lg sm:text-xl">THE STYLE REVIEW</a>
          <span className="eyebrow hidden shrink-0 text-masthead-foreground/65 sm:block">An independent perspective</span>
          <Sparkles aria-hidden="true" className="size-4 shrink-0 text-primary sm:hidden" />
        </div>
      </header>
      <div className="flex min-h-9 items-center justify-center gap-2 bg-secondary px-4 py-2 text-center text-[10px] font-medium text-rose-ink sm:text-xs">
        <Sparkles className="size-3 shrink-0" aria-hidden="true" /> A little style. A fresh perspective. An offer worth exploring.
      </div>
      <main>
        <section className="enter px-5 pb-10 pt-11 text-center sm:pb-12 sm:pt-12" aria-labelledby="hero-heading">
          <div className="monogram mx-auto mb-6 flex size-[76px] items-center justify-center rounded-lg border border-border bg-secondary text-rose-ink" aria-label="The Style Review monogram">sr<span className="self-start pt-3 text-xl not-italic">.</span></div>
          <p className="eyebrow mb-4 text-muted-foreground">For the love of everyday style</p>
          <h1 id="hero-heading" className="hero-title mx-auto max-w-3xl">Brandy Melville<br />Product Reviewer</h1>
          <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm text-rose-ink">
            <Sparkles className="size-3.5" aria-hidden="true" /> <span>Potential reward: <strong className="font-semibold">up to $750</strong></span>
          </div>
          <p className="mx-auto mb-6 mt-5 max-w-[440px] text-sm leading-7 text-muted-foreground">Love the little details? Share your opinions on eligible Brandy Melville products and explore a partner-offer opportunity.</p>
          <Button asChild className="offer-button"><a href={OFFER_DESTINATION} target="_blank" rel="sponsored noopener noreferrer">EXPLORE THE OFFER <ArrowUpRight aria-hidden="true" /></a></Button>
          <p className="mx-auto mt-4 max-w-md text-[11px] leading-5 text-muted-foreground">Independent promotion — not affiliated with or endorsed by Brandy Melville.</p>
        </section>

        <section aria-label="Offer at a glance" className="mx-auto grid max-w-[740px] grid-cols-3 border-y border-border px-3 py-6 sm:py-7">
          {[['Up to $750', 'Potential reward'], ['4–5', 'Partner offers'], ['Eligibility', 'Applies']].map(([value, label], index) => (
            <div key={value} className={`min-w-0 text-center ${index > 0 ? 'border-l border-border' : ''}`}>
              <p className="font-display text-lg font-bold sm:text-2xl">{value}</p>
              <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs">{label}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-[940px] px-5 py-10 sm:px-8 sm:py-12" aria-labelledby="steps-heading">
          <div className="rounded-lg border border-border bg-card px-6 py-8 sm:px-10 sm:py-9">
            <div className="mb-8 text-center"><p className="eyebrow mb-2 text-rose-ink">The process</p><h2 id="steps-heading" className="font-editorial text-4xl font-medium">A few simple steps</h2></div>
            <ol className="grid gap-7 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8">
              {steps.map((step, index) => <li key={step.title} className="grid grid-cols-[32px_minmax(0,1fr)] gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-medium text-rose-ink">{index + 1}</span>
                <div className="min-w-0"><h3 className="mb-1.5 text-sm font-semibold">{step.title}</h3><p className="text-xs leading-[1.8] text-muted-foreground">{step.copy}</p></div>
              </li>)}
            </ol>
          </div>
        </section>

        <figure className="mx-auto max-w-[1140px] px-5 sm:px-10">
          <img src={fashionEditorial} width={1536} height={512} loading="lazy" alt="Blush knitwear, a white camisole, denim, and pink tulips arranged on cotton" className="editorial-photo" />
          <figcaption className="mt-3 text-center text-[9px] text-muted-foreground">An everyday-style moodboard. Illustrative imagery; not products promised by the offer.</figcaption>
        </figure>

      </main>
      <footer className="border-t border-border bg-muted">
        <div className="mx-auto max-w-[1140px] px-6 py-7 sm:px-10">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row"><span className="wordmark text-lg">THE STYLE REVIEW</span><nav aria-label="Footer" className="flex gap-6 text-xs text-muted-foreground"><a href={OFFER_DESTINATION} target="_blank" rel="sponsored noopener noreferrer" className="hover:text-foreground">Terms</a><a href="#privacy" className="hover:text-foreground">Privacy</a><a href="#contact" className="hover:text-foreground">Contact</a></nav></div>
          <div className="mt-6 border-t border-border pt-4">
            <details id="privacy" className="text-xs text-muted-foreground"><summary className="flex cursor-pointer list-none items-center justify-between py-2">Privacy <Plus className="size-3" /></summary><p className="pb-3 leading-6">Privacy policy pending. This page has no registration form. Before sharing details on a partner’s page, review that partner’s privacy policy.</p></details>
            <details id="contact" className="text-xs text-muted-foreground"><summary className="flex cursor-pointer list-none items-center justify-between py-2">Contact <Plus className="size-3" /></summary><p className="pb-3 leading-6">Contact information has not yet been supplied.</p></details>
          </div>
          <p className="mt-4 text-center text-[10px] text-muted-foreground">© 2026 THE STYLE REVIEW. Independent promotion. All eligibility and offer terms apply.</p>
        </div>
      </footer>
    </div>
  );
}
