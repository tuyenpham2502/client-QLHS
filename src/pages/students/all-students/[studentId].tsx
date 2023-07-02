import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import avatar from "assets/images/avatar.png";
import MainLayout from "@/infrastructure/common/layout/MainLayout";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import LoggerService from "@/infrastructure/services/LoggerService";
import { getStudentDetail } from "@/infrastructure/student/effect/GetStudentDetail";
import { GetStudentDetailRequest } from "@/core/application/dto/student/request/GetStudentDetail";
import { Avatar, Button, Col, Row } from "antd";
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
import { StudentInputTextArea } from "@/infrastructure/common/components/students/input/input-text-area";
import { StudentState } from "@/core/application/common/atoms/students/StudentState";
import StudentInput from "@/infrastructure/common/components/students/input/input-text";
import StudentSelect from "@/infrastructure/common/components/students/input/select";
import StudentDatePicker from "@/infrastructure/common/components/students/input/date-picker";
import Constant from "@/core/application/common/Constants";
import { UpdateStudent } from "@/infrastructure/student/effect/UpdateStudent";
const StudentDetail = (context: any) => {
  const { t } = useTranslation();
  const router = useRouter();
  const id = router.query._id as string;
  const loggerService = new LoggerService();
  const classOptions = Constant.ClassOptions;
  const genderOptions = Constant.GenderOptions;
  const religionOptions = Constant.ReligionOptions;
  const [loading, setLoading] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [validate, setValidate] = useState<any>({});
  const [_dataStudent, _setDataStudent] = useState<any>({});
  const dataStudent = _dataStudent;
  const setDataStudent = (data: any) => {
    Object.assign(dataStudent, { ...data });
    _setDataStudent({ ...dataStudent });
  };
  const getStudent = async () => {
    await getStudentDetail(
      t,
      context.user,
      loggerService,
      setDataStudent,
      new GetStudentDetailRequest(id),
      setLoading
    );
  };

  useEffect(() => {
    if (id) {
      getStudent();
    }
  }, [id]);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickCancel = () => {
    setIsEdit(false);
  };

  // const onClickSave = async () => {
  //     await UpdateStudent(
  //       t,
  //       router,
        
  //       loggerService,
  //       context.user,
  //       setLoading,
  //     )
  // };

  console.log("dataStudent", dataStudent);

  return (
    <>
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
                    {dataStudent?.studentId}
                  </NormalText>
                </Row>
                <Row >
                  {isEdit ?
                    <Col span={24}>
                      <StudentInputTextArea attriButeName={"description"} dataUserAttribute={dataStudent?.description} setDataUser={setDataStudent} />
                    </Col>
                    :
                    <div className={styles.description_wrapper}>
                      <NormalText className={styles.description_text}>{dataStudent?.description}</NormalText>
                    </div>
                  }
                </Row>
              </div>
              <div className={styles.student_detail_content_body}>
                <Row align={"middle"}>
                  <Col xxl={8} xl={12} lg={12}>
                    < NormalText className={styles.student_detail_text}>
                      Name:
                    </NormalText>
                  </Col>
                  <Col xxl={16} xl={12} lg={12}>
                    {isEdit ?
                      <StudentInput attriButeName={"name"} setDataUser={setDataStudent} dataUserAttribute={dataStudent?.name} validate={validate} setValidate={setValidate} />
                      :
                      <NormalText className={styles.student_detail_text}>
                        {dataStudent?.name}
                      </NormalText>
                    }
                  </Col>
                </Row>
                <Row align={"middle"}>
                  <Col xxl={8} xl={12} lg={12}>
                    <NormalText className={styles.student_detail_text}>
                      Gender:
                    </NormalText>
                  </Col>
                  <Col xxl={16} xl={12} lg={12}>
                    {isEdit ?
                      <StudentSelect attriButeName={"gender"} setDataUser={setDataStudent} dataUserAttribute={dataStudent?.gender} validate={validate} setValidate={setValidate} options={genderOptions} />
                      :
                      <NormalText className={styles.student_detail_text}>
                        {dataStudent?.gender}
                      </NormalText>
                    }
                  </Col>
                </Row>
                <Row align={"middle"}>
                  <Col xxl={8} xl={12} lg={12}>
                    <NormalText className={styles.student_detail_text}>
                      Class:
                    </NormalText>

                  </Col>
                  <Col xxl={16} xl={12} lg={12}>
                    {isEdit ?
                      <StudentSelect attriButeName={"gender"} setDataUser={setDataStudent} dataUserAttribute={dataStudent?.gender} validate={validate} setValidate={setValidate} options={classOptions} />
                      :
                      <NormalText className={styles.student_detail_text}>
                        {dataStudent?.className}
                      </NormalText>
                    }
                  </Col>
                </Row>
                <Row align={"middle"}>
                  <Col xxl={8} xl={12} lg={12}>
                    <NormalText className={styles.student_detail_text}>
                      Father Name:
                    </NormalText>
                  </Col>
                  <Col xxl={16} xl={12} lg={12}>
                    {isEdit ?
                      <StudentInput attriButeName={"fatherName"} setDataUser={setDataStudent} dataUserAttribute={dataStudent?.fatherName} validate={validate} setValidate={setValidate} />
                      :
                      <NormalText className={styles.student_detail_text}>
                        {dataStudent?.fatherName}
                      </NormalText>
                    }
                  </Col>
                </Row>
                <Row align={"middle"}>
                  <Col xxl={8} xl={12} lg={12}>
                    <NormalText className={styles.student_detail_text}>
                      Mother Name:
                    </NormalText>
                  </Col>
                  <Col xxl={16} xl={12} lg={12}>
                    {isEdit ?
                      <StudentInput attriButeName={"motherName"} setDataUser={setDataStudent} dataUserAttribute={dataStudent?.motherName} validate={validate} setValidate={setValidate} />
                      :
                      <NormalText className={styles.student_detail_text}>
                        {dataStudent?.motherName}
                      </NormalText>
                    }
                  </Col>
                </Row>
                <Row align={"middle"}>
                  <Col xxl={8} xl={12} lg={12}>
                    <NormalText className={styles.student_detail_text}>
                      Date Of Birth:
                    </NormalText>
                  </Col>
                  <Col xxl={16} xl={12} lg={12}>
                    {isEdit ?
                      <StudentDatePicker attriButeName={"birthDate"} setDataUser={setDataStudent} dataUserAttribute={dataStudent?.birthDate} validate={validate} setValidate={setValidate} />
                      :
                      <NormalText className={styles.student_detail_text}>
                        {new Date(dataStudent?.birthDate).toLocaleDateString("en-GB") || ""}
                      </NormalText>
                    }
                  </Col>
                </Row>
                <Row align={"middle"}>
                  <Col xxl={8} xl={12} lg={12}>
                    <NormalText className={styles.student_detail_text}>
                      Religion:
                    </NormalText>
                  </Col>
                  <Col xxl={16} xl={12} lg={12}>
                    {isEdit ?
                      <StudentSelect attriButeName={"religion"} setDataUser={setDataStudent} dataUserAttribute={dataStudent?.religion} validate={validate} setValidate={setValidate} options={religionOptions} />
                      :
                      <NormalText className={styles.student_detail_text}>
                        {dataStudent?.religion}
                      </NormalText>
                    }
                  </Col>
                </Row>
                {dataStudent?.occupation ? (
                  <Row align={"middle"}>
                    <Col xxl={8} xl={12} lg={12}>
                      <NormalText className={styles.student_detail_text}>
                        Father Occupation:
                      </NormalText>
                    </Col>
                    <Col xxl={16} xl={12} lg={12}>
                      {isEdit ?
                        <StudentInput attriButeName={"occupation"} setDataUser={setDataStudent} dataUserAttribute={dataStudent?.occupation} validate={validate} setValidate={setValidate} />
                        :
                        <NormalText className={styles.student_detail_text}>
                          {dataStudent?.occupation}
                        </NormalText>
                      }
                    </Col>
                  </Row>
                ) : null}
                <Row align={"middle"}>
                  <Col xxl={8} xl={12} lg={12}>
                    <NormalText className={styles.student_detail_text}>
                      Email:
                    </NormalText>
                  </Col>
                  <Col xxl={16} xl={12} lg={12}>
                    {isEdit ?
                      <StudentInput attriButeName={"email"} setDataUser={setDataStudent} dataUserAttribute={dataStudent?.email} validate={validate} setValidate={setValidate} />
                      :
                      <NormalText className={styles.student_detail_text}>
                        {dataStudent?.email}
                      </NormalText>
                    }
                  </Col>
                </Row>
                <Row>
                  <Col xxl={8} xl={12} lg={12}>
                    {isEdit ?
                      <Button>
                        Save
                      </Button>
                      :
                      <Button onClick={onClickEdit}>
                        Edit
                      </Button>
                    }
                  </Col>
                  <Col xxl={16} xl={12} lg={12}>
                    <Button onClick={onClickCancel}>
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div><FullPageLoading isLoading={loading} />
      </MainLayout>
    </>
  );
};

export default StudentDetail;
