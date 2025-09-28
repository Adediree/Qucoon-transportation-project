import AuthLayout, {AuthLayoutProps} from "@/components/layouts/authLayout";
import ChangePasswordContent from "@/components/content/auth/changePassword/changePasswordContent";

export default function Page() {
    const authPageLayoutProps: AuthLayoutProps = {
        headerProps: {
            type: "resetPassword"
        },
        title: "Change Password",
    }
    return (
        <AuthLayout {...authPageLayoutProps}>
            <ChangePasswordContent/>
        </AuthLayout>
    )
}
