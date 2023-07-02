import React, { useEffect, useState } from "react";
import { Layout } from 'antd';
import dynamic from "next/dynamic";
import { NextRouter, useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import Header from "src/infrastructure/common/layout/Header";
import Content from "src/infrastructure/common/layout/Content";
import styles from 'assets/styles/common/layout/MainLayout.module.css'
import { useTranslation } from "react-i18next";
import LoggerService from "src/infrastructure/services/LoggerService";
import LocalStorageService from "src/infrastructure/services/LocalStorageService";
import Constant from "src/core/application/common/Constants";
import { ProfileManagementService } from "src/infrastructure/identity/profile/service/ProfileManagementService";
import Cookie from "src/core/application/common/models/Cookies";
import { GetMeQuery } from "src/graphql/my-profile/GetMeQuery.graphql";
import { filterError, setUserRole } from "src/infrastructure/helpers";
import SuccessResponse from "src/core/application/dto/common/responses/SuccessResponse";
import { setRecoilStateAsync } from "../libs/recoil-outside/Service";
import { ProfileState, RoleNameLoginState } from "src/core/application/common/atoms/Identity/Profile/ProfileState";
import FailureResponse from "src/core/application/dto/common/responses/FailureResponse";
import { notifyError } from "../components/controls/toast/toast-message";
import Constants from "src/core/application/common/Constants";
import { FullPageLoading } from "../components/controls/loading";
import jwtDecode from "jwt-decode";

const LeftMenu = dynamic(() => import('src/infrastructure/common/layout/LeftMenu'), { ssr: false });

const getMyProfileAsync = async (
    translator: any,
    router: NextRouter,
    cookie: Cookie,
    loggerService: LoggerService,
    setUserRole: Function,
    setLoading: Function,
) => {
    const localStorageService = new LocalStorageService();
    let response = await new ProfileManagementService().getMyProfileAccountAsync(
        GetMeQuery,
        cookie,
    );
    if (response.status === 200) {
        let arrRole = (response as SuccessResponse).data.getMe.user.role;

        setUserRole(arrRole);

        await setRecoilStateAsync(ProfileState, {
            data: (response as SuccessResponse).data.getMe.user,
        })


        await setRecoilStateAsync(RoleNameLoginState, {
            data: (response as SuccessResponse).data.getMe.user.role,
        });
    }
    if (response.status === 202) {
        let errors = (response as FailureResponse)?.errors;
        if (errors != null && errors.length > 0) {
            notifyError(translator, filterError(errors));
            localStorageService.setStorage(Constants.API_TOKEN_STORAGE, new Cookie(false, "", ""));
            setLoading(false);
        }
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
        if (!storage.logged_in) {
            router.push('/account/sign-in.html');
        }
    }, [storage, router]);

    useEffect(() => {
        getMyProfileAsync(t, router, storage, loggerService, setUserRole, setLoading);
    }, []);



    

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
