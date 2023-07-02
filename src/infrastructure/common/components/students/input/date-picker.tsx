import React, { useState, useId, useEffect } from 'react';
import { DatePicker, Row } from 'antd';
import moment from 'moment';
import dayjs from 'dayjs';
import styles from "assets/styles/pages/students/AddStudents.module.css"
import { NormalText } from "@/infrastructure/common/components/controls/text";
import { validate } from 'graphql';
import { validateFields } from '@/infrastructure/helpers';
import { MessageError } from '../../controls/message-error';
type DatePickerProps = {
    label?: string;
    isRequired?: boolean;
    dataUser?: any;
    attriButeName: string;
    disabled?: boolean;
    setDataUser: (data: any) => void;
    dataUserAttribute?: any;
    validate: any;
    setValidate: any;
};

const ProfileDatePicker = (props: DatePickerProps) => {
    const { label, isRequired, dataUser, attriButeName, disabled, setDataUser, dataUserAttribute, validate, setValidate } = props;
    const id = useId();
    const [date, setDate] = useState<any>();
    const labelLower = label?.toLowerCase();

    const onChangeDate = (date: any, dateString: any) => {
        setDate(date || null);
        setDataUser({ [attriButeName]: dayjs(date).toISOString() || '' });
    }

    const disabledDate = (current: any) => {
        return current && current > dayjs().endOf('day');
    }

    const onBlur = (isImplicitChange = false) => {
        if (isRequired) {
            validateFields(isImplicitChange, attriButeName, !date, setValidate, validate, !date ? `${label} is required` : "");
        }
    }
    useEffect(() => {
        if (dataUserAttribute) {
            setDate(dayjs(dataUserAttribute) || null);
        }
    }, [dataUserAttribute]);

    return (
        <Row className={styles.input_student_wrapper}>
            {label ?
            <label htmlFor={id} className="label-for-input">
                <NormalText className={styles.label_input}>
                    {label} {isRequired ? <span className="require">*</span> : null}
                </NormalText>
            </label>
            : null}
            <DatePicker
                id={id} 
                disabledDate={disabledDate}
                value={date} 
                onChange={onChangeDate} 
                onBlur={() => onBlur(false)}
                format="DD/MM/YYYY" 
                className={styles.input_student} 
                placeholder={label ? `Enter ${labelLower}` : ''}
                size='small' 
                allowClear={false}
                />
            <MessageError isError={validate[attriButeName]?.isError || false }  message={validate[attriButeName]?.message || ''} />

        </Row>
    )
};

export default ProfileDatePicker;