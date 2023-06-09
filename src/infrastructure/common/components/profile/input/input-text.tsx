import React, { use, useEffect, useState,useId } from "react";
import { Col, Input, Row } from "antd";
import { NormalText } from "@/infrastructure/common/components/controls/text";
import styles from "assets/styles/pages/profile/updateProfile.module.css"

type ProfileInputProps = {
    label: string;
    isRequired?: boolean;
    dataUser?: any;
    attriButeName: string;
    disabled?: boolean;
    setDataUser: (data: any) => void;
    dataUserAttribute?: any;
};

const ProfileInput = (props: ProfileInputProps) => {
    const { label, isRequired, dataUser, attriButeName, disabled, setDataUser, dataUserAttribute } = props;
    const id = useId();
    const [value, setValue] = useState("");
    const labelLower = label.toLowerCase();

    useEffect(() => {
        if (attriButeName){
            setValue(dataUserAttribute);
        }
    }, [attriButeName, dataUserAttribute]);

    const onChangeValue = (e: any) => {
        setValue(e.target.value);
        setDataUser({[attriButeName]: e.target.value || null});
    }



    return (
        <Row className={styles.input_profile_wrapper}>
            <label htmlFor={id} className="label-for-input">
                <NormalText className={styles.label_input}>
                    {label} {isRequired ? <span className="require">*</span> : null}
                </NormalText>
            </label>
            <Input id={id} 
                value={value} 
                width={"100%"} 
                className={styles.input_profile} 
                placeholder={"Enter " + labelLower} 
                onChange={onChangeValue}
                disabled={disabled}
                />
        </Row>
    )
};

export default ProfileInput;