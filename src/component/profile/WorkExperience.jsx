import { Col, Row, Space } from 'antd';
import React from "react";

export const WorkExperience = ({ profileUser }) => {

    return (<div style={{ marginTop: '40px' }}>
        <Row justify={'space-between'} gutter={[24]} ><Col span={3}> <Space wrap size={16}>Experience</Space> </Col></Row>

{/* TODO style */}
        {profileUser?.workExperiences?.map((profile, index) =><div style={{marginLeft: '-1200px'}}>
            <Row key={index} justify={'space-between'} gutter={[24]} align="top" style={{ marginTop: '10px'}}>
                <Col span={24}> <Space wrap size={16}>{profile.positionTitle} {profile.companyName}
                </Space> </Col>
            </Row>

            <Row key={index} gutter={[24]} >
            <Col span={24}> <Space wrap size={16}>{profile.employmentType}
            </Space> </Col>
        </Row>

        <Row key={index} gutter={[24]} >
            <Col span={24}> <Space wrap size={16}>{profile.startDate} - {profile.endDate}
            </Space> </Col>
        </Row>
        </div>
            )}
    </div>
    )
};