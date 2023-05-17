import { MenuKeys } from "@/core/domain/enums/MenuKeys";
import MainLayout from "@/infrastructure/common/layout/MainLayout";
import React from "react";

export const SubjectsPage = (context: any) => {
    return (
        <MainLayout context={context}>
            <div>
                SubjectsPage
            </div>
        </MainLayout>
    )
};

export default SubjectsPage;

export async function getStaticProps(context: any) {
    return {
        props: {
            defaultSelectedKeys: [MenuKeys.Subjects],
            openKeys: [],
        },
    }
}