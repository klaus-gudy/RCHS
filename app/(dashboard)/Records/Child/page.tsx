"use client";
import React from "react";
import { Form, Input, Select, Button, DatePicker } from "antd";

const { Option } = Select;

const ChildDetailsForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Child Details Form values:", values);
  };

  return (
    <Form
      name="child_details_form"
      onFinish={onFinish}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md min-w-full"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Child Registration Form
      </h2>
      <p className="font-semibold mb-6 text-center">
        This form serves as a vital tool for capturing and storing essential
        data about children. By providing accurate information, you contribute
        to creating a comprehensive record that supports better healthcare
        management and ensures the well-being of our youngest community members.
      </p>
      <Form.Item
        label="Healthcare Centre Name"
        name="health_centre_name"
        rules={[
          { required: true, message: "Please input healthcare centre name" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Child's Number"
        name="child_number"
        rules={[{ required: true, message: "Please input child number" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Child's Name"
        name="child_name"
        rules={[{ required: true, message: "Please input child name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Child's Gender"
        name="child_gender"
        rules={[{ required: true, message: "Please select child gender" }]}
      >
        <Select>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Date of Birth"
        name="date_of_birth"
        rules={[{ required: true, message: "Please select date of birth" }]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Weight at Birth"
        name="weight_at_birth"
        rules={[{ required: true, message: "Please input weight at birth" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Length at Birth"
        name="length_at_birth"
        rules={[{ required: true, message: "Please input length at birth" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Place of Birth"
        name="place_of_birth"
        rules={[{ required: true, message: "Please input place of birth" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Maternal Health Worker"
        name="maternal_health_worker"
        rules={[
          { required: true, message: "Please select maternal health worker" },
        ]}
      >
        <Select>
          <Option value="healthcare_worker">Healthcare Worker</Option>
          <Option value="tba">Traditional Birth Attendant (TBA)</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Mother's Name/Guardian"
        name="mother_name"
        rules={[
          { required: true, message: "Please input mother's name/guardian" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Father's Name/Guardian"
        name="father_name"
        rules={[
          { required: true, message: "Please input father's name/guardian" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Child's Residence"
        name="child_residence"
        rules={[{ required: true, message: "Please input child residence" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item className="text-center">
        <Button type="primary" htmlType="submit" className="bg-[#08a29e]">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ChildDetailsForm;
