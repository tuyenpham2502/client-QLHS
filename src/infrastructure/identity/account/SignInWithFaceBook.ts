import firebase, { auth } from "@/infrastructure/services/firebase";
import { NextRouter } from "next/router";

export const signInWithFacebook = async (
    router:NextRouter
) => {
    const provider = new firebase.auth.FacebookAuthProvider();
    await auth.signInWithPopup(provider).then((result) => {
        router.push("/");
    }).catch((error) => {
        console.log(error.code);
    });
};
