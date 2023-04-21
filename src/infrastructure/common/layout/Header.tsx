import React from 'react';
import {
    LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Button, Row, Col } from 'antd';
import { auth } from '@/infrastructure/services/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { BoldText } from '../components/controls/text';
import styles from 'assets/styles/common/layout/Header.module.css'

const Header = ({ context, translator, ...props }: any) => {
    const router = useRouter();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            router.push('/account/sign-in.html');
        }).catch((error: any) => {
            console.log(error);
        });
    }
    return (
        <Layout.Header className={styles.header_main_layout_background}>
            <Row className={styles.header_right}>
                
                <Col span={3} className={styles.row_logout} >
                    <LogoutOutlined className={styles.icon_logout} />
                    <BoldText children={"Đăng xuất"} className={styles.text_logout} />
                </Col>
            </Row>
        </Layout.Header>
    );
};

export default Header;
