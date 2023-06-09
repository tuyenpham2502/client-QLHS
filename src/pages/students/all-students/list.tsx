import React, { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import { Button, Col, Dropdown, Input, Menu, Row, Select, Table } from "antd";
import {MenuUnfoldOutlined} from "@ant-design/icons";
const { Column, ColumnGroup } = Table;
import {
  BoldText,
  LinkText,
  TitleText,
} from "@/infrastructure/common/components/controls/text";
import styles from "assets/styles/pages/students/AllStudents.module.css";
import { MenuKeys } from "@/core/domain/enums/MenuKeys";
import MainLayout from "@/infrastructure/common/layout/MainLayout";
import Constant from "@/core/application/common/Constants";
import { getStudent } from "@/infrastructure/student/effect/GetStudent";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import LoggerService from "@/infrastructure/services/LoggerService";
import { GetStudentRequest } from "@/core/application/dto/student/request/GetStudentRequest";
import dynamic from "next/dynamic";
import CommonMenuItem from "@/infrastructure/common/components/common-permission/menu-items";

const DialogStudentDetail = dynamic(() => import("@/infrastructure/common/components/dialog/dialogStudentDetail"));

const AllStudentsPage = (context: any) => {
  const { t } = useTranslation();
  const router = useRouter();
  const loggerService = new LoggerService();
  const classOptions = Constant.ClassOptions;
  const [loading, setLoading] = useState<boolean>(false);
  const [searchId, setSearchId] = useState<string>();
  const [searchName, setSearchName] = useState<string>();
  const [searchClass, setSearchClass] = useState<string>();
  const [dataStudent, setDataStudent] = useState<any>();
  const [isOpenModalStudentDetail, setIsOpenModalStudentDetail] = useState<boolean>(false);
  const [idStudent, setIdStudent] = useState<any>(null);
  const getDataStudents = async ({ searchName, searchClass }: any) => {
    await getStudent(
      t,
      router,
      new GetStudentRequest(searchId, searchName, searchClass),
      loggerService,
      context.user,
      setDataStudent,
      setLoading
    );
  };


  useEffect(() => {
    getDataStudents({});
  }, []);

  const onChangeSearchId = (e: any) => {
    setSearchId(e.target.value);
  };

  const onChangeSearchName = (e: any) => {
    setSearchName(e.target.value);
  };

  const onChangeSearchClass = (e: any) => {
    setSearchClass(e);
  };

  const handleCancel = () => {
    setIsOpenModalStudentDetail(false);
    setIdStudent(null);
  }

  const onClickLinkText = async (record: any) => {
    await router.push({
      pathname: `/students/all-students/${record.studentId}`,
      query: { _id: record._id },
    });
  };

  const onOpenModalStudentDetail = (record: any) => {
    setIsOpenModalStudentDetail(true);
    setIdStudent(record._id);
  }

  const listActions = (record: any) => {
    return (
      <Menu>
        <CommonMenuItem children="Sửa" key="1" permission="admin" onClick={
          () => {
            onClickLinkText(record)
          }
        } />

      </Menu>
    )
  }

  return (
    <>
      <MainLayout context={context}>
        <NextSeo title="All Students" />
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
          <Row className={styles.student_title}>
            <BoldText className="page-content-title">Add New Students</BoldText>
          </Row>
          {/* search */}
          <Row gutter={[20, 0]}>
            <Col span={6}>
              <Input
                placeholder="Search by ID"
                value={searchId}
                onChange={onChangeSearchId}
              />
            </Col>
            <Col span={6}>
              <Input
                placeholder="Search by name"
                value={searchName}
                onChange={onChangeSearchName}
              />
            </Col>
            <Col span={6}>
              <Select
                listHeight={180}
                placeholder="Select class"
                style={{ width: "100%" }}
                options={classOptions}
                value={searchClass}
                onChange={onChangeSearchClass}
                allowClear
              />
            </Col>
            <Col span={6}>
              <Button
                type="primary"
                style={{ width: "100%" }}
                className={styles.search_button}
                onClick={() => getDataStudents({ searchName, searchClass })}
              >
                Search
              </Button>
            </Col>
          </Row>
          {/* table */}
          <div className={styles.student_table}>
            <Table dataSource={dataStudent} loading={loading}>
              <Column
                title="Student ID"
                dataIndex="studentId"
                key="studentId"
                render={(val, record: any) => (
                  <div
                    className={styles.text_link_studentId}
                    onClick={() => onOpenModalStudentDetail(record)}
                  >
                    {val}
                  </div>
                )}
              />
              <Column title="Name" dataIndex="name" key="name" />
              <Column title="Gender" dataIndex="gender" key="gender" />
              <Column title="Class" dataIndex="className" key="class" />
              <Column title="Parent" dataIndex="fatherName" key="fatherName" />
              <Column title="Address" dataIndex="address" key="address" />
              <Column
                title="Date of birth"
                dataIndex="birthDate"
                key="birthDate"
                render={(val, render, index) => (
                  <span>{new Date(val).toLocaleDateString("en-GB")}</span>
                )}
              />
              <Column title="Phone" dataIndex="phoneNumber" key="phoneNumber" />
              <Column  render={(val, record: any) => (
                <Dropdown overlay={listActions(record)} trigger={['click']}>
                  <MenuUnfoldOutlined />
                </Dropdown>
              )}
              />
            </Table>
          </div>
        </div>
      </MainLayout>
      <DialogStudentDetail idStudent={idStudent} isOpenModalStudentDetail={isOpenModalStudentDetail} handleCancel={handleCancel} />
    </>
  );
};

export default AllStudentsPage;

export async function getStaticProps(context: any) {
  return {
    props: {
      defaultSelectedKeys: [MenuKeys.AllStudents],
      openKeys: [MenuKeys.Students],
    },
  };
}
