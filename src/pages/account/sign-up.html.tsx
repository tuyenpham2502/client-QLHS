//login page

import React, { useState } from 'react';
import { Input, Button } from 'antd';
import firebase, { auth } from "@/infrastructure/services/firebase";


const SignUpPage = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();


    const [user, setUser] = useState({
        userName: '',
        password: ''
    });

    const oncChangeUserName = (e: any) => {
        setUser({
            ...user,
            userName: e.target.value,
        })
    }

    const onChangePassword = (e: any) => {
        setUser({
            ...user,
            password: e.target.value,
        })
    }

    const handleSubmit = (event: any) => {
        auth.signInWithPopup(fbProvider)
    }

    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log(user);
        }
    })


    return (
        <div>
            <Input placeholder="User name"
                onChange={oncChangeUserName}
            />
            <Input placeholder="Password"
                onChange={onChangePassword}
            />
            <Button type="primary" onClick={handleSubmit}>Login</Button>
        </div>
    )

};

export default SignUpPage;



