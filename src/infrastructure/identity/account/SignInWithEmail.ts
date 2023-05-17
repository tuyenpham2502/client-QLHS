import { NextRouter } from "next/router";
import { notifyError, notifySuccess } from "@/infrastructure/common/components/controls/toast/toast-message";
import { AuthErrors } from "@/infrastructure/helpers";
import firebase, { auth } from "@/infrastructure/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { profileState } from "@/core/application/common/atoms/Identity/profile";
export const signInWithEmail = async (
    email:string,
    password:string,
    router:NextRouter,
    translator:any
) => {
    await signInWithEmailAndPassword(auth, email, password).then((result) => {
        console.log("result", result);
        router.push("/");
        notifySuccess(translator, "Sign in successfully");
    }
    ).catch((error) => {
        console.log(error.code);
        notifyError(translator, AuthErrors(error.code));
    }
    );
}
