import React from "react";
import { Layout } from 'antd';
import LeftMenu from "src/infrastructure/common/layout/LeftMenu";
import Header from "src/infrastructure/common/layout/Header";
import Content from "src/infrastructure/common/layout/Content";
import { auth } from "@/infrastructure/services/firebase";
const MainLayout = ({ context, translator, ...props }: any) => {
    return (
        <Layout>
            <LeftMenu context={context} translator={translator} />
            <Layout>
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
