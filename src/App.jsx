import { useState } from "react";
import LandingPage from "./Landingpage";
import LoginPage from "./Loginpage";
import SignupPage from "./Signuppage";
import EmployeeDashboard from "./Employeedashboard";
import AdminDashboard from "./Admindashboard";
import "./styles.css";

export const PAGES = {
  LANDING: "landing",
  LOGIN: "login",
  SIGNUP: "signup",
  EMPLOYEE_DASHBOARD: "employee_dashboard",
  ADMIN_DASHBOARD: "admin_dashboard",
};

export default function App() {
  const [page, setPage] = useState(PAGES.LANDING);
  return (
    <>
      {page === PAGES.LANDING && <LandingPage navigate={setPage} />}
      {page === PAGES.LOGIN && <LoginPage navigate={setPage} />}
      {page === PAGES.SIGNUP && <SignupPage navigate={setPage} />}
      {page === PAGES.EMPLOYEE_DASHBOARD && <EmployeeDashboard navigate={setPage} />}
      {page === PAGES.ADMIN_DASHBOARD && <AdminDashboard navigate={setPage} />}
    </>
  );
}