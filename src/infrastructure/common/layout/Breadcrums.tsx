import { Breadcrumb as AntBreadcrumb } from 'antd';
import React from 'react';
const Breadcrumb = ({ context, translator }: any) => {
    return (
        <AntBreadcrumb>
            <AntBreadcrumb.Item>{translator('User')}</AntBreadcrumb.Item>
            <AntBreadcrumb.Item>{translator('Bill')}</AntBreadcrumb.Item>
        </AntBreadcrumb>
    );
};
export default Breadcrumb;
