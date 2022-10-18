import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import styled from "styled-components";

import {
  UploadOutlined,
  UserOutlined,
  SearchOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Input, Typography } from "antd";
import React from "react";
import AvatarWithDetails from "./components/AvatarWithDetails";
const { Sider, Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout className="layout">
      <Sider width="336" style={{padding: "16px"}}>
        <div>
          <StyledTitle>Company Name</StyledTitle>
          <StyledSearchBar addonBefore={<SearchOutlined />} />
        </div>

      <StyledSubTitle level={5} style={{color:"#B8BABC"}}>CLIENT MASTER</StyledSubTitle>
    
        <Menu
          theme="dark"
          mode="inline"
          style={{marginTop: "16px"}}
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: "View Clients",
            },
            {
              key: "2",
              label: "Add Client",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  );
}
export default MyApp;


const StyledSubTitle = styled(Typography.Title)`
margin-top: 24px;
`

const StyledTitle = styled(Typography.Text)`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-top: 16px;
`;

const StyledSearchBar = styled(Input)`
  width: 304px;
`;


