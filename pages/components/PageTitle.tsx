import { BellOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Typography } from "antd";
import React from "react";
import styled from "styled-components";

interface PageTitleProps {
  title: string;
  route?: string[];
}

export default function PageTitle(props: PageTitleProps) {
  const { title, route } = props;
  return (
    <Wrapper>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <Breadcrumb>
          {route?.map((item) => (
            <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
      <Button type="link" icon={<BellOutlined />} style={{color: 'black'}} />
    </Wrapper>
  );
}

const StyledTitle = styled(Typography.Text)`
  font-size: 24px;
  font-weight: 700;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
align-items: flex-start;

`;
