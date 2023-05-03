import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout } from 'antd';
import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../../App";
import { logOut } from "../../service/AuthService";
import './NavBar.css';

const { Header } = Layout;

export const NavBar = () => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};
    const { setLogin, isLogin } = useContext(UserContext);

    const navigate = useNavigate();

    const onLogOut = () => {
        logOut(userInfo.token).then(res => {
            window.localStorage.removeItem("userInfo");
            setLogin(false);
            navigate('/logIn');
        }).catch((err) => { console.log(err); });
    };

    const items = [
        { key: 'profile', label: (<Link to="/profile" style={{ marginLeft: "30px" }}>My Profile</Link>) },
        { key: 'logout', label: (<Button icon={<LogoutOutlined />} type="link" onClick={onLogOut}>Sign Out</Button>) }
    ];

    return (<>
        {isLogin && <Header>
            <div className="profile-dropdown">
                <Dropdown menu={{ items }} ><Avatar className='avatar' icon={<UserOutlined />} /></Dropdown>
            </div>
        </Header>}
    </>
    );
};