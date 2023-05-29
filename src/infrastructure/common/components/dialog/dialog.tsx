import React from 'react'
import { Button, Modal } from 'antd';
type Props = {
    title?: string,
    message: any,
    isOpenModalConfirm: boolean,
    handleCancel: () => void,
    handleOk: () => void,
}

const Dialog = (props: Props) => {
    const { title, message, handleOk, handleCancel, isOpenModalConfirm } = props;
    return (
        <>
            <Modal
                title={title ? title : ""}
                centered
                open={isOpenModalConfirm}
                closable={false}
                footer={
                    <div>
                        <Button  onClick={() => handleCancel()}>Cancel</Button>
                        <Button onClick={() => handleOk()}>Accept</Button>
                    </div>
                }
            >
                {message}
            </Modal>
        </>
    )
}
export default Dialog;