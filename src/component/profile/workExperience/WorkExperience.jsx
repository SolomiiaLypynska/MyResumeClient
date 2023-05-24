import { Button, Col, Row, Space } from 'antd';
import React from "react";
import './WorkExperience.css';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';

export const WorkExperience = ({ profileUser }) => {

    return (<div className='experience-title'>
        <Row justify={'space-between'} gutter={[24]} ><Col span={3}> <Space wrap size={16}>Experience</Space> </Col>
            <Col span={19} />
            <Col span={1}> <Button icon={<PlusOutlined className='experience-button' />} type="text" /> </Col>
            <Col span={1}> <Button icon={<EditOutlined className='experience-button' />} type="text" /> </Col>
        </Row>


        {profileUser?.workExperiences?.map((profile, index) => <div className='experience-block'>
            <Row key={index} justify={'space-between'} gutter={[24]} align="top">
                <Col span={24} className='experience-col'> <Space wrap size={16}>{profile.positionTitle} {profile.companyName}
                </Space> </Col>
            </Row>
            <Row key={index} gutter={[24]} >
                <Col span={24} className='experience-col'> <Space wrap size={16}>{profile.employmentType}
                </Space> </Col>
            </Row>
            <Row key={index} gutter={[24]} >
                <Col span={24} className='experience-col'> <Space wrap size={16}>{profile.startDate} - {profile.endDate}
                </Space> </Col>
            </Row>
        </div>
        )}
    </div>
    )
};