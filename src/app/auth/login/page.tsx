import AuthLayout, { AuthLayoutProps } from "@/components/layouts/authLayout";
import LoginContent from "@/components/content/auth/login/loginContent";

export default function Page() {
  const authPageLayoutProps: AuthLayoutProps = {
    headerProps: {
      type: "login",
    },
    title: "Welcome Back",
    subtitle: "To sign in, please type in your email address",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <LoginContent />
    </div>
  );
}
