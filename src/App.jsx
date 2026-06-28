// ============================================================
//  PORTFOLIO CONFIG — edit everything here, touch nothing below
// ============================================================
const portfolioData = {
  // ── Personal Info ────────────────────────────────────────
  name: "Alex Chen",
  tagline: "I build things that move, think, and spark.",
  subTagline: "Mechanical Engineering @ UIUC · Hardware · Controls · Fabrication",
  bio: "I'm a Mechanical Engineering student at the University of Illinois Urbana-Champaign with a minor in ECE. I design and build physical systems from scratch — gearboxes, robots, Tesla coils, audio systems — bridging the gap between CAD models and working machines.",
  email: "yuching7@illinois.edu",
  phone: "217-413-8660",
  location: "Urbana-Champaign, IL / Taipei, Taiwan",

  // ── Social Links ─────────────────────────────────────────
  socials: [
    { label: "GitHub",   href: "https://github.com/",        icon: "github"   },
    { label: "LinkedIn", href: "https://linkedin.com/",      icon: "linkedin" },
    { label: "YouTube",  href: "https://youtube.com/",       icon: "youtube"  },
    { label: "Email",    href: "mailto:yuching7@illinois.edu", icon: "mail"   },
  ],

  // ── Hero CTA ─────────────────────────────────────────────
  cta: { hire: "#contact", portfolio: "#projects" },

  // ── Projects ─────────────────────────────────────────────
  // category: "Hardware" | "Controls" | "Fabrication" | "Audio"
  projects: [
    {
      id: "inverted-pendulum",
      title: "LQR-Balanced Inverted Pendulum",
      category: "Controls",
      date: "May 2025 – Present",
      status: "In Progress",
      image: "/portfolio-images/pendulum_cover.jpeg",
      description:
        "Self-balancing cart-pendulum with full-state feedback LQR control on Arduino Nano Every. Simulink model tunes gains for 1.2 s settling time with ±10° disturbance rejection at 200 Hz. Features Lagrangian swing-up and smooth state-transition logic.",
      tags: ["Arduino", "Simulink", "LQR", "C++", "Stepper Motor"],
      links: { github: "#", youtube: "#" },
    },
    {
      id: "gearbox",
      title: "Single-Clutch 2D1R Mechanical Gearbox",
      category: "Hardware",
      date: "Feb 2026 – May 2026",
      status: "Complete",
      image: "/portfolio-images/gearbox_cover.png",
      description:
        "Manual transmission with 2-forward + 1-reverse gears actuated by a single linear dog-clutch. Custom Python script uses differential gear kinematics to iteratively optimize tooth counts and pitch diameters against target gear ratios.",
      tags: ["Fusion 360", "Machining", "Python", "Gear Design"],
      links: { github: "#" },
    },
{
      id: "quadruped",
      title: "1-DOF Quadruped Robot with Dispenser",
      category: "Hardware",
      date: "Sep 2025 – Dec 2025",
      status: "Complete",
      image: "/portfolio-images/quadruped_cover.png",
      description:
        "Single-motor quadruped integrating a dispenser with <3% interval error. Optimized 7-bar linkage kinematics via PVA analysis converts rotary input into a planar walking gait. Noncircular gears extend the duty factor from 60% to >75% for crawl-gait stability.",
      tags: ["Siemens NX", "Kinematics", "Laser Cutting", "Noncircular Gears"],
      links: { github: "#", youtube: "#" },
      slides: [
        {
          type: "image",
          src: "/portfolio-images/quadruped-cad-overview.jpeg",
          label: "CAD Overview",
          title: "Full Assembly — Isometric View",
          description:
            "The robot is modelled entirely in Siemens NX. The chassis is a single rigid plywood frame; all four legs share one identical 7-bar linkage module, reducing part count and ensuring symmetric gait. The dispenser sits centrally above the body and is mechanically driven off the same crankshaft — no separate actuator needed.",
        },
        {
          type: "image",
          src: "/portfolio-images/quadruped-exploded.jpeg",
          label: "Exploded View",
          title: "Exploded Assembly — Component Breakdown",
          description:
            "The exploded view shows the three sub-assemblies: (1) the central drivetrain with bevel gear set and noncircular gear pair, (2) four identical leg modules each consisting of a 7-bar planar linkage with couplers and rockers, and (3) the dispenser drum with its cam-driven release gate. Standardised M3 hardware throughout keeps field maintenance simple.",
        },
        {
          type: "image",
          src: "/portfolio-images/quadruped-kinematics.jpeg",
          label: "Kinematics",
          title: "7-Bar Linkage & Drivetrain Topology",
          description:
            "A single DC motor drives all four legs through a bevel gear differential, then through a custom noncircular gear pair. The noncircular gears slow the crank during the stance phase and accelerate it during swing, pushing the duty factor (fraction of cycle with foot on ground) from ~60% to >75%. This threshold is required for a static crawl gait, where three feet remain grounded at all times — guaranteeing both static and dynamic stability without any sensors or active balance control.",
        },
        {
          type: "image",
          src: "/portfolio-images/quadruped_lasercut.jpeg",
          label: "Fabrication",
          title: "Laser-Cut Profiles & Assembly Process",
          description:
            "All structural members are cut from 4 mm and 6 mm birch plywood on a CO2 laser cutter. Finger-joint interlocks eliminate the need for adhesive on the main chassis. Load-bearing pivots and gear hubs are 3D-printed in PETG for tight dimensional tolerance around press-fit bearings. The layered build sequence — laser cut flat, print joints, assemble — allowed full assembly in under two hours per iteration.",
        },
        {
          type: "image",
          src: "/portfolio-images/quadruped-assembled.jpeg",
          label: "Physical Build",
          title: "Completed Physical Assembly",
          description:
            "The finished robot weighs 380 g and fits within a 220 x 180 mm footprint. Passive compliant feet (soft TPU pads) dampen ground impact and improve traction on uneven surfaces. The dispenser achieves less than 3% timing error across 50 consecutive cycles, validated by high-speed camera frame counting against the motor encoder signal.",
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
          label: "Performance",
          title: "Walking Demonstration",
          description:
            "The robot demonstrates a stable crawl gait at 0.4 body-lengths per second. Key highlights: duty factor greater than 75% maintained at all tested speeds; zero tip-overs across 30 continuous minutes of operation; dispenser interval error less than 3% at nominal gait speed. The noncircular gears visibly modulate crank speed — faster during leg swing, slower during stance — producing the smooth, ground-hugging foot trajectory shown in the video.",
        },
      ],
    },
    {
      id: "tesla-coil",
      title: "300 kV Spark Gap Tesla Coil",
      category: "Fabrication",
      date: "Dec 2023 – Jul 2024",
      status: "Complete",
      image: "/portfolio-images/tesla_cover.png",
      description:
        "60 cm Tesla coil generating >30 cm plasma arcs. Derived lumped RLC and coupling coefficients to optimize resonance and eliminate reverse arc-striking. Epoxy-resin dielectric isolation protects secondary winding from corona discharge.",
      tags: ["HV Electronics", "RLC Tuning", "Epoxy Casting", "Copper Winding"],
      links: { youtube: "#" },
    },
    {
      id: "fpv-drone",
      title: "Jamming-Resistant FPV Drone",
      category: "Hardware",
      date: "May 2025 – Aug 2025",
      status: "Complete",
      image: "/portfolio-images/FPV_cover.png",
      description:
        "15-inch FPV drone with 20 km range, 5 kg payload, and 45-min endurance, designed at AiSeed Tech for DoD requirements. Developed an electro-optical module for fiber-optic signal conversion to bypass RF interference. Resolved a 6-month ESC-motor sync issue by tuning PWM bandwidth.",
      tags: ["FPV", "ESC Tuning", "Fiber Optics", "Drone Design"],
      links: {},
    },
    {
      id: "stereo",
      title: "Multi-Architecture Audio Systems",
      category: "Audio",
      date: "Sep 2019 – Aug 2023",
      status: "Complete",
      image: "/portfolio-images/stereo_cover.png",
      description:
        "11 custom stereo systems spanning active subwoofers, portable Bluetooth soundbars, and a 5-channel home theater array. Iterated diverse amplifier circuit schematics and synthesized enclosure geometries to hit custom frequency response targets.",
      tags: ["Amplifier Design", "Acoustic Enclosures", "Bluetooth", "PCB"],
      links: { youtube: "#" },
    },
  ],

  // ── Skills ───────────────────────────────────────────────
  skills: [
    { category: "Mechanical", items: ["Lathe", "Router", "Laser Cutting", "CNC Mill", "Welding", "3D Printing"] },
    { category: "CAD / Simulation", items: ["Fusion 360", "Siemens NX", "Simulink", "Matlab", "FEA"] },
    { category: "Programming", items: ["Python", "C++", "Java", "Matlab", "Arduino"] },
    { category: "Electronics", items: ["PCB Design", "ESC/Motor Tuning", "HV Systems", "Sensor Integration", "Amplifier Circuits"] },
    { category: "Theory", items: ["LQR / PID Control", "Kinematics & Dynamics", "Gear Design", "RLC Circuits", "Thermofluids"] },
    { category: "Materials", items: ["Aluminum", "Steel", "Copper Winding", "Epoxy Resin", "PLA/PETG", "Plywood"] },
  ],

  // ── About ────────────────────────────────────────────────
  about: {
    philosophy:
      "My rule is simple: if I can draw it, I should be able to build it. Every project starts with a clean sheet of paper and ends with something I can hold, run, and break — and then improve. I bridge the gap between simulation and fabrication, treating the shop as a lab and the lab as a playground.",
    highlights: [
      { stat: "3.98", label: "GPA @ UIUC" },
      { stat: "11+", label: "Custom Builds" },
      { stat: "6", label: "Years Making" },
      { stat: "3", label: "Research Labs" },
    ],
    education: "B.S. Mechanical Engineering, Minor in ECE · University of Illinois Urbana-Champaign · Expected May 2027 · Dean's List, James Scholar",
  },
};
// ============================================================
//  END OF CONFIG — components below read from portfolioData
// ============================================================

