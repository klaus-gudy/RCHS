"use client";
// MotherDetailsForm.tsx
import React from "react";
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;

const MotherDetailsForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Mother Details Form values:", values);
  };

  return (
    <Form
      name="mother_details_form"
      onFinish={onFinish}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md min-w-full"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Mother(Parent/Guardian) Registration Form
      </h2>
      <p className="font-semibold mb-6 text-center">
        This form serves as a cornerstone in our mission to promote maternal
        health and well-being. By providing essential information about mothers,
        it empowers us to deliver personalized care and support throughout their
        journey. Your input is invaluable in enhancing healthcare outcomes and
        fostering healthier communities.
      </p>

      <Form.Item
        label="Healthcare Centre Name"
        name="healthcare_centre_name"
        rules={[
          { required: true, message: "Please input healthcare centre name" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Registration Number"
        name="registration_number"
        rules={[
          { required: true, message: "Please input registration number" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mosquito Net Voucher Number"
        name="mosquito_net_voucher_number"
        rules={[
          {
            required: true,
            message: "Please input mosquito net voucher number",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mother's Name"
        name="mother_name"
        rules={[{ required: true, message: "Please input mother's name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        rules={[{ required: true, message: "Please input mother's age" }]}
      >
        <Input type="number" min={0} />
      </Form.Item>
      <Form.Item
        label="Education"
        name="education"
        rules={[{ required: true, message: "Please input mother's education" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Work/Employment"
        name="work_employment"
        rules={[
          { required: true, message: "Please input mother's work/employment" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Length"
        name="length"
        rules={[{ required: true, message: "Please input mother's length" }]}
      >
        <Select placeholder="Select length">
          <Option value="above_150">Above 150 cm</Option>
          <Option value="below_150">Below 150 cm</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Husband's/Partner's/Companion's Name"
        name="partner_name"
        rules={[{ required: true, message: "Please input partner's name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
        name="partner_age"
        rules={[{ required: true, message: "Please input partner's age" }]}
      >
        <Input type="number" min={0} />
      </Form.Item>
      <Form.Item
        label="Work"
        name="partner_work"
        rules={[{ required: true, message: "Please input partner's work" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Education"
        name="partner_education"
        rules={[
          { required: true, message: "Please input partner's education" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Village/Street/Ward"
        name="village_street_ward"
        rules={[
          { required: true, message: "Please input village/street/ward" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Chairperson's Name"
        name="chairperson_name"
        rules={[{ required: true, message: "Please input chairperson's name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Pregnancy Details" className="text-lg font-semibold" />
      <Form.Item
        label="How many pregnancies"
        name="pregnancies"
        rules={[
          { required: true, message: "Please input number of pregnancies" },
        ]}
      >
        <Input type="number" min={0} />
      </Form.Item>
      <Form.Item
        label="How many times has she given birth"
        name="births"
        rules={[
          {
            required: true,
            message: "Please input number of times given birth",
          },
        ]}
      >
        <Input type="number" min={0} />
      </Form.Item>
      <Form.Item
        label="Alive Children"
        name="alive_children"
        rules={[
          { required: true, message: "Please input number of alive children" },
        ]}
      >
        <Input type="number" min={0} />
      </Form.Item>
      <Form.Item
        label="Miscarriages"
        name="miscarriages"
        rules={[
          { required: true, message: "Please input number of miscarriages" },
        ]}
      >
        <Input type="number" min={0} />
      </Form.Item>
      <Form.Item label="Miscarriage Year" name="miscarriage_year">
        <Input type="number" min={0} />
      </Form.Item>
      <Form.Item label="Miscarriage Age" name="miscarriage_age">
        <Input type="number" min={0} />
      </Form.Item>
      <Form.Item className="text-center">
        <Button type="primary" htmlType="submit" className="bg-[#08a29e]">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MotherDetailsForm;
