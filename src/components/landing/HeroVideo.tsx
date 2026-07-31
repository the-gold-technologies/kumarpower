import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Cpu,
  Layers,
} from "lucide-react";

const scenes = [
  {
    id: 1,
    title: "Power Entry & Transmission",
    message: "Power begins with the right infrastructure.",
    badge: "Grid Infrastructure",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80",
    detail:
      "High-voltage grid connection, substations, and main power transformers.",
  },
  {
    id: 2,
    title: "Control & Distribution",
    message: "Controlled. Protected. Distributed.",
    badge: "Switchgear & Panels",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80",
    detail:
      "HT/LT panel systems, air circuit breakers, and intelligent busbars.",
  },
  {
    id: 3,
    title: "Backup & Energy Security",
    message: "Reliable power when the grid cannot deliver.",
    badge: "DG Sets & AMF",
    image:
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1920&q=80",
    detail:
      "Kirloskar CPCB IV+ silent DG sets with sub-second automatic transfer.",
  },
  {
    id: 4,
    title: "New-Energy Systems",
    message: "Smarter energy for a changing world.",
    badge: "Solar & EnerCube BESS",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1920&q=80",
    detail:
      "Rooftop solar integration, battery storage peak-shaving & microgrids.",
  },
  {
    id: 5,
    title: "Turnkey Execution",
    message: "Designed. Supplied. Installed. Supported.",
    badge: "End-to-End Delivery",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
    detail:
      "Engineering design, site cabling, commissioning & lifecycle support.",
  },
];

export const HeroVideo: React.FC = () => {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % (scenes.length + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isFinalFrame = activeScene === scenes.length;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
      {/* Background Media Overlay */}
      {scenes.map((scene, idx) => (
        <div
          key={scene.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            !isFinalFrame && activeScene === idx
              ? "opacity-35 scale-105"
              : "opacity-0 scale-100"
          } transition-transform duration-[4500ms]`}
        >
          <img
            src={scene.image}
            alt={scene.title}
            className="w-full h-full object-cover filter brightness-75 contrast-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1A6AA2]/20 via-transparent to-transparent" />
        </div>
      ))}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 py-20 flex flex-col justify-between min-h-[85vh]">
        {/* Top Tag & Channel Partner Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A6AA2]/20 border border-[#1A6AA2]/40 backdrop-blur-md text-xs font-semibold tracking-wide text-[#1A6AA2]">
            <Zap className="w-3.5 h-3.5 text-[#1A6AA2] animate-pulse" />
            <span>Complete Electrical Power System Integrator</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 backdrop-blur-md text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Authorised Kirloskar Channel Partner</span>
          </div>
        </div>

        {/* Dynamic Center Hero Content */}
        {!isFinalFrame ? (
          <div className="max-w-4xl my-auto space-y-6">
            {/* Scene Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A6AA2] bg-[#1A6AA2]/15 border border-[#1A6AA2]/30 px-3 py-1 rounded">
              <Activity className="w-3.5 h-3.5" />
              <span>
                Scene {scenes[activeScene].id} of 5: {scenes[activeScene].badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
              Complete Electrical Solutions. <br />
              <span className="text-[#1A6AA2]">
                Engineered for Reliability.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              From generators, transformers and electrical panels to solar,
              battery storage, power conditioning and complete turnkey
              execution.
            </p>

            {/* Live Sequence Message banner */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md max-w-xl shadow-2xl flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#1A6AA2]/20 text-[#1A6AA2] border border-[#1A6AA2]/30">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  "{scenes[activeScene].message}"
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {scenes[activeScene].detail}
                </p>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection("solutions-portfolio")}
                className="px-8 py-4 rounded-full bg-[#1A6AA2] hover:bg-[#145380] text-white font-bold flex items-center gap-3 transition-all duration-200 shadow-lg shadow-[#1A6AA2]/30 group cursor-pointer"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("consultation-form")}
                className="px-8 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-100 font-bold transition-all duration-200 backdrop-blur-md cursor-pointer"
              >
                Discuss Your Requirement
              </button>
            </div>
          </div>
        ) : (
          /* Final Summary Frame */
          <div className="max-w-4xl my-auto p-8 md:p-12 rounded-3xl bg-slate-900/90 border border-[#1A6AA2]/40 backdrop-blur-xl shadow-2xl space-y-6 text-center mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1A6AA2]/20 border border-[#1A6AA2]/30 text-[#1A6AA2] font-bold text-sm">
              <Layers className="w-4 h-4 text-[#1A6AA2]" />
              KUMAR POWER ECOSYSTEM
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Your Partner for Complete Electrical Solutions
            </h2>

            <div className="h-0.5 w-24 bg-[#1A6AA2] mx-auto" />

            <p className="text-base md:text-xl font-medium text-slate-200 max-w-2xl mx-auto">
              Conventional Power &nbsp;|&nbsp; Electrical Distribution
              &nbsp;|&nbsp; Renewable Energy &nbsp;|&nbsp; Energy Storage
            </p>

            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => scrollToSection("ecosystem-graphic")}
                className="px-8 py-3.5 rounded-full bg-[#1A6AA2] hover:bg-[#145380] text-white font-bold flex items-center gap-2 transition-all shadow-lg shadow-[#1A6AA2]/30 cursor-pointer"
              >
                <span>View Complete Ecosystem</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Video Sequence Progress Bar / Nav */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-5 gap-2 md:gap-4">
          {scenes.map((scene, index) => (
            <button
              key={scene.id}
              onClick={() => setActiveScene(index)}
              className={`text-left p-2.5 md:p-3 rounded-xl border transition-all text-xs cursor-pointer ${
                !isFinalFrame && activeScene === index
                  ? "bg-[#1A6AA2]/20 border-[#1A6AA2] text-white"
                  : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700"
              }`}
            >
              <div className="font-bold flex items-center gap-1.5 mb-1">
                <span
                  className={`w-2 h-2 rounded-full ${!isFinalFrame && activeScene === index ? "bg-[#1A6AA2] animate-pulse" : "bg-slate-600"}`}
                />
                <span className="hidden md:inline">Scene 0{scene.id}</span>
              </div>
              <p className="truncate font-medium text-slate-200">
                {scene.badge}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
