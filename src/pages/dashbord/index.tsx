import React, { useEffect, useState, useTransition } from "react";
import { NextSeo } from "next-seo";
import { Button, Card, Col, DatePicker, Row } from "antd";
import Image from "next/image";
import moment from "moment";
import {
    LoadingOutlined
} from "@ant-design/icons";
import styles from 'assets/styles/pages/dashboard/Dashboard.module.css'
import { MenuKeys } from "@/core/domain/enums/MenuKeys";
import { BoldText, NormalText, TitleText } from "@/infrastructure/common/components/controls/text";
import iconMore from 'assets/icons/icon-more.png'
import iconTotal from 'assets/icons/icon-total.png'
import iconFees from 'assets/icons/icon-fees.png'
import iconLine from "/assets/icons/icon-line.png";
import iconStudentsDashboard from "/assets/icons/icon-students-dashboard.png";
import iconTeachersDashboard from "/assets/icons/icon-teachers-dashboard.png";
import iconParentsDashboard from "/assets/icons/icon-parents-dashboard.png";
import iconEarningDashboard from "/assets/icons/icon-earning-dashboard.png";

import dynamic from "next/dynamic";




const DashBoardPage = (context: any) => {
    const EarningsChartdd = dynamic(() => import('@/pages/dashbord/chart/earnings-chart'));
    const [date, setDate] = useState();
    const [dataEarning, setDataEarning] = useState({});

    const [isPending, startTransition] = useTransition();


    const totalValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(10000000);

    const feesValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(10000000);


    
    const onChangeDate = (date: any, dateString: any) => {
        setDate(date);
        startTransition(() => {
            setDataEarning({
                labels: ["Apr", "May", "Jun"],
                datasets: [{
                    label: "Expenses",
                    data: [12, 10, 4],
                    borderColor: "#D60A0B",
                    backgroundColor: "#D60A0B",
                    pointBorderColor: "#D60A0B",
                    fill: true,
                },
                ]
            })
        })
    };

    console.log("dataEarning", dataEarning);


    return (
        <>
            <NextSeo title="Dashboard" />
            <Row className="page-title">
                <Col span={6}>
                    <TitleText className="page-location" >
                        Admin Dashboard
                    </TitleText>
                    <NormalText className="page-breadcrumb">
                        Home
                    </NormalText>
                </Col>
            </Row>
            <Col className={styles.page_content}>
                {/* card over view */}
                <Row justify={"space-between"} gutter={[40, 0]}>
                    {/* card students */}
                    <Col span={6}>
                        <Card className={styles.card_overview}>
                            <Row className={styles.card_overview_content}>
                                <Col span={11} className={styles.card_overview_content_items}>
                                    <Image src={iconStudentsDashboard} alt="icon-students-dashboard" />
                                </Col>
                                <Col span={1} className={styles.card_overview_content_items} >
                                    <Image src={iconLine} alt="icon-line" />
                                </Col>
                                <Col span={12} className={styles.card_overview_content_items} >
                                    <div className={styles.card_overview_info}>
                                        <NormalText className={styles.card_overview_content_title}>
                                            Students
                                        </NormalText>
                                        <BoldText className={styles.card_overview_content_value}>
                                            100
                                        </BoldText>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    {/* card teachers */}
                    <Col span={6}>
                        <Card className={styles.card_overview}>
                            <Row className={styles.card_overview_content}>
                                <Col span={10} className={styles.card_overview_content_items}>
                                    <Image src={iconTeachersDashboard} alt="icon-students-dashboard" />
                                </Col>
                                <Col span={4} className={styles.card_overview_content_items} >
                                    <Image src={iconLine} alt="icon-line" />
                                </Col>
                                <Col span={10} className={styles.card_overview_content_items} >
                                    <div className={styles.card_overview_info}>
                                        <NormalText className={styles.card_overview_content_title}>
                                            Teachers
                                        </NormalText>
                                        <BoldText className={styles.card_overview_content_value}>
                                            100
                                        </BoldText>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    {/* card parents */}
                    <Col span={6}>
                        <Card className={styles.card_overview}>
                            <Row className={styles.card_overview_content}>
                                <Col span={10} className={styles.card_overview_content_items}>
                                    <Image src={iconParentsDashboard} alt="icon-students-dashboard" />
                                </Col>
                                <Col span={4} className={styles.card_overview_content_items} >
                                    <Image src={iconLine} alt="icon-line" />
                                </Col>
                                <Col span={10} className={styles.card_overview_content_items} >
                                    <div className={styles.card_overview_info}>
                                        <NormalText className={styles.card_overview_content_title}>
                                            Parents
                                        </NormalText>
                                        <BoldText className={styles.card_overview_content_value}>
                                            100
                                        </BoldText>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    {/* card earnings */}
                    <Col span={6}>
                        <Card className={styles.card_overview}>
                            <Row className={styles.card_overview_content}>
                                <Col span={10} className={styles.card_overview_content_items}>
                                    <Image src={iconEarningDashboard} alt="icon-students-dashboard" />
                                </Col>
                                <Col span={4} className={styles.card_overview_content_items} >
                                    <Image src={iconLine} alt="icon-line" />
                                </Col>
                                <Col span={10} className={styles.card_overview_content_items} >
                                    <div className={styles.card_overview_info}>
                                        <NormalText className={styles.card_overview_content_title}>
                                            Earning
                                        </NormalText>
                                        <BoldText className={styles.card_overview_content_value}>
                                            100
                                        </BoldText>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                {/* card detail */}
                <Row justify={"space-between"} gutter={[40, 0]}>
                    {/* card detail earnings */}
                    <Col span={12}>
                        <Card className={styles.card_detail}>
                            <Row>
                                <Col span={22}>
                                    <BoldText className={styles.card_detail_content_title}>
                                        Earnings
                                    </BoldText>
                                </Col>
                                <Col span={2}>
                                    <Image src={iconMore} alt="icon-more" />
                                </Col>
                            </Row>
                            <Row >
                                <Col span={8}>
                                    <Row justify={"center"}>
                                        <Image src={iconTotal} alt="icon-total" />
                                        <NormalText className={styles.card_detail_earning_title}>
                                            Total Collections
                                        </NormalText>
                                    </Row>
                                    <Row justify={"center"}>
                                        <Col>
                                            <BoldText className={styles.card_detail_content_title}>
                                                {totalValue}
                                            </BoldText>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={8}>
                                    <Row justify={"center"}>
                                        <Image src={iconFees} alt="icon-fees" />
                                        <NormalText
                                            className={styles.card_detail_earning_title}>
                                            Fees Collections
                                        </NormalText>
                                    </Row>
                                    <Row justify={"center"}>
                                        <Col>
                                            <BoldText className={styles.card_detail_content_title}>
                                                {feesValue}
                                            </BoldText>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={8}>
                                    <Row className="date-picker-no-border" justify={"center"}>
                                        <DatePicker
                                            bordered={false}
                                            style={{ padding: 0 }}
                                            value={date} format={"DD/MM/YYYY"}
                                            onChange={onChangeDate}
                                            clearIcon={false}
                                        />
                                    </Row>
                                </Col>
                            </Row>
                            <Row className={styles.chart_css}>
                                <Col span={24} className={styles.block_chart}>
                                    <div className={styles.bar_chart}>
                                        {isPending ? <LoadingOutlined /> : <EarningsChartdd earningData={dataEarning} />}
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    {/* card detail expense */}
                    <Col span={6}>
                        <Card className={styles.card_detail}>
                            <Row>
                                <Col span={22}>
                                    <BoldText className={styles.card_detail_content_title}>
                                        Expenses
                                    </BoldText>
                                </Col>
                                <Col span={2}>
                                    <Image src={iconMore} alt="icon-more" />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <Row justify={"center"}>
                                        <NormalText className={styles.card_expenses_earning_title}>
                                            mm/yy
                                        </NormalText>
                                    </Row>
                                    <Row justify={"center"}>
                                        <Col>
                                            <BoldText className={styles.card_expenses_value}>
                                                100
                                            </BoldText>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={8}>
                                    <Row justify={"center"}>
                                        <NormalText className={styles.card_expenses_earning_title}>
                                            mm/yy
                                        </NormalText>
                                    </Row>
                                    <Row justify={"center"}>
                                        <Col>
                                            <BoldText className={styles.card_expenses_value}>
                                                100
                                            </BoldText>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={8}>
                                    <Row justify={"center"}>
                                        <NormalText className={styles.card_expenses_earning_title}>
                                            mm/yy
                                        </NormalText>
                                    </Row>
                                    <Row justify={"center"}>
                                        <Col>
                                            <BoldText className={styles.card_expenses_value}>
                                                100
                                            </BoldText>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    {/* <ExpensesChart /> */}
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    {/* card detail students */}
                    <Col span={6}>
                        <Card className={styles.card_detail}>
                            <Row>
                                <Col span={22}>
                                    <BoldText className={styles.card_detail_content_title}>
                                        Students
                                    </BoldText>
                                </Col>
                                <Col span={2}>
                                    <Image src={iconMore} alt="icon-more" />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </>
    );
};

export default DashBoardPage;

export async function getStaticProps(context: any) {
    return {
        props: {
            defaultSelectedKeys: [MenuKeys.Dashboard],
            openKeys: [],
        },
    }
};