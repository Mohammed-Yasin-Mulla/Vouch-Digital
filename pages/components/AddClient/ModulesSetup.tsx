import { Avatar, Button, Card, Checkbox, Form, Menu, Typography } from "antd";
import { CheckOutlined, UserOutlined } from "@ant-design/icons";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import SaveAndContinue from "../SaveAndContinue";
import TabTitle from "../TabTitle";
import styled from "styled-components";

const CheckboxItem = [
  {
    label: "Home / Dashboard",
    value: "home",
  },
  {
    label: "Helpdesk",
    value: "helpdesk",
  },
  {
    label: "Assets",
    value: "assets",
  },
  {
    label: "Daily Tasks",
    value: "dailytasks",
  },
  {
    label: "PPM",
    value: "ppm",
  },
  {
    label: "Employees",
    value: "employees",
  },
  {
    label: "Profile",
    value: "profile",
  },
  {
    label: "Transactions",
    value: "transactions",
  },
];

const CheckboxItem2 = [
  {
    label: "Show All Sub Modules",
    value: "showall",
  },
  {
    label: "Summary",
    value: "summary",
  },
  {
    label: "View Tasks",
    value: "viewtasks",
  },
  {
    label: "Create New Task",
    value: "createnewtask",
  },
  {
    label: "Logbook",
    value: "logbook",
  },
  {
    label: "Logsheet",
    value: "logsheet",
  },
];

export default function ModulesSetup() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <TabTitle
        title="Modules Setup"
        description="Select the modules that the client can use.."
      />

      <Wrapper>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
          >
            {CheckboxItem.map((item, index) => {
              return (
                <Menu.Item key={index}>
                  <Checkbox value={item.value}>{item.label}</Checkbox>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Card
          title={<CardTitle />}
          extra={
            <Button icon={<CheckOutlined />} type="primary">
              Visible to Client
            </Button>
          }
          style={{ width: "100%" }}
        >
          {/* <Checkbox.Group> */}
            {CheckboxItem2.map((item, index) => {
              return (
                <>
                  <Checkbox
                    key={index}
                    value={item.value}
                  >
                    {item.label}
                  </Checkbox>
                  <br />
                  <br />
                </>
              );
            })}
          {/* </Checkbox.Group> */}
        </Card>
      </Wrapper>

      <SaveAndContinue
        saveAndContinue={() => form.submit()}
        reset={() => form.resetFields()}
      />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

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
const StyledCardTitle = styled(Typography.Text)`
  font-size: 16px;
  font-weight: 700;
`;
const StyledCardDescription = styled(Typography.Text)`
  font-size: 14px;
  margin-top: 4px;
  color: #686687;
  font-weight: 400;
`;

const CardTitle = () => {
  return (
    <AvatarWrapper>
      <div>
        <Avatar icon={<UserOutlined />} />
      </div>
      <DetailsWrapper>
        <StyledCardTitle>Daily Task</StyledCardTitle>
        <StyledCardDescription>
          Select the sub modules that the client can use.
        </StyledCardDescription>
      </DetailsWrapper>
    </AvatarWrapper>
  );
};
