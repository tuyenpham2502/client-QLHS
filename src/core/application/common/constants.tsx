import {
    MenuTheme
} from "antd";
import Image from 'next/image'
import iconDashBoard from 'assets/icons/icon-dashBoard.png'
import iconStudent from 'assets/icons/icon-student.png'
import iconArrow from 'assets/icons/icon-arrow.png'
import iconParents from 'assets/icons/icon-parents.png'
import iconTeacher from 'assets/icons/icon-teachers.png'
import iconAccount from 'assets/icons/icon-account.png'
import iconSubject from 'assets/icons/icon-subject.png'
import iconSetting from 'assets/icons/icon-setting.png'
import Menu from "@/core/application/common/models/LeftMenu/Menu";
import MenuItem from "@/core/application/common/models/LeftMenu/MenuItem";
import { MenuKeys } from "@/core/domain/enums/MenuKeys";
import type { NotificationPlacement } from 'antd/es/notification/interface';
import GroupedMenuItem from "./models/LeftMenu/GroupedItem";



export default class Constant {
    
    static API_TOKEN_STORAGE: string = "API_TOKEN";
    static ACCESS_TOKEN: string ="access_token";
    
    static ToastMessage = class {
        static Notification = class {
            static Position: NotificationPlacement = "topRight";
            static Duration: number = 3;
        };
        static Confirmation = class { };
    };

