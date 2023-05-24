//login page

import React, { useState } from 'react';
import styles from 'styles/pages/account/SignIn.module.css'
import { useTranslation } from 'react-i18next';
import { Input, Button, Row, Col } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { validateEmail } from '@/infrastructure/helpers/validate';
import { MessageError } from '@/infrastructure/common/components/controls/message-error';
import { validateInputPassword } from '@/infrastructure/helpers/validate';


const SignInPage = () => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [errorEmail, setErrorEmail] = useState({
        isError: false,
        message: ''
    });

    const [errorPassword, setErrorPassword] = useState({
        isError: false,
        message: ''
    });

    const oncChangeUserName = (e: any) => {
        setUser({
            ...user,
            email: e.target.value,
        })
    }

    const onChangePassword = (e: any) => {
        setUser({
            ...user,
            password: e.target.value,
        })
    }

    const isValidateData = () => {
        onBlurEmail();
        onBlurPassword();
        let checkEmail = validateEmail(user.email);
        let checkPassword = validateInputPassword(user.password);
        if (checkEmail && checkPassword) {
            return true;
        }
        return false;
    }

    const validateFields = (isCheck: boolean, setError: { (value: React.SetStateAction<{ isError: boolean; message: string; }>): void; (arg0: any): void; }, error: { isError: boolean; message: string; }, message: string) => {
        setError({
            ...error,
            isError: isCheck,
            message: message,
        });
    };

    const onBlurEmail = () => {
        let checkEmail = validateEmail(user.email);
        validateFields(!checkEmail, setErrorEmail, errorEmail, !checkEmail ? user.email ? "Email không hợp lệ" : "Vui lòng nhập Email" : "");
    }

    const onBlurPassword = () => {
        let checkPassword = validateInputPassword(user.password);
        validateFields(!checkPassword, setErrorPassword, errorPassword, !checkPassword ? user.password ? "Mật khẩu không hợp lệ" : "Vui lòng nhập mật khẩu" : "");
    }

    return (
        <>
            <NextSeo title={'Sign In'} />
            <Row className={styles.content_sign_in}>
                <Col span={12}>
                </Col>
                <Col span={12} className={styles.right_content} >
                    <div className={styles.sign_in_wrapper}>
                        <div className={styles.form_sign_in}>
                            <Row className={styles.sign_in_input}>
                                <Input placeholder="Nhập email" onChange={oncChangeUserName} onBlur={onBlurEmail} onPressEnter={handleSubmit} />
                                <MessageError isError={errorEmail.isError} message={errorEmail.message} />
                            </Row>
                            <Row className={styles.sign_in_input}>
                                <Input.Password placeholder="Nhập mật khẩu" onChange={onChangePassword} onBlur={onBlurPassword} onPressEnter={handleSubmit} />
                                <MessageError isError={errorPassword.isError} message={errorPassword.message} />
                            </Row>
                            <Row >
                                <Col span={20}>
                                    <Link style={{
                                        textDecoration: 'underline',
                                        color: '#14238A',
                                    }} 
                                    href="/account/forgot-password.html">Quên mật khẩu</Link>
                                </Col>
                                <Col>
                                    <Link style={{
                                        textDecoration: 'underline',
                                        color: '#14238A',
                                    }} 
                                    href={"/account/sign-up.html"}>Đăng kí</Link>
                                </Col>
                            </Row>
                            <Row >
                                <Button className={styles.button_sign_in} type="primary" >Đăng nhập</Button>
                            </Row>
                        </div>

                    </div>
                </Col>
            </Row>
        </>
    )

};

export default SignInPage;



