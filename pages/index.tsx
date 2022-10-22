import { Button, Form, Input, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import router from "next/router";
import React from "react";
import styled from "styled-components";
import FormInput from "../components/FormComp/FormInput";

export default function index() {
  const onClick = () => {
    router.replace("/view-clients");
    localStorage.setItem("token", "red");
  };

  const OnFinishHandler = (values: any) => {
    console.log(values);
  };

  const OnFinishFailedHandler = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Wrapper>
      <LoginWrapper>
        <StyledTitle>Welcome</StyledTitle>
        <StyledSubTitle>Enter your Username and Password.</StyledSubTitle>
        <Form onFinish={OnFinishHandler} onFinishFailed={OnFinishFailedHandler}>
          <FormInput
            prefix={<UserOutlined />}
            name="user_name"
            placeHolder="Username"
            rule="Please enter your username"
          />
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              prefix={<LockOutlined />}
              style={{ width: "100%" }}
            />
          </Form.Item>
          {/* <Button onClick={onClick}>Login</Button> */}
          <StyledLoginButton htmlType="submit">Login</StyledLoginButton>
          <StyledForgotPasswordButton type="link">
            Forgot Password?
          </StyledForgotPasswordButton>
        </Form>
      </LoginWrapper>
      <StyledSection></StyledSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

const StyledTitle = styled(Typography.Text)`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 4px;

`;

const StyledSubTitle = styled(Typography.Text)`
  font-size: 14px;
  font-weight: 700;
  color: #b8babc;
    margin-bottom: 24px;
`;

const StyledSection = styled.div`
  display: flex;
  background-color: #1334b3;
  width: 60%;
`;

const StyledLoginButton = styled(Button)`
  background-color: #1334b3;
  color: white;
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const StyledForgotPasswordButton = styled(Button)`
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  color: #686687;
`;
