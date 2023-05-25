import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row, Space } from 'antd';
import React, { useState } from "react";
import './WorkExperience.css';
import { WorkExperienceModal } from './WorkExperienceModal';

export const WorkExperience = ({ profileUser, getProfileUser }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    return (<div>
        <Row className='experience-title' justify={'space-between'} gutter={[24]} ><Col span={3}> <Space wrap size={16}>Experience</Space> </Col>
            <Col span={20} />
            <Col span={1}> <Button icon={<PlusOutlined className='experience-button' />} type="text" onClick={showModal} /> </Col>
            {/* <Col span={1}> <Button icon={<EditOutlined className='experience-button' />} type="text" /> </Col> */}
        </Row>

        {profileUser?.workExperiences?.map((profile, index) => <div key={profile.workExperienceId} className='experience-block'>
            <Row key={"position"} justify={'space-between'} gutter={[24]} align="top">
                <Col span={24} className='experience-col'> <Space wrap size={16}>{profile.positionTitle} {profile.companyName}
                </Space> </Col>
            </Row>
            <Row key={"employmentType"} gutter={[24]} >
                <Col span={24} className='experience-col'> <Space wrap size={16}>{profile.employmentType}
                </Space> </Col>
            </Row>
            <Row key={"employmentDate"} gutter={[24]} >
                <Col span={24} className='experience-col'> <Space wrap size={16}>{profile.startDate} - {profile.endDate ? profile.endDate : "Present"}
                </Space> </Col>
            </Row>
        </div>
        )}
        <WorkExperienceModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} getProfileUser={getProfileUser} />
    </div>
    )
};