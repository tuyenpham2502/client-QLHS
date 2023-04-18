import { notifyError } from "@/infrastructure/common/components/controls/toast/toast-message";
import { AuthErrors } from "@/infrastructure/helpers";
import firebase, { auth } from "@/infrastructure/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextRouter } from "next/router";

export const signInWithEmail = async (
    email:string,
    password:string,
    router:NextRouter,
    translator:any
) => {
    await signInWithEmailAndPassword(auth, email, password).then((result) => {
        router.push("/");
        console.log(result);
    }
    ).catch((error) => {
        console.log(error.code);
        notifyError(translator, AuthErrors(error.code));
    }
    );
}
