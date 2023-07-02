import React, { useEffect, useId, useState } from "react";
import { Col, Select, Row } from "antd";
import { NormalText } from "@/infrastructure/common/components/controls/text";
import styles from "assets/styles/pages/students/AddStudents.module.css"
import { validateFields } from "@/infrastructure/helpers";
import { MessageError } from "../../controls/message-error";

type StudentSelectProps = {
    label?: string;
    isRequired?: boolean;
    attriButeName: string;
    disabled?: boolean;
    setDataUser: (data: any) => void;
    dataUserAttribute?: any;
    options?: any;
    validate: any;
    setValidate: any;
};

const StudentSelect = (props: StudentSelectProps) => {
    const { label, isRequired, attriButeName, disabled, setDataUser, dataUserAttribute, options, validate, setValidate } = props;
    const id = useId();
    const [value, setValue] = useState<any>(null);

    let labelLower = label?.toLowerCase();

    const onBlur = (isImplicitChange = false) => {
        if (isRequired) {
            validateFields(isImplicitChange, attriButeName, !value, setValidate, validate, !value ? `${label} is required` : "");
        }
    }

    const onChangeValue = (e: any) => {
        setValue(e);
        setDataUser({ [attriButeName]: e || null });
    }

    useEffect(() => {
        if (dataUserAttribute) {
            setValue(dataUserAttribute);
        }
    }, [dataUserAttribute]);

    
    return (
        <Row className={styles.input_student_wrapper}>
            {label?
            <label htmlFor={id} className="label-for-input">
                <NormalText className={styles.label_input}>
                    {label} {isRequired ? <span className="require">*</span> : null}
                </NormalText>
            </label>
            : null}
            <Select
                id={id}
                value={value}
                allowClear
                onBlur={() => onBlur(false)}
                listHeight={120}
                style={{ width: "100%" }}
                className={styles.input_student + " select-student"}
                placeholder={label ? `Enter ${labelLower}` : ""}
                onChange={onChangeValue}
                disabled={disabled}
                options={options}
            />
            <MessageError isError={validate[attriButeName]?.isError || false} message={validate[attriButeName]?.message || ""} />
        </Row>
    )
};

export default StudentSelect;