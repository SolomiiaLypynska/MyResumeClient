import { Button, Layout } from 'antd';
import React from "react";
import { useNavigate } from 'react-router-dom';
import { logOut } from "../../service/AuthService";

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
        {userInfo.token &&<Header>
             <Button onClick={onLogOut}>Log out</Button>
        </Header>}
    </>
    );
};