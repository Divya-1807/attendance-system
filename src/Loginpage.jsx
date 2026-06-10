import { useState } from "react";
import AuthLayout from "./Authlayout";
import { PAGES } from "./App";

export default function LoginPage({ navigate }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate(PAGES.EMPLOYEE_DASHBOARD); }, 1000);
  };

  return (
    <AuthLayout navigate={navigate}>
      <div className="fade-up" style={{ width: "100%", maxWidth: 440 }}>
        <div className="glass-card" style={{ padding: "44px 40px" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ width: 52, height: 52, borderRadius: "14px", background: "linear-gradient(135deg,#3b82f6,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="font-display" style={{ fontSize: 26, fontWeight: 700, marginBottom: 8 }}>Welcome back</h1>
            <p style={{ color: "#64748b", fontSize: 14 }}>Sign in to your SeyonTech account</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500, display: "block", marginBottom: 8 }}>Email address</label>
              <input className="input-field" type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500, display: "block", marginBottom: 8 }}>Password</label>
              <input className="input-field" type="password" placeholder="Enter your password" value={pass} onChange={e => setPass(e.target.value)} />
            </div>
            <div style={{ textAlign: "right" }}>
              <button className="nav-link" style={{ fontSize: 13, color: "#6366f1" }}>Forgot password?</button>
            </div>
            <button className="btn-primary" style={{ width: "100%", padding: "14px" }} onClick={handleLogin}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>

          <div style={{ marginTop: 28, padding: "20px", background: "rgba(255,255,255,0.03)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)" }}>
            <p style={{ fontSize: 12, color: "#475569", textAlign: "center", marginBottom: 12 }}>Quick access demos</p>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn-outline" style={{ flex: 1, padding: "9px", fontSize: 12 }} onClick={() => navigate(PAGES.EMPLOYEE_DASHBOARD)}>Employee View</button>
              <button className="btn-outline" style={{ flex: 1, padding: "9px", fontSize: 12 }} onClick={() => navigate(PAGES.ADMIN_DASHBOARD)}>Admin View</button>
            </div>
          </div>

          <p style={{ textAlign: "center", fontSize: 14, color: "#475569", marginTop: 24 }}>
            Don't have an account?{" "}
            <button className="nav-link" style={{ color: "#6366f1" }} onClick={() => navigate(PAGES.SIGNUP)}>Sign up free</button>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}