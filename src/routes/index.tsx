import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import cover from "@/assets/cover.jpg";
import tiecon from "@/assets/tiecon.jpg";
import design1 from "@/assets/design1.jpg";
import design2 from "@/assets/design2.jpg";
import design3 from "@/assets/design3.jpg";
import design4 from "@/assets/design4.jpg";
import design5 from "@/assets/design5.jpg";

const designs = [
  { img: design1, title: "IECSE × Prometheus", tag: "event identity", desc: "events & workshops poster for IECSE's flagship Prometheus — dark fantasy aesthetic.", link: "https://canva.link/ic3ymv28udva26z", rot: "-2deg" },
  { img: design3, title: "Project Ecosanitation", tag: "pitch deck", desc: "editorial pitch deck for the beVisioneers fellowship — typographic, calm, confident.", link: "https://canva.link/sm64e3hehx3fi4a", rot: "1.5deg" },
  { img: design5, title: "Cryptoss", tag: "event poster", desc: "mystic-themed poster for a cryptography event under MIT's SDG initiative.", link: "https://canva.link/0334p4elwwv1idt", rot: "-1deg" },
  { img: design4, title: "Period Awareness", tag: "outreach deck", desc: "playful, accessible deck about menstrual health for Project Ecosanitation.", link: "https://canva.link/mvgrg6gtnhx9lat", rot: "2deg" },
  { img: design2, title: "IAESTE LC Manipal", tag: "branding", desc: "monochrome poster for IAESTE's global exchange community at Manipal.", link: "https://canva.link/vyp3rtiz2ejsov5", rot: "-1.5deg" },
];

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Khushi Nagelia — Portfolio '26" },
      { name: "description", content: "A vintage creative portfolio of Khushi Nagelia — data science, design & leadership." },
    ],
  }),
});

const Star = ({ className = "", size = 40 }: { className?: string; size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
    <path d="M12 1l2.6 7.6L22 9.3l-5.8 5 1.8 7.7L12 17.8 5.9 22l1.9-7.7L2 9.3l7.4-.7z" />
  </svg>
);

const Sparkle = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0c1 6 5 10 12 12-7 2-11 6-12 12-1-6-5-10-12-12C7 10 11 6 12 0z" />
  </svg>
);

// Push pin
const Pin = ({ className = "", tone = "var(--burgundy)" }: { className?: string; tone?: string }) => (
  <div className={`relative ${className}`} aria-hidden>
    <div className="w-5 h-5 rounded-full shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.35),0_2px_3px_rgba(0,0,0,0.45)]" style={{ background: tone }} />
    <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-cream/70" />
  </div>
);

// Vintage banner ribbon
const Banner = ({ text, className = "" }: { text: string; className?: string }) => (
  <div className={`relative inline-block ${className}`}>
    <svg viewBox="0 0 280 56" className="w-72 h-12" preserveAspectRatio="none">
      <path d="M0 8 L 20 0 L 260 0 L 280 8 L 260 48 L 20 48 L 0 40 Z" fill="oklch(0.35 0.12 25)" />
      <path d="M0 8 L 12 12 L 12 36 L 0 40 Z" fill="oklch(0.25 0.09 25)" />
      <path d="M280 8 L 268 12 L 268 36 L 280 40 Z" fill="oklch(0.25 0.09 25)" />
    </svg>
    <span className="absolute inset-0 flex items-center justify-center font-stamp tracking-[0.3em] text-cream text-sm px-8">
      {text}
    </span>
  </div>
);

// Vintage camera
const Camera = ({ className = "", size = 60 }: { className?: string; size?: number }) => (
  <svg viewBox="0 0 64 48" width={size} height={size * 0.75} className={className} fill="currentColor" aria-hidden>
    <path d="M8 12 L 20 12 L 23 6 L 41 6 L 44 12 L 56 12 Q 60 12 60 16 L 60 40 Q 60 44 56 44 L 8 44 Q 4 44 4 40 L 4 16 Q 4 12 8 12 Z" />
    <circle cx="32" cy="28" r="10" fill="oklch(0.96 0.035 85)" />
    <circle cx="32" cy="28" r="6.5" fill="currentColor" />
    <circle cx="32" cy="28" r="3" fill="oklch(0.96 0.035 85)" />
    <rect x="48" y="16" width="6" height="3" fill="oklch(0.96 0.035 85)" />
  </svg>
);

