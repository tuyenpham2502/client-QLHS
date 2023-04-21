import React from "react";
import { Layout } from 'antd';
import LeftMenu from "src/infrastructure/common/layout/LeftMenu";
import Header from "src/infrastructure/common/layout/Header";
import Content from "src/infrastructure/common/layout/Content";
import { auth } from "@/infrastructure/services/firebase";
import styles from 'assets/styles/common/layout/MainLayout.module.css'
const MainLayout = ({ context, translator, ...props }: any) => {
    return (
        <Layout className={styles.qlhs_main_layout}>
            <LeftMenu context={context} translator={translator} />
            <Layout className={styles.qlhs_main_content}>
                <Header context={context} translator={translator} />
                <Content context={context} translator={translator}>
                    {props.children}
                </Content>
                {/* <Footer context={context} translator={translator} /> */}
            </Layout>
        </Layout>
    )
};

export default MainLayout;
