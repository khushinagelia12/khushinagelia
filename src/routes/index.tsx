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

// Crossword — DESIGN intersects with POSTER (shared E), BRAND (shared D), TYPE (shared E)
// Layout grid 7 cols × 7 rows. null = empty, {l: letter, c?: true to circle}
type Cell = { l: string; c?: boolean } | null;
const cw: Cell[][] = [
  // col:  0           1            2            3            4            5            6
  [ null,        null,        { l: "B" },  null,        null,        null,        null ],
  [ null,        null,        { l: "R" },  null,        { l: "T" },  null,        null ],
  [ { l: "D", c: true }, { l: "E" }, { l: "S", c: true }, { l: "I" }, { l: "G" }, { l: "N", c: true }, null ],
  [ null,        null,        { l: "I" },  null,        { l: "P" },  null,        null ],
  [ { l: "P" }, { l: "O" }, { l: "S" },  { l: "T", c: true }, { l: "E" }, { l: "R" }, null ],
  [ null,        null,        { l: "N" },  null,        null,        null,        null ],
  [ null,        null,        null,        null,        null,        null,        null ],
];

const Crossword = () => (
  <div className="grid grid-cols-7 gap-[2px] w-full max-w-[280px] mx-auto font-stamp">
    {cw.flat().map((cell, i) => (
      <div
        key={i}
        className={`aspect-square flex items-center justify-center text-sm md:text-base relative ${
          cell ? "bg-cream border border-ink/70 text-ink" : "bg-transparent"
        }`}
      >
        {cell?.l}
        {cell?.c && (
          <span className="absolute inset-[-3px] border-2 border-rust rounded-full pointer-events-none" />
        )}
      </div>
    ))}
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
      <Page className="px-6 py-10 md:px-16">
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-xs font-sans uppercase tracking-[0.3em] text-burgundy">
          <span>vol. 01 — mmxxvi</span>
          <span>a creative portfolio</span>
          <span>₹ priceless</span>
        </div>

        <div className="relative max-w-6xl mx-auto pt-16 grid md:grid-cols-12 gap-6 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 1 }}
            className="md:col-span-6 relative"
          >
            <div className="relative bg-paper p-3 vintage-shadow rotate-[-3deg]">
              <div className="tape -top-4 left-1/2 -translate-x-1/2 w-32 h-7 rotate-2" />
              <img src={cover} alt="Khushi" className="w-full h-[60vh] md:h-[75vh] object-cover sepia-[0.15] contrast-105" />
              <div className="mt-3 flex justify-between items-center font-hand text-burgundy text-lg">
                <span>golden hour, '26</span>
                <span>★ kn</span>
              </div>
            </div>
            <Star className="absolute -top-6 -right-4 text-rust animate-wobble" size={56} />
          </motion.div>

          {/* Title */}
          <div className="md:col-span-6 relative md:pl-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="inline-block bg-ink text-cream px-4 py-1 font-stamp tracking-[0.25em] text-sm mb-4">
                meet the
              </div>
              <h1 className="font-display text-[18vw] md:text-[10vw] leading-[0.85] text-burgundy italic">
                Khushi
              </h1>
              <h1 className="font-display text-[18vw] md:text-[10vw] leading-[0.85] text-rust -mt-2">
                Nagelia
              </h1>

              <div className="mt-6 inline-flex items-center gap-3 border-2 border-ink px-5 py-2 rounded-full bg-cream">
                <Sparkle className="w-4 h-4 text-burgundy" />
                <span className="font-hand text-2xl text-burgundy">a creative portfolio</span>
                <Sparkle className="w-4 h-4 text-burgundy" />
              </div>

              <p className="mt-8 font-hand text-3xl text-ink/80 rotate-[-2deg] inline-block">
                data · design · leadership
              </p>

              <div className="mt-10 font-sans text-xs uppercase tracking-[0.3em] text-ink/60">
                ↓ scroll to wander through
              </div>
            </motion.div>

            <Star className="absolute top-10 -left-6 text-gold animate-float" size={32} />
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
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="font-stamp tracking-[0.3em] text-burgundy mb-2">— index 02</div>
              <h2 className="font-display text-7xl md:text-8xl text-ink leading-none">
                things i've <span className="italic text-rust">built</span>
              </h2>
            </div>
            <p className="font-hand text-3xl text-burgundy rotate-[2deg]">a small museum ✶</p>
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
                <div className="tape -top-3 left-8 w-20 h-5 rotate-[-6deg]" />
                <div className="font-stamp tracking-[0.25em] text-xs opacity-80">{p.tag}</div>
                <h3 className="font-display text-3xl mt-2 leading-tight">{p.t}</h3>
                <p className="mt-4 font-serif text-base leading-relaxed opacity-95">{p.d}</p>
                <div className="mt-6 flex justify-between items-center font-hand text-xl">
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
              <div className="font-stamp tracking-[0.3em] text-burgundy mb-2">— index 03</div>
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
            </div>

            {/* RIGHT — Crossword */}
            <div className="md:col-span-5 relative">
              <div className="font-hand text-2xl text-burgundy rotate-[-3deg] mb-3 inline-block">
                an eye for visuals & aesthetics ↘
              </div>
              <div className="bg-paper p-5 vintage-shadow rotate-[1.5deg] relative">
                <div className="tape -top-3 left-6 w-20 h-5 -rotate-6" />
                <div className="tape -top-3 right-6 w-20 h-5 rotate-6" />
                <div className="font-stamp tracking-[0.3em] text-ink/60 text-xs mb-3">contents — solve the grid</div>
                <Crossword />
                <div className="font-hand text-lg text-rust mt-3 -rotate-1">my favourite artworks ✦</div>
              </div>
            </div>
          </div>

          {/* COLLAGE GALLERY — taped polaroids with string */}
          <div className="relative">
            {/* hanging string */}
            <svg className="absolute top-2 left-0 w-full h-8 text-ink/40 pointer-events-none" viewBox="0 0 1000 30" preserveAspectRatio="none">
              <path d="M0 5 Q 250 25, 500 10 T 1000 12" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>

            <div className="grid md:grid-cols-12 gap-6 auto-rows-[180px] pt-6">
              {designs.map((d, i) => {
                const spans = [
                  "md:col-span-7 md:row-span-3",
                  "md:col-span-5 md:row-span-2",
                  "md:col-span-5 md:row-span-2",
                  "md:col-span-7 md:row-span-2",
                  "md:col-span-12 md:row-span-2",
                ];
                const clipColors = ["bg-burgundy", "bg-rust", "bg-gold", "bg-ink", "bg-burgundy"];
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
                    {/* Binder clip */}
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-6 ${clipColors[i]} rounded-sm shadow-md z-10 flex items-center justify-center`}>
                      <div className="w-1 h-3 bg-cream/60 rounded-full" />
                    </div>
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
          <div className="text-center mb-14">
            <div className="font-stamp tracking-[0.3em] text-burgundy mb-2">— index 03</div>
            <h2 className="font-display text-7xl md:text-8xl text-ink leading-none">
              <span className="italic text-burgundy">leadership</span> &
            </h2>
            <h2 className="font-display text-7xl md:text-8xl text-rust italic">activities</h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Photo collage */}
            <div className="md:col-span-5 relative h-[500px]">
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: -6 }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 bg-paper p-2 vintage-shadow w-64"
              >
                <div className="tape -top-3 left-1/2 -translate-x-1/2 w-24 h-5 rotate-3" />
                <img src={tiecon} alt="TiECon Mangaluru" className="w-full h-72 object-cover sepia-[0.2]" />
                <div className="font-hand text-burgundy text-center mt-1">tiecon mangaluru '26 ✶</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: 10 }}
                whileInView={{ opacity: 1, rotate: 5 }}
                viewport={{ once: true }}
                className="absolute top-32 right-0 bg-burgundy text-cream p-5 vintage-shadow w-56 rotate-[5deg]"
              >
                <div className="font-stamp tracking-[0.2em] text-xs text-gold">achievement</div>
                <div className="font-display text-2xl mt-2 leading-tight">Smart India Hackathon</div>
                <div className="font-hand text-xl mt-2">semi-finalist '25</div>
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

          <div className="mt-12 inline-block bg-ink text-cream p-8 vintage-shadow rotate-[-1deg]">
            <div className="font-stamp tracking-[0.3em] text-gold text-xs mb-3">let's talk</div>
            <div className="space-y-2 font-serif text-lg">
              <div>Khushi.nagelia@gmail.com</div>
              <div>+91 76674 80508</div>
            </div>
            <div className="mt-4 flex gap-4 justify-center font-sans text-sm uppercase tracking-wider">
              <a href="https://www.linkedin.com/in/khushi-nagelia-b36479345" target="_blank" rel="noreferrer" className="text-gold hover:text-cream transition-colors underline underline-offset-4">LinkedIn</a>
              <span className="text-cream/40">·</span>
              <a href="https://github.com/khushinagelia12" target="_blank" rel="noreferrer" className="text-gold hover:text-cream transition-colors underline underline-offset-4">GitHub</a>
              <span className="text-cream/40">·</span>
              <a href="mailto:Khushi.nagelia@gmail.com" className="text-gold hover:text-cream transition-colors underline underline-offset-4">Email</a>
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
