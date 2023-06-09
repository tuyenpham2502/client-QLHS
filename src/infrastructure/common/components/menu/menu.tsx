import React from 'react';

import { Menu } from 'antd';
import { getUserRole } from '@/infrastructure/helpers';
const {SubMenu} = Menu;
export const MenuUI = ({children, ...props}:any) => (
    <Menu {...props}>
        {children}
    </Menu>
);

export const SubMenuUI = ({allowedPermissions, children, ...props }:any) => {
        let result
        const userRole = getUserRole();
        if (allowedPermissions && allowedPermissions.length > 0) {
            result = allowedPermissions.some((item: any) => userRole?.includes(item));
        }
        if(result) {
        return <SubMenu {...props}>{children}</SubMenu>;
        }
        return null;
    };


export const MenuItemUI = ({allowedPermissions, children, ...props }:any) => {
        let result
        const userRole = getUserRole();
        if (allowedPermissions && allowedPermissions.length > 0) {
            result = allowedPermissions.some((item: any) => userRole?.includes(item));
        }

        if(result){
        return <Menu.Item {...props}>{children}</Menu.Item>;
        }
        return null;
    };


