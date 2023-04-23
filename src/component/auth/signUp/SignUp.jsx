import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { saveUser } from "../../../service/UserService";

export const SignUp = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = () => {
        form.validateFields().then(val => {
            saveUser(val)
                .then(res => {
                    onReset();
                    navigate('/login');
                }).catch((err) => { console.log(err); });
        })
    };

    return (<><Row justify={'space-between'} gutter={[24]}>
        <Col span={1} />
        <Col span={12}>
            <Form form={form} name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 30 }} style={{ maxWidth: 700 }}
                initialValues={{ remember: true, }} onFinish={onFinish} autoComplete="off">
                <Form.Item label="First Name" name="firstName"
                    rules={[{ required: true, message: '' }]}>
                    <Input placeholder="First Name..." />
                </Form.Item>
                <Form.Item label="Last Name" name="lastName"
                    rules={[{ required: true, message: '' }]}>
                    <Input placeholder="Last Name..." />
                </Form.Item>
                <Form.Item label="Email" name="email"
                    rules={[{ type: 'email', message: '' }, { required: true, message: '' }]}>
                    <Input prefix={<UserOutlined />} placeholder="Email..." />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{ required: true, message: '' }]}>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password..." />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">SignUp</Button>
                    <Link to="/login" style={{ marginLeft: "30px" }}>LogIn</Link>
                </Form.Item>
            </Form>
        </Col>
        <Col span={1} />
    </Row>
    </>
    );
};