// Clipboard frame
const Clipboard = ({ children, className = "", rotate = "0deg" }: { children: React.ReactNode; className?: string; rotate?: string }) => (
  <div className={`relative ${className}`} style={{ transform: `rotate(${rotate})` }}>
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
      <div className="w-16 h-3 bg-gradient-to-b from-ink to-ink/70 rounded-t-sm border border-ink shadow-md" />
      <div className="w-10 h-4 -mt-0.5 bg-gradient-to-b from-ink/80 to-ink rounded-b-sm border border-ink/80" />
    </div>
    <div className="bg-[oklch(0.55_0.06_60)] p-3 rounded-md shadow-[0_10px_30px_rgba(60,20,10,0.4)] border-2 border-[oklch(0.42_0.05_55)]">
      <div className="bg-paper p-5 relative">{children}</div>
    </div>
    <div className="absolute -bottom-1 left-4 w-2 h-2 rounded-full bg-ink/60" />
    <div className="absolute -bottom-1 right-4 w-2 h-2 rounded-full bg-ink/60" />
  </div>
);

// Paper-cut scalloped strip (use as a divider/edge)
const PaperCut = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 12" className={className} preserveAspectRatio="none" aria-hidden>
    <path d="M0 0 H 200 V 4 Q 195 12 190 4 T 180 4 T 170 4 T 160 4 T 150 4 T 140 4 T 130 4 T 120 4 T 110 4 T 100 4 T 90 4 T 80 4 T 70 4 T 60 4 T 50 4 T 40 4 T 30 4 T 20 4 T 10 4 T 0 4 Z" fill="currentColor" />
  </svg>
);

// Crossword puzzle — letters laid on an 11×9 grid, hand-circled words.
// Words: DESIGN (row 2), POSTER (row 4), BRAND (col 2), TYPE (col 4),
// STYLE (col 7), GRID (row 6), INK (col 9), ART (row 8)
type Cell = { l: string; key?: boolean } | null;
const cw: Cell[][] = [
  // c: 0           1           2            3           4           5           6           7            8           9            10
  [   null,       null,       { l: "B" },  null,       null,       null,       null,       { l: "S" },  null,       null,        null ],
  [   null,       null,       { l: "R" },  null,       { l: "T" }, null,       null,       { l: "T" },  null,       null,        null ],
  [ { l: "D", key: true }, { l: "E" }, { l: "S", key: true }, { l: "I" }, { l: "G" }, { l: "N", key: true }, null, { l: "Y" }, null, null, null ],
  [   null,       null,       { l: "I" },  null,       { l: "P" }, null,       null,       { l: "L" },  null,       { l: "I" },  null ],
  [ { l: "P" }, { l: "O" }, { l: "S" },  { l: "T", key: true }, { l: "E" }, { l: "R" }, null,       { l: "E" },  null,       { l: "N" },  null ],
  [   null,       null,       { l: "N" },  null,       null,       null,       null,       null,       null,       { l: "K", key: true }, null ],
  [   null,       null,       null,       { l: "G" }, { l: "R" }, { l: "I" }, { l: "D", key: true }, null, null, null,        null ],
  [   null,       null,       null,       null,       null,       null,       null,       null,       null,       null,        null ],
  [   null,       { l: "A" }, { l: "R" },  { l: "T", key: true }, null, null, null,       null,       null,       null,        null ],
];

