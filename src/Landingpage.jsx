import Logo from "./Logo";
import { PAGES } from "./App";

export default function LandingPage({ navigate }) {
  const features = [
    { icon: "⏱", title: "Real-Time Tracking", desc: "Monitor employee check-ins and check-outs with precise timestamps and live status updates." },
    { icon: "📊", title: "Smart Analytics", desc: "Comprehensive attendance reports, trends, and insights to improve workforce productivity." },
    { icon: "🔒", title: "Secure Access", desc: "Role-based access control ensures data privacy for both admins and employees." },
    { icon: "📱", title: "Mobile Ready", desc: "Fully responsive design works seamlessly across all devices and screen sizes." },
    { icon: "🗂", title: "Attendance History", desc: "Complete log of daily attendance records, working hours, and leave management." },
    { icon: "⚡", title: "Instant Notifications", desc: "Automated alerts for late arrivals, absences, and overtime hours." },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0f1e" }}>
      <div className="mesh-bg" />
      <div className="page-container">

        {/* Navbar */}
        <nav style={{ padding: "0 5%", height: 70, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "sticky", top: 0, background: "rgba(10,15,30,0.85)", backdropFilter: "blur(20px)", zIndex: 100 }}>
          <Logo onClick={() => navigate(PAGES.LANDING)} />
          <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {["Features", "About", "Pricing", "Contact"].map(l => <button key={l} className="nav-link">{l}</button>)}
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn-outline" style={{ padding: "9px 22px", fontSize: 14 }} onClick={() => navigate(PAGES.LOGIN)}>Log In</button>
            <button className="btn-primary" style={{ padding: "9px 22px", fontSize: 14 }} onClick={() => navigate(PAGES.SIGNUP)}>Get Started</button>
          </div>
        </nav>

        {/* Hero */}
        <section style={{ padding: "100px 5% 80px", textAlign: "center", maxWidth: 860, margin: "0 auto" }} className="fade-up">
          <div className="badge badge-blue" style={{ marginBottom: 24, display: "inline-flex" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#818cf8" }} />
            Smart Attendance Management
          </div>
          <h1 className="font-display" style={{ fontSize: "clamp(38px, 6vw, 68px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 24 }}>
            Office Attendance,{" "}
            <span style={{ background: "linear-gradient(135deg,#3b82f6,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Reimagined
            </span>
          </h1>
          <p style={{ fontSize: 18, color: "#94a3b8", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 40px", fontWeight: 300 }}>
            SeyonTech brings intelligent attendance tracking to your workplace — effortless check-ins, rich analytics, and complete visibility for your team.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" style={{ padding: "14px 36px", fontSize: 16 }} onClick={() => navigate(PAGES.EMPLOYEE_DASHBOARD)}>
              View Employee Dashboard
            </button>
            <button className="btn-outline" style={{ padding: "14px 36px", fontSize: 16 }} onClick={() => navigate(PAGES.ADMIN_DASHBOARD)}>
              View Admin Panel
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 70, maxWidth: 560, margin: "70px auto 0" }}>
            {[["2,400+", "Active Users"], ["99.9%", "Uptime SLA"], ["50ms", "Avg. Response"]].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "#e2e8f0" }}>{num}</div>
                <div style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: "60px 5% 100px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 className="font-display" style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 700, marginBottom: 12, letterSpacing: "-0.02em" }}>Everything you need</h2>
            <p style={{ color: "#64748b", fontSize: 16 }}>Powerful tools built for modern workplaces</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
            {features.map(f => (
              <div key={f.title} className="glass-card" style={{ padding: "28px 24px", transition: "transform 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
                <div className="font-display" style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, color: "#e2e8f0" }}>{f.title}</div>
                <div style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "60px 5% 100px", textAlign: "center" }}>
          <div className="glass-card" style={{ maxWidth: 640, margin: "0 auto", padding: "56px 40px" }}>
            <h2 className="font-display" style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 700, marginBottom: 16 }}>Ready to get started?</h2>
            <p style={{ color: "#64748b", fontSize: 16, marginBottom: 32 }}>Join thousands of companies using SeyonTech.</p>
            <button className="btn-primary" style={{ padding: "15px 44px", fontSize: 16 }} onClick={() => navigate(PAGES.SIGNUP)}>Create Free Account</button>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "28px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Logo size="sm" />
          <div style={{ fontSize: 13, color: "#475569" }}>© 2026 SeyonTech. All rights reserved.</div>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy", "Terms", "Support"].map(l => <button key={l} className="nav-link" style={{ fontSize: 13 }}>{l}</button>)}
          </div>
        </footer>

      </div>
    </div>
  );
}