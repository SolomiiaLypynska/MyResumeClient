import { Breadcrumb, Layout, theme } from 'antd';
import React, { useEffect, useState } from "react";
import { getUser } from "../../service/UserService";
import { ProfileAvatar } from './profileAvatar/ProfileAvatar';
import { WorkExperience } from './workExperience/WorkExperience';

const { Content, Footer } = Layout;

export const Profile = () => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};

    const [profileUser, setProfileUser] = useState({});
    const { token: { colorBgContainer } } = theme.useToken();

    useEffect(() => {
        getProfileUser();
    }, []);

    const getProfileUser = () => {
        getUser(userInfo.userId, userInfo.token).then(res => {
            setProfileUser(res);
        }).catch((err) => { console.log(err); });
    }

    return (
        <Layout style={{ minHeight: '100vh' }} >
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb items={[{ title: 'User' },
                    { title: <a href="">{profileUser.firstName}</a> }]} />
                    <div style={{ padding: 24, minHeight: 700, background: colorBgContainer }}>
                        <ProfileAvatar profileUser={profileUser} />
                        <WorkExperience profileUser={profileUser} getProfileUser={getProfileUser} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>My-Resume ©2023 Created by S.L.</Footer>
            </Layout>
        </Layout>
    )
};