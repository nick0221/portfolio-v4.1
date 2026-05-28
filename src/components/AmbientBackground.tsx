export function AmbientBackground() {
  const codeSymbols = [
    { char: "{", top: "6%", left: "6%", delay: "0s", dur: "20s", size: "18px", color: "var(--accent)" },
    { char: "}", top: "14%", left: "93%", delay: "2.5s", dur: "23s", size: "18px", color: "var(--accent)" },
    { char: "</>", top: "33%", left: "2%", delay: "4.5s", dur: "19s", size: "11px", color: "var(--amber)" },
    { char: "//", top: "48%", left: "96%", delay: "1s", dur: "26s", size: "13px", color: "var(--foreground-tertiary)" },
    { char: "_", top: "63%", left: "7%", delay: "3s", dur: "17s", size: "16px", color: "var(--accent)" },
    { char: "~", top: "78%", left: "89%", delay: "5.5s", dur: "22s", size: "16px", color: "var(--amber)" },
    { char: "()", top: "91%", left: "14%", delay: "2s", dur: "20s", size: "11px", color: "var(--accent-hover)" },
    { char: "=>", top: "21%", left: "55%", delay: "6.5s", dur: "24s", size: "9px", color: "var(--foreground-tertiary)" },
    { char: "*", top: "40%", left: "85%", delay: "1.8s", dur: "18s", size: "14px", color: "var(--accent)" },
    { char: "//", top: "85%", left: "40%", delay: "4s", dur: "21s", size: "12px", color: "var(--accent-light)" },
  ];

  const shapes = [
    { top: "18%", left: "80%", delay: "0s", dur: "30s", size: "8px", color: "var(--accent)", rotate: 45 },
    { top: "45%", left: "12%", delay: "3.5s", dur: "26s", size: "6px", color: "var(--amber)", rotate: 0 },
    { top: "72%", left: "75%", delay: "1.5s", dur: "29s", size: "7px", color: "var(--accent)", rotate: 45 },
    { top: "88%", left: "48%", delay: "4.5s", dur: "23s", size: "5px", color: "var(--accent-hover)", rotate: 45 },
    { top: "30%", left: "42%", delay: "2.2s", dur: "35s", size: "4px", color: "var(--accent)", rotate: 0 },
    { top: "58%", left: "52%", delay: "5.2s", dur: "27s", size: "6px", color: "var(--amber)", rotate: 0 },
  ];

  // Constellation dots — small glowing dots scattered subtly
  const conDots = [
    { top: "12%", left: "30%", delay: "0s", dur: "3.5s" },
    { top: "28%", left: "70%", delay: "1s", dur: "5s" },
    { top: "52%", left: "25%", delay: "0.5s", dur: "4.2s" },
    { top: "68%", left: "80%", delay: "1.8s", dur: "3.8s" },
    { top: "38%", left: "55%", delay: "2.5s", dur: "4.8s" },
    { top: "75%", left: "35%", delay: "0.8s", dur: "5.2s" },
    { top: "20%", left: "85%", delay: "3s", dur: "4s" },
    { top: "90%", left: "65%", delay: "1.2s", dur: "4.5s" },
  ];

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[-10] overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Layer 1: Rich gradient base ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 75% at 10% 15%, var(--orb-accent) 0%, transparent 65%), radial-gradient(ellipse 80% 70% at 90% 85%, var(--orb-amber) 0%, transparent 60%)",
        }}
      />

      {/* ── Layer 2: Vibrant orbital glows ── */}
      <div
        className="absolute animate-orb-1 will-change-transform"
        style={{
          width: "min(75vw, 650px)",
          height: "min(75vw, 650px)",
          top: "-12%",
          left: "-6%",
          background:
            "radial-gradient(circle, var(--orb-accent-strong) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute animate-orb-2 will-change-transform"
        style={{
          width: "min(55vw, 480px)",
          height: "min(55vw, 480px)",
          top: "-8%",
          right: "-4%",
          background:
            "radial-gradient(circle, var(--orb-amber) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute animate-orb-3 will-change-transform"
        style={{
          width: "min(85vw, 750px)",
          height: "min(85vw, 750px)",
          bottom: "-18%",
          left: "20%",
          background:
            "radial-gradient(circle, var(--orb-purple) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute animate-orb-4 will-change-transform"
        style={{
          width: "min(45vw, 380px)",
          height: "min(45vw, 380px)",
          top: "48%",
          right: "3%",
          background:
            "radial-gradient(circle, var(--orb-blue) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute animate-orb-5 will-change-transform"
        style={{
          width: "min(32vw, 260px)",
          height: "min(32vw, 260px)",
          top: "56%",
          left: "3%",
          background:
            "radial-gradient(circle, var(--orb-accent-strong) 0%, transparent 68%)",
        }}
      />

      {/* ── Layer 3: Subtle grid ── */}
      <div
        className="absolute inset-0 animate-grid-pulse"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Layer 4: Floating code symbols ── */}
      <div className="absolute inset-0 overflow-hidden">
        {codeSymbols.map((s, i) => (
          <span
            key={`code-${i}`}
            className="absolute animate-code-float will-change-transform font-mono font-bold pointer-events-none select-none"
            style={{
              top: s.top,
              left: s.left,
              fontSize: s.size,
              color: s.color,
              animationDelay: s.delay,
              animationDuration: s.dur,
              opacity: 0,
            }}
          >
            {s.char}
          </span>
        ))}
      </div>

      {/* ── Layer 5: Floating geometric shapes ── */}
      <div className="absolute inset-0 overflow-hidden">
        {shapes.map((s, i) => (
          <div
            key={`shape-${i}`}
            className={`absolute animate-shape-float will-change-transform pointer-events-none select-none ${
              s.rotate === 45 ? "rounded-sm" : "rounded-full"
            }`}
            style={{
              width: s.size,
              height: s.size,
              top: s.top,
              left: s.left,
              backgroundColor: s.color,
              animationDelay: s.delay,
              animationDuration: s.dur,
              rotate: s.rotate === 45 ? "45deg" : "0deg",
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* ── Layer 6: Constellation dots ── */}
      <div className="absolute inset-0 overflow-hidden">
        {conDots.map((d, i) => (
          <div
            key={`dot-${i}`}
            className="absolute animate-dot-pulse rounded-full bg-[var(--accent)] will-change-transform"
            style={{
              width: "3px",
              height: "3px",
              top: d.top,
              left: d.left,
              animationDelay: d.delay,
              animationDuration: d.dur,
            }}
          />
        ))}
      </div>

      {/* ── Layer 7: Enhanced floating particles ── */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { top: "10%", left: "22%", delay: "0s", dur: "14s", size: 3, color: "var(--accent)" },
          { top: "22%", left: "78%", delay: "1.2s", dur: "18s", size: 2.5, color: "var(--amber)" },
          { top: "38%", left: "8%", delay: "2.5s", dur: "12s", size: 4, color: "var(--accent)" },
          { top: "52%", left: "88%", delay: "0.8s", dur: "16s", size: 2, color: "var(--accent-hover)" },
          { top: "68%", left: "28%", delay: "3.2s", dur: "20s", size: 3.5, color: "var(--amber)" },
          { top: "80%", left: "68%", delay: "1.8s", dur: "13s", size: 2.5, color: "var(--accent)" },
          { top: "16%", left: "52%", delay: "4s", dur: "17s", size: 2, color: "var(--accent)" },
          { top: "62%", left: "58%", delay: "2s", dur: "15s", size: 1.5, color: "var(--accent-hover)" },
          { top: "34%", left: "38%", delay: "5s", dur: "19s", size: 3, color: "var(--amber)" },
          { top: "92%", left: "12%", delay: "3.5s", dur: "11s", size: 2, color: "var(--accent)" },
        ].map((p, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-particle rounded-full will-change-transform"
            style={{
              width: p.size + "px",
              height: p.size + "px",
              top: p.top,
              left: p.left,
              background: p.color,
              opacity: 0,
              animationDelay: p.delay,
              animationDuration: p.dur,
            }}
          />
        ))}
      </div>
    </div>
  );
}
