import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import styled from "styled-components";

import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { Layout, Menu, Input, Typography } from "antd";
import React, { useEffect, useState } from "react";
import AvatarWithDetails from "../components/AvatarWithDetails";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Link from "next/link";
import StyledSearchBar from "../components/StyledSearchBar";
import router from "next/router";
const { Sider, Content } = Layout;

const queryClient = new QueryClient();

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
        router.replace("/view-clients");
      } else {
        setLogin(false);
        router.replace("/");
      }
    }
  }, [login, token]);

  return login ? (
    <QueryClientProvider client={queryClient}>
      <Layout className="layout">
        <Sider
          width="336"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            
            
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
            <div style={{

               position: "absolute",
               bottom: 0,
                width: "90%",

            }}>
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
    </QueryClientProvider>
  ) : (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
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
  margin-top: 24px;
`;
