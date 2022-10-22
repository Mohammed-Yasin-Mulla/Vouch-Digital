import React from "react";
import styled from "styled-components";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface StyledSearchBarProps {
  addonBefore?: React.ReactNode;
  placeholder?: string;
  width?: number;
}

export default function StyledSearchBar(props: StyledSearchBarProps) {
  const { addonBefore, placeholder, width } = props;
  return <StyledSearchBarComp placeholder={placeholder} width={width} addonBefore={addonBefore} />;
}

const StyledSearchBarComp = styled(Input)`
  width: ${(props) => props.width && props.width}px;
`;
