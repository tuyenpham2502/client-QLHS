import React, { useEffect, useState } from "react";
import { Layout } from 'antd';
import {NextRouter, useRouter} from "next/router";
import { useRecoilValue } from "recoil";
import LeftMenu from "src/infrastructure/common/layout/LeftMenu";
import Header from "src/infrastructure/common/layout/Header";
import Content from "src/infrastructure/common/layout/Content";
import styles from 'assets/styles/common/layout/MainLayout.module.css'
import { useTranslation } from "react-i18next";
import LoggerService from "@/infrastructure/services/LoggerService";
import LocalStorageService from "@/infrastructure/services/LocalStorageService";
import Constant from "@/core/application/common/Constants";
import { ProfileManagementService } from "@/infrastructure/identity/profile/service/ProfileManagementService";
import Cookie from "@/core/application/common/models/Cookies";
import { GetMeQuery } from "@/graphql/account/GetMeQuery.graphql";
import { setUserRole } from "@/infrastructure/helpers";
import SuccessResponse from "@/core/application/dto/common/responses/SuccessResponse";
import { setRecoilStateAsync } from "../libs/recoil-outside/Service";
import { ProfileState } from "@/core/application/common/atoms/Identity/Profile/ProfileState";

const getMyProfileAsync = async (
    translator: any,
    router: NextRouter,
    cookie: Cookie,
    loggerService: LoggerService,
    setUserRole: Function,
    setLoading: Function,
) => {
    let response = await new ProfileManagementService().getMyProfileAccountAsync(
        GetMeQuery,
        cookie,
        );
        if(response.status === 200) {
            let arr = (response as SuccessResponse).data;
            await setRecoilStateAsync(ProfileState,{
                data: (response as SuccessResponse).data.getMe.user, 
            })
        }
        return response;
    };




const MainLayout = ({ context, translator, ...props }: any) => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const dataProfile = useRecoilValue(ProfileState);
    const loggerService = new LoggerService();
    const localStorageService = new LocalStorageService();
    let storage = localStorageService.readStorage(Constant.API_TOKEN_STORAGE);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if(!storage.logged_in) {
            router.push('/account/sign-in.html');
        }
    }, [storage,router]);
    
    
    useEffect(() => {
        getMyProfileAsync(t, router, storage, loggerService, setUserRole, setLoading);
    }, []);

    // console.log("dataProfile",dataProfile);
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
