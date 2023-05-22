import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Row, Space } from 'antd';
import React from "react";

export const ProfileAvatar = ({ profileUser }) => {

    return (<>
        <Row justify={'space-between'} gutter={[24]}>
            <Col span={3}> <Space wrap size={16}> <Avatar size={80} icon={<UserOutlined />} /> </Space> </Col>
        </Row>
        <Row justify={'space-between'} gutter={[24]} >
            <Col span={3}> <Space wrap size={16}><b>{`${profileUser.firstName} ${profileUser.lastName}`}</b></Space> </Col>
        </Row>
    </>
    )
};