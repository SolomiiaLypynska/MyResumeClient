import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row, Space, Divider, Typography } from 'antd';
import React, { useState } from "react";
import './WorkExperience.css';
import { WorkExperienceModal } from './WorkExperienceModal';

export const WorkExperience = ({ profileUser, getProfileUser }) => {
    const { Title } = Typography;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
//TODO add List from antd
//TODO add Popconfirm for delete antd
    return (<>
        <Row className='experience-title' justify={'space-between'} gutter={[24]} > 
        <Title level={4}>Experience</Title> 
        <Button icon={<PlusOutlined className='experience-button' />} type="text" onClick={showModal} />
            {/* <Col span={1}> <Button icon={<EditOutlined className='experience-button' />} type="text" /> </Col> */}
        </Row>

        {profileUser?.workExperiences?.map((profile, index) => <div key={profile.workExperienceId} className='experience-block'>
            <Row key={"position"} justify={'space-between'} gutter={[24]} align="top">
                <Col span={22} > 
                <Divider orientation="left">{profile.positionTitle} </Divider> </Col>
            </Row>
            <Row key={"employmentType"} gutter={[24]} >
                <Col  > <Space >{profile.companyName}</Space> </Col>
            </Row>
            <Row key={"employmentType"} gutter={[24]} >
                <Col > <Space >{profile.employmentType}</Space> </Col>
            </Row>
            <Row key={"employmentDate"} gutter={[24]} >
                <Col  > <Space wrap size={16}>{profile.startDate} - {profile.endDate ? profile.endDate : "Present"}
                </Space> </Col>
            </Row>
        </div>
        )}
        <WorkExperienceModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} getProfileUser={getProfileUser} />
    </>
    )
};