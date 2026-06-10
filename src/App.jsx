import { useState } from "react";
import LandingPage from "./Landingpage";
import LoginPage from "./Loginpage";
import SignupPage from "./Signuppage";
import EmployeeDashboard from "./Employeedashboard";
import AdminDashboard from "./Admindashboard";
import { PAGES } from "./pageRoutes";
import "./styles.css";

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