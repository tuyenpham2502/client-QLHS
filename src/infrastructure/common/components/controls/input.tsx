import React from "react";
import { Input, Row } from 'antd';
import styles from 'styles/pages/account/sign-in.module.css'
import { MessageError } from "./message-error";

type Props = {
    placeholder: string;
    value: string;
    onChange: (e: any) => void;
    prefix?: any;
    size?: any;
    onBlur?: () => void;
    bordered?: boolean;
}


const InputText = (props: Props) => {
    const { placeholder, value, onChange, prefix, size, onBlur,bordered } = props;

    return (
        <Input
            prefix={prefix}
            style={{ width: '100%' }}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            size={size}
            onBlur={onBlur}
            bordered={bordered}
        />
    )
};

export { InputText };
