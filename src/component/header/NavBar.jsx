import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout } from 'antd';
import React from "react";
import { useNavigate } from 'react-router-dom';
import { logOut } from "../../service/AuthService";
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
    };

    const items = [
        {
            key: 'logout',
            label: (<Button icon={<LogoutOutlined />} type="link" onClick={onLogOut}>Sign Out</Button>)
        }
    ];

    return (<>
        {userInfo.token && <Header>
            <Dropdown menu={{ items }} trigger={['click']}>
                <Avatar className='avatar' icon={<UserOutlined />} />
            </Dropdown>
        </Header>}
    </>
    );
};