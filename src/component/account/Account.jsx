import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useEffect, useState } from "react";
import { getUser } from "../../service/UserService";

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
let items = [
    getItem('Profile', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />)
];

const { Content, Footer, Sider } = Layout;

export const Account = () => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};

    const [user, setUser] = useState({});
    const [collapsed, setCollapsed] = useState(false);
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

            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu theme="dark" defaultSelectedKeys={['']} mode="inline" items={items} />
            </Sider>

            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb items={[{ title: 'User' },
                    { title: <a href="">{user.firstName}</a> }]} />
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        USER ACCOUNT
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>My-Resume ©2023 Created by S.L.</Footer>
            </Layout>
        </Layout>
    )
};