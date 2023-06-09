import React, { useState } from "react";
import { NextSeo } from "next-seo";
import { Button, Col, Input, Row } from "antd";
import { MenuKeys } from "@/core/domain/enums/MenuKeys";
import MainLayout from "@/infrastructure/common/layout/MainLayout";
import {
  BoldText,
  LinkText,
  NormalText,
  TitleText,
} from "@/infrastructure/common/components/controls/text";
import {useRecoilValue} from "recoil"; 
import StudentInput from "@/infrastructure/common/components/students/input/input-text";
import styles from "assets/styles/pages/students/AddStudents.module.css";
import StudentSelect from "@/infrastructure/common/components/students/input/select";
import Constant from "@/core/application/common/Constants";
import StudentDatePicker from "@/infrastructure/common/components/students/input/date-picker";
import { createStudent } from "@/infrastructure/student/effect/CreateStudent";
import { async } from "rxjs";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import LoggerService from "@/infrastructure/services/LoggerService";
import { FullPageLoading } from "@/infrastructure/common/components/controls/loading";
import { CreateStudentRequest } from "@/core/application/dto/student/request/CreateStudentRequest";
import { RoleNameLoginState } from "@/core/application/common/atoms/Identity/Profile/ProfileState";
import { StudentInputTextArea } from "@/infrastructure/common/components/students/input/input-text-area";

