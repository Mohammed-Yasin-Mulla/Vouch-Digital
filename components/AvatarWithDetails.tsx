import { Avatar, Badge , Button} from "antd";
import { UserOutlined, DownloadOutlined  } from "@ant-design/icons";
import { Typography } from "antd";
import React from "react";
import styled from "styled-components";

export default function AvatarWithDetails() {
  return (
    <Wrapper>
        <AvatarWrapper>
          <div>
            <Badge dot>
              <Avatar icon={<UserOutlined />} />
            </Badge>
          </div>
          <DetailsWrapper>
            <StyledName  >Name of User</StyledName>
            <StyledEmail >Email of User</StyledEmail>
          </DetailsWrapper>
        </AvatarWrapper>
        <Button type="link" shape="round" icon={<DownloadOutlined />}  />
    </Wrapper>
  );
}

const Wrapper = styled.div`
    border-top: 1px solid #B8BABC;
    margin-top: 100%;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    `

const AvatarWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 14px;
  align-items: flex-start;

`;

const StyledName = styled(Typography.Text)`
  color: white !important;
  font-size: 16px;
  font-weight: 700;
`;
const StyledEmail = styled(Typography.Text)`
  color: white !important;
  font-size: 14px;
  font-weight: 400;
`;
