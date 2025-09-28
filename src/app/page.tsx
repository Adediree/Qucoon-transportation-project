import DashboardLayout from "../components/layouts/dashboardLayout";
import Page from "./auth/signup/page";
import LandingPage from "./screens/landing-page/page";

export const HomePage = () => {
  return (
    <DashboardLayout>
      <LandingPage />
    </DashboardLayout>
  );
};

export default HomePage;
