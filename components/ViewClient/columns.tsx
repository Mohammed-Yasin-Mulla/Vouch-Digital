import { Avatar, Dropdown, Button, Menu } from "antd";
import { ColumnsType } from "antd/lib/table";
import styled from "styled-components";
import {
    MoreOutlined,
    EyeOutlined,
    EditOutlined,
    StopOutlined,
    DeleteOutlined,
    UserOutlined
  } from "@ant-design/icons";
import { TableData } from "../../pages/view-clients";


const StyledOptionButton = styled(Button)`
  color: black !important;
`;

const menu = (
    <Menu
      items={[
        {
          label: (
            <StyledOptionButton type="link" icon={<EyeOutlined />}>
              View Details
            </StyledOptionButton>
          ),
          key: "0",
        },
        {
          label: (
            <StyledOptionButton type="link" icon={<EditOutlined />}>
              Edit
            </StyledOptionButton>
          ),
          key: "1",
        },
        {
          label: (
            <StyledOptionButton type="link" icon={<StopOutlined />}>
              Block Access
            </StyledOptionButton>
          ),
          key: "2",
        },
        {
          label: (
            <StyledOptionButton type="link" icon={<DeleteOutlined />}>
              Delete
            </StyledOptionButton>
          ),
          key: "3",
        },
      ]}
    />
  );
  
  

export  const columns: ColumnsType<TableData> = [
  {
    title: "Company Name",
    dataIndex: "companyName",
    key: "companyName",
    render: (text) => <span>
       <Avatar size={"small"} icon={<UserOutlined />}  style={{marginRight:'10px'}} />
      {text}</span>,
  },
  {
    title: "Email Address",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone No",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Contact Person",
    dataIndex: "contact_person",
    key: "contact_person",
  },
  {
    title: "Facilitators",
    dataIndex: "facilitators",
    key: "facilitators",
    render: (facilitators) => {
      if (facilitators !== undefined && facilitators !== null) {
        return facilitators;
      } else {
        return "--";
      }
    },
  },
  {
    title: "Sites",
    dataIndex: "sites",
    key: "sites",
  },
  {
    title: "Tenants",
    dataIndex: "tenants",
    key: "tenants",
    render: (tenants) => {
      if (tenants !== undefined && tenants !== null) {
        return tenants;
      } else {
        return "--";
      }
    },
  },
  {
    title: "Teenage Groups",
    dataIndex: "teenageGroups",
    key: "tenants",
    render: (tenants) => {
      if (tenants !== undefined && tenants !== null) {
        return tenants;
      } else {
        return "--";
      }
    },
  },
  {
    title: "Action",
    key: "action",
    render: () => {
      return (
        <Dropdown overlay={menu}>
          <MoreOutlined twoToneColor="black" />
        </Dropdown>
      );
    },
  },
];
