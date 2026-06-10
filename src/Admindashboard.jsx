import { useState } from "react";
import Logo from "./Logo";
import { PAGES } from "./pageRoutes";

export default function AdminDashboard({ navigate }) {
  const [search, setSearch] = useState("");
  const [activeNav, setActiveNav] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const employees = [
    { id: "ST001", name: "Karthik Rajan", dept: "Engineering", in: "09:02 AM", out: "—", hours: "6h 12m", status: "Active" },
    { id: "ST002", name: "Priya Sundaram", dept: "Design", in: "08:50 AM", out: "—", hours: "6h 24m", status: "Active" },
    { id: "ST003", name: "Arun Krishnan", dept: "Marketing", in: "10:15 AM", out: "—", hours: "4h 59m", status: "Late" },
    { id: "ST004", name: "Deepa Nair", dept: "HR", in: "—", out: "—", hours: "—", status: "Absent" },
    { id: "ST005", name: "Vijay Kumar", dept: "Engineering", in: "09:00 AM", out: "05:30 PM", hours: "8h 30m", status: "Left" },
    { id: "ST006", name: "Meena Iyer", dept: "Finance", in: "08:45 AM", out: "—", hours: "6h 39m", status: "Active" },
    { id: "ST007", name: "Suresh Babu", dept: "Operations", in: "—", out: "—", hours: "—", status: "Absent" },
    { id: "ST008", name: "Nithya Raj", dept: "Engineering", in: "09:30 AM", out: "—", hours: "5h 44m", status: "Active" },
  ];

  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.dept.toLowerCase().includes(search.toLowerCase()) ||
    e.id.toLowerCase().includes(search.toLowerCase())
  );

  const active = employees.filter(e => e.status === "Active").length;
  const present = employees.filter(e => e.status !== "Absent").length;

  const navItems = [
    { icon: "📊", label: "Overview" },
    { icon: "👥", label: "Employees" },
    { icon: "📋", label: "Reports" },
    { icon: "📅", label: "Schedules" },
    { icon: "⚙️", label: "Settings" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0f1e", display: "flex" }}>

      {/* Sidebar */}
      <aside style={{ width: sidebarOpen ? 240 : 0, minHeight: "100vh", background: "rgba(255,255,255,0.03)", borderRight: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", transition: "width 0.3s", overflow: "hidden", flexShrink: 0, position: "sticky", top: 0, height: "100vh" }}>
        <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <Logo size="sm" onClick={() => navigate(PAGES.LANDING)} />
          <div className="badge badge-amber" style={{ marginTop: 12, fontSize: 11 }}>⚡ Admin Panel</div>
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

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

        {/* Header */}
        <header style={{ height: 66, padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(10,15,30,0.8)", backdropFilter: "blur(20px)", position: "sticky", top: 0, zIndex: 50 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b", fontSize: 20 }}>☰</button>
            <span className="font-display" style={{ fontSize: 16, fontWeight: 600 }}>Admin Dashboard</span>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <button className="btn-outline" style={{ padding: "8px 18px", fontSize: 13 }} onClick={() => navigate(PAGES.EMPLOYEE_DASHBOARD)}>Employee View</button>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#f59e0b,#ef4444)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 600 }}>A</div>
          </div>
        </header>

        {/* Body */}
        <main style={{ padding: "32px 28px", overflow: "auto" }} className="fade-up">

          <div style={{ marginBottom: 32 }}>
            <h1 className="font-display" style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 6 }}>Attendance Overview</h1>
            <p style={{ color: "#64748b", fontSize: 14 }}>{new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          </div>

          {/* Stat Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 16, marginBottom: 32 }}>
            {[
              { label: "Total Employees", value: employees.length, icon: "👥", color: "#818cf8", change: "+2 this month" },
              { label: "Present Today", value: present, icon: "✅", color: "#4ade80", change: `${Math.round(present / employees.length * 100)}% attendance` },
              { label: "Currently Active", value: active, icon: "⚡", color: "#fbbf24", change: "Now in office" },
              { label: "Absent Today", value: employees.filter(e => e.status === "Absent").length, icon: "❌", color: "#f87171", change: "Unexcused" },
            ].map(c => (
              <div key={c.label} className="stat-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <p style={{ fontSize: 12, color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.label}</p>
                  <span style={{ fontSize: 20 }}>{c.icon}</span>
                </div>
                <p className="font-display" style={{ fontSize: 32, fontWeight: 800, color: c.color, marginBottom: 6 }}>{c.value}</p>
                <p style={{ fontSize: 12, color: "#475569" }}>{c.change}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="glass-card" style={{ overflow: "hidden" }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <h2 className="font-display" style={{ fontSize: 17, fontWeight: 600 }}>Live Attendance Report</h2>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#475569" }}>🔍</span>
                  <input className="input-field" style={{ paddingLeft: 38, width: 240, height: 40, fontSize: 14 }} placeholder="Search employees..." value={search} onChange={e => setSearch(e.target.value)} />
                </div>
                <button className="badge badge-blue" style={{ cursor: "pointer", border: "none", fontSize: 12, padding: "9px 16px" }}>Export</button>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    {["Employee ID", "Name", "Department", "Check In", "Check Out", "Hours", "Status"].map(h => (
                      <th key={h} style={{ padding: "12px 20px", textAlign: "left", fontSize: 11, color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(row => (
                    <tr key={row.id} className="table-row">
                      <td style={{ padding: "14px 20px", fontSize: 13, color: "#6366f1", fontFamily: "monospace" }}>{row.id}</td>
                      <td style={{ padding: "14px 20px", fontSize: 14, color: "#e2e8f0", fontWeight: 500, whiteSpace: "nowrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#3b82f6,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
                            {row.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          {row.name}
                        </div>
                      </td>
                      <td style={{ padding: "14px 20px", fontSize: 13, color: "#64748b" }}>{row.dept}</td>
                      <td style={{ padding: "14px 20px", fontSize: 13, color: "#94a3b8", fontFamily: "monospace" }}>{row.in}</td>
                      <td style={{ padding: "14px 20px", fontSize: 13, color: "#94a3b8", fontFamily: "monospace" }}>{row.out}</td>
                      <td style={{ padding: "14px 20px", fontSize: 13, color: "#94a3b8" }}>{row.hours}</td>
                      <td style={{ padding: "14px 20px" }}>
                        <span className={`badge ${row.status === "Active" ? "badge-green" : row.status === "Late" ? "badge-amber" : row.status === "Left" ? "badge-blue" : "badge-red"}`}>{row.status}</span>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr><td colSpan={7} style={{ padding: "40px", textAlign: "center", color: "#475569" }}>No employees found</td></tr>
                  )}
                </tbody>
              </table>
            </div>
            <div style={{ padding: "14px 24px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", fontSize: 13, color: "#475569" }}>
              <span>Showing {filtered.length} of {employees.length} employees</span>
              <span>Last updated: just now</span>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}