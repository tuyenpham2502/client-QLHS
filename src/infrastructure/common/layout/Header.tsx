import React from 'react';
import { Layout, Button } from 'antd';
import { auth } from '@/infrastructure/services/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

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
        <Layout.Header>
            <div className="logo" />
            <Button type="primary" onClick={handleSignOut}>
                Sign out
            </Button>
        </Layout.Header>
    );
};

export default Header;