const Crossword = () => (
  <div className="relative">
    {/* CONTENTS vertical label */}
    <div
      className="absolute -left-2 top-0 bottom-0 flex items-center"
      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
    >
      <span className="font-display text-3xl md:text-4xl tracking-widest text-ink/80">CONTENTS</span>
    </div>

    <div className="pl-10">
      <div
        className="grid gap-[3px]"
        style={{ gridTemplateColumns: "repeat(11, minmax(0, 1fr))" }}
      >
        {cw.flat().map((cell, i) => (
          <div
            key={i}
            className={`aspect-square flex items-center justify-center text-[10px] sm:text-xs md:text-sm font-stamp relative ${
              cell ? "text-ink" : ""
            }`}
          >
            {cell?.l}
          </div>
        ))}
      </div>

      {/* Hand-drawn scribble circles overlaid on key words */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-rust"
        viewBox="0 0 440 360"
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        {/* DESIGN — row 3 (rough horizontal ellipse) */}
        <path d="M50 95 Q 30 110, 50 128 Q 150 138, 270 128 Q 290 115, 270 100 Q 150 90, 50 95 Z" />
        {/* POSTER — row 5 */}
        <path d="M40 175 Q 22 192, 42 208 Q 150 218, 270 208 Q 288 192, 268 178 Q 150 170, 40 175 Z" opacity="0.85" />
        {/* STYLE — col 7 vertical */}
        <path d="M298 38 Q 282 50, 290 70 Q 296 130, 290 195 Q 282 215, 305 215 Q 322 130, 318 70 Q 314 38, 298 38 Z" opacity="0.9" />
        {/* ART — bottom */}
        <path d="M50 318 Q 30 332, 50 346 Q 110 354, 165 346 Q 182 332, 162 320 Q 110 312, 50 318 Z" />
        {/* squiggle next to grid */}
        <path d="M140 258 q 8 -6 18 0 t 18 0 t 18 0 t 18 0" opacity="0.7" />
      </svg>
    </div>
  </div>
);

function Page({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`relative min-h-screen w-full overflow-hidden paper-texture grain ${className}`}>
      {children}
    </section>
  );
}

