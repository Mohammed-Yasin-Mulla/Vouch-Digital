import { Form, Radio, Typography } from "antd";
import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import FormInput from "../FormComp/FormInput";
import SaveAndContinue from "../SaveAndContinue";
import TabTitle from "../TabTitle";
import { TabShortName } from "../../pages/add-client";

interface ModulesSetupProps {
  onChangeTab: (key: string) => void;
}

const RadioItem = [
  {
    value: "left",
    label: "Left",
  },
  {
    value: "right",
    label: "Right",
  },
  {
    value: "center",
    label: "Center",
  },
];

export default function ThemeSetup(props: ModulesSetupProps) {
  const { onChangeTab } = props;
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    onChangeTab(TabShortName.MODULES_SETUP);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <TabTitle
        title="Theme Setup"
        description="Add information about the client to give them a personalized experience."
      />
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ marginTop: "46px" }}
      >
        <FormInput
          name="primary_color"
          placeHolder="eg.#153AC7"
          defaultValue="#153AC7"
          marginBottom="0px"
        />
        <StyledSubText>Add Hex Value.</StyledSubText>

        <SubTitleText>Login Theme</SubTitleText>
        <StyledSubText>
          Select the look and feel of the login page.
        </StyledSubText>

        <Form.Item>
          <Radio defaultChecked>Use Color</Radio>
        </Form.Item>
        <FormInput
          name="color"
          width="40%"
          placeHolder="#F8F9FD"
          defaultValue="#F8F9FD"
          suffix={<InfoCircleOutlined />}
        />
        <Form.Item name="login_modal" label="Where should be the login Modal?">
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
      </Form>
      <SaveAndContinue
        saveAndContinue={() => form.submit()}
        reset={() => form.resetFields()}
      />
    </>
  );
}

const StyledSubText = styled(Typography.Text)`
  font-size: 14px;
  color: #8c8c8c;
  font-weight: 400;
  display: block;
  margin-bottom: 23px;
`;

const SubTitleText = styled(Typography.Text)`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  display: block;
`;
