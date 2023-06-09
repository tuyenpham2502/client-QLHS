import React, { useEffect, useState } from 'react'
import { ProfileState } from '@/core/application/common/atoms/Identity/Profile/ProfileState'
import { BoldText, LinkText, TitleText } from '@/infrastructure/common/components/controls/text'
import ProfileInput from '@/infrastructure/common/components/profile/input/input-text'
import MainLayout from '@/infrastructure/common/layout/MainLayout'
import { Button, Col, Row } from 'antd'
import { NextSeo } from 'next-seo'
import { useRecoilValue } from 'recoil'
import styles from "assets/styles/pages/profile/updateProfile.module.css"
import ProfileDatePicker from '@/infrastructure/common/components/account/date-picker'
import { updateMyProfile } from '@/infrastructure/identity/profile/effect/UpdateMyProfile'
import LoggerService from '@/infrastructure/services/LoggerService'
import { useTranslation } from 'react-i18next'
import { UpdateMyProfileRequest } from '@/core/application/dto/profile/request/UpdateMyProfileRequest'
import { useRouter } from 'next/router'
import Dialog from '@/infrastructure/common/components/dialog/dialog'
import { FullPageLoading } from '@/infrastructure/common/components/controls/loading'


const Profile = (context: any) => {
    const { t } = useTranslation();
    const loggerService = new LoggerService();
    const router = useRouter();
    const dataProfile = useRecoilValue(ProfileState);
    const [isOpenModalConfirm, setIsOpenModalConfirm] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [_dataUser, _setDataUser] = useState<any>({});
    const dataUser = _dataUser;
    const setDataUser = (data: any) => {
        Object.assign(dataUser, { ...data });
        _setDataUser({ ...dataUser });
    };

    useEffect(() => {
        let myProfileData = dataProfile?.data
        if (myProfileData) {
            setDataUser({
                email: myProfileData?.email,
                name: myProfileData?.name,
                birthDate: myProfileData?.birthDate,
                address: myProfileData?.address,
                phoneNumber: myProfileData?.phoneNumber,
                photo: myProfileData?.photo,
            })  
        }
    }, [dataProfile])

    const handelOkConfirmDialog = async () => {
        await updateMyProfile(
            t,
            router,
            new UpdateMyProfileRequest(
                dataUser.name,
                dataUser.email,
                dataUser.birthDate,
                dataUser.address,
                dataUser.phoneNumber,
                "gdfhdfhsdfh",
            ),
            loggerService,
            context.user,
            setLoading,
        );
    };

    const handleCancelConfirmDialog =() =>{
        setIsOpenModalConfirm(false);
    };

    const onUpdateProfile = () => {
        setIsOpenModalConfirm(true);
    };

    return (
        <MainLayout context={context}>
            <NextSeo title="Profile" />
            <Row className="page-title">
                <Col span={6}>
                    <TitleText className="page-location" >
                        Profile
                    </TitleText>
                    <Row>
                        <LinkText className="page-breadcrumb" href="/">
                            Home
                        </LinkText>
                    </Row>
                </Col>
            </Row>
            <div className="page-content">
                <Row className={styles.profile_title}>
                    <Col span={24}>
                        <BoldText className="page-content-title">
                            Profile setting
                        </BoldText>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <div className={styles.profile_update_form_input}>
                            <ProfileInput
                                label="Name"
                                isRequired={true}
                                attriButeName="name"
                                setDataUser={setDataUser}
                                dataUser={dataUser}
                                dataUserAttribute={dataUser.name}
                                disabled={true}
                            />
                            <ProfileInput
                                label="Email"
                                isRequired={true}
                                attriButeName="email"
                                setDataUser={setDataUser}
                                dataUser={dataUser}
                                dataUserAttribute={dataUser.email}
                                disabled={true}
                            />
                            <ProfileInput
                                label="Address"
                                isRequired={true}
                                attriButeName="address"
                                setDataUser={setDataUser}
                                dataUser={dataUser}
                                dataUserAttribute={dataUser.address}
                            />
                            <ProfileInput
                                label="Phone number"
                                isRequired={true}
                                attriButeName="phoneNumber"
                                setDataUser={setDataUser}
                                dataUser={dataUser}
                                dataUserAttribute={dataUser.phoneNumber}
                            />
                            <ProfileDatePicker
                                label="Date of birth"
                                isRequired={true}
                                attriButeName="birthDate"
                                setDataUser={setDataUser}
                                dataUser={dataUser}
                                dataUserAttribute={dataUser.birthDate|| ""}
                            />
                        </div>
                        <Button onClick={onUpdateProfile} className={styles.button_log_out}>Update</Button>

                    </Col>
                </Row>
            </div>
            <Dialog message="Are you want to log out?" isOpenModalConfirm={isOpenModalConfirm} handleCancel={handleCancelConfirmDialog} handleOk={handelOkConfirmDialog} />
            <FullPageLoading loading={loading} />
        </MainLayout>
    )
}

export default Profile