import { useState } from "react";
import Logo from "./Logo";
import { PAGES } from "./App";

export default function EmployeeDashboard({ navigate }) {
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeNav, setActiveNav] = useState("Dashboard");

  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  const handleCheckIn = () => { setCheckedIn(true); setCheckInTime(timeStr); };
  const handleCheckOut = () => { setCheckedIn(false); setCheckInTime(null); };

  const attendance = [
    { date: "Mon, 19 May", in: "09:02 AM", out: "06:15 PM", hours: "9h 13m", status: "Present" },
    { date: "Tue, 20 May", in: "08:55 AM", out: "06:00 PM", hours: "9h 05m", status: "Present" },
    { date: "Wed, 21 May", in: "09:45 AM", out: "06:30 PM", hours: "8h 45m", status: "Late" },
    { date: "Thu, 22 May", in: "—", out: "—", hours: "—", status: "Absent" },
    { date: "Fri, 23 May", in: "09:00 AM", out: "05:30 PM", hours: "8h 30m", status: "Present" },
  ];

  const navItems = [
    { icon: "🏠", label: "Dashboard" },
    { icon: "📋", label: "My Attendance" },
    { icon: "📅", label: "Leave Requests" },
    { icon: "⏱", label: "Timesheets" },
    { icon: "👤", label: "Profile" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0f1e", display: "flex" }}>

      {/* Sidebar */}
      <aside style={{ width: sidebarOpen ? 240 : 0, minHeight: "100vh", background: "rgba(255,255,255,0.03)", borderRight: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", transition: "width 0.3s", overflow: "hidden", flexShrink: 0, position: "sticky", top: 0, height: "100vh" }}>
        <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <Logo size="sm" onClick={() => navigate(PAGES.LANDING)} />
        </div>
        <nav style={{ padding: "16px 12px", flex: 1 }}>
          {navItems.map(item => (
            <button key={item.label} className={`sidebar-item ${activeNav === item.label ? "active" : ""}`} onClick={() => setActiveNav(item.label)}>
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              <span style={{ whiteSpace: "nowrap" }}>{item.label}</span>
            </button>
          ))}
        </nav>
        <div style={{ padding: "12px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <button className="sidebar-item" onClick={() => navigate(PAGES.LOGIN)}>
            <span>🚪</span><span style={{ whiteSpace: "nowrap" }}>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

        {/* Header */}
        <header style={{ height: 66, padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(10,15,30,0.8)", backdropFilter: "blur(20px)", position: "sticky", top: 0, zIndex: 50 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b", fontSize: 20 }}>☰</button>
            <span className="font-display" style={{ fontSize: 16, fontWeight: 600 }}>{activeNav}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div className={`badge ${checkedIn ? "badge-green" : "badge-red"}`}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: checkedIn ? "#4ade80" : "#f87171" }} />
              {checkedIn ? "Active" : "Offline"}
            </div>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#3b82f6,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 600 }}>K</div>
          </div>
        </header>

        {/* Body */}
        <main style={{ padding: "32px 28px", flex: 1, overflow: "auto" }} className="fade-up">

          {/* Welcome */}
          <div style={{ marginBottom: 32 }}>
            <h1 className="font-display" style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 6 }}>Good morning, Karthik 👋</h1>
            <p style={{ color: "#64748b", fontSize: 14 }}>{now.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })} · {timeStr}</p>
          </div>

          {/* Check In/Out */}
          <div className="glass-card" style={{ padding: "32px", marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <div>
              <p style={{ fontSize: 13, color: "#64748b", marginBottom: 8 }}>Today's attendance</p>
              <div style={{ display: "flex", gap: 24 }}>
                <div>
                  <p style={{ fontSize: 12, color: "#475569", marginBottom: 4 }}>Check In</p>
                  <p className="font-display" style={{ fontSize: 20, fontWeight: 700, color: checkedIn ? "#4ade80" : "#475569" }}>{checkInTime || "—:— —"}</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, color: "#475569", marginBottom: 4 }}>Check Out</p>
                  <p className="font-display" style={{ fontSize: 20, fontWeight: 700, color: "#475569" }}>—:— —</p>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button className="btn-primary" style={{ padding: "13px 32px", opacity: checkedIn ? 0.4 : 1 }} onClick={handleCheckIn} disabled={checkedIn}>✅ Check In</button>
              <button className="btn-outline" style={{ padding: "13px 32px", opacity: !checkedIn ? 0.4 : 1 }} onClick={handleCheckOut} disabled={!checkedIn}>🚪 Check Out</button>
            </div>
          </div>

          {/* Stat Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginBottom: 32 }}>
            {[
              { label: "Working Hours", value: "42h 30m", sub: "This week", color: "#818cf8" },
              { label: "Days Present", value: "19", sub: "This month", color: "#4ade80" },
              { label: "Leave Balance", value: "8 days", sub: "Available", color: "#fbbf24" },
              { label: "Overtime", value: "3h 15m", sub: "This week", color: "#f87171" },
            ].map(c => (
              <div key={c.label} className="stat-card">
                <p style={{ fontSize: 12, color: "#475569", marginBottom: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.label}</p>
                <p className="font-display" style={{ fontSize: 26, fontWeight: 700, color: c.color, marginBottom: 4 }}>{c.value}</p>
                <p style={{ fontSize: 12, color: "#475569" }}>{c.sub}</p>
              </div>
            ))}
          </div>

          {/* Attendance Table */}
          <div className="glass-card" style={{ overflow: "hidden" }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 className="font-display" style={{ fontSize: 17, fontWeight: 600 }}>Attendance History</h2>
              <button className="badge badge-blue" style={{ cursor: "pointer", border: "none", fontSize: 12 }}>Export CSV</button>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    {["Date", "Check In", "Check Out", "Working Hours", "Status"].map(h => (
                      <th key={h} style={{ padding: "12px 24px", textAlign: "left", fontSize: 12, color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {attendance.map(row => (
                    <tr key={row.date} className="table-row">
                      <td style={{ padding: "14px 24px", fontSize: 14, color: "#e2e8f0", whiteSpace: "nowrap" }}>{row.date}</td>
                      <td style={{ padding: "14px 24px", fontSize: 14, color: "#94a3b8", fontFamily: "monospace" }}>{row.in}</td>
                      <td style={{ padding: "14px 24px", fontSize: 14, color: "#94a3b8", fontFamily: "monospace" }}>{row.out}</td>
                      <td style={{ padding: "14px 24px", fontSize: 14, color: "#94a3b8" }}>{row.hours}</td>
                      <td style={{ padding: "14px 24px" }}>
                        <span className={`badge ${row.status === "Present" ? "badge-green" : row.status === "Late" ? "badge-amber" : "badge-red"}`}>{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}