import React from "react";
import { NextSeo } from "next-seo";
import { Col, Row } from "antd";
import { MenuKeys } from "@/core/domain/enums/MenuKeys";
import MainLayout from "@/infrastructure/common/layout/MainLayout";
import { BoldText, LinkText, NormalText, TitleText } from "@/infrastructure/common/components/controls/text";
import StudentInput from "@/infrastructure/students/input/input-text";
import styles from "assets/styles/pages/students/AddStudents.module.css"

const AddStudentsPage = (context: any) => {
    return (
        <MainLayout context={context}>
            <NextSeo title="Add Students" />
            <Row className="page-title">
                <Col span={6}>
                    <TitleText className="page-location" >
                        Students
                    </TitleText>
                    <Row>
                        <LinkText className="page-breadcrumb" href="/">
                            Home
                        </LinkText>
                    </Row>
                </Col>
            </Row>
            <div className="page-content">
                <Row>
                    <Col span={24}>
                        <BoldText className="page-content-title">
                            Add New Students
                        </BoldText>
                    </Col>
                </Row>
                <Row>
                    <Col span={3}>
                        <StudentInput label="Name" isRequired={true} />
                    </Col>
                </Row>

            </div>
        </MainLayout>
    )
};

export default AddStudentsPage;

export async function getStaticProps(context: any) {
    return {
        props: {
            defaultSelectedKeys: [MenuKeys.AddStudents],
            openKeys: [MenuKeys.Students],
        },
    }
};
