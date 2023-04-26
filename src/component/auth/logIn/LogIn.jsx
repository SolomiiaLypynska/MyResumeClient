import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from "../../../service/AuthService";

export const LogIn = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = () => {
        form.validateFields().then(val => {
            logIn(val)
                .then(res => {
                    const userInfo = {
                        userId: res.headers.get('userId'),
                        token: res.headers.get('token')
                    }
                    window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
                    onReset();
                    navigate('/account');
                }).catch((err) => { console.log(err); });
        })
    };

    return (<><Row justify={'space-between'} gutter={[24]}>
        <Col span={1} />
        <Col span={14}>
            <Form form={form} name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 30 }} style={{ maxWidth: 700 }}
                initialValues={{ remember: true, }} onFinish={onFinish} autoComplete="off">
                <Form.Item label="Email" name="email"
                    rules={[{ type: 'email', message: '' }, { required: true, message: '' }]}>
                    <Input prefix={<UserOutlined />} placeholder="Email" />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{ required: true, message: '' }]}>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">LogIn</Button>
                    <Link to="/signup" style={{ marginLeft: "30px" }}>SignUp</Link>
                </Form.Item>
            </Form>
        </Col>
        <Col span={1} />
    </Row>
    </>
    );
};