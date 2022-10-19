import { Form, Input } from "antd";
import React from "react";
import styled from "styled-components";

interface FormInputProps {
  label?: string;
  name: string;
  placeHolder?: string;
  rule?: string;
  defaultValue?: string;
  width?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  marginBottom?: string;
}

export default function FormInput(props: FormInputProps) {
  const {
    label,
    name,
    rule,
    placeHolder,
    width,
    prefix,
    suffix,
    defaultValue,
    marginBottom,
  } = props;
  return (
    <Form.Item
      label={label}
      name={name}
      style={{
        width: width ? width : "100%",
        marginBottom: marginBottom && marginBottom,
      }}
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
        defaultValue={defaultValue}
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
