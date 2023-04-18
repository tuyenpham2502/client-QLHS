//login page

import React, { useState } from 'react';
import styles from 'styles/pages/account/sign-in.module.css'
import { Input, Button, Row, Col } from 'antd';
import { useRouter } from 'next/router';
import { auth } from '@/infrastructure/services/firebase';
import { signInWithFacebook } from 'src/infrastructure/identity/account/SignInWithFaceBook';
import { signInWithEmail } from '@/infrastructure/identity/account/SignInWithEmail';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';


const SignInPage = () => {
    const { t } = useTranslation('common');
    const router = useRouter();
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
        signInWithEmail(user.userName, user.password, router,t)
    }

    return (
        <Row className={styles.content_sign_in}>
            <Col span={12}>
            </Col>
            <Col span={12} className={styles.right_content} >
                <div className={styles.sign_in_wrapper}>
                    <div className={styles.form_sign_in}>
                        <Row className={styles.sign_in_input}>
                        <Input placeholder="Enter your account" onChange={oncChangeUserName} />
                        </Row>
                        <Row className={styles.sign_in_input}>
                        <Input.Password placeholder="Enter your password" onChange={onChangePassword} />
                        </Row>
                        <Row >
                            <Link style={{
                                textDecoration: 'underline',
                                color: '#14238A',
                            }} href="/account/forgot-password">Forgot your password?</Link>
                        </Row>
                        <Row >
                            <Button className={styles.button_sign_in} type="primary" onClick={handleSubmit}>SIGN IN</Button>
                        </Row>
                    </div>

                </div>
            </Col>
        </Row>
    )

};

export default SignInPage;



