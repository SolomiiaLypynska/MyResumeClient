import { UserOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Col, Layout, Row, Space, theme } from 'antd';
import React, { useEffect, useState } from "react";
import { getUser } from "../../service/UserService";

const { Content, Footer } = Layout;

export const Profile = () => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};

    const [user, setUser] = useState({});
    const { token: { colorBgContainer } } = theme.useToken();

    useEffect(() => {
        findUser();
    }, []);

    const findUser = () => {
        getUser(userInfo.userId, userInfo.token).then(res => {
            setUser(res);
        }).catch((err) => { console.log(err); });
    }

    return (
        <Layout style={{ minHeight: '100vh' }} >
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb items={[{ title: 'User' },
                    { title: <a href="">{user.firstName}</a> }]} />
                    <div style={{ padding: 24, minHeight: 700, background: colorBgContainer }}>
                        <Row justify={'space-between'} gutter={[24]}>
                            <Col span={3}> <Space wrap size={16}> <Avatar size={80} icon={<UserOutlined />} /> </Space> </Col>
                        </Row>
                        <Row justify={'space-between'} gutter={[24]} >
                            <Col span={3}> <Space wrap size={16}><b>{`${user.firstName} ${user.lastName}`}</b></Space> </Col>
                        </Row>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>My-Resume ©2023 Created by S.L.</Footer>
            </Layout>
        </Layout>
    )
};