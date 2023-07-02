import { GetStudentDetailRequest } from "@/core/application/dto/student/request/GetStudentDetail";
import LoggerService from "@/infrastructure/services/LoggerService";
import { getStudentDetail } from "@/infrastructure/student/effect/GetStudentDetail";
import { Avatar, Col, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LoadingRegion } from "../controls/loading";
import { NormalText } from "../controls/text";
import styles from "assets/styles/pages/students/DialogStudentDetail.module.css";
import avatar from "assets/images/avatar.png";
import Image from "next/image";

type Props = {
    idStudent: any;
    isOpenModalStudentDetail: boolean;
    handleCancel: () => void;
}


const DialogStudentDetail = (prop: Props, context: any) => {
    const { idStudent, isOpenModalStudentDetail, handleCancel } = prop;
    const loggerService = new LoggerService();
    const { t } = useTranslation();
    const [dataStudentDetail, setDataStudentDetail] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(false);

    const getStudent = async () => {
        await getStudentDetail(
            t,
            context.user,
            loggerService,
            setDataStudentDetail,
            new GetStudentDetailRequest(idStudent),
            setLoading
        );
    };

    const afterClose = () => {
        setDataStudentDetail({});
    };

    useEffect(() => {
        idStudent && getStudent();
    }, [idStudent]);

    return (
        <Modal
            afterClose={afterClose}
            onCancel={handleCancel}
            footer={null}
            open={isOpenModalStudentDetail}
            title="Student Detail"
            width={"60%"}
        >
            {loading ? (
                <div className="loading-wrapper">
                <LoadingRegion size={"large"} tip={"Loading"} color="red" />
                </div>
            ) : (
                <Row className={styles.student_detail_content}>
          <Col xxl={8} xl={10} className={styles.avatar_wrapper}> 
              <Avatar src={<Image src={avatar} alt={"avatar"} />} size={200} />
          </Col>
          <Col xxl={16} xl={14}>
            <div className={styles.student_detail_content_header}>
              <Row>
                <NormalText className={styles.name_title_student_detail}>
                  {dataStudentDetail?.name}
                </NormalText>
              </Row>
              <Row className={styles.description_wrapper} style={{width:"400px"}}>
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
            )
            }
        </Modal>
    );
}

export default DialogStudentDetail;