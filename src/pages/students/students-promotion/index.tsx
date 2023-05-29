import { MenuKeys } from "@/core/domain/enums/MenuKeys";
import MainLayout from "@/infrastructure/common/layout/MainLayout";
import React from "react";

export const PromotionStudentsPage = (context:any) => {
    return (
        <MainLayout context={context}>
            <div>
                PromotionStudentsPage
            </div>
        </MainLayout>

    )
};

export default PromotionStudentsPage;


export async function getStaticProps(context: any) {
    return {
        props: {
            defaultSelectedKeys: [MenuKeys.PromotionStudents],
            openKeys: [MenuKeys.Students],
        },
    }
};