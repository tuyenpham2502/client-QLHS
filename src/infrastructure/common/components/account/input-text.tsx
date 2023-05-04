import React from "react";
import {Input, Row} from 'antd';
import styles from 'styles/pages/account/sign-in.module.css'

type Props = {
    placeholder: string;
    value : string;
    onChange: (e: any) => void;
}


const AccountInputText= (props:Props) => {
    const {placeholder, value, onChange} = props;

    return (
        <Row>
            <div>
                <Input 
                    style={{width: '100%'}}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                
            </div>
        </Row>
    )
}; 
