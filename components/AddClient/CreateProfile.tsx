import { Avatar, Button, Form, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import TabTitle from "../TabTitle";
import { PlusOutlined } from "@ant-design/icons";
import FormInput from "../FormComp/FormInput";
import FormSelect from "../FormComp/FormSelect";
import SaveAndContinue from "../SaveAndContinue";
import { TabShortName } from "../../pages/add-client";

interface CreateProfileProps {
  onChangeTab: (key: string) => void;
}

export default function CreateProfile(props : CreateProfileProps) {
  const {onChangeTab} = props;
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    onChangeTab(TabShortName.PAYMENT_SETUP);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <TabTitle
        title="Create Client Profile"
        description="Add some basic information related to the client"
      />
      <AddLogoWrapper>
        <Avatar size={100} icon={<PlusOutlined />} />
        <AddLogoDescriptionWrapper>
          <AddLogoTitle>Compony Logo</AddLogoTitle>
          <AddLogoDescription>
            Logo ratio should be 1:1 and should be 120px X 120 px
          </AddLogoDescription>
        </AddLogoDescriptionWrapper>
      </AddLogoWrapper>

      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Wrapper>
          <div>
            <FormInput
              name="company_name"
              placeHolder="Company Name"
              rule="Please enter company's name"
            />
            <FormSelect
              name="business_category"
              placeHolder="Select Business Category"
              rule="Please Select a Business Category"
              options={[
                {
                  value: "1",
                  label: "Option 1",
                },
                {
                  value: "2",
                  label: "Option 2",
                },
              ]}
            />
            <FormInput
              name="company_email"
              placeHolder="Company Email Address"
              rule="Please enter company's email address"
            />
            <FormSelect
              name="company_state"
              placeHolder="Select State"
              rule="Please Select a company's state"
              options={[
                {
                  value: "1",
                  label: "Option 1",
                },
                {
                  value: "2",
                  label: "Option 2",
                },
              ]}
            />
            <FormInput
              name="gst_number"
              placeHolder="GST Number"
              rule="Please enter company's GST number"
            />
          </div>
          <div>
            <FormInput name="website" placeHolder="Website" />
            <FormSelect
              name="facility_management_company"
              options={[
                {
                  value: "1",
                  label: "Option 1",
                },
              ]}
              placeHolder="Select Facility Management Company"
              rule="Please Select a facility management company"
            />
            <FormInput
              name="mobile_number"
              placeHolder="Mobile Number"
              rule="Please enter mobile number"
            />
            <FormWrapper>
              <FormSelect
                name="city"
                placeHolder="Select City"
                rule="Please Select a city"
                width="100%"
                options={[
                  {
                    value: "1",
                    label: "Option 1",
                  },
                ]}
              />
              <FormInput
                name="pincode"
                placeHolder="Pincode"
                width="40%"
                rule="Please enter pincode"
              />
            </FormWrapper>
            <FormInput name="fax" placeHolder="Fax Number" />
          </div>
        </Wrapper>
      </Form>
      <SaveAndContinue
        saveAndContinue={() => form.submit()}
        reset={() => form.resetFields()}
      />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  gap: 16px;
  & > div {
    width: 50%;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  gap: 8px;
  display: flex;
  justify-content: flex-start;
`;

const AddLogoWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const AddLogoDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const AddLogoTitle = styled(Typography.Text)`
  font-size: 16px;
  font-weight: 400;
`;

const AddLogoDescription = styled(Typography.Text)`
  color: #686687;
  font-size: 12px;
  font-weight: 400;
`;
