//login page

import React, { useEffect, useState } from 'react';
import styles from 'styles/pages/account/SignIn.module.css'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Input, Button, Row, Col, Checkbox } from 'antd';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import imageRightContent from 'assets/images/image-right-content-sign-in.png'
import iconGoogle from 'assets/icons/icon-google.png'
import iconFacebook from 'assets/icons/icon-facebook.png'
import { validateEmail } from '@/infrastructure/helpers/validate';
import { MessageError } from '@/infrastructure/common/components/controls/message-error';
import { validateInputPassword } from '@/infrastructure/helpers/validate';
import { getMyProfileAsync, loginWithEmailAsync } from '@/infrastructure/identity/account/effect/SignInEffect';
import LoggerService from '@/infrastructure/services/LoggerService';
import { BoldText, LinkText, NormalText } from '@/infrastructure/common/components/controls/text';
import SuccessResponse from '@/core/application/dto/common/responses/SuccessResponse';
import { setUserRole } from '@/infrastructure/helpers';
import LocalStorageService from '@/infrastructure/services/LocalStorageService';
import Constant from '@/core/application/common/Constants';
import { FullPageLoading } from '@/infrastructure/common/components/controls/loading';


const SignInPage = (context: any) => {
    const loggerService = new LoggerService();
    const localStorageService = new LocalStorageService();
    let storage = localStorageService.readStorage(Constant.API_TOKEN_STORAGE);
    const [loading, setLoading] = useState<boolean>(false);
    const { t } = useTranslation('common');
    const router = useRouter();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const [errorEmail, setErrorEmail] = useState({
        isError: false,
        message: ''
    });

    const [errorPassword, setErrorPassword] = useState({
        isError: false,
        message: ''
    });

    useEffect(() => {
        if (storage.logged_in) {
            router.push('/');
        }
    }, [storage, router]);

    const onChangeEmail = (e: any) => {
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

    const onChangeCheckbox = (e: any) => {
        setIsChecked(e.target.checked);
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

    const handleSubmit = async (event: any) => {
        if (isValidateData()) {
            let res = await loginWithEmailAsync(t, user.email, user.password, router, loggerService, context.user, setLoading);
            if (res?.status == 200) {
                await getMyProfileAsync(t, router, (res as SuccessResponse)?.data?.loginUser, loggerService, setUserRole, setLoading);
            }
        }
    };

    console.log("loading", loading);

    return (
        <>
            <NextSeo title={'Sign In'} />
            <Row className={styles.content_sign_in}>
                <Col span={12} className={styles.left_content} >
                    <div className={styles.sign_in_wrapper}>
                        <div className={styles.form_sign_in}>
                            <div className={styles.title_sign_in_wrapper}>
                                <BoldText className={styles.title_sign_in}>Login to your Account</BoldText>
                                <NormalText className={styles.title_sign_in_description}>Welcome back! Select method to log in:</NormalText>
                            </div>
                            <Row justify={"space-between"} className={styles.sign_in_withO_wrapper}>
                                <Col>
                                    <div className={styles.sign_in_withO}>
                                        <Image src={iconGoogle} alt='icon-google' />
                                        <NormalText className={styles.sign_in_withO_text}>Google</NormalText>
                                    </div>
                                </Col>
                                <Col>
                                    <div className={styles.sign_in_withO}>
                                        <Image src={iconFacebook} alt='icon-facebook' />
                                        <NormalText className={styles.sign_in_withO_text}>Facebook</NormalText>
                                    </div>
                                </Col>
                            </Row>
                            <Row align={"middle"}>
                                <Col className={styles.line} span={6} />
                                <Col span={12} className={styles.sign_in_option_about}> or continue with email</Col>
                                <Col className={styles.line} span={6} />

                            </Row>
                            <Row className={styles.sign_in_input_wrapper + " auth-input"} >
                                <Input className={styles.sign_in_input} placeholder="Email" onChange={onChangeEmail} onBlur={onBlurEmail} onPressEnter={handleSubmit} value={user.email} />
                                <MessageError isError={errorEmail.isError} message={errorEmail.message} />
                            </Row>
                            <Row className={styles.sign_in_input_wrapper + " auth-input"}>
                                <Input.Password className={styles.sign_in_input} placeholder="Password" onChange={onChangePassword} onBlur={onBlurPassword} onPressEnter={handleSubmit} value={user.password} />
                                <MessageError isError={errorPassword.isError} message={errorPassword.message} />
                            </Row>
                            <Row justify={"space-between"}>
                                <Checkbox onChange={onChangeCheckbox} value={isChecked} className={styles.checkbox_sign_up}>Remember mer</Checkbox>
                                <LinkText href="/account/forgot-password.html"> Forgot password?</LinkText  >
                            </Row>
                            <Row >
                                <Button className={styles.button_sign_in} type="primary" onClick={handleSubmit}>LOG IN</Button>
                            </Row>
                            <Row justify={"center"}>
                                <NormalText >
                                    {"Don't have account?"} <LinkText href="/account/sign-up.html">Create an account</LinkText>
                                </NormalText>
                            </Row>
                        </div>

                    </div>
                </Col>
                <Col span={12} className={styles.right_content}>
                    <Image src={imageRightContent} alt='image-right-content' />
                    <div>
                        <Row justify={"center"}>
                            <BoldText className={styles.sign_in_about}>Connect with any device</BoldText>
                        </Row>
                        <Row justify={"center"}>
                            <NormalText className={styles.sign_in_about_description}>Everything you need is an internet connection.</NormalText>
                        </Row>
                    </div>
                </Col>
                <FullPageLoading isLoading={loading} />
            </Row>
        </>
    )

};

export default SignInPage;



