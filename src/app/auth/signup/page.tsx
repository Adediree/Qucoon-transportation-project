import AuthLayout, {AuthLayoutProps} from "@/components/layouts/authLayout";
import SignupContent from "@/components/content/auth/signup/signupContent";

export default function Page() {
    const authPageLayoutProps: AuthLayoutProps = {
        headerProps: {
            type: "signup"
        },
        title: "Sign up",
        subtitle: "To sign up, please type in your email address."
    }

    return (
        <AuthLayout {...authPageLayoutProps}>
            <SignupContent/>
        </AuthLayout>
    )
}
