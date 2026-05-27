import Logo from "./Logo";
import { PAGES } from "./App";

export default function AuthLayout({ children, navigate }) {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0f1e", display: "flex", flexDirection: "column" }}>
      <div className="mesh-bg" />
      <div className="page-container" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "24px 5%" }}>
          <Logo onClick={() => navigate(PAGES.LANDING)} />
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 20px 60px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}