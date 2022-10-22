import React from "react";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Typography } from "antd";
import styled from "styled-components";
import { TabName, TabShortName } from "../../pages/add-client";


interface SuccessProps {
  onChangeTab: (key: string) => void;
}

export default function Success(props: SuccessProps) {
  const {onChangeTab} = props;
  return (
    <>
      <TopWrapper>
        <TextWrapper>
          <CheckCircleTwoTone
            twoToneColor={"#52c41a"}
            style={{ fontSize: "32px" }}
          />
          <StyledTypography>
            You have successfully added Infosys.
          </StyledTypography>
        </TextWrapper>
        <ButtonWrapper>
          <Button onClick={() => onChangeTab(TabShortName.CREATE_PROFILE)}>Go to Client Master</Button>
          <Button onClick={() => onChangeTab(TabShortName.CREATE_PROFILE)} type="primary">Add More Clients</Button>
        </ButtonWrapper>
      </TopWrapper>

      <CardWrapper>
        {/* create empty array of length 5 */}
        {Array(5).fill(null).map((_, index) => (
          <Card key={index} />
        ))}

      </CardWrapper>
    </>
  );
}

const TopWrapper = styled.div`
  margin-top: 23px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0px 1px 5px rgba(3, 0, 55, 0.08);
`;

const StyledTypography = styled(Typography.Text)`
  font-size: 18px;
  font-weight: 700;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  margin-top: 20px;
`;

const Card = () => {
  return (
    <CardBody>
      <Avatar size={64} icon={<UserOutlined />} />
      <CardTitleText>Dummy Value</CardTitleText>
      <CardSubText>4 Clients</CardSubText>
      <Button type="primary" style={{ marginTop: "32px", width: "80%" }}>
        Add FCM
      </Button>
      <Button style={{ marginTop: "2px" }} type="link">
        View All
      </Button>
    </CardBody>
  );
};

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 293px;
  height: 326px;
  border: 1px solid lightgray;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
`;

const CardTitleText = styled(Typography.Text)`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin-top: 24px;
`;

const CardSubText = styled(Typography.Text)`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #686687;
`;
