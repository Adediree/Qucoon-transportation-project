"use client";

import "./Loginform.css";
import { useFormik } from "formik";
import { BaseButton, BaseInput } from "qucoon-components";
import {
  LoginRequest,
  loginRequestInit,
} from "@/models/requests/authentication/loginRequest";
import { RouteConstant } from "@/utilities/constants/routeConstant";
import BaseToast from "@/components/ui/toast/BaseToast";
import { AuthenticationValidation } from "@/models/validations/authenticationValidation";
import { useLoginMutation } from "@/services/authenticationService";
import { BaseUtil } from "@/utilities/baseUtil";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/layouts/Navbar";

const LoginForm = (
  props: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
) => {
  const router = useRouter();
  // const authState = useSelector((state: RootState) => state.auth);
  // const dispatch: AppDispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleForgotPassword = () => {
    router.push(RouteConstant.auth.resetPassword.path);
    // navigate(RouteConstant.authStore.resetPasswordRequest.path);
  };

  const handleSubmit = async () => {
    const loginRequest: LoginRequest = { ...formik.values };
    const response = await login(loginRequest).unwrap();
    if (BaseUtil.isApiResponseSuccessful(response)) {
      BaseToast({ type: "success", message: response.responseMessage });
      // dispatch(authStore.mutation.setLoginFlowPayload({...authState?.loginFlowPayload, ...loginRequest}))
      // router.push(RouteConstant.authStore.loginOtp.path)
      router.push(RouteConstant.dashboard.issue.path);
    }
  };
  const initialValues = { ...loginRequestInit };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: AuthenticationValidation.login,
  });

  return (
    <div className="login-container">
      <main className="container main-flex">
        <div className="login-texts">
          <p className="texts">Welcome back! Please enter your details.</p>
        </div>
        <form className="form-flex">
          <BaseInput
            // type="email"
            placeholder="Enter your email"
            label="Enter email"
            labelStyle={{ color: "white" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <BaseInput
              // type="password"
              placeholder="Enter your password"
              label="Enter password"
              labelStyle={{ color: "white" }}
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Forgot password
              </p>
            </div>
          </div>
          <BaseButton
            text="Login"
            style={{ backgroundColor: "#F79009" }}
            onClick={() => router.push(RouteConstant.screens.landingPage.path)}
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
              Don't have an account?
            </p>
            <BaseButton
              text="Sign up"
              textStyle={{ color: "#F79009" }}
              onClick={() => router.push(RouteConstant.auth.signup.path)}
              style={{
                backgroundColor: "none",
                background: "none",
                // width: "fit-content",
                padding: "0px",
                //  maxHeight: "40px",
                // border: "1px solid",
                // borderColor: "#D0D5DD",
              }}
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

export default LoginForm;
