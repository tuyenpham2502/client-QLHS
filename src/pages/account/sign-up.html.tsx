//login page

import React, { useState } from 'react';
import { Input, Button, Row, Col, Checkbox } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';
import styles from 'styles/pages/account/SignUp.module.css'
import imageRightContent from "assets/images/image-right-content-sign-up.png"
import { validateEmail, validateName, validateInputPassword } from '@/infrastructure/helpers/validate';
import { MessageError } from '@/infrastructure/common/components/controls/message-error';
import LoggerService from '@/infrastructure/services/LoggerService';
import { signUpWithEmailAsync } from '@/infrastructure/identity/account/effect/SignUpEffect';
import { BoldText, LinkText, NormalText } from '@/infrastructure/common/components/controls/text';
import { FullPageLoading } from '@/infrastructure/common/components/controls/loading';



const SignInPage = (context: any) => {
    const loggerService = new LoggerService();
    const { t } = useTranslation('common');
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const [errorName, setErrorName] = useState({
        isError: false,
        message: ''
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

    const [errorCheckbox, setErrorCheckbox] = useState({
        isError: false,
        message: ''
    });

    const onChangeName = (e: any) => {
        setUser({
            ...user,
            name: e.target.value,
        })
    };

    const onChangeEmail = (e: any) => {
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


    const onCopyPassword = (e: any) => {
        e.preventDefault();
        return false;
    };

    const onChangeCheckbox = (e: any) => {
        setIsChecked(e.target.checked);
    };

    const isValidateData = () => {
        onBlurName();
        onBlurEmail();
        onBlurPassword();
        onBlurConfirmPassword();
        onBlurCheckbox();
        let checkName = user.email ? true : false;
        let checkEmail = validateEmail(user.email);
        let checkPassword = validateInputPassword(user.password);
        let checkConfirmPassword = validateInputPassword(user.confirmPassword);
        let comparePassword = user.password == user.confirmPassword ? true : false;
        let checkCheckbox = isChecked;
        if (checkName && checkEmail && checkPassword && checkConfirmPassword && comparePassword && checkCheckbox) {
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

    const onBlurName = () => {
        let checkName = validateName(user.name);
        validateFields(!checkName, setErrorName, errorName, !checkName ? "Please enter your name" : "");
    };

    const onBlurEmail = () => {
        let checkEmail = validateEmail(user.email);
        validateFields(!checkEmail, setErrorEmail, errorEmail, !checkEmail ? user.email ? "Invalid email" : "Please enter your email" : "");
    };

    const onBlurPassword = () => {
        let checkPassword = validateInputPassword(user.password);
        validateFields(!checkPassword, setErrorPassword, errorPassword, !checkPassword ? "Password must be from 8-50 characters, including uppercase, lowercase, numbers, special charactersPassword must be 8-50 characters, including uppercase, lowercase, numbers, special characters" : "");
    };

    const onBlurConfirmPassword = () => {
        let checkConfirmPassword = user.password == user.confirmPassword ? true : false;
        validateFields(!checkConfirmPassword, setErrorConfirmPassword, errorConfirmPassword, !checkConfirmPassword ? "Wrong confirmation password" : "");
    };

    const onBlurCheckbox = () => {
        validateFields(!isChecked, setErrorCheckbox, errorCheckbox, !isChecked ? "You don't accept Term and conditions " : "");
    };

    const handleSubmit = async (event: any) => {
        if (isValidateData()) {
            await signUpWithEmailAsync(t, user.name, user.email, user.password, user.confirmPassword, router, loggerService, context.user, setLoading);
        }
    };


    return (
        <>
            <NextSeo title={'Sign Up'} />
            <Row className={styles.content_sign_up}>
                <Col span={12} className={styles.left_content} >
                    <div className={styles.sign_up_wrapper}>
                        <div className={styles.form_sign_up}>
                            <div className={styles.title_sign_up_wrapper}>
                                <BoldText className={styles.title_sign_up}>Create your account</BoldText>
                                <NormalText className={styles.title_sign_up_description}>Unlock all Features!</NormalText>
                            </div>
                            <Row className={styles.sign_up_input_wrapper + " auth-input"}>
                                <Input className={styles.sign_up_input} placeholder="User name" onChange={onChangeName} onBlur={onBlurName} onPressEnter={handleSubmit} value={user.name} />
                                <MessageError isError={errorName.isError} message={errorName.message} />
                            </Row>
                            <Row className={styles.sign_up_input_wrapper + " auth-input"} >
                                <Input className={styles.sign_up_input} placeholder="Email" onChange={onChangeEmail} onBlur={onBlurEmail} onPressEnter={handleSubmit} value={user.email} />
                                <MessageError isError={errorEmail.isError} message={errorEmail.message} />
                            </Row>
                            <Row className={styles.sign_up_input_wrapper + " auth-input"}>
                                <Input.Password className={styles.sign_up_input} onCopy={onCopyPassword} placeholder="Password" onChange={onChangePassword} onBlur={onBlurPassword} onPressEnter={handleSubmit} value={user.password} />
                                <MessageError isError={errorPassword.isError} message={errorPassword.message} />
                            </Row>
                            <Row className={styles.sign_up_input_wrapper + " auth-input"}>
                                <Input.Password className={styles.sign_up_input} onCopy={onCopyPassword} placeholder="Confirm Password" onChange={onChangeConfirmPassword} onBlur={onBlurConfirmPassword} onPressEnter={handleSubmit} value={user.confirmPassword} />
                                <MessageError isError={errorConfirmPassword.isError} message={errorConfirmPassword.message} />
                            </Row>
                            <Row>
                                <Checkbox onChange={onChangeCheckbox} value={isChecked} className={styles.checkbox_sign_up}>Accept <a href="#">Terms and conditions</a></Checkbox>
                                <MessageError isError={errorCheckbox.isError} message={errorCheckbox.message} />
                            </Row>
                            <Row >
                                <Button className={styles.button_sign_up} type="primary" onClick={handleSubmit}>SIGN UP</Button>
                            </Row>
                            <Row justify={"center"}>
                                <NormalText >
                                    You have account? <LinkText href="/account/sign-in.html">Sign in</LinkText>
                                </NormalText>
                            </Row>
                        </div>

                    </div>
                </Col>
                <Col span={12} className={styles.right_content}>
                    <Image src={imageRightContent} alt='image-right-content' />
                    <div>
                        <Row justify={"center"}>
                            <BoldText className={styles.sign_up_about}>Connect with any device</BoldText>
                        </Row>
                        <Row justify={"center"}>
                            <NormalText className={styles.sign_up_about_description}>Everything you need is an internet connection.</NormalText>
                        </Row>
                    </div>
                </Col>
                <FullPageLoading isLoading={loading} />
            </Row>
        </>
    )

};
export default SignInPage;