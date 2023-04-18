import React from 'react';

import { Menu } from 'antd';

export const MenuUI = ({children, props}:any) => (
    <Menu {...props}>
        {children}
    </Menu>
);