function MarqueeBar({ text }: { text: string }) {
  return (
    <div className="bg-burgundy text-cream py-3 overflow-hidden border-y-2 border-ink">
      <div className="flex whitespace-nowrap animate-marquee font-stamp tracking-[0.3em] text-lg">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="px-8 flex items-center gap-6">
            {text} <Sparkle className="w-4 h-4 text-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <main className="font-serif text-ink">
      {/* COVER */}
      <Page className="px-4 py-6 md:px-10 md:py-10">
        <div className="max-w-6xl mx-auto border-2 border-ink bg-[oklch(0.88_0.06_30)] relative overflow-hidden">
          {/* Top masthead strip */}
          <div className="border-b-2 border-ink px-4 md:px-8 py-3 flex items-center justify-between text-[10px] md:text-xs font-stamp tracking-[0.3em] text-ink">
            <span>@khushinagelia</span>
            <span className="hidden sm:inline">khushi nagelia</span>
            <span>data · design · leadership</span>
          </div>

          <div className="grid md:grid-cols-12 gap-0 items-stretch">
            {/* Photo column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="md:col-span-5 relative"
            >
              <img
                src={cover}
                alt="Khushi Nagelia"
                className="w-full h-[55vh] md:h-[78vh] object-cover grayscale contrast-110"
              />
              <Pin className="absolute top-3 left-3 z-10" tone="var(--rust)" />
              <Pin className="absolute top-3 right-3 z-10" tone="var(--gold)" />
              <Pin className="absolute bottom-3 left-3 z-10" tone="var(--burgundy)" />
              <Pin className="absolute bottom-3 right-3 z-10" tone="var(--ink)" />
            </motion.div>

            {/* Title column */}
            <div className="md:col-span-7 relative px-6 md:px-10 py-10 md:py-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="inline-block bg-ink text-cream px-3 py-1 font-display text-2xl md:text-3xl mb-2">
                  meet
                </div>
                <h1 className="font-display text-[14vw] md:text-[7.2vw] leading-[0.85] text-burgundy tracking-tight italic">
                  khushi
                </h1>
                <h1 className="font-display text-[14vw] md:text-[7.2vw] leading-[0.85] text-ink tracking-tight -mt-2">
                  nagelia
                </h1>
                <div className="h-[3px] bg-ink w-full mt-1" />

                <div className="mt-6 inline-flex items-center gap-2 border-2 border-ink bg-cream px-5 py-1.5 rounded-full">
                  <Sparkle className="w-3 h-3 text-burgundy" />
                  <span className="font-serif italic text-base md:text-lg text-ink">a creative portfolio</span>
                </div>

                <p className="mt-10 font-hand text-3xl md:text-4xl text-burgundy rotate-[-2deg] inline-block">
                  K. Nagelia
                </p>

                <div className="mt-8 font-sans text-[10px] uppercase tracking-[0.3em] text-ink/60">
                  ↓ vol. 01 · mmxxvi · scroll to wander
                </div>
              </motion.div>

              {/* Floating star + vintage camera */}
              <Camera className="absolute top-6 right-6 md:top-10 md:right-10 text-burgundy rotate-[10deg]" size={70} />
              <Star
                className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-cream stroke-ink animate-wobble"
                size={90}
              />
            </div>
          </div>
        </div>
      </Page>


      <MarqueeBar text="khushi nagelia · portfolio 2026 · b.tech data science" />

      {/* ABOUT */}
      <Page className="px-6 py-20 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 relative">
            <div className="bg-ink text-cream inline-block px-4 py-1 font-stamp tracking-[0.3em] text-sm mb-6">hello!</div>
            <h2 className="font-display text-6xl md:text-7xl text-burgundy leading-none">
              about <br />
              <span className="font-hand text-rust text-7xl md:text-8xl italic">my</span>self
            </h2>
            <p className="mt-8 font-serif text-lg leading-relaxed text-ink/85 max-w-md">
              i'm khushi, a 20-year-old data science undergrad at manipal institute of technology.
              i live somewhere between code and creativity — building intelligent systems by day,
              designing pitch decks and chasing sunsets by evening.
            </p>
            <p className="mt-4 font-serif text-lg leading-relaxed text-ink/85 max-w-md">
              i love connecting deeply with people, leading teams, organizing events,
              and turning small ideas into shipped things.
            </p>
            <div className="mt-8 font-hand text-3xl text-burgundy italic">— kn ✶</div>
          </div>

          <div className="md:col-span-7 grid grid-cols-3 gap-3 relative">
            {[
              { label: "cgpa", value: "8.17" },
              { label: "events organized", value: "15+" },
              { label: "interns hosted", value: "50+" },
              { label: "countries reached", value: "80+" },
              { label: "lives impacted", value: "5K+" },
              { label: "teams led", value: "10+" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`p-5 vintage-shadow ${i % 2 === 0 ? "bg-burgundy text-cream rotate-[-1deg]" : "bg-cream border-2 border-ink rotate-[1deg]"}`}
              >
                <div className="font-display text-4xl leading-none">{s.value}</div>
                <div className="mt-2 font-sans text-[10px] uppercase tracking-[0.2em] opacity-80">{s.label}</div>
              </motion.div>
            ))}
            <Star className="absolute -top-6 -right-2 text-rust animate-wobble" size={48} />
          </div>
        </div>
      </Page>

      {/* CONTENTS / SKILLS */}
      <Page className="px-6 py-20 md:px-16 bg-[oklch(0.88_0.04_70)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-stamp tracking-[0.3em] text-burgundy mb-3">— index 01</div>
            <h2 className="font-display text-7xl md:text-8xl text-ink leading-[0.9]">
              the <span className="italic text-burgundy">tool</span>kit
            </h2>
            <p className="mt-6 font-hand text-2xl text-rust rotate-[-2deg] inline-block">
              what i build with ⚙
            </p>
          </div>

          <div className="md:col-span-7 space-y-6 font-serif">
            {[
              { k: "languages", v: "python · typescript · javascript · c · java · sql" },
              { k: "frameworks", v: "react · next.js · node · django · flask · tensorflow · pytorch" },
              { k: "data & ai", v: "pandas · numpy · scikit-learn · nlp · embeddings · faiss" },
              { k: "cloud & ops", v: "aws · gcp · docker · ci/cd · postgres · mongodb" },
              { k: "always learning", v: "design systems · storytelling · venture studios" },
            ].map((row, i) => (
              <motion.div
                key={row.k}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-b-2 border-dashed border-ink/40 pb-4 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6"
              >
                <div className="font-stamp tracking-[0.25em] text-burgundy text-sm md:w-40">{row.k}</div>
                <div className="text-xl text-ink/85 italic">{row.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Page>

      <MarqueeBar text="✦ projects ✦ leadership ✦ design ✦ data ✦ stories ✦" />

      {/* PROJECTS */}
      <Page className="px-6 py-20 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4 relative">
            <div className="relative">
              <Banner text="vol · 02 · projects" className="mb-4 rotate-[-3deg]" />
              <h2 className="font-display text-7xl md:text-8xl text-ink leading-none">
                things i've <span className="italic text-rust">built</span>
              </h2>
              <Camera className="absolute -top-6 -left-12 text-burgundy rotate-[-15deg] hidden md:block opacity-80" size={70} />
            </div>
            <div className="relative">
              <p className="font-hand text-3xl text-burgundy rotate-[2deg]">a small museum ✶</p>
              <PaperCut className="w-44 h-3 text-rust mt-1" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                t: "INGRES AI Chatbot",
                tag: "nlp · faiss",
                d: "semantic search chatbot with hybrid retrieval over groundwater data — embeddings, FAISS & Elasticsearch indexing for fast similarity search and natural-language insights.",
                year: "2025",
                rot: "-2deg",
                bg: "bg-burgundy text-cream",
              },
              {
                t: "SentimentScope",
                tag: "nlp · transformer",
                d: "real-time sentiment analysis pipeline using DistilBERT with fine-tuning on multi-domain reviews. deployed with FastAPI and visualized through an interactive React dashboard.",
                year: "2025",
                rot: "1.5deg",
                bg: "bg-cream border-2 border-ink",
              },
              {
                t: "XFakeNet",
                tag: "pytorch · multimodal",
                d: "multimodal fake-news detection with DistilBERT + ResNet-50 and cross-modal attention. F1: 0.89, AUC: 0.93, with Grad-CAM explainability.",
                year: "2025",
                rot: "-1deg",
                bg: "bg-rust text-cream",
              },
            ].map((p, i) => (
              <motion.article
                key={p.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ transform: `rotate(${p.rot})` }}
                className={`relative p-7 vintage-shadow ${p.bg}`}
              >
                <Pin className="absolute -top-2 left-6" tone={i === 1 ? "var(--rust)" : "var(--gold)"} />
                <Pin className="absolute -top-2 right-6" tone={i === 1 ? "var(--burgundy)" : "var(--rust)"} />
                <div className="font-stamp tracking-[0.25em] text-xs opacity-80 mt-2">{p.tag}</div>
                <h3 className="font-display text-3xl mt-2 leading-tight">{p.t}</h3>
                <p className="mt-4 font-serif text-base leading-relaxed opacity-95">{p.d}</p>
                <div className="mt-6 flex justify-between items-center font-hand text-xl border-t border-dashed border-current/30 pt-3">
                  <span>{p.year}</span>
                  <Star size={20} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Page>

      {/* DESIGN DESK — crossword + collage */}
      <Page className="px-6 py-20 md:px-16 bg-[oklch(0.91_0.035_70)]">
        <div className="max-w-6xl mx-auto">
          {/* Header strip — magazine masthead */}
          <div className="border-y-2 border-ink py-3 mb-10 flex items-center justify-between text-xs font-stamp tracking-[0.3em] text-ink/70">
            <span>@khushinagelia</span>
            <span className="hidden md:inline">khushi nagelia</span>
            <span>graphic design · visuals</span>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start mb-14">
            {/* LEFT — title + crossword */}
            <div className="md:col-span-7 relative">
              <Banner text="vol · 03 · design desk" className="mb-4 rotate-[-2deg]" />
              <h2 className="font-display text-7xl md:text-[8rem] text-ink leading-[0.85]">
                meet the
              </h2>
              <h2 className="font-display text-7xl md:text-[8rem] italic text-burgundy leading-[0.85] -mt-2">
                designer
              </h2>
              <div className="mt-4 inline-block bg-ink text-cream px-5 py-1.5 font-serif italic text-lg rounded-full rotate-[-2deg]">
                ✶ a creative portfolio
              </div>

              {/* Decorative scribble underline */}
              <svg className="mt-3 w-64 h-4 text-rust" viewBox="0 0 200 12" fill="none">
                <path d="M2 8 Q 30 1, 60 6 T 120 6 T 180 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>

              <p className="mt-8 font-serif text-lg leading-relaxed max-w-md text-ink/85">
                I love when type, color and a little chaos collide — these are the posters,
                pitch decks and brand moments I built this year.
              </p>

              {/* vintage camera doodle */}
              <Camera className="absolute -bottom-2 right-4 text-burgundy rotate-[8deg] opacity-90 hidden md:block" size={90} />
            </div>

            {/* RIGHT — Crossword in a clipboard */}
            <div className="md:col-span-5 relative">
              <div className="font-hand text-2xl text-burgundy rotate-[-3deg] mb-3 inline-block">
                an eye for visuals & aesthetics ↘
              </div>
              <Clipboard rotate="1.5deg">
                <Pin className="absolute -top-1 -left-1" tone="var(--rust)" />
                <Pin className="absolute -top-1 -right-1" tone="var(--gold)" />
                <div className="font-stamp tracking-[0.3em] text-ink/60 text-xs mb-3">contents — solve the grid</div>
                <Crossword />
                <div className="font-hand text-lg text-rust mt-3 -rotate-1">my favourite artworks ✦</div>
                <PaperCut className="w-full h-3 text-burgundy mt-2 opacity-70" />
              </Clipboard>
            </div>
          </div>

          {/* COLLAGE GALLERY — taped polaroids with string */}
          <div className="relative">
            {/* hanging string */}
            <svg className="absolute top-2 left-0 w-full h-8 text-ink/40 pointer-events-none" viewBox="0 0 1000 30" preserveAspectRatio="none">
              <path d="M0 5 Q 250 25, 500 10 T 1000 12" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>

            <div className="grid grid-cols-2 md:grid-cols-12 gap-6 pt-6">
              {designs.map((d, i) => {
                const spans = [
                  "col-span-2 md:col-span-7 h-[420px]",
                  "col-span-2 md:col-span-5 h-[420px]",
                  "col-span-1 md:col-span-4 h-[340px]",
                  "col-span-1 md:col-span-4 h-[340px]",
                  "col-span-2 md:col-span-4 h-[340px]",
                ];
                const pinTones = ["var(--burgundy)", "var(--rust)", "var(--gold)", "var(--ink)", "var(--burgundy)"];
                return (
                  <motion.a
                    key={d.title}
                    href={d.link}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ rotate: 0, scale: 1.03, y: -6 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    style={{ transform: `rotate(${d.rot})` }}
                    className={`group relative block bg-paper p-3 pb-10 vintage-shadow overflow-visible ${spans[i]}`}
                  >
                    {/* Push pin */}
                    <Pin className="absolute -top-2 left-1/2 -translate-x-1/2 z-10" tone={pinTones[i]} />
                    <div className="tape absolute -top-3 left-6 w-16 h-4 -rotate-6 opacity-80" />
                    <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden">
                      <img
                        src={d.img}
                        alt={d.title}
                        className="absolute inset-0 w-full h-full object-cover sepia-[0.15] saturate-[0.9] group-hover:sepia-0 group-hover:saturate-100 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-cream translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="font-stamp tracking-[0.25em] text-xs text-gold">{d.tag}</div>
                        <h3 className="font-display text-2xl leading-tight mt-1">{d.title}</h3>
                        <p className="font-serif text-sm mt-1 opacity-90">{d.desc}</p>
                        <div className="font-hand text-lg mt-2 text-gold">open on canva ↗</div>
                      </div>
                    </div>
                    {/* Handwritten caption on polaroid */}
                    <div className="absolute bottom-2 left-0 right-0 text-center font-hand text-lg text-ink/80 group-hover:opacity-0 transition-opacity">
                      "{d.title.toLowerCase()}"
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          <p className="mt-10 text-center font-hand text-2xl text-ink/70 italic">
            ✶ hover to peek · tap to open the full design ✶
          </p>
        </div>
      </Page>


      {/* LEADERSHIP COLLAGE */}
      <Page className="px-6 py-20 md:px-16 bg-[oklch(0.9_0.03_72)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 relative">
            <Banner text="vol · 04 · leadership" className="mb-4 rotate-[-1deg]" />
            <h2 className="font-display text-7xl md:text-8xl text-ink leading-none">
              <span className="italic text-burgundy">leadership</span> &
            </h2>
            <h2 className="font-display text-7xl md:text-8xl text-rust italic">activities</h2>
            <Camera className="absolute -top-4 right-0 text-burgundy rotate-[12deg] hidden md:block" size={80} />
            <PaperCut className="w-64 h-3 text-burgundy mx-auto mt-4 opacity-70" />
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Photo collage — sticky */}
            <div className="md:col-span-5 relative md:sticky md:top-10 h-[640px]">
              {/* abstract art blob backdrop */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 640" fill="none">
                <circle cx="80" cy="120" r="70" fill="oklch(0.7 0.13 75 / 0.25)" />
                <circle cx="320" cy="480" r="90" fill="oklch(0.5 0.15 40 / 0.18)" />
                <path d="M40 380 Q 120 320, 200 380 T 360 380" stroke="oklch(0.35 0.12 25 / 0.4)" strokeWidth="2" strokeDasharray="4 6" fill="none" />
                <path d="M30 30 L 70 30 M 50 10 L 50 50" stroke="oklch(0.35 0.12 25 / 0.5)" strokeWidth="2" />
                <path d="M340 80 L 380 80 M 360 60 L 360 100" stroke="oklch(0.5 0.15 40 / 0.5)" strokeWidth="2" />
              </svg>

              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: -6 }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 bg-paper p-2 vintage-shadow w-64"
              >
                <Pin className="absolute -top-2 left-1/2 -translate-x-1/2 z-10" tone="var(--rust)" />
                <img src={tiecon} alt="TiECon Mangaluru" className="w-full h-72 object-cover sepia-[0.2]" />
                <div className="font-hand text-burgundy text-center mt-1">tiecon mangaluru '26 ✶</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: 10 }}
                whileInView={{ opacity: 1, rotate: 5 }}
                viewport={{ once: true }}
                className="absolute top-32 right-0 bg-burgundy text-cream p-5 vintage-shadow w-56 rotate-[5deg]"
              >
                <Pin className="absolute -top-2 left-3" tone="var(--gold)" />
                <Pin className="absolute -top-2 right-3" tone="var(--cream)" />
                <div className="font-stamp tracking-[0.2em] text-xs text-gold">achievement</div>
                <div className="font-display text-2xl mt-2 leading-tight">Smart India Hackathon</div>
                <div className="font-hand text-xl mt-2">semi-finalist '25</div>
              </motion.div>

              {/* Stamp ticket */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute top-[340px] left-6 bg-cream border-2 border-dashed border-ink p-4 w-60 vintage-shadow rotate-[-3deg]"
              >
                <div className="font-stamp tracking-[0.3em] text-xs text-burgundy mb-1">★ admit one ★</div>
                <div className="font-display text-xl text-ink leading-tight">3× MUN Delegate</div>
                <div className="font-hand text-rust text-lg">global policy · debate</div>
                <div className="flex justify-between text-[10px] font-stamp tracking-widest text-ink/60 mt-2 border-t border-dashed border-ink/40 pt-1">
                  <span>NO. 023</span><span>RESERVED</span>
                </div>
              </motion.div>

              {/* Postage stamp */}
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 1, rotate: 8 }}
                viewport={{ once: true }}
                className="absolute bottom-4 right-6 w-44 bg-gold p-3 vintage-shadow"
                style={{ clipPath: "polygon(0 5%, 5% 0, 95% 0, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0 95%)" }}
              >
                <div className="border-2 border-dashed border-ink p-3 text-center">
                  <div className="font-stamp tracking-[0.3em] text-ink text-[10px]">editor in chief</div>
                  <div className="font-display text-lg text-ink leading-tight mt-1">School Magazine</div>
                  <div className="font-hand text-burgundy">'21–'22</div>
                </div>
              </motion.div>

              <Star className="absolute bottom-6 left-10 text-rust animate-wobble" size={64} />
              <Sparkle className="absolute top-4 right-20 text-gold animate-float w-8 h-8" />
            </div>

            {/* Roles */}
            <div className="md:col-span-7 space-y-5">
              {[
                {
                  org: "E-Cell, MIT Manipal",
                  role: "Executive",
                  yr: "2025 — present",
                  body: "mentoring early-stage startups, investor outreach, and executing the Manipal Entrepreneurship Summit with founders & VCs.",
                },
                {
                  org: "IAESTE India",
                  role: "Incoming Co-Ordinator",
                  yr: "2025 — present",
                  body: "hosted 50+ interns from 80+ countries — end-to-end documentation, logistics & onboarding. organized cultural events; represented at two national conferences.",
                },
                {
                  org: "Rotaract Club of Manipal",
                  role: "Sergeant-at-Arms · Pro. Dev Head",
                  yr: "2025 — present",
                  body: "led 20+ social impact drives — clothes donations, beach cleanups, education outreach — impacting 5,000+ lives.",
                },
                {
                  org: "Model United Nations",
                  role: "3-Time Delegate",
                  yr: "2019 — 2023",
                  body: "represented delegations at 3 MUN conferences — researched global policy, drafted resolutions, and debated in committees of 100+ delegates.",
                },
                {
                  org: "Frank Anthony All India Debate",
                  role: "Regional Level Participant",
                  yr: "2022",
                  body: "competed at the regional level of the prestigious Frank Anthony Memorial All India Inter-School Debate Competition.",
                },
                {
                  org: "School Magazine",
                  role: "Editor in Chief",
                  yr: "2021 — 2022",
                  body: "led the editorial board, curated content, designed layouts, and oversaw publication of the annual school magazine from concept to print.",
                },
                {
                  org: "IIT Bombay Debate Tournament",
                  role: "Participant",
                  yr: "2023",
                  body: "competed in the 19th edition of the IIT Bombay Debate Tournament, one of india's premier collegiate debate competitions.",
                },
                {
                  org: "Project Ecosanitation",
                  role: "Design Team",
                  yr: "Jun 2025 — present",
                  body: "designed creatives for ad campaigns, outreach, and pitch decks — improved engagement by 30%.",
                },
              ].map((r, i) => (
                <motion.div
                  key={r.org}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-cream border-l-4 border-burgundy p-5 vintage-shadow"
                >
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <div>
                      <div className="font-stamp tracking-[0.2em] text-rust text-xs">{r.role}</div>
                      <h3 className="font-display text-2xl text-burgundy">{r.org}</h3>
                    </div>
                    <span className="font-hand text-xl text-ink/70">{r.yr}</span>
                  </div>
                  <p className="mt-3 font-serif text-base text-ink/85 leading-relaxed">{r.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Page>

      {/* THANK YOU */}
      <Page className="px-6 py-24 md:px-16 flex items-center">
        <div className="max-w-5xl mx-auto text-center relative w-full">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-spin-slow">
            <Star className="text-gold" size={80} />
          </div>

          <div className="font-stamp tracking-[0.4em] text-burgundy text-sm mb-6">— fin —</div>
          <h2 className="font-display text-[20vw] md:text-[14vw] leading-[0.85] text-burgundy italic">
            thank
          </h2>
          <h2 className="font-display text-[20vw] md:text-[14vw] leading-[0.85] text-rust -mt-6">
            you ✶
          </h2>

          <p className="mt-10 font-hand text-3xl text-ink/80">
            for wandering through my little world.
          </p>

          <div className="mt-12 inline-block bg-ink text-cream p-8 vintage-shadow rotate-[-1deg] text-left">
            <div className="font-stamp tracking-[0.3em] text-gold text-xs mb-4 text-center">let's talk ✶</div>
            <div className="space-y-3 font-sans text-base">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <span className="font-stamp tracking-[0.2em] text-gold text-xs w-20">email</span>
                <a href="mailto:Khushi.nagelia@gmail.com" className="underline underline-offset-4 hover:text-gold break-all">Khushi.nagelia@gmail.com</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <span className="font-stamp tracking-[0.2em] text-gold text-xs w-20">phone</span>
                <span>+91 76674 80508</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <span className="font-stamp tracking-[0.2em] text-gold text-xs w-20">linkedin</span>
                <a href="https://www.linkedin.com/in/khushi-nagelia-b36479345" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-gold break-all">linkedin.com/in/khushi-nagelia-b36479345</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <span className="font-stamp tracking-[0.2em] text-gold text-xs w-20">github</span>
                <a href="https://github.com/khushinagelia12" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-gold break-all">github.com/khushinagelia12</a>
              </div>
            </div>
          </div>

          <div className="mt-12 font-sans text-xs uppercase tracking-[0.3em] text-ink/50">
            khushi nagelia · portfolio vol. 01 · mmxxvi
          </div>
        </div>
      </Page>
    </main>
  );
}
