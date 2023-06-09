import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../../../App";
import { logIn } from "../../../service/AuthService";
import './LogIn.css';

export const LogIn = () => {
    const { setLogin } = useContext(UserContext);
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onReset = () => { form.resetFields(); };

    const onFinish = () => {
        form.validateFields().then(val => {
            logIn(val)
                .then(res => {
                    const userInfo = {
                        userId: res.headers.get('userId'),
                        token: res.headers.get('token'),
                        role: res.headers.get('role')
                    };
                    window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
                    setLogin(true);
                    onReset();
                    navigate('/profile');
                }).catch((err) => { console.log(err); });
        });
    };

    return (<><Row justify={'space-between'} gutter={[24]}>
        <Col span={1} />
        <Col span={14}>
            <Form form={form} name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 30 }} className='login-form'
                initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
                <Form.Item label="Email" name="email" rules={[{ type: 'email', message: '' }, { required: true, message: '' }]}>
                    <Input prefix={<UserOutlined />} placeholder="Email" />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{ required: true, message: '' }]}>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">LogIn</Button>
                    <Link to="/signup" className='signup-link'>SignUp</Link>
                </Form.Item>
            </Form>
        </Col>
        <Col span={1} />
    </Row>
    </>
    );
};