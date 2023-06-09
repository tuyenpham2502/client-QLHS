import React, { useState, useId, useEffect } from 'react';
import { DatePicker, Row } from 'antd';
import moment from 'moment';
import dayjs from 'dayjs';
import styles from "assets/styles/pages/profile/updateProfile.module.css"
import { NormalText } from "@/infrastructure/common/components/controls/text";
type DatePickerProps = {
    label: string;
    isRequired?: boolean;
    dataUser?: any;
    attriButeName: string;
    disabled?: boolean;
    setDataUser: (data: any) => void;
    dataUserAttribute?: any;
};

const ProfileDatePicker = (props: DatePickerProps) => {
    const { label, isRequired, dataUser, attriButeName, disabled, setDataUser, dataUserAttribute } = props;
    const id = useId();
    const [date, setDate] = useState<any>();
    const labelLower = label.toLowerCase();

    const onChangeDate = (date:any, dateString:any) => {
        setDate(date || null);
        setDataUser({ [attriButeName]: dayjs(date).toISOString() ||'' });
    }
    useEffect(() => {
        if (dataUserAttribute) {
            setDate(dayjs(dataUserAttribute) ||null);
        }
    }, [dataUserAttribute]);

    return (
        <Row className={styles.input_profile_wrapper}>
            <label htmlFor={id} className="label-for-input">
                <NormalText className={styles.label_input}>
                    {label} {isRequired ? <span className="require">*</span> : null}
                </NormalText>
            </label>
            <DatePicker id={id} value={date} onChange={onChangeDate} format="DD/MM/YYYY" className={styles.input_profile} placeholder={"Enter " + labelLower} />
        </Row>
    )
};

export default ProfileDatePicker;