import { Layout } from 'antd';
import React from 'react';

const Content = ({ context, translator, ...props }: any) => {
    return (
        <Layout.Content >
            {/* <Breadcrumb context={context} translator={translator} /> */}
            <div>
                {props.children}
            </div>
        </Layout.Content>
    );
};
export default Content;