import { useState, useEffect, useRef } from "react";

// ── Icon primitives ─────────────────────────────────────────
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function SocialIcon({ icon }) {
  if (icon === "github") return <GithubIcon />;
  if (icon === "youtube") return <YoutubeIcon />;
  if (icon === "linkedin") return <LinkedinIcon />;
  return <MailIcon />;
}

// ── Project Deep-Dive Modal ─────────────────────────────────
function ProjectModal({ project, onClose }) {
  const [active, setActive] = useState(0);
  const slide = project.slides[active];

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const prev = () => setActive((a) => (a - 1 + project.slides.length) % project.slides.length);
  const next = () => setActive((a) => (a + 1) % project.slides.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-950/90 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-5xl bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 shrink-0">
          <div>
            <p className="text-orange-400 font-mono text-xs uppercase tracking-widest mb-0.5">{project.category}</p>
            <h2 className="text-white font-bold text-lg leading-tight">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Slide tab strip */}
        <div className="flex gap-1 px-6 pt-4 pb-0 shrink-0 overflow-x-auto">
          {project.slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`shrink-0 px-3 py-1.5 rounded-t-lg text-xs font-mono transition-colors border-b-2 ${
                i === active
                  ? "text-orange-400 border-orange-400 bg-gray-800"
                  : "text-gray-500 border-transparent hover:text-gray-300"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Main content: image left, description right */}
        <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">

          {/* Media panel */}
          <div className="relative md:w-[58%] bg-gray-950 flex items-center justify-center min-h-[220px]">
            {slide.type === "video" ? (
              <iframe
                key={active}
                src={slide.src}
                className="w-full h-full min-h-[300px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                key={active}
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-contain max-h-[55vh]"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            )}
            {/* Fallback placeholder */}
            <div className="hidden w-full h-full min-h-[300px] items-center justify-center flex-col gap-3 text-gray-700">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-14 h-14">
                <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p className="text-xs font-mono">Add image to public/portfolio-images/</p>
            </div>

            {/* Prev / Next arrows */}
            {project.slides.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-900/80 border border-gray-700 hover:border-orange-500/50 text-gray-400 hover:text-white transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-900/80 border border-gray-700 hover:border-orange-500/50 text-gray-400 hover:text-white transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </>
            )}

            {/* Slide counter */}
            <div className="absolute bottom-3 right-3 text-xs font-mono text-gray-600 bg-gray-900/70 px-2 py-1 rounded">
              {active + 1} / {project.slides.length}
            </div>
          </div>

          {/* Description panel */}
          <div className="md:w-[42%] p-6 overflow-y-auto flex flex-col gap-4 border-t md:border-t-0 md:border-l border-gray-800">
            <h3 className="text-white font-bold text-base leading-snug">{slide.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{slide.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((t) => (
                <span key={t} className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full font-mono">{t}</span>
              ))}
            </div>

            {/* External links */}
            {Object.keys(project.links).length > 0 && (
              <div className="flex gap-4 pt-2 mt-auto border-t border-gray-800">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
                    <GithubIcon /> GitHub
                  </a>
                )}
                {project.links.youtube && (
                  <a href={project.links.youtube} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-400 transition-colors">
                    <YoutubeIcon /> YouTube
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Nav ─────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["Projects", "Skills", "About", "Contact"];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-950/95 backdrop-blur border-b border-gray-800" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-mono text-orange-400 font-bold tracking-tight text-lg">
          AC<span className="text-gray-400">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide uppercase">
              {l}
            </a>
          ))}
        </div>
        <button className="md:hidden text-gray-400" onClick={() => setOpen(!open)}>
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-gray-300 hover:text-white text-sm uppercase tracking-wide">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────
function Hero() {
  const { name, tagline, subTagline, bio, cta, socials } = portfolioData;
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950">
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
        backgroundSize: "48px 48px"
      }} />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-gray-700 bg-gray-900 text-gray-400 text-xs font-mono tracking-widest uppercase">
          Maker Portfolio · {new Date().getFullYear()}
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-4">
          {tagline}
        </h1>
        <p className="text-orange-400 font-mono text-sm md:text-base tracking-widest mb-6">{subTagline}</p>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">{bio}</p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a href="#projects" className="inline-flex items-center gap-2 border border-gray-700 hover:border-orange-500/50 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-lg transition-colors">
            View Projects
          </a>
          <a href="#about" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 font-medium px-6 py-3 rounded-lg transition-colors">
            About Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-800 hover:border-orange-500/50 text-gray-500 hover:text-orange-400 transition-all">
              <SocialIcon icon={s.icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll nudge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 text-xs">
        <span>scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 animate-bounce">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}

// ── Projects ────────────────────────────────────────────────
const PROJECT_CATEGORIES = ["All", "Hardware", "Controls", "Fabrication", "Audio"];
const STATUS_COLORS = {
  "Complete": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  "In Progress": "bg-orange-500/10 text-orange-400 border-orange-500/30",
};

function ProjectCard({ project, onExpand }) {
  const { title, category, date, status, image, description, tags, links, slides } = project;
  return (
    <div className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden h-48 bg-gray-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="hidden w-full h-full items-center justify-center text-gray-600">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12">
            <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        {/* Category badge */}
        <span className="absolute top-3 left-3 text-xs font-mono bg-gray-950/80 backdrop-blur text-orange-400 px-2 py-1 rounded border border-orange-500/30">
          {category}
        </span>
        {/* Deep-dive indicator */}
        {slides && slides.length > 0 && (
          <span className="absolute top-3 right-3 text-xs font-mono bg-orange-500/20 backdrop-blur text-orange-300 px-2 py-1 rounded border border-orange-500/40 flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            {slides.length} slides
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white font-bold text-base leading-tight">{title}</h3>
          <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border ${STATUS_COLORS[status] || STATUS_COLORS["Complete"]}`}>
            {status}
          </span>
        </div>
        <p className="text-gray-500 text-xs font-mono mb-3">{date}</p>
        <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((t) => (
            <span key={t} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded font-mono">{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-3 border-t border-gray-800">
          {/* Deep-dive expand button */}
          {slides && slides.length > 0 && (
            <button
              onClick={() => onExpand(project)}
              className="inline-flex items-center gap-1.5 text-xs bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 hover:text-orange-300 border border-orange-500/30 hover:border-orange-500/60 px-3 py-1.5 rounded-lg transition-all font-medium"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
              Explore Project
            </button>
          )}
          {links.github && (
            <a href={links.github} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
              <GithubIcon /> GitHub
            </a>
          )}
          {links.youtube && (
            <a href={links.youtube} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-400 transition-colors">
              <YoutubeIcon /> Demo
            </a>
          )}
          {links.live && (
            <a href={links.live} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
              <ExternalLinkIcon /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const [modalProject, setModalProject] = useState(null);

  const filtered = activeTab === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-orange-400 font-mono text-sm uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-4xl font-black text-white">Projects</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === cat
                  ? "bg-orange-500 text-white"
                  : "bg-gray-900 border border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-2 text-xs opacity-60">
                  {portfolioData.projects.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onExpand={setModalProject} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalProject && (
        <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </section>
  );
}

// ── Skills ─────────────────────────────────────────────────
function Skills() {
  const { skills } = portfolioData;
  const categoryColors = [
    "border-orange-500/30 bg-orange-500/5",
    "border-blue-500/30 bg-blue-500/5",
    "border-green-500/30 bg-green-500/5",
    "border-purple-500/30 bg-purple-500/5",
    "border-yellow-500/30 bg-yellow-500/5",
    "border-pink-500/30 bg-pink-500/5",
  ];
  const badgeColors = [
    "bg-orange-500/10 text-orange-300",
    "bg-blue-500/10 text-blue-300",
    "bg-green-500/10 text-green-300",
    "bg-purple-500/10 text-purple-300",
    "bg-yellow-500/10 text-yellow-300",
    "bg-pink-500/10 text-pink-300",
  ];
  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-orange-400 font-mono text-sm uppercase tracking-widest mb-2">Capabilities</p>
          <h2 className="text-4xl font-black text-white">Skills &amp; Tech Stack</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <div key={group.category} className={`border rounded-xl p-5 ${categoryColors[i % categoryColors.length]}`}>
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className={`text-xs px-2.5 py-1 rounded-full font-mono ${badgeColors[i % badgeColors.length]}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ───────────────────────────────────────────────────
function About() {
  const { about, name } = portfolioData;
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-400 font-mono text-sm uppercase tracking-widest mb-2">Background</p>
            <h2 className="text-4xl font-black text-white mb-6">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 italic border-l-4 border-orange-500 pl-5">
              "{about.philosophy}"
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">{about.education}</p>
          </div>
          <div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {about.highlights.map(({ stat, label }) => (
                <div key={label} className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
                  <div className="text-4xl font-black text-orange-400 mb-1">{stat}</div>
                  <div className="text-gray-400 text-sm">{label}</div>
                </div>
              ))}
            </div>
            {/* Timeline items */}
            <div className="space-y-3">
              {[
                { period: "2025", role: "Hardware Intern · AiSeed Tech (Taipei)", detail: "FPV drone, fiber-optic RF bypass" },
                { period: "2024–", role: "Researcher · Multiphase Thermo-fluid Lab", detail: "Nuclear reactor thermal safety margins" },
                { period: "2024", role: "Researcher · MNM Laboratory", detail: "Monte Carlo simulation, DFT on ZrH₂" },
              ].map(({ period, role, detail }) => (
                <div key={role} className="flex gap-4 items-start">
                  <span className="font-mono text-xs text-orange-500 w-14 shrink-0 pt-0.5">{period}</span>
                  <div>
                    <p className="text-white text-sm font-medium">{role}</p>
                    <p className="text-gray-500 text-xs">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact ─────────────────────────────────────────────────
function Contact() {
  const { email, phone, location, socials } = portfolioData;

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-orange-400 font-mono text-sm uppercase tracking-widest mb-2">Reach out</p>
        <h2 className="text-4xl font-black text-white mb-4">Contact</h2>
        <p className="text-gray-400 text-base leading-relaxed mb-12">
          Questions about any of these projects? Feel free to reach out directly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {[
            { icon: <MailIcon />, label: "Email", value: email, href: `mailto:${email}` },
            { icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
              </svg>
            ), label: "Phone", value: phone, href: `tel:${phone}` },
            { icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
            ), label: "Location", value: location, href: null },
          ].map(({ icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-3 bg-gray-950 border border-gray-800 rounded-xl px-5 py-4">
              <div className="text-orange-400">{icon}</div>
              <div className="text-left">
                <p className="text-gray-500 text-xs uppercase tracking-wide">{label}</p>
                {href ? (
                  <a href={href} className="text-white hover:text-orange-400 transition-colors text-sm">{value}</a>
                ) : (
                  <p className="text-white text-sm">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-gray-700 hover:border-orange-500/50 text-gray-500 hover:text-orange-400 transition-all">
              <SocialIcon icon={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
        <span className="font-mono text-orange-400 font-bold">AC.</span>
        <span>© {new Date().getFullYear()} {portfolioData.name} · Mechanical Engineering @ UIUC</span>
        <a href="#hero" className="hover:text-white transition-colors">↑ Back to top</a>
      </div>
    </footer>
  );
}

// ── App ─────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white antialiased">
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}