import { notifySuccess } from "@/infrastructure/common/components/controls/toast/toast-message";
import { auth } from "@/infrastructure/services/firebase";
import { NextRouter, useRouter } from "next/router";


export const forgetPassword = async (
        email:string,
        router: NextRouter,
        translator:any
    ) => {
    
    await auth.sendPasswordResetEmail(email).then(() => {
        notifySuccess(translator, "Email sent successfully");
        router.push("/account/sign-in.html");

    }).catch((error) => {
        console.log(error.code);
    });
};

