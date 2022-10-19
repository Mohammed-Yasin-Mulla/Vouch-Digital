import { Checkbox, Form, Radio } from "antd";
import React from "react";
import styled from "styled-components";
import FormInput from "../FormComp/FormInput";
import FormSelect from "../FormComp/FormSelect";
import SaveAndContinue from "../SaveAndContinue";
import TabTitle from "../TabTitle";

const CheckboxItem = [
  {
    value: "upi",
    label: "UPI",
  },
  {
    value: "net_banking",
    label: "Net Banking",
  },
  {
    value: "card",
    label: "Card",
  },
  {
    value: "check",
    label: "Check",
  },
  {
    value: "other",
    label: "Other",
  },
];

const RadioItem = [
  {
    value: "paid",
    label: "Paid",
  },
  {
    value: "Pending",
    label: "Pending",
  },
];

export default function PaymentSetup() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <TabTitle
        title="Payment Setup"
        description="Setup Payments for the clients"
      />
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} style={{marginTop:'46px'}}>
        <FormInput
          name="billing_address"
          placeHolder="Billing Address"
          rule="Please enter the billing address"
        />
        <Wrapper>
          <div>
            <FormSelect
              name="state"
              placeHolder="Select State"
              rule="Please Select the state"
              options={[
                {
                  value: "1",
                  label: "State 1",
                },
              ]}
            />
            <FormSelect
              name="site_access"
              placeHolder="Select Number of Site Access"
              rule="Please Select the site access"
              options={[
                {
                  value: "1",
                  label: "State 1",
                },
              ]}
            />
            <FormInput
              name="discount"
              placeHolder="Discount(%)"
              rule="Please Enter the discount"
            />
            <Form.Item name="checkbox-group" label="Checkbox.Group">
              <Checkbox.Group>
                {CheckboxItem.map((item, index) => {
                  return (
                    <Checkbox value={item.value} key={index}>
                      {item.label}
                    </Checkbox>
                  );
                })}
              </Checkbox.Group>
            </Form.Item>
          </div>
          {/*  */}
          <div>
            <FormWrapper>
              <FormSelect
                name="city"
                placeHolder="Select City"
                options={[
                  {
                    value: "1",
                    label: "City 1",
                  },
                ]}
                rule="Please Select the City"
              />
              <FormInput
                name="pin_code"
                placeHolder="Pincode"
                width="40%"
                rule="Please Enter the pin code"
              />
            </FormWrapper>
              <FormInput
                prefix="Rs."
                suffix={"Total Rs.0000"}
                name="amount_per_site"
                placeHolder="Payable Amount per site"
                rule="Please Enter payable amount per site"
              />
              <FormInput
                name="reason"
                placeHolder="Reason"
                rule="Please enter a Reason"
              />
            <Form.Item name="payment_status" label="Payment Status">
              <Radio.Group>
                {RadioItem.map((item, index) => {
                  return (
                    <Radio value={item.value} key={index}>
                      {item.label}
                    </Radio>
                  );
                })}
              </Radio.Group>
            </Form.Item>
            <div />
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
