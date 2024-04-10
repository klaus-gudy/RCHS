"use client";
import React from "react";
import {
  Form,
  Input,
  Radio,
  Checkbox,
  Select,
  Divider,
  DatePicker,
  Button,
} from "antd";

const { Option } = Select;

const ClinicVisitForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <Form
      name="clinic_visit"
      layout="vertical"
      onFinish={onFinish}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md min-w-full"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Initial Visits Form
      </h2>
      <p className="font-semibold mb-6 text-center">This Form is used for the First Four Visists after Child birth Befor the Child has their own Clinic Card</p>
      {/* Visit Information */}
      <Divider orientation="left" className="text-lg font-semibold">
        Visit Information
      </Divider>
      <Form.Item
        name="visit_date"
        label="Visit Date"
        rules={[{ required: true, message: "Please select visit date" }]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      {/* Health Measurements */}
      <Divider orientation="left" className="text-lg font-semibold">
        Health Measurements
      </Divider>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Form.Item
          label="Body Temperature (°C)"
          name="body_temperature"
          rules={[{ required: true, message: "Please input body temperature" }]}
        >
          <Input type="number" min={0} />
        </Form.Item>
        <Form.Item
          label="Blood Pressure (mmHg)"
          name="blood_pressure"
          rules={[{ required: true, message: "Please input blood pressure" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="HB Percentage"
          name="hb_percentage"
          rules={[{ required: true, message: "Please input HB percentage" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="HB Percentage"
          name="hb_percentage"
          rules={[{ required: true, message: "Please input HB percentage" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="pmtct_nutrition"
          label="Inquire about the following, PMTCT: Infant Nutrition"
          className="col-span-2"
        >
          <Checkbox.Group>
            <Checkbox value="ebf">Exclusive Breastfeeding (EBF)</Checkbox>
            <Checkbox value="rf">Replacement Feeding (RF)</Checkbox>
          </Checkbox.Group>
        </Form.Item>
      </div>
      {/* Add other health measurements here */}

      {/* Breastfeeding */}
      <Divider orientation="left" className="text-lg font-semibold">
        Breastfeeding
      </Divider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Form.Item
          name="is_breastfeeding"
          label="Is the child breastfeeding?"
          rules={[
            { required: true, message: "Please select breastfeeding status" },
          ]}
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="is_milk_coming_out"
          label="Is milk coming out?"
          className="col-span-2"
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="started_breastfeeding_within_hour"
          label="Has the baby started breastfeeding within an hour?"
          className="col-span-2"
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="nipples_sore"
          label="Are the nipples sore?"
          className="col-span-2"
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="nipples_full"
          label="Are they too full?"
          className="col-span-2"
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="any_abscesses"
          label="Are there any abscesses?"
          className="col-span-2"
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="examine_breastfeeding"
          label="Examine breastfeeding, provide advice"
          className="col-span-2"
        >
          <Input.TextArea />
        </Form.Item>
      </div>

      {/* Uterus */}
      <Divider orientation="left" className="text-lg font-semibold">
        Uterus
      </Divider>
      <Form.Item
        name="is_shrinking"
        label="Is it shrinking?"
        rules={[{ required: true, message: "Please select uterus status" }]}
      >
        <Radio.Group>
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="pain"
        label="Is it in pain?"
        rules={[
          { required: true, message: "Please select uterus pain status" },
        ]}
      >
        <Radio.Group>
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Radio.Group>
      </Form.Item>
      {/* Add other uterus-related questions here */}

      {/* Incision / Surgical wound */}
      <Divider orientation="left" className="text-lg font-semibold">
        Incision / Surgical Wound
      </Divider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Form.Item
          name="incision_tear"
          label="Incision: Did not tear?"
          className="col-span-2"
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="incision_type"
          label="Type of Incision"
          className="col-span-2"
        >
          <Select placeholder="Select type">
            <Option value="tear">Tore</Option>
            <Option value="episiotomy">Episiotomy performed</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="is_wound_healed"
          label="Is the wound healed?"
          className="col-span-2"
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="has_pus" label="Is there pus?" className="col-span-2">
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="is_wound_open"
          label="Is it open?"
          className="col-span-2"
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="lochia_smell"
          label="Does it smell bad?"
          className="col-span-2"
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="lochia_amount"
          label="Lochia amount"
          className="col-span-2"
        >
          <Select placeholder="Select amount">
            <Option value="heavy">Heavy</Option>
            <Option value="moderate">Moderate</Option>
            <Option value="light">Light</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="lochia_color"
          label="Lochia color"
          className="col-span-2"
        >
          <Input placeholder="Enter color" />
        </Form.Item>
      </div>

      {/* Add other questions related to incision / surgical wound here */}

      {/* Mental State */}
      <Divider orientation="left" className="text-lg font-semibold">
        Mental State
      </Divider>
      <Form.Item
        name="mental_state_sick"
        label="Mental State: Sick / Not Sick"
        className="col-span-2"
      >
        <Radio.Group>
          <Radio value={true}>Sick</Radio>
          <Radio value={false}>Not Sick</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="mental_state_other_issues"
        label="Other Issues"
        className="col-span-2"
      >
        <Input.TextArea placeholder="Enter any other issues related to mental state" />
      </Form.Item>

      {/* Add other questions related to mental state here */}

      {/* Family Planning */}
      <Divider orientation="left" className="text-lg font-semibold">
        Family Planning
      </Divider>
      <Form.Item
        name="family_planning_advice"
        label="Has advice been given?"
        rules={[
          { required: true, message: "Please select family planning advice" },
        ]}
      >
        <Radio.Group>
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Radio.Group>
      </Form.Item>
      {/* Add other questions related to family planning here */}

      {/* Prophylactic Medications */}
      <Divider orientation="left" className="text-lg font-semibold">
        Prophylactic Medications
      </Divider>
      <Form.Item
        name="ferrous_sulphate"
        label="Ferrous Sulphate"
        valuePropName="checked"
      >
        <Checkbox />
      </Form.Item>
      <Form.Item name="folic_acid" label="Folic Acid" valuePropName="checked">
        <Checkbox />
      </Form.Item>
      <Form.Item
        name="tetanus_toxoid"
        label="Tetanus Toxoid: How many doses has the patient received?"
      >
        <Select mode="multiple" placeholder="Select number of doses">
          <Option value="TT1">TT1</Option>
          <Option value="TT2">TT2</Option>
          <Option value="TT3">TT3</Option>
          <Option value="TT4">TT4</Option>
          <Option value="TT5">TT5</Option>
        </Select>
      </Form.Item>

      {/* Add other prophylactic medications here */}

      {/* Provider Information */}
      <Divider orientation="left" className="text-lg font-semibold">
        Provider Information
      </Divider>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Form.Item
          name="pmtct_ctx"
          label="PMTCT/CTX - If the mother is living with HIV"
          className="col-span-2"
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="postpartum_medications_art"
          label="Postpartum Medications (ART)"
          className="col-span-2"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="vitamin_a_received"
          label="Vitamin A (Received/Not Received)"
          className="col-span-2"
        >
          <Radio.Group>
            <Radio value={true}>Received</Radio>
            <Radio value={false}>Not Received</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="other_treatments_return_date"
          label="Return Date for Other Treatments"
          className="col-span-2"
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="provider_name"
          label="Provider's Name"
          className="col-span-2"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="provider_title"
          label="Provider's Title"
          className="col-span-2"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="provider_signature"
          label="Provider's Signature"
          className="col-span-2"
        >
          <Input />
        </Form.Item>
      </div>
      {/* Add other provider information here */}

      <Form.Item className="text-center">
        <Button type="primary" htmlType="submit" className="bg-[#08a29e]">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ClinicVisitForm;