    static AppTheme: MenuTheme = "dark";

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
                    <Image src={iconDashBoard} alt='Dashboard' />,
                    "Dashboard",
                    "Dashboard",
                    ['admin','user'],
                    "/"
                ),
                new GroupedMenuItem(
                    [],
                    MenuKeys.Students,
                    <Image src={iconStudent} alt='Student' />,
                    "Students",
                    "Students",
                    ['admin','user'],
                    [
                        new MenuItem(
                            [],
                            MenuKeys.AllStudents,
                            <Image src={iconArrow} alt='Arrow' />,
                            "All Students",
                            "All Students",
                            ['admin','user'],
                            "/students/all-students/list"
                        ),
                        new MenuItem(
                            [],
                            MenuKeys.AddStudents,
                            <Image src={iconArrow} alt='Arrow' />,
                            "Add Students",
                            "Add Students",
                            ['admin'],
                            "/students/add-students"
                        ),
                        new MenuItem(
                            [],
                            MenuKeys.PromotionStudents,
                            <Image src={iconArrow} alt='Arrow' />,
                            "Students Promotion",
                            "Students Promotion",
                            ['admin','user'],
                            "/students/students-promotion"
                        )
                    ]
                ),
                new GroupedMenuItem(
                    [],
                    MenuKeys.Teachers,
                    <Image src={iconTeacher} alt='Teachers' />,
                    "Teachers",
                    "Teachers",
                    ['admin','user'],
                    [
                        new MenuItem(
                            [],
                            MenuKeys.AllTeachers,
                            <Image src={iconArrow} alt='Arrow' />,
                            "All Teachers",
                            "All Teachers",
                            ['admin','user'],
                            "/teachers/all-teacher"
                        ),
                        new MenuItem(
                            [],
                            MenuKeys.AddTeacher,
                            <Image src={iconArrow} alt='Arrow' />,
                            "Add Teachers",
                            "Add Teachers",
                            ['admin','user'],
                            "/teachers/add-teacher"
                        ),
                    ]
                ),
                new GroupedMenuItem(
                    [],
                    MenuKeys.Account,
                    <Image src={iconAccount} alt='Account' />,
                    "Account",
                    "Account",
                    ['admin','user'],
                    [
                        new MenuItem(
                            [],
                            MenuKeys.FeesGroup,
                            <Image src={iconArrow} alt='Arrow' />,
                            "Fees Group",
                            "Fees Group",
                            ['admin','user'],
                            "/account/fees-group"
                        ),
                        new MenuItem(
                            [],
                            MenuKeys.StudentFees,
                            <Image src={iconArrow} alt='Arrow' />,
                            "Student Fees",
                            "Student Fees",
                            ['admin','user'],
                            "/account/student-fees",
                        ),
                        new MenuItem(
                            [],
                            MenuKeys.Expenses,
                            <Image src={iconArrow} alt='Arrow' />,
                            "Expenses",
                            "Expenses",
                            ['admin','user'],
                            "/account/expenses"
                        ),
                        new MenuItem(
                            [],
                            MenuKeys.AddExpenses,
                            <Image src={iconArrow} alt='Arrow' />,
                            "Add Expenses",
                            "Add Expenses",
                            ['admin','user'],
                            "/account/add-expenses"
                        ),
                        ]
                ),
                new MenuItem(
                    [],
                    MenuKeys.Subjects,
                    <Image src={iconSubject} alt='Subject' />,
                    "Subjects",
                    "Subjects",
                    ['admin','user'],
                    "/subjects"
                ),
                new MenuItem(
                    [],
                    MenuKeys.Settings,
                    <Image src={iconSetting} alt='Settings' />,
                    "Settings",
                    "Settings",
                    ['admin','user'],
                    "/settings"
                ),
            ],
        )
    }

    static GenderOptions = [
        {
            label:"Male",
            value:"Male"
        },
        {
            label:"Female",
            value:"Female"
        },
        {
            label:"Other",
            value:"Other"
        }
    ];

    static ClassOptions = [
        {
            label:"Grade 1",
            options:[
                {
                    label:"1A",
                    value:"1A"
                },
                {
                    label:"1B",
                    value:"1B"
                },
                {
                    label:"1C",
                    value:"1C"
                },
                {
                    label:"1D",
                    value:"1D"
                },
            ]
        },
        {
            label:"Grade 2",
            options:[
                {
                    label:"2A",
                    value:"2A"
                },
                {
                    label:"2B",
                    value:"2B"
                },
                {
                    label:"2C",
                    value:"2C"
                },
                {
                    label:"2D",
                    value:"2D"
                },
            ]
        },
        {
            label:"Grade 3",
            options:[
                {
                    label:"3A",
                    value:"3A"
                },
                {
                    label:"3B",
                    value:"3B"
                },
                {
                    label:"3C",
                    value:"3C"
                },
                {
                    label:"3D",
                    value:"3D"
                },
            ]
        },
        {
            label:"Grade 4",
            options:[
                {
                    label:"4A",
                    value:"4A"
                },
                {
                    label:"4B",
                    value:"4B"
                },
                {
                    label:"4C",
                    value:"4C"
                },
                {
                    label:"4D",
                    value:"4D"
                },
            ]
        },
        {
            label:"Grade 5",
            options:[
                {
                    label:"5A",
                    value:"5A"
                },
                {
                    label:"5B",
                    value:"5B"
                },
                {
                    label:"5C",
                    value:"5c"
                },
                {
                    label:"5D",
                    value:"5d"
                },
            ]
        }
    ];

    static BloodGroupOptions = [
        {
            label:"A",
            value:"A"
        },
        {
            label:"B",
            value:"B"
        },
        {
            label:"AB",
            value:"AB"
        },
        {
            label:"O",
            value:"O"
        },
    ];

    static ReligionOptions = [
        {
            label:"Islam",
            value:"Islam"
        },
        {
            label:"Hindu",
            value:"Hindu"
        },
        {
            label:"Christian",
            value:"Christian"
        },
        {
            label:"Buddhist",
            value:"Buddhist"
        },
        {
            label:"Others",
            value:"Others"
        },
        {
            label:"None",
            value:"None"
        }
    ];


    static Logger = class {
        static DateTimeFormat = "yyyy-MM-DD HH:mm:ss.SSSS";
        static DateFormat = "yyyy-MM-DD";
    };


}