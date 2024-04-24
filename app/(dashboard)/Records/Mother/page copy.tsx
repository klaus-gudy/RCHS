"use client"
import React from "react";
import { Form, Input, Button, Select } from "antd";

const { Option } = Select;

const MotherDetailsForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Mother Details Form values:", values);
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md border border-blue-400 min-w-full">
      <h2 className="text-lg font-semibold text-gray-700 capitalize">
        Mother(Parent/Guardian) Registration Form
      </h2>
      <form onSubmit={onFinish} className="mt-4 space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="healthcare_centre_name" className="text-gray-700">
              Healthcare Centre Name
            </label>
            <Input id="healthcare_centre_name" />
          </div>

          <div>
            <label htmlFor="registration_number" className="text-gray-700">
              Registration Number
            </label>
            <Input id="registration_number" />
          </div>

          <div>
            <label htmlFor="mosquito_net_voucher_number" className="text-gray-700">
              Mosquito Net Voucher Number
            </label>
            <Input id="mosquito_net_voucher_number" />
          </div>

          <div>
            <label htmlFor="mother_name" className="text-gray-700">
              Mother's Name
            </label>
            <Input id="mother_name" />
          </div>

          <div>
            <label htmlFor="age" className="text-gray-700">
              Age
            </label>
            <Input id="age" type="number" />
          </div>

          <div>
            <label htmlFor="education" className="text-gray-700">
              Education
            </label>
            <Input id="education" />
          </div>

          <div>
            <label htmlFor="work_employment" className="text-gray-700">
              Work/Employment
            </label>
            <Input id="work_employment" />
          </div>

          <div>
            <label htmlFor="Height" className="text-gray-700 block">
              Height
            </label>
            <Select id="Height" placeholder="Select Height">
              <Option value="above_150">Above 150 cm</Option>
              <Option value="below_150">Below 150 cm</Option>
            </Select>
          </div>

          <div>
            <label htmlFor="partner_name" className="text-gray-700">
              Husband's/Partner's/Companion's Name
            </label>
            <Input id="partner_name" />
          </div>

          <div>
            <label htmlFor="partner_age" className="text-gray-700">
              Age
            </label>
            <Input id="partner_age" type="number" />
          </div>

          <div>
            <label htmlFor="partner_work" className="text-gray-700">
              Work
            </label>
            <Input id="partner_work" />
          </div>

          <div>
            <label htmlFor="partner_education" className="text-gray-700">
              Education
            </label>
            <Input id="partner_education" />
          </div>

          <div>
            <label htmlFor="village_street_ward" className="text-gray-700">
              Village/Street/Ward
            </label>
            <Input id="village_street_ward" />
          </div>

          <div>
            <label htmlFor="chairperson_name" className="text-gray-700">
              Chairperson's Name
            </label>
            <Input id="chairperson_name" />
          </div>

          <div>
            <label htmlFor="pregnancies" className="text-gray-700">
              How many pregnancies
            </label>
            <Input id="pregnancies" type="number" />
          </div>

          <div>
            <label htmlFor="births" className="text-gray-700">
              How many times has she given birth
            </label>
            <Input id="births" type="number" />
          </div>

          <div>
            <label htmlFor="alive_children" className="text-gray-700">
              Alive Children
            </label>
            <Input id="alive_children" type="number" />
          </div>

          <div>
            <label htmlFor="miscarriages" className="text-gray-700">
              Miscarriages
            </label>
            <Input id="miscarriages" type="number" />
          </div>

          <div>
            <label htmlFor="miscarriage_year" className="text-gray-700">
              Miscarriage Year
            </label>
            <Input id="miscarriage_year" type="number" />
          </div>

          <div>
            <label htmlFor="miscarriage_age" className="text-gray-700">
              Miscarriage Age
            </label>
            <Input id="miscarriage_age" type="number" />
          </div>
        </div>

        <div className="flex justify-center mt-6">
        <Button type="primary" htmlType="submit" className="bg-[#08a29e]">
          Submit
        </Button>
        </div>
      </form>
    </section>
  );
};

export default MotherDetailsForm;
