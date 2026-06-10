import { useState } from "react";
import AuthLayout from "./AuthLayout";
import { PAGES } from "./pageRoutes";

export default function SignupPage({ navigate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
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
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="19" y1="8" x2="19" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="16" y1="11" x2="22" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h1 className="font-display" style={{ fontSize: 26, fontWeight: 700, marginBottom: 8 }}>Create account</h1>
            <p style={{ color: "#64748b", fontSize: 14 }}>Join your company on SeyonTech</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500, display: "block", marginBottom: 8 }}>Full name</label>
              <input className="input-field" type="text" placeholder="Karthik Rajan" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500, display: "block", marginBottom: 8 }}>Work email</label>
              <input className="input-field" type="email" placeholder="karthik@company.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500, display: "block", marginBottom: 8 }}>Password</label>
              <input className="input-field" type="password" placeholder="Create a strong password" value={pass} onChange={e => setPass(e.target.value)} />
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <input type="checkbox" id="terms" style={{ marginTop: 2, accentColor: "#6366f1", cursor: "pointer" }} />
              <label htmlFor="terms" style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, cursor: "pointer" }}>
                I agree to the <span style={{ color: "#6366f1" }}>Terms of Service</span> and <span style={{ color: "#6366f1" }}>Privacy Policy</span>
              </label>
            </div>
            <button className="btn-primary" style={{ width: "100%", padding: "14px", marginTop: 4 }} onClick={handleSignup}>
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </div>

          <p style={{ textAlign: "center", fontSize: 14, color: "#475569", marginTop: 24 }}>
            Already have an account?{" "}
            <button className="nav-link" style={{ color: "#6366f1" }} onClick={() => navigate(PAGES.LOGIN)}>Sign in</button>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}