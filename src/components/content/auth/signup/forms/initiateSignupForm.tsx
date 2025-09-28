"use client"
import {BaseButton, BaseInput, BasePhoneNumberInput} from "qore-components";
import {
    InitiateEnrollmentRequest,
    initiateEnrollmentRequestInit
} from "@/models/requests/authentication/initiateEnrollmentRequest";
import {AuthenticationValidation} from "@/models/validations/authenticationValidation";
import {useFormik} from "formik";
import {completeEnrollmentRequestInit} from "@/models/requests/authentication/completeEnrollmentRequest";
import {
    useCompleteEnrollmentMutation,
    useInitiateEnrollmentMutation,
    useResendOtpMutation
} from "@/services/authenticationService";
import {useRouter} from "next/navigation";
import BaseToast from "@/components/ui/toast/BaseToast";
import {useOtp} from "@/utilities/context/otpContext";
import {BaseUtil} from "@/utilities/baseUtil";
import {RouteConstant} from "@/utilities/constants/routeConstant";

const InitiateSignupForm = (props: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>) => {
    const router = useRouter();
    const [initiateEnrollment, {isLoading}] = useInitiateEnrollmentMutation();
    const [completeEnrollment] = useCompleteEnrollmentMutation();
    const [resendOtp] = useResendOtpMutation();
    const {showOtp} = useOtp()

    const handleSignUp = async (values: typeof initialValues) => {
        try {
            const request: InitiateEnrollmentRequest = {
                ...initiateEnrollmentRequestInit,
                ...values,
            };

            const response = await initiateEnrollment(request).unwrap();
            if (BaseUtil.isApiResponseSuccessful(response)) {
                BaseToast({
                    message: response?.responseMessage || "Enrollment initiated successfully!",
                    type: "success"
                });
                showOtp({
                    title: "Verify Your Email",
                    subtitle: `We've sent a 6-digit code to ${request.userEmail}`,
                    onValidOtpEntered: async (otp) => {
                        const completeEnrollmentResponse = await completeEnrollment({
                            otp,
                            userEmail: request.userEmail
                        }).unwrap();
                        if (BaseUtil.isApiResponseSuccessful(completeEnrollmentResponse)) {
                            BaseToast({
                                message: "Enrollment completed successfully!",
                                type: "success"
                            });
                            router.push(RouteConstant.auth.login.path);
                        }
                        // Complete signup with OTP
                        // dispatch(authStore.mutation.setCompleteEnrollmentFlowPayload({
                        //     ...authState?.completeEnrollmentFlowPayload, ...request,
                        //     otp: otp
                        // }))
                        // router.push(RouteConstant.auth.completeSignup.path)
                    },
                    onResend: async () => {
                        console.log("Otp resend")
                        await resendOtp({userEmail: values.userEmail})
                    }
                })
            }

        } catch (err: any) {
            console.error("Enrollment initiation failed:", err);
        }
    };
    const initialValues = {...initiateEnrollmentRequestInit, ...completeEnrollmentRequestInit};
    const formik = useFormik({
        initialValues,
        onSubmit: handleSignUp,
        validationSchema: AuthenticationValidation.initiateEnrollment,
    })

    return (
        <form className={"form"}  {...props}>
            <div className={"form-input-container"}>
                <div className={"form-input-flex-group"}>
                    <BaseInput
                        name={"userFirstname"}
                        inputProps={{type: "text", placeholder: "First Name"}}
                        formik={formik}
                    />
                    <BaseInput
                        name={"userLastname"}
                        inputProps={{type: "text", placeholder: "Last Name"}}
                        formik={formik}
                    />
                </div>
                <BaseInput
                    name={"userEmail"}
                    inputProps={{type: "email", placeholder: "Email address"}}
                    formik={formik}
                />
                <BasePhoneNumberInput formik={formik} selectInputName={"userCountryCode"} inputName={"userPhone"}
                                      inputPlaceholder={"Phone Number"} label={"Business Phone Number"}/>

                <BaseInput
                    name={"userPassword"}
                    inputProps={{type: "password", placeholder: "Password"}}
                    formik={formik}
                />
            </div>
            <div className={"form-input-container"}>
                <BaseButton text={"Continue"} onClick={() => formik.handleSubmit()} isLoading={isLoading}/>
            </div>
        </form>

    )
}

export default InitiateSignupForm
