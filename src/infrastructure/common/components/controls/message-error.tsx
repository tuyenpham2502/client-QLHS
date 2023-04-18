import { Typography } from 'antd';
import React from 'react';
import "assets/css/common/components/MessageError.module.css";

const { Text, Title, Link } = Typography;

export const MessageError = ({ isError, message }:any) => {

    return (
        <>
            {
                isError === true && message && message.length ?
                    <div className="message-error" style={{ color: "red" }}>{message}</div>
                    :
                    null
            }
        </>
    );
};


