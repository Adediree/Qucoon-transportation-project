"use client";
import {RouteConstant} from "@/utilities/constants/routeConstant";
import {useFormik} from "formik";
import {BaseButton, BaseInput} from "qore-components";
import {AuthenticationValidation} from "@/models/validations/authenticationValidation";
import {useChangePasswordMutation} from "@/services/authenticationService";
import {BaseUtil} from "@/utilities/baseUtil";
import {useRouter} from "next/navigation";
import BaseToast from "@/components/ui/toast/BaseToast";
import {changePasswordRequestInit} from "@/models/requests/authentication/changePasswordRequest";


const ChangePasswordForm = (props: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>) => {
    const router = useRouter();
    const initialValues = {...changePasswordRequestInit};
    const [changePassword, {isLoading}] = useChangePasswordMutation();

    const handleSubmit = async () => {
        const request = {...formik.values};
        const response = await changePassword(request).unwrap();
        if (BaseUtil.isApiResponseSuccessful(response)) {
            BaseToast({
                message: response?.responseMessage,
                type: "success"
            });
            router.push(RouteConstant.auth.login.path)
        }

    }
    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: AuthenticationValidation.changePassword,
    })

    return (
        <form className={"form"} {...props}>
            <div className={"form-input-container"}>
                <BaseInput
                    name={"oldPassword"}
                    formik={formik}
                    label={"Enter Old Password"}
                    inputProps={{
                        type: "password", placeholder: "Enter Old Password",
                    }}
                />
                <BaseInput
                    name={"userPassword"}
                    formik={formik}
                    label={"Enter Password"}
                    inputProps={{
                        type: "password", placeholder: "Enter Password",
                    }}
                />
                <BaseInput
                    name={"userEmail"}
                    formik={formik}
                    label={"Enter Email"}
                    inputProps={{
                        type: "email", placeholder: "Enter Email",
                    }}
                />
            </div>
            <div className={"form-input-container"}>
                <BaseButton text={"Continue"} isLoading={isLoading} onClick={() => formik.handleSubmit()}/>
            </div>
        </form>
    )
}

export default ChangePasswordForm
