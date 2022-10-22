import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import styled from "styled-components";

import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { Layout, Menu, Input, Typography } from "antd";
import React, { useEffect, useState } from "react";
import AvatarWithDetails from "../components/AvatarWithDetails";
import Link from "next/link";
import StyledSearchBar from "../components/StyledSearchBar";
const { Sider, Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  const [login, setLogin] = useState(false);

  let token = null as string | null;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token !== null) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    }
  }, [login, token]);

  return login ? (
    <Layout className="layout">
      <Sider
        width="336"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div>
          <StyledTitle>Company Name</StyledTitle>
          <StyledSearchBar
            width={304}
            placeholder="Search Modules"
            addonBefore={<SearchOutlined />}
          />
        </div>

        <StyledSubTitle level={5} style={{ color: "#B8BABC" }}>
          CLIENT MASTER
        </StyledSubTitle>

        <Menu
          theme="dark"
          mode="inline"
          style={{ marginTop: "16px" }}
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link href={"/view-clients"}>View Clients</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link href={"/add-client"}>Add Client</Link>
          </Menu.Item>
        </Menu>
        <div style={{ alignSelf: "flex-end" }}>
          <AvatarWithDetails />
        </div>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 336 }}>
        <Content
          className="site-layout-background"
          style={{ margin: "24px 16px 0", overflow: "initial", padding: 24 }}
        >
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
}
export default MyApp;

const StyledSubTitle = styled(Typography.Title)`
  margin-top: 24px;
`;

const StyledTitle = styled(Typography.Text)`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-top: 16px;
`;