const AddStudentsPage = (context: any) => {
  const { t } = useTranslation();
  const router = useRouter();
  const loggerService = new LoggerService();
  const genderOptions = Constant.GenderOptions;
  const classOptions = Constant.ClassOptions;
  const bloodGroupOptions = Constant.BloodGroupOptions;
  const religionOptions = Constant.ReligionOptions;
  const [loading, setLoading] = useState<boolean>(false);
  const [_dataStudent, _setDataStudent] = useState<any>({});
  const [_dataParent, _setDataParent] = useState<any>({});
  const studentData = _dataStudent;
  const parentData = _dataParent;
  const roleName = useRecoilValue(RoleNameLoginState);


  const setDataStudent = (data: any) => {
    Object.assign(studentData, { ...data });
    _setDataStudent({ ...studentData });
  };
  const setDataParent = (data: any) => {
    Object.assign(parentData, { ...data });
    _setDataParent({ ...parentData });
  };

  const [validate, setValidate] = useState<any>({});
  const handleCreateStudent = async () => {
    await createStudent(
      t,
      router,
      new CreateStudentRequest (
        studentData.studentId,
        studentData.name,
        studentData.gender,
        studentData.className,
        studentData.birthDate,
        studentData.bloodGroup,
        studentData.religion,
        parentData.fatherName,
        parentData.motherName,
        parentData.email,
        parentData.address,
        parentData.phoneNumber,
        parentData.occupation,
        studentData.description,
      ),
      loggerService,
      context.user,
      setLoading
    );
  };
  
  
  

  return (
    <MainLayout context={context}>
      <NextSeo title="Add Students" />
      <Row className="page-title">
        <Col span={6}>
          <TitleText className="page-location">Students</TitleText>
          <Row>
            <LinkText className="page-breadcrumb" href="/">
              Home
            </LinkText>
          </Row>
        </Col>
      </Row>
      <div className="page-content">
        <div className={styles.add_student_form}>
          <div>
            <Row className={styles.student_title}>
                <BoldText className="page-content-title">
                  Add New Students
                </BoldText>
            </Row>
          {/* add student */}
            <Row gutter={[20, 40]}>
              <Col span={6}>
                <StudentInput
                  label="Student ID"
                  isRequired={true}
                  attriButeName="studentId"
                  setDataUser={setDataStudent}
                  validate={validate}
                  setValidate={setValidate}
                />
              </Col>
              <Col span={6}>
                <StudentInput
                  label="Name"
                  isRequired={true}
                  attriButeName="name"
                  setDataUser={setDataStudent}
                  validate={validate}
                  setValidate={setValidate}
                />
              </Col>
              <Col span={6}>
                <StudentSelect
                  label="Gender"
                  attriButeName="gender"
                  setDataUser={setDataStudent}
                  options={genderOptions}
                  validate={validate}
                  setValidate={setValidate}
                  isRequired={true}
                />
              </Col>
              <Col span={6}>
                <StudentSelect
                  label="Class"
                  attriButeName="className"
                  setDataUser={setDataStudent}
                  options={classOptions}
                  validate={validate}
                  isRequired={true}
                  setValidate={setValidate}
                />
              </Col>
              <Col span={6}>
                <StudentDatePicker
                  label="Date of birth"
                  attriButeName="birthDate"
                  setDataUser={setDataStudent}
                  validate={validate}
                  isRequired={true}
                  setValidate={setValidate}
                />
              </Col>
              <Col span={6}>
                <StudentSelect
                  label="Blood Group"
                  attriButeName="bloodGroup"
                  setDataUser={setDataStudent}
                  options={bloodGroupOptions}
                  validate={validate}
                  isRequired={true}
                  setValidate={setValidate}
                />
              </Col>
              <Col span={6}>
                <StudentSelect
                  label="Religion"
                  attriButeName="religion"
                  setDataUser={setDataStudent}
                  options={religionOptions}
                  validate={validate}
                  setValidate={setValidate}
                />
              </Col>
            </Row>
            <Row style={{marginTop:"20px"}}>
              <Col span={24}>
                <StudentInputTextArea 
                  label="Description"
                  attriButeName="description"
                  setDataUser={setDataStudent}
                />
              </Col>
            </Row>
          </div>
          <div>
            <Row className={styles.student_title}>
              <Col span={24}>
                <BoldText className="page-content-title">
                  Add New Parent
                </BoldText>
              </Col>
            </Row>
            {/* add parent */}
            <Row gutter={[20, 40]}>
              <Col span={6}>
                <StudentInput
                  label="Father's Name"
                  isRequired={true}
                  attriButeName="fatherName"
                  setDataUser={setDataParent}
                  validate={validate}
                  setValidate={setValidate}
                />
              </Col>
              <Col span={6}>
                <StudentInput
                  label="Mother's Name"
                  isRequired={true}
                  attriButeName="motherName"
                  setDataUser={setDataParent}
                  validate={validate}
                  setValidate={setValidate}
                />
              </Col>
              <Col span={6}>
                <StudentInput
                  label="Email"
                  isRequired={true}
                  attriButeName="email"
                  setDataUser={setDataParent}
                  validate={validate}
                  setValidate={setValidate}
                />
              </Col>
              <Col span={6}>
                <StudentInput
                  label="Phone"
                  isRequired={true}
                  attriButeName="phoneNumber"
                  setDataUser={setDataParent}
                  validate={validate}
                  setValidate={setValidate}
                />
              </Col>
              <Col span={6}>
                <StudentInput
                  label="Occupation"
                  attriButeName="occupation"
                  setDataUser={setDataParent}
                  validate={validate}
                  setValidate={setValidate}
                />
              </Col>
              <Col span={6}>
                <StudentInput
                  label="Address"
                  isRequired={true}
                  attriButeName="address"
                  setDataUser={setDataParent}
                  validate={validate}
                  setValidate={setValidate}
                />
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[20, 0]}>
              <Col span={4}>
                <Button
                  className={styles.add_student_button_submit}
                  onClick={handleCreateStudent}
                >
                  Save
                </Button>
              </Col>
              <Col span={4}>
                <Button
                  className={styles.add_student_button_reset}
                >
                  Reset
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <FullPageLoading loading={loading} />
    </MainLayout>
  );
};

export default AddStudentsPage;

export async function getStaticProps(context: any) {
  return {
    props: {
      defaultSelectedKeys: [MenuKeys.AddStudents],
      openKeys: [MenuKeys.Students],
    },
  };
}
