//login page

import React, { useState } from 'react';
import styles from 'styles/pages/account/SignIn.module.css'
import { Input, Button, Row, Col } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';
import { auth } from '@/infrastructure/services/firebase';
import { validateEmail } from '@/infrastructure/helpers/validate';
import { MessageError } from '@/infrastructure/common/components/controls/message-error';
import { validateInputPassword } from '@/infrastructure/helpers/validate';
import { SignUpWithEmail } from '@/infrastructure/identity/account/SignUpWithEmail';


const SignInPage = () => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const [user, setUser] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errorEmail, setErrorEmail] = useState({
        isError: false,
        message: ''
    });

    const [errorPassword, setErrorPassword] = useState({
        isError: false,
        message: ''
    });

    const [errorConfirmPassword, setErrorConfirmPassword] = useState({
        isError: false,
        message: ''
    });

    const oncChangeUserName = (e: any) => {
        setUser({
            ...user,
            email: e.target.value,
        })
    };

    const onChangePassword = (e: any) => {
        setUser({
            ...user,
            password: e.target.value,
        })
    };

    const onChangeConfirmPassword = (e: any) => {
        setUser({
            ...user,
            confirmPassword: e.target.value,
        })
    };

    const isValidateData = () => {
        onBlurEmail();
        onBlurPassword();
        onBlurConfirmPassword();
        let checkEmail = validateEmail(user.email);
        let checkPassword = validateInputPassword(user.password);
        let checkConfirmPassword = validateInputPassword(user.confirmPassword);
        let comparePassword = user.password == user.confirmPassword ? true : false;
        if (checkEmail && checkPassword && checkConfirmPassword && comparePassword) {
            return true;
        }
        return false;
    };

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
    };

    const onBlurPassword = () => {
        let checkPassword = validateInputPassword(user.password);
        validateFields(!checkPassword, setErrorPassword, errorPassword, !checkPassword ?  "Mật khẩu phải từ 8-50 ký tự, gồm chữ hoa, chữ thường, số, kí tự đặc biệt" : "");
    };

    const onBlurConfirmPassword = () => {
        let checkPassword = validateInputPassword(user.confirmPassword);
        let checkConfirmPassword = user.password !== user.confirmPassword ? true : false;
        validateFields(!checkConfirmPassword || !checkPassword, setErrorConfirmPassword, errorConfirmPassword, !checkPassword ? !checkConfirmPassword ? "Mật khẩu phải từ 8-50 ký tự, gồm chữ hoa, chữ thường, số, kí tự đặc biệt": "Mật khẩu xác nhận không đúng" :"");
    };
    const handleSubmit = (event: any) => {
        
        if (isValidateData()) {
            SignUpWithEmail(user.email, user.password, router, t)
        }
    };

    return (
        <>
            <NextSeo title={'Sign Up'} />
            <Row className={styles.content_sign_in}>
                <Col span={12}>
                </Col>
                <Col span={12} className={styles.right_content} >
                    <div className={styles.sign_in_wrapper}>
                        <div className={styles.form_sign_in}>
                            <Row className={styles.sign_in_input}>
                                <Input placeholder="Nhập email" onChange={oncChangeUserName} onBlur={onBlurEmail} onPressEnter={handleSubmit} value={user.email} />
                                <MessageError isError={errorEmail.isError} message={errorEmail.message} />
                            </Row>
                            <Row className={styles.sign_in_input}>
                                <Input.Password placeholder="Nhập mật khẩu" onChange={onChangePassword} onBlur={onBlurPassword} onPressEnter={handleSubmit} value={user.password} />
                                <MessageError isError={errorPassword.isError} message={errorPassword.message} />
                            </Row>
                            <Row className={styles.sign_in_input}>
                                <Input.Password placeholder="Xác nhận mật khẩu" onChange={onChangeConfirmPassword} onBlur={onBlurConfirmPassword} onPressEnter={handleSubmit} value={user.confirmPassword} />
                                <MessageError isError={errorConfirmPassword.isError} message={errorConfirmPassword.message} />
                            </Row>
                            <Row >
                                <Link style={{
                                    textDecoration: 'underline',
                                    color: '#14238A',
                                }} href="/account/sign-in.html">Đã có tài khoản</Link>
                            </Row>
                            <Row >
                                <Button className={styles.button_sign_in} type="primary" onClick={handleSubmit}>Đăng kí</Button>
                            </Row>
                        </div>

                    </div>
                </Col>
            </Row>
        </>
    )

};

export default SignInPage;



