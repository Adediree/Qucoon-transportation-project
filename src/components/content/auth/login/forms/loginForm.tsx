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
  const [login, { isLoading }] = useLoginMutation();

  const handleForgotPassword = () => {
    router.push(RouteConstant.auth.resetPassword.path);
  };

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      const loginRequest: LoginRequest = { ...values };
      const response = await login(loginRequest).unwrap();

      if (BaseUtil.isApiResponseSuccessful(response)) {
        BaseToast({ type: "success", message: response.responseMessage });
        router.push(RouteConstant.dashboard.issue.path);
      }
    } catch (error: any) {
      BaseToast({
        type: "error",
        message: error?.data?.responseMessage || "Login failed. Try again.",
      });
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

        <form className="form-flex" onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <BaseInput
              name="userEmail"
              placeholder="Enter your email"
              label="Email"
              labelStyle={{ color: "white", fontFamily: "Poppins" }}
              style={{ width: "300px" }}
              value={formik.values.userEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p
              className="input-error"
              style={{
                textAlign: "left",
                fontSize: "0.75rem",
                color: "#ff6b6b",
              }}
            >
              {formik.errors.userEmail}
            </p>
          </div>

          {/* Password field */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              gap: "6px",
            }}
          >
            <BaseInput
              name="userPassword"
              // type="password"
              placeholder="Enter your password"
              label="Password"
              labelStyle={{ color: "white", fontFamily: "Poppins" }}
              value={formik.values.userPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.userPassword && formik.errors.userPassword && (
              <p
                className="input-error"
                style={{
                  textAlign: "left",
                  fontSize: "0.75rem",
                  color: "#ff6b6b",
                }}
              >
                {formik.errors.userPassword}
              </p>
            )}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={handleForgotPassword}
              >
                Forgot password
              </p>
            </div>
          </div>

          {/* Submit button */}
          <BaseButton
            text="Login"
            textStyle={{ fontFamily: "Poppins" }}
            style={{ backgroundColor: "#F79009", width: "300px" }}
            type="submit"
          />

          {/* Sign-up prompt */}
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
              textStyle={{ color: "#F79009", fontFamily: "Poppins" }}
              onClick={() => router.push(RouteConstant.auth.signup.path)}
              style={{
                backgroundColor: "none",
                background: "none",
                padding: "0px",
              }}
            />
          </div>
        </form>

        <p style={{ fontSize: "0.8rem", color: "white" }}>
          Qucoon. All rights reserved. © 2025
        </p>
      </main>
    </div>
  );
};

export default LoginForm;
