import { Form, Input } from "antd";
import React from "react";
import styled from "styled-components";

interface FormInputProps {
  label?: string;
  name: string;
  placeHolder?: string;
  rule?: string;
  width?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export default function FormInput(props: FormInputProps) {
  const { label, name, rule, placeHolder, width, prefix, suffix } = props;
  return (
    <Form.Item
      label={label}
      name={name}
      style={{ width: width ? width : "100%" }}
      rules={[
        {
          required: rule !== undefined && rule !== "" ? true : false,
          message: rule,
        },
      ]}
    >
      <StyledInput
        prefix={prefix}
        suffix={suffix}
        width={width}
        placeholder={`${placeHolder} ${
          rule !== undefined && rule !== "" ? "*" : ""
        }`}
      />
    </Form.Item>
  );
}

const StyledInput = styled(Input)`
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  padding: 12 16px;
  width: 100%;
`;
