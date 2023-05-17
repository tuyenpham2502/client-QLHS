import { MenuKeys } from "@/core/domain/enums/MenuKeys";
import MainLayout from "@/infrastructure/common/layout/MainLayout";
import React from "react";


const AllStudentsPage = (context:any) => {
    return (
        <MainLayout context={context}>
        <div>
            AllStudentsPage
        </div>
        </MainLayout>
    )
};

export default AllStudentsPage;

export async function getStaticProps(context: any) {
    return {
        props: {
            defaultSelectedKeys: [MenuKeys.AllStudents],
            openKeys: [MenuKeys.Students],
        },
    }
};
