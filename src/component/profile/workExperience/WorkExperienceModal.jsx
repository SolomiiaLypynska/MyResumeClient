import { DatePicker, Form, Input, Modal } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect } from "react";
import { addExperience } from "../../../service/WorkExperienceService";
import './WorkExperience.css';

export const WorkExperienceModal = ({ isModalOpen, setIsModalOpen, getProfileUser, editableExperience }) => {
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo")) || {};
    const [form] = Form.useForm();

    useEffect(() => {
        if (editableExperience) {
            form.setFieldsValue({
                positionTitle: editableExperience.positionTitle,
                companyName: editableExperience.companyName,
                employmentType: editableExperience.employmentType,
                description: editableExperience.description,
                toolAndTechnology: editableExperience.toolAndTechnology,
                country: editableExperience.country,
                city: editableExperience.city,
                startDate: dayjs(editableExperience.startDate),
                // endDate: editableExperience.endDate,
            })
        }
    }, [editableExperience, isModalOpen]);

    const handleOk = () => {
        form.validateFields().then(val => {
            val = { ...val, userId: userInfo.userId }
            addExperience(val, userInfo.token)
                .then(res => {
                    handleCancel();
                    setIsModalOpen(false);
                    getProfileUser();
                }).catch((err) => { setIsModalOpen(false); });
        })

    };
    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    return (<Modal title="Add experience" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} initialValues={{ remember: true, }} layout="vertical" autoComplete="off">
            <Form.Item label="Position" name="positionTitle" rules={[{ required: true, message: '' }]}>
                <Input placeholder="Position..." />
            </Form.Item>
            <Form.Item label="Company name" name="companyName" rules={[{ required: true, message: '' }]}>
                <Input placeholder="Company..." />
            </Form.Item>
            <Form.Item label="Employment type" name="employmentType" rules={[{ required: true, message: '' }]}>
                <Input placeholder="Employment type..." />
            </Form.Item>
            <Form.Item label="Description" name="description">
                <Input placeholder="Description..." />
            </Form.Item>
            <Form.Item label="Tool and Technology" name="toolAndTechnology">
                <Input placeholder="toolAndTechnology..." />
            </Form.Item>
            <Form.Item label="Country" name="country">
                <Input placeholder="country..." />
            </Form.Item>
            <Form.Item label="City" name="city">
                <Input placeholder="City..." />
            </Form.Item>
            <Form.Item label="Start Date" name="startDate" rules={[{ required: true, message: '' }]}>
                <DatePicker />
            </Form.Item>
            <Form.Item label="End Date" name="endDate">
                <Input placeholder="End Date..." />
            </Form.Item>
        </Form>
    </Modal>
    )
};