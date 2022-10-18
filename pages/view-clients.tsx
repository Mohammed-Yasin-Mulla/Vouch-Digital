import { Table } from "antd";
import React from "react";
import PageTitle from "./components/PageTitle";
import { columns } from "./components/ViewClient/columns";
import { dummyData } from "./components/ViewClient/dummyData";

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

export default function ViewClients() {
  return (
    <>
      <PageTitle
        title="View Clients"
        route={["Client Master", "View Client"]}
      />
      <Table
        columns={columns}
        dataSource={dummyData}
        pagination={{ position: ["bottomLeft"] }}
      />
    </>
  );
}
