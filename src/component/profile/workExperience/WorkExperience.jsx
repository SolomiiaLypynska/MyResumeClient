import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row, Space, Divider, Typography } from 'antd';
import React, { useState } from "react";
import './WorkExperience.css';
import { WorkExperienceModal } from './WorkExperienceModal';
import moment from "moment";

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
                <Col span={22}><Divider orientation="left">{profile.positionTitle}</Divider></Col>
            </Row>
            <Row key={"companyName"} gutter={[24]}>
                <Col> <Space ><span className='experience-title'>Company:</span><b>{profile.companyName}</b></Space> </Col>
            </Row>
            <Row key={"employmentDate"} gutter={[24]}><Col><Space wrap size={16}>
                {moment(profile.startDate).format("MMM YYYY")}-
                {profile.endDate ? moment(profile.endDate).format("MMM YYYY") : "Present"}</Space></Col>
            </Row>
            <Row key={"employmentType"} gutter={[24]}>
                <Col> <Space ><span className='experience-title'>Employment Type:</span><b>{profile.employmentType}</b></Space> </Col>
            </Row>
            {profile?.description && <Row key={"description"} gutter={[24]}>
                <Col> <Space ><span className='experience-title'>Description:</span><b>{profile.description}</b></Space> </Col>
            </Row>}
        </div>
        )}
        <WorkExperienceModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} getProfileUser={getProfileUser} />
    </>
    )
};