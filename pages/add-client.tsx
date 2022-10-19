import { Tabs } from "antd";
import React, { useState } from "react";
import PageTitle from "./components/PageTitle";

export enum TabName {
  create_profile = "Create Profile",
  payment_setup = "Payment Setup",
  theme_setup = "Theme Setup",
  modules_setup = "Modules Setup",
}

export enum TabShortName {
  CREATE_PROFILE = "create_profile",
  PAYMENT_SETUP = "payment_setup",
  THEME_SETUP = "theme_setup",
  MODULES_SETUP = "modules_setup",
}

export default function AddClient() {
  const [currentTab, setCurrentTab] = useState<keyof typeof TabName>(
    TabShortName.CREATE_PROFILE
  );

  const onChangeTab = (key: string) => {
    setCurrentTab(key as keyof typeof TabName);
  };

  return (
    <>
      <PageTitle
        title={"Add Client"}
        route={["Client Master", "Add Client", TabName[currentTab]]}
      />
      <Tabs
        activeKey={currentTab}
        onChange={onChangeTab}
        items={[
          {
            label: TabName.create_profile,
            key: TabShortName.CREATE_PROFILE,
            children: `Content of Tab Pane 1`,
          },
          {
            label: TabName.payment_setup,
            key: TabShortName.PAYMENT_SETUP,
            children: `Content of Tab Pane 2`,
          },
          {
            label: TabName.theme_setup,
            key: TabShortName.THEME_SETUP,
            children: `Content of Tab Pane 3`,
          },
          {
            label: TabName.modules_setup,
            key: TabShortName.MODULES_SETUP,
            children: `Content of Tab Pane 3`,
          },
        ]}
      />
    </>
  );
}
