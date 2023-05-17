import React, { useEffect } from "react";
import { Layout } from 'antd';
import router from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import LeftMenu from "src/infrastructure/common/layout/LeftMenu";
import Header from "src/infrastructure/common/layout/Header";
import Content from "src/infrastructure/common/layout/Content";
import { auth } from "@/infrastructure/services/firebase";
import styles from 'assets/styles/common/layout/MainLayout.module.css'
const MainLayout = ({ context, translator, ...props }: any) => {

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log("user is logged in", uid)
            } else {
                router.push('/authenticate/sign-in.html');
                console.log("user is logged out")
            }
        });

    });
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
