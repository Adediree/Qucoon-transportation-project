"use client";
import {RouteConstant} from "@/utilities/constants/routeConstant";
import {useSelector} from "react-redux";
import {useFormik} from "formik";
import {BaseButton, BaseInput} from "qore-components";
import {RootState} from "@/stores";
import {AuthenticationValidation} from "@/models/validations/authenticationValidation";
import {completePasswordResetRequestInit} from "@/models/requests/authentication/completePasswordResetRequest";
import {useCompletePasswordResetMutation} from "@/services/authenticationService";
import {BaseUtil} from "@/utilities/baseUtil";
import {useRouter} from "next/navigation";
import BaseToast from "@/components/ui/toast/BaseToast";


const CompleteResetPasswordForm = (props: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>) => {
    const router = useRouter();
    const authState = useSelector((state: RootState) => state.auth);
    const initialValues = {...completePasswordResetRequestInit, ...authState?.completePasswordResetFlowPayload};
    const [completePasswordReset] = useCompletePasswordResetMutation();

    const handleSubmit = async () => {
        const request = {...formik.values};
        const response = await completePasswordReset(request).unwrap();
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
        validationSchema: AuthenticationValidation.completePasswordReset,
    })

    return (
        <form className={"form"} {...props}>
            <div className={"form-input-container"}>
                <BaseInput
                    name={"userPassword"}
                    formik={formik}
                    inputProps={{
                        type: "password", placeholder: "Password",
                    }}
                />
            </div>
            <div className={"form-input-container"}>
                <BaseButton text={"Continue"} isLoading={authState?.loading} onClick={() => formik.handleSubmit()}/>
            </div>
        </form>
    )
}

export default CompleteResetPasswordForm
