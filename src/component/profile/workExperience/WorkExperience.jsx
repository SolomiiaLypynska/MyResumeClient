import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Row, Typography } from 'antd';
import moment from "moment";
import React, { useEffect, useState } from "react";
import './WorkExperience.css';
import { WorkExperienceModal } from './WorkExperienceModal';

export const WorkExperience = ({ profileUser, getProfileUser }) => {
    const { Title } = Typography;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState({});

    useEffect(() => {
        !isModalOpen && setSelectedExperience({});
    }, [isModalOpen]);

    //TODO add List from antd
    //TODO add Popconfirm for delete antd
    return (<>
        <Row className='experience-title' justify={'space-between'} gutter={[24]} >
            <Title level={4}>Experience</Title>
            <Button icon={<PlusOutlined className='experience-button' />} type="text" onClick={() => setIsModalOpen(true)} />
            {/* <Col span={1}> <Button icon={<EditOutlined className='experience-button' />} type="text" /> </Col> */}
        </Row>

        {profileUser?.workExperiences?.map((profile, index) => <div key={profile.workExperienceId} className='experience-block'>
            <div className="left-component">
                <div><b>{profile.positionTitle}</b></div>
                <div><span className='experience-title'>Company:</span><b>{profile.companyName}</b></div>
                <div>{moment(profile.startDate).format("DD MMM YYYY")}-
                    {profile.endDate ? moment(profile.endDate).format("MMM YYYY") : "Present"}</div>
                <div><span className='experience-title'>Employment Type:</span><b>{profile.employmentType}</b></div>
                <div><span className='experience-title'>Description:</span><b>{profile.description}</b></div>
            </div>
            <div className="right-component">
                <Button style={{ color: "rgb(34 105 126)" }} type="text" shape="circle" icon={<EditOutlined />}
                    onClick={() => {
                        setIsModalOpen(true);
                        setSelectedExperience(profile)
                    }} />
                <Button style={{ color: "#d2464d" }} type="text" shape="circle" icon={<DeleteOutlined />} />
            </div>
        </div>
        )}
        <WorkExperienceModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} getProfileUser={getProfileUser}
            editableExperience={selectedExperience} />
    </>
    )
};