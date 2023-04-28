import { Button, Layout, Avatar, Space } from 'antd';
import React from "react";
import { useNavigate } from 'react-router-dom';
import { logOut } from "../../service/AuthService";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import './Header.css';

const { Header } = Layout;

export const NavBar = () => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};

    const navigate = useNavigate();

    const onLogOut = () => {
        logOut(userInfo.token).then(res => {
            window.localStorage.removeItem("userInfo");
            navigate('/logIn');
        }).catch((err) => { console.log(err); });
    }

    return (<>
        {userInfo.token && <Header>
            <Button icon={<LogoutOutlined />} type="link" onClick={onLogOut}>Sign Out</Button>
            <Space size={16} wrap>
                <Avatar className='avatar' icon={<UserOutlined />} />
            </Space>
        </Header>}
    </>
    );
};