import { Form, Select } from "antd";
import React from "react";
import styled from "styled-components";

interface FormSelectProps {
  label?: string;
  name: string;
  rule?: string;
  placeHolder: string;
  options: { value: string; label: string }[];
  width?: string
}

const { Option } = Select;

export default function FormSelect(props: FormSelectProps) {
  const { label, name, rule, placeHolder, options, width } = props;
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required: rule !== undefined && rule !== "", message: rule }]}
      style={{ width: width ? width : "100%" }}
    >
      <StyledSelect
      width={width}
        placeholder={`${placeHolder} ${
            rule !== undefined && rule !== "" ? "*" : ""
        }`}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </StyledSelect>
    </Form.Item>
  );
}
interface StyledSelectProps {
  width?: string;
}

const StyledSelect = styled(Select)<StyledSelectProps>`
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  padding: 12 16px;
  width:  100%;
  `
