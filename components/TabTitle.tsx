import { Typography } from "antd";
import React from "react";
import styled from "styled-components";

interface TabTitleProps {
  title: string;
  description: string;
}

export default function TabTitle(props: TabTitleProps) {
  const { title, description } = props;
  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </Wrapper>
  );
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    `

const StyledTitle = styled(Typography.Text)`
    font-size: 20px;
    font-weight: 700;
`

const StyledDescription = styled(Typography.Text)`
    font-size: 14px;
    font-weight: 400;
    color: #686687;
`