import { Menu } from "antd";


export const CommonMenuItem = ({permission="", onClick, children,...props}:any) => {
    return (
        <Menu.Item {...props} onClick={onClick}>
        {children}
        </Menu.Item>
    );
    }
export default CommonMenuItem;
