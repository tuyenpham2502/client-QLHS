import React, { useEffect, useState } from "react";
import { Layout } from 'antd';
import {useRouter} from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import LeftMenu from "src/infrastructure/common/layout/LeftMenu";
import Header from "src/infrastructure/common/layout/Header";
import Content from "src/infrastructure/common/layout/Content";
import styles from 'assets/styles/common/layout/MainLayout.module.css'
    import { useSetRecoilState } from "recoil";


const MainLayout = ({ context, translator, ...props }: any) => {
    const router = useRouter();

    


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
