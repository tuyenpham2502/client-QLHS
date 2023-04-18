import React,{useState} from "react";
import { Layout } from "antd";
import { MenuUI } from "@/infrastructure/common/components/menu/menu";
import Constant from "@/core/application/common/constants";
import { MenuSubKeys } from "@/core/domain/enums/MenuKeys";
const LeftMenu = ({ context, translator }: any) => {

    const [openKeys, setOpenKeys] = useState(context?.openKeys);

    const root = Constant.MenuConfig.MainMenu;


    const onOpenChange = (keys:any) => {
        const latestOpenKey = keys.find(((key: any) => openKeys?.indexOf(key) === -1));
        if (MenuSubKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
        
    return (
        <Layout.Sider>
            <MenuUI 
                theme={root.theme}
                mode={root.mode}
                defaultSelectedKeys={context?.defaultSelectedKeys}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
            >
                

            </MenuUI>
        </Layout.Sider>
    );
};

export default LeftMenu;