"use client";
import "./Signupform.css";
import { BaseButton, BaseInput, BasePhoneNumberInput } from "qucoon-components";
import {
  InitiateEnrollmentRequest,
  initiateEnrollmentRequestInit,
} from "@/models/requests/authentication/initiateEnrollmentRequest";
import { AuthenticationValidation } from "@/models/validations/authenticationValidation";
import { useFormik } from "formik";
import { completeEnrollmentRequestInit } from "@/models/requests/authentication/completeEnrollmentRequest";
import {
  useCompleteEnrollmentMutation,
  useInitiateEnrollmentMutation,
  useResendOtpMutation,
} from "@/services/authenticationService";
import { useRouter } from "next/navigation";
import BaseToast from "@/components/ui/toast/BaseToast";
import { useOtp } from "@/utilities/context/otpContext";
import { BaseUtil } from "@/utilities/baseUtil";
import { RouteConstant } from "@/utilities/constants/routeConstant";

const InitiateSignupForm = (
  props: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
) => {
  const router = useRouter();
  const [initiateEnrollment, { isLoading }] = useInitiateEnrollmentMutation();
  const [completeEnrollment] = useCompleteEnrollmentMutation();
  const [resendOtp] = useResendOtpMutation();
  const { showOtp } = useOtp();

  const handleSignUp = async (values: typeof initialValues) => {
    try {
      const request: InitiateEnrollmentRequest = {
        ...initiateEnrollmentRequestInit,
        ...values,
      };

      const response = await initiateEnrollment(request).unwrap();
      if (BaseUtil.isApiResponseSuccessful(response)) {
        BaseToast({
          message:
            response?.responseMessage || "Enrollment initiated successfully!",
          type: "success",
        });
        showOtp({
          title: "Verify Your Email",
          subtitle: `We've sent a 6-digit code to ${request.userEmail}`,
          onValidOtpEntered: async (otp) => {
            const completeEnrollmentResponse = await completeEnrollment({
              otp,
              userEmail: request.userEmail,
            }).unwrap();
            if (BaseUtil.isApiResponseSuccessful(completeEnrollmentResponse)) {
              BaseToast({
                message: "Enrollment completed successfully!",
                type: "success",
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
            console.log("Otp resend");
            await resendOtp({ userEmail: values.userEmail });
          },
        });
      }
    } catch (err: any) {
      console.error("Enrollment initiation failed:", err);
    }
  };
  const initialValues = {
    ...initiateEnrollmentRequestInit,
    ...completeEnrollmentRequestInit,
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSignUp,
    validationSchema: AuthenticationValidation.initiateEnrollment,
  });

  return (
    <div className="signup-container">
      <main className="containerr head-flex">
        <div className="signup-texts">
          <p className="texts">Get started with us!</p>
        </div>
        <form className="input-flex">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <BaseInput
              // type="email"
              placeholder="Enter your email"
              label="Enter Email"
              labelStyle={{ color: "white" }}
              style={{ width: "300px" }}
            />
            <BaseInput
              // type="password"
              placeholder="Enter your password"
              label="Enter password"
              labelStyle={{ color: "white" }}
              style={{ width: "300px" }}
            />
          </div>
          <BaseButton
            text="Sign Up"
            style={{ backgroundColor: "#F79009", width: "300px" }}
            onClick={() => router.push(RouteConstant.screens.landingPage.path)}
          />
          <p className="texts">Or</p>
          <BaseButton
            text="Sign up with Google"
            textStyle={{ color: "white" }}
            style={{
              backgroundColor: "none",
              background: "none",
              width: "300px",
              border: "1px solid",
              borderColor: "#D0D5DD",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: "500",
                color: "white",
              }}
            >
              Already have an account?
            </p>
            <BaseButton
              text="Log in"
              textStyle={{ color: "#F79009" }}
              style={{
                backgroundColor: "none",
                background: "none",
                // width: "fit-content",
                padding: "0px",
                //  maxHeight: "40px",
                // border: "1px solid",
                // borderColor: "#D0D5DD",
              }}
              onClick={() => router.push(RouteConstant.auth.login.path)}
            />
          </div>
        </form>
        <p style={{ fontSize: "0.8rem", color: "white" }}>
          Qucoon. All rights reserved. © 2025
        </p>
      </main>
    </div>
  );
};

export default InitiateSignupForm;
