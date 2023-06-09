import { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "antd";
import ProfileInput from "@/infrastructure/common/components/profile/input/input-text";
import styles from "assets/styles/pages/profile/updateProfile.module.css"
import ProfileDatePicker from "../account/date-picker";
import { updateMyProfile } from "@/infrastructure/identity/profile/effect/UpdateMyProfile";
import { useTranslation } from "react-i18next";
import LoggerService from "@/infrastructure/services/LoggerService";
import { UpdateMyProfileRequest } from "@/core/application/dto/profile/request/UpdateMyProfileRequest";
import { useRouter } from "next/router";
import { FullPageLoading } from "../controls/loading";
type Props = {
    isOpenModalProfile: boolean;
    handleLogOut: () => void;
    dataProfile: any;
}

const DialogProfileUser = (props: Props, context: any) => {
    const { isOpenModalProfile, handleLogOut, dataProfile } = props;
    const { t } = useTranslation();
    const loggerService = new LoggerService();
    const router = useRouter();
    const [_dataUser, _setDataUser] = useState<any>({});
    const dataUser = _dataUser;
    const [loading, setLoading] = useState<boolean>(false);
    const setDataUser = (data: any) => {
        Object.assign(dataUser, { ...data });
        _setDataUser({ ...dataUser });
    };

    useEffect(() => {
        let myProfileData = dataProfile?.data;
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

    const onUpdateProfile = async () => {
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
            setLoading
        );
    };


    return (
        <Modal
            width={"80%"}
            title="Update profile"
            open={isOpenModalProfile}
            closable={false}
            footer={
                <div>
                    <Button onClick={handleLogOut} className={styles.button_log_out}>Sign out</Button>
                    <Button onClick={onUpdateProfile} className={styles.button_update}>Update</Button>
                </div>
            } >
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
                            dataUserAttribute={dataUser.birthDate}
                        />
                    </div>
                </Col>
            </Row>
            <FullPageLoading isLoading={loading} />
        </Modal>
    )
}

export default DialogProfileUser;