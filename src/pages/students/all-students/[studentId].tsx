import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import avatar from "assets/images/avatar.png";
import MainLayout from "@/infrastructure/common/layout/MainLayout";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import LoggerService from "@/infrastructure/services/LoggerService";
import { getStudentDetail } from "@/infrastructure/student/effect/GetStudentDetail";
import { GetStudentDetailRequest } from "@/core/application/dto/student/request/GetStudentDetail";
import { Avatar, Col, Row } from "antd";
import {
  BoldText,
  LinkText,
  TitleText,
} from "@/infrastructure/common/components/controls/text";
import styles from "assets/styles/pages/students/StudentDetail.module.css";
import { FullPageLoading } from "@/infrastructure/common/components/controls/loading";
import { NormalText } from "@/infrastructure/common/components/controls/text";
import { useRecoilValue } from "recoil";
import { ProfileState } from "@/core/application/common/atoms/Identity/Profile/ProfileState";
import Image from "next/image";
const StudentDetail = (context: any) => {
  const { t } = useTranslation();
  const router = useRouter();
  const dataProfile = useRecoilValue(ProfileState);
  const loggerService = new LoggerService();
  const [loading, setLoading] = useState<boolean>(false);
  const [dataStudentDetail, setDataStudentDetail] = useState<any>();
  let id = router.query._id as string;

  console.log("dataProfile", dataProfile);
  const getStudent = async () => {
    await getStudentDetail(
      t,
      context.user,
      loggerService,
      setDataStudentDetail,
      new GetStudentDetailRequest(id),
      setLoading
    );
  };

  useEffect(() => {
    if (id) {
      getStudent();
    }
  }, [id]);

  return (
    <MainLayout context={context}>
      <NextSeo title="Student Detail" />
      <Row className="page-title">
        <Col span={6}>
          <TitleText className="page-location">Student Detail</TitleText>
          <Row>
            <LinkText className="page-breadcrumb" href="/">
              Home
            </LinkText>
          </Row>
        </Col>
      </Row>
      <div className="page-content">
        <Row className={styles.student_detail_content}>
          <Col xxl={6} xl={10}> 
              <Avatar src={<Image src={avatar} alt={"avatar"} />} size={200} />
          </Col>
          <Col xxl={18} xl={14}>
            <div className={styles.student_detail_content_header}>
              <Row>
                <NormalText className={styles.name_title_student_detail}>
                  {dataStudentDetail?.name}
                </NormalText>
              </Row>
              <Row>
                <NormalText className={styles.description_text}>{dataStudentDetail?.description}</NormalText>
              </Row>
            </div>
            <div className={styles.student_detail_content_body}>
              <Row>
                <Col xxl={8} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  Student ID:
                  </NormalText>
                </Col>
                <Col xxl={16} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  {dataStudentDetail?.studentId}
                  </NormalText>
                </Col>
              </Row>
              <Row>
                <Col xxl={8} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  Name:
                  </NormalText>
                </Col>
                <Col xxl={16} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  {dataStudentDetail?.name}
                  </NormalText>
                </Col>
              </Row>
              <Row>
                <Col xxl={8} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  Gender:
                  </NormalText>
                </Col>
                <Col xxl={16} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  {dataStudentDetail?.gender}
                  </NormalText>
                </Col>
              </Row>
              <Row>
                <Col xxl={8} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  Class:
                  </NormalText>
                </Col>
                <Col xxl={16} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  {dataStudentDetail?.className}
                  </NormalText>
                </Col>
              </Row>
              <Row>
                <Col xxl={8} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  Father Name:
                  </NormalText>
                </Col>
                <Col xxl={16} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  {dataStudentDetail?.fatherName}
                  </NormalText>
                </Col>
              </Row>
              <Row>
                <Col xxl={8} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  Mother Name:
                  </NormalText>
                </Col>
                <Col xxl={16} xl={12} lg={12}> 
                  <NormalText className={styles.student_detail_text}>
                  {dataStudentDetail?.motherName}
                  </NormalText>
                </Col>
              </Row>
              <Row>
                <Col xxl={8} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  Date Of Birth:
                  </NormalText>
                </Col>
                <Col xxl={16} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  {new Date(dataStudentDetail?.birthDate).toLocaleDateString("en-GB") || ""}
                  </NormalText>
                </Col>
              </Row>
              <Row>
                <Col xxl={8} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  Religion:
                  </NormalText>
                </Col>
                <Col xxl={16} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  {dataStudentDetail?.religion}
                  </NormalText>
                </Col>
              </Row>
              {dataStudentDetail?.occupation ? (
              <Row>
                <Col xxl={8} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  Father Occupation:
                  </NormalText>
                </Col>
                <Col xxl={16} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  {dataStudentDetail?.occupation}
                  </NormalText>
                </Col>
              </Row>
              ) : null}
              <Row>
                <Col xxl={8} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  Email:
                  </NormalText>
                </Col>
                <Col xxl={16} xl={12} lg={12}>
                  <NormalText className={styles.student_detail_text}>
                  {dataStudentDetail?.email}
                  </NormalText>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <FullPageLoading isLoading={loading} />
    </MainLayout>
  );
};

export default StudentDetail;
