import { Button, Dropdown, Menu, Space, Table } from "antd";
import React from "react";
import PageTitle from "./components/PageTitle";
import { StyledSearchBar } from "./components/StyledSearchBar";
import { columns } from "./components/ViewClient/columns";
import { dummyData } from "./components/ViewClient/dummyData";
import {
  SearchOutlined,
  DownOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

export interface TableData {
  companyName: string;
  email: string;
  phone: number;
  contact_person: string;
  facilitators?: number;
  sites: number;
  tenants?: number;
  teenageGroups?: number;
}

const menu = (
  <Menu
    items={[
      {
        label: "Company Name",
        key: "1",
      },
      {
        label: "Email Address",
        key: "2",
      },
      {
        label: "Phone No",
        key: "3",
      },
    ]}
  />
);

export default function ViewClients() {
  return (
    <>
      <PageTitle
        title="View Clients"
        route={["Client Master", "View Client"]}
      />
      <div
        style={{
          display: "flex",
          marginTop: "40px",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <StyledSearchBar
          placeholder="Search"
          width={300}
          addonBefore={<SearchOutlined />}
        />
        <ButtonWrapper>
          <Dropdown overlay={menu}>
            <Button>
              <Space>
                Columns
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Button type="primary" icon={<DownloadOutlined />}>
            Export
          </Button>
        </ButtonWrapper>
      </div>
      <Table
        columns={columns}
        dataSource={dummyData}
        pagination={{ position: ["bottomLeft"] }}
      />
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
