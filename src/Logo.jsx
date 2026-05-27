export default function Logo({ size = "md", onClick }) {
  const s = size === "sm" ? { text: "16px", dot: 8 } : { text: "20px", dot: 10 };
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: onClick ? "pointer" : "default", padding: 0 }}>
      <div style={{ width: s.dot * 3.2, height: s.dot * 3.2, borderRadius: "10px", background: "linear-gradient(135deg,#3b82f6,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width={s.dot * 1.8} height={s.dot * 1.8} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" fill="white" opacity="0.9" />
          <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </svg>
      </div>
      <span className="font-display" style={{ fontSize: s.text, fontWeight: 700, color: "#e2e8f0", letterSpacing: "-0.01em" }}>
        Seyon<span style={{ color: "#6366f1" }}>Tech</span>
      </span>
    </button>
  );
}