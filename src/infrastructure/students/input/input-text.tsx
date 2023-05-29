import React from "react";
import { Col, Input, Row } from "antd";
import { NormalText } from "@/infrastructure/common/components/controls/text";
import styles from "assets/styles/pages/students/AddStudents.module.css"

type StudentInputProps = {
    label: string;
    isRequired?: boolean;
};

const StudentInput = (props: StudentInputProps) => {

    const { label, isRequired } = props;

    let labelLower = label.toLowerCase();

    return (
        <Row>
            <NormalText className={styles.label_input}>
                {label} {isRequired ? <span className="require">*</span> : null}
            </NormalText>
            <Input width={"100%"} className={styles.input} placeholder={"Enter " + labelLower} />
        </Row>
    )
};

export default StudentInput;