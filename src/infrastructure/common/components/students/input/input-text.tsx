import React, { useEffect, useId, useState } from "react";
import { Col, Input, Row } from "antd";
import { NormalText } from "src/infrastructure/common/components/controls/text";
import styles from "assets/styles/pages/students/AddStudents.module.css"
import { MessageError } from "../../controls/message-error";
import { validateEmail, validateStudentId, validateName, validatePhoneNumber } from "@/infrastructure/helpers/validate";
import { validateFields } from "src/infrastructure/helpers";

type StudentInputProps = {
    label?: string;
    isRequired?: boolean;
    attriButeName: string;
    disabled?: boolean;
    setDataUser: (data: any) => void;
    dataUserAttribute?: any;
    validate: any;
    setValidate: any;
    dataAttribute?: any;
};

const StudentInput = (props: StudentInputProps) => {
    const { label, isRequired, attriButeName, disabled, setDataUser, dataUserAttribute, validate, setValidate, dataAttribute } = props;
    const id = useId();
    const [value, setValue] = useState("");
    let labelLower = label?.toLowerCase();

    const onBlur = (isImplicitChange = false) => {
        setDataUser({ [attriButeName]: value || null });
        if (isRequired) {
            let checkValue;
            switch (attriButeName) {
                case "name":
                case "fatherName":
                case "motherName":
                case "occupation":
                case "address":
                    checkValue = validateName(value)
                    validateFields(isImplicitChange, attriButeName, !checkValue, setValidate, validate, !checkValue ? `${label} is required` : "");
                    break;
                case "studentId":
                    checkValue = validateStudentId(value)
                    validateFields(isImplicitChange, attriButeName, !checkValue, setValidate, validate, !checkValue ? `${label} is required` : "");
                    break;
                case "email":
                    checkValue = validateEmail(value)
                    validateFields(isImplicitChange, attriButeName, !checkValue, setValidate, validate, !checkValue ? `${label} is required` : "");
                    break;
                case "phoneNumber":
                    checkValue = validatePhoneNumber(value)
                    validateFields(isImplicitChange, attriButeName, !checkValue, setValidate, validate, !checkValue ? `${label} is required` : "");
                    break;
                default:
                    break;
                }
        }
    }
    
    const onChangeValue = (e: any) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        if(dataUserAttribute){
            setValue(dataUserAttribute);
        }
    }, [dataUserAttribute]);

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
            <Input id={id}
                value={value}
                width={"100%"}
                className={styles.input_student}
                placeholder={label ? `Enter ${labelLower}` : ""}
                onChange={onChangeValue}
                disabled={disabled}
                onBlur={()=>onBlur(false)}
            />
            <MessageError isError={validate[attriButeName]?.isError || false }  message={validate[attriButeName]?.message || ''} />
        </Row>
    )
};

export default StudentInput;