import React, { useId, useEffect, useState } from "react";
import { Col, Input, Row } from "antd";
import { NormalText } from "../../controls/text";
import styles from "assets/styles/pages/students/AddStudents.module.css"
import { MessageError } from "../../controls/message-error";

type StudentInputProps = {
    label?: string;
    isRequired?: boolean;
    dataUser?: any;
    attriButeName: string;
    disabled?: boolean;
    setDataUser: (data: any) => void;
    dataUserAttribute?: any;
};

export const StudentInputTextArea = (props: StudentInputProps) => {
    const { label, isRequired, dataUser, attriButeName, disabled, setDataUser, dataUserAttribute } = props;

    const id = useId();
    const labelLower = label?.toLowerCase();
    const [value, setValue] = useState("");

    const onChangeValue = (e: any) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        setValue(dataUserAttribute);
    }, [dataUserAttribute]);

    const onBlur = () => {
        setDataUser({ [attriButeName]: value || null });
    };



    return (
        <Row className={styles.input_student_wrapper}>
            {label ? (
                <label htmlFor={id} className="label-for-input">
                    <NormalText className={styles.label_input}>
                        {label} {isRequired ? <span className="require">*</span> : null}
                    </NormalText>
                </label>
            ) : null
            }
            <Input.TextArea
                id={id}
                value={value}
                onBlur={onBlur}
                showCount
                rows={4}
                allowClear
                style={{ height: 120, resize: 'none' }}
                className={styles.input_student}
                placeholder={label ? `Enter ${labelLower}` : ""}
                onChange={onChangeValue}
                disabled={disabled}
            />
        </Row>
    )
}
