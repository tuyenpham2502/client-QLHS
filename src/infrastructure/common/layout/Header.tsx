import React, { useState } from 'react';
import Link from 'next/link';
import { Layout, Button, Row, Col, Avatar, Dropdown, } from 'antd';
import { useRouter } from 'next/router';
import type { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import {
    LogoutOutlined,
    SearchOutlined,
    MailOutlined,
    BellOutlined,
    LineOutlined,
    UserOutlined
} from '@ant-design/icons';
import { InputText } from '@/infrastructure/common/components/controls/input';
import { BoldText } from '../components/controls/text';
import { logOutAsync } from 'src/infrastructure/identity/account/effect/LogOutEffect';
import styles from 'assets/styles/common/layout/Header.module.css'
import LoggerService from '@/infrastructure/services/LoggerService';
const Header = ({ context, translator, ...props }: any) => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const [textSearch, setTextSearch] = useState('');
    const loggerService = new LoggerService();

    const onChange = (e: any) => {
        setTextSearch(e.target.value);
    }

    const onBlurSearch = () => {
        setTextSearch(textSearch.trim());
    }

    const onLogout = async () => {
        await logOutAsync(
            t,
            false,
            router,
            loggerService,
            context
        );
    }



    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                    <Link href="/profile">
                        <BoldText>Profile</BoldText>
                    </Link>
            ),
        },
        {
            key: '2',
            label: (
                    <Link href="/authenticate/change-password.html">
                        <BoldText>Change Password</BoldText>
                    </Link>
            ),
        },
        {
            key: '3',
            label: (
                <div onClick={onLogout}>
                    <BoldText>Sign Out</BoldText>
                </div>
            ),
        }
    ];

    return (
        <Layout.Header className={styles.header_main_layout_background}>
            <Row>
                <Col span={16} className={styles.left_header_layout} >
                    <InputText placeholder="Search"
                        onBlur={onBlurSearch} onChange={onChange}
                        bordered={false} 
                        size={"large"}
                        value={textSearch}
                        prefix={<SearchOutlined
                            style={{
                                color: "#a3a3a3",
                                fontSize: "22px"
                            }} />}
                        />
                </Col>
                <Col span={8} className={styles.right_header_layout} >
                    <div className={styles.icon_right_header}>
                        <MailOutlined style={{ color: "#D60A0B", fontSize: "18px" }} />
                    </div>
                    <div className={styles.icon_right_header}>
                        <BellOutlined style={{ color: "#D60A0B", fontSize: "18px" }} />
                    </div>
                    <div className={styles.icon_right_header}>
                        <LineOutlined style={{ color: "#D60A0B", fontSize: "18px" }} rotate={90} />
                    </div>
                    <Dropdown menu={{ items }} placement="bottomRight" trigger={['hover']} >
                        <div className={styles.icon_right_header}>
                            <Avatar icon={<UserOutlined />} size={40} />
                        </div>
                    </Dropdown>
                </Col>
            </Row>
        </Layout.Header>
    );
};

export default Header;
