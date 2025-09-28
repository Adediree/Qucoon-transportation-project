import AuthLayout, {AuthLayoutProps} from "@/components/layouts/authLayout";

export default function Page() {
    const authPageLayoutProps: AuthLayoutProps = {
        headerProps: {
            type: "resetPassword"
        },
        title: "Complete sign up",
    }


    return (
        <AuthLayout {...authPageLayoutProps}>

        </AuthLayout>
    )
}
