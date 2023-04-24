import React,{useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "@/infrastructure/services/firebase";
import { useRouter } from 'next/router';
const DashBoardPage = (context: any) => {
    const router = useRouter();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log("uid", uid)
            } else {
                router.push('/account/sign-in.html');
                console.log("user is logged out")
            }
        });

    }, [])


    return <div>Dashbord</div>;
    };

export default DashBoardPage;
