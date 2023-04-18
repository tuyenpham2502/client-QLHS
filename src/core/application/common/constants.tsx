import {
    MenuTheme
} from "antd";
import {
    PieChartOutlined
} from "@ant-design/icons";
import Menu from "@/core/application/common/models/LeftMenu/Menu";
import MenuItem from "@/core/application/common/models/LeftMenu/MenuItem";
import {MenuKeys} from "@/core/domain/enums/MenuKeys";
import { AuthErrorCodes } from "firebase/auth";
import type { NotificationPlacement } from 'antd/es/notification/interface';



export default class Constant {

    static ToastMessage = class {
        static Notification = class {
            static Position: NotificationPlacement = "topRight";
            static Duration: number = 3;
        };
        static Confirmation = class { };
    };

    static AppTheme: MenuTheme = "light";
    
    static MenuConfig = class {
        static MainMenu = new Menu(
            Constant.AppTheme,
            "main-menu",
            [MenuKeys.Account],
            "inline",
            [
                new MenuItem(
                    [],
                    MenuKeys.Dashboard,
                    <PieChartOutlined />,
                    "Dashboard",
                    "Dashboard",
                    [],
                    "/"
                ),
            ],
        )
    }

    static AuthErrorCodes = class {
        static UserNotFound = {
            code: AuthErrorCodes.USER_DELETED,
            message: "User not found"
        };
        static InvalidPassword = {
            code: AuthErrorCodes.INVALID_PASSWORD,
            message: "Invalid password"
        };
        

    }
}