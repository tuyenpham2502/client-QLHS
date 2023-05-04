import { Layout } from 'antd';
import React from 'react';
import styles from 'assets/styles/common/layout/Content.module.css'

const Content = ({ context, translator, ...props }: any) => {
    return (
        <Layout.Content className={styles.layout_content} >
            <div className={styles.main_layout_background}>
                {props.children}
            </div>
        </Layout.Content>
    );
};
export default Content;
