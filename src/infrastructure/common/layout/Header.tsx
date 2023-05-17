import React, { useState } from 'react';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import {
    LogoutOutlined,
    SearchOutlined,
    MailOutlined,
    BellOutlined,
    LineOutlined,
    UserOutlined
} from '@ant-design/icons';
import { profileState } from "@/core/application/common/atoms/Identity/profile";
import { Layout, Button, Row, Col, Avatar, Dropdown, } from 'antd';
import type { MenuProps } from 'antd';
import { InputText } from '@/infrastructure/common/components/controls/input';
import { auth } from '@/infrastructure/services/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { BoldText } from '../components/controls/text';
import styles from 'assets/styles/common/layout/Header.module.css'
const Header = ({ context, translator, ...props }: any) => {
    const profileRef = useRecoilValue(profileState);
    const router = useRouter();
    const [textSearch, setTextSearch] = useState('');
    
    const handleSignOut = () => {
        signOut(auth).then(() => {
            router.push('/authenticate/sign-in.html');
        }).catch((error: any) => {
            console.log(error);
        });
    }
    
    console.log("profileRef",profileRef);

    const onChange = (e: any) => {
        setTextSearch(e.target.value);
    }

    const onBlurSearch = () => {
        setTextSearch(textSearch.trim());
    }


    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div>
                    <Link href="/account/profile.html">
                        <BoldText>Profile</BoldText>
                    </Link>
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div>
                    <Link href="/authenticate/change-password.html">
                        <BoldText>Change Password</BoldText>
                    </Link>
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div onClick={handleSignOut}>
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
