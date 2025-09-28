'use client'

import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {useOtp} from "@/utilities/context/otpContext";
import OtpLayout from "@/components/layouts/otpLayout";
import AuthLayout from "@/components/layouts/authLayout";

export default function OtpVerificationPage() {
    const {config} = useOtp()
    const router = useRouter()

    useEffect(() => {
        if (!config) {
            // Redirect if no config exists (user accessed directly)
            router.push('/')
        }
    }, [config, router])

    if (!config) {
        return <div>Loading...</div>
    }

    return (
        <AuthLayout title={"OTP Verification"}>
            <OtpLayout
                title={config.title}
                subtitle={config.subtitle}
                handleOnValidOtpEntered={config.onValidOtpEntered}
                handleResendOtp={config.onResend ? config.onResend : () => {
                }}
                numberOfInputs={config.numberOfInputs || 6}
            />
        </AuthLayout>
    )
}
