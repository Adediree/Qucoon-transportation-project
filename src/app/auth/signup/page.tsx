import AuthLayout, { AuthLayoutProps } from "@/components/layouts/authLayout";
import SignupContent from "@/components/content/auth/signup/signupContent";

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
      <SignupContent />
    </div>
  );
}
