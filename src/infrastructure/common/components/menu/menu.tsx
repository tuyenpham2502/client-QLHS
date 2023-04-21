import React from 'react';

import { Menu } from 'antd';
const {SubMenu} = Menu;
export const MenuUI = ({children, props}:any) => (
    <Menu {...props}>
        {children}
    </Menu>
);

export const SubMenuUI = ({children, ...props }:any) => {
        return <SubMenu {...props}>{children}</SubMenu>;
};


export const MenuItemUI = ({children, ...props }:any) => {
    
        return <Menu.Item {...props}>{children}</Menu.Item>;
};


