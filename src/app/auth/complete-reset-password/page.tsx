import AuthLayout, {AuthLayoutProps} from "@/components/layouts/authLayout";
import CompleteResetPasswordContent from "@/components/content/auth/completeResetPassword/completeResetPasswordContent";

export default function Page() {
    const authPageLayoutProps: AuthLayoutProps = {
        headerProps: {
            type: "resetPassword"
        },
        title: "Reset Password",
        subtitle: "Please create your new password"
    }

    return (
        <AuthLayout {...authPageLayoutProps}>
            <CompleteResetPasswordContent/>
        </AuthLayout>
    )
}
