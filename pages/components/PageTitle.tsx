import { Breadcrumb, Typography } from "antd";
import React from "react";
import styled from "styled-components";

interface PageTitleProps {
  title: string;
  route?: string[];
}

export default function PageTitle(props: PageTitleProps) {
  const { title, route } = props;
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <Breadcrumb>
        {route?.map((item) => (
          <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </>
  );
}

const StyledTitle = styled(Typography.Text)`
  font-size: 24px;
  font-weight: 700;
`;
