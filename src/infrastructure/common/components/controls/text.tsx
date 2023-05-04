import { Typography } from 'antd';
import React from 'react';
import styles from 'assets/styles/common/components/controls/text.module.css'

const { Text, Title, Link } = Typography;

export const NormalText = ({ className, children, ...props }:any) => {
    className = [className, styles.font, styles.size_text];
    return <Text
        className={className.join(" ")}
        {...props}
    >
        {children}
    </Text>
};

export const BoldText = ({ className, children, ...props }:any) => {
    className = [className, styles.font, styles.size_text, styles.bold];

    return (
        <Text className={className.join(" ")} {...props}>
            {children}
        </Text>
    );
};

export const LinkText = ({ href, className, fontSize = "14px", children, ...props }:any) => {
    return <Link
        href={href}
        //fontSize={""}
        className={className}
        {...props}
    >
        {children}
    </Link>
};

export const TitleText = ({ className, level, children, ...props }:any) => {
    return <Title

        level={level}
        className={className}
        {...props}
    >
        {children}
    </Title>
};

export const TextWithIcon = ({ className, label, children, icon, ...props }:any) => {
    className = [className, styles.font, styles.size_text, styles.bold];
    return <Text
        className={className.join(" ")}
        style={{
            color: "#000",
            display: "flex",
            alignItems: "center",

        }}
        {...props}
    >
        {/* <span style={{ marginRight: '20px', fontSize: "18px" }}>{icon}</span> */}
        <img style={{ width: "30px", height: "30px", marginRight: "10px" }} src={icon} />
        <div>
            <div className={styles.color_font}>{label} </div>
            <div style={{ fontSize: "20px" }}>{children}</div>
        </div>
    </Text>
};

export const ListStatisticalCustomer = ({ className, label, children, ...props }:any) => {
    className = [className, styles.font, styles.size_text, styles.bold];

    return (
        <Text
            className={className.join(" ")}
            style={{
                color: "#000",
                margin: "auto",
                textAlign: "center"
            }}
            {...props}
        >
            {/* <span style={{ marginRight: '20px', fontSize: "18px" }}>{icon}</span> */}
            {/* <img style={{ width: "30px", height: "30px", marginRight: "10px" }} src={icon} /> */}
            <span className={styles.color_font_statistical}>{label} </span>
            <br />
            <span style={{ fontSize: "20px", color: '#fff' }}>{children}</span>
        </Text>
    );
};

export const BoldTextUser = ({ className, children, ...props }:any) => {
    className = [className, styles.font];
    return <Text
        className={className.join(" ")}
        {...props}
    >
        {children}
    </Text>
};

export const BoldTextModalOrderTable = ({ className, children, ...props }:any) => {
    className = [className, styles.font, styles.size_text, styles.bold];
    return <Text
        className={className.join(" ")}
        style={{ color: "#fff" }}
        {...props}
    >
        {children}
    </Text>
};
