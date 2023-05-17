import { NextRouter } from "next/router";
import { notifyError, notifySuccess } from "@/infrastructure/common/components/controls/toast/toast-message";
import { AuthErrors } from "@/infrastructure/helpers";
import { addDoc, collection } from "firebase/firestore";
import firebase, { auth, db } from "@/infrastructure/services/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { profileState } from "@/core/application/common/atoms/Identity/profile";
export const SignUpWithEmail = async (
    email: string,
    password: string,
    router: NextRouter,
    translator: any
) => {
    await createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            addDoc(collection(db, "users"), {
                uid: result.user.uid,
                email: result.user.email,
                displayName: result.user.displayName,
                photoURL: result.user.photoURL,
                emailVerified: result.user.emailVerified,
                phoneNumber: result.user.phoneNumber,
            });
            router.push("/");
            notifySuccess(translator, "Sign up successfully");

        }).catch((error) => {
            console.log(error.code);
            notifyError(translator, AuthErrors(error.code));
        }
        );
}
