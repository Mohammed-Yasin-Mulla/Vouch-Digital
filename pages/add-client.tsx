import { Tabs } from "antd";
import React, { useState } from "react";
import CreateProfile from "./components/AddClient/CreateProfile";
import ModulesSetup from "./components/AddClient/ModulesSetup";
import PaymentSetup from "./components/AddClient/PaymentSetup";
import Success from "./components/AddClient/Success";
import ThemeSetup from "./components/AddClient/ThemeSetup";
import PageTitle from "./components/PageTitle";

export enum TabName {
  create_profile = "Create Profile",
  payment_setup = "Payment Setup",
  theme_setup = "Theme Setup",
  modules_setup = "Modules Setup",
  success = "Success",
}

export enum TabShortName {
  CREATE_PROFILE = "create_profile",
  PAYMENT_SETUP = "payment_setup",
  THEME_SETUP = "theme_setup",
  MODULES_SETUP = "modules_setup",
  SUCCESS = "success",
}

export default function AddClient() {
  const [currentTab, setCurrentTab] = useState<keyof typeof TabName>(
    TabShortName.SUCCESS
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
      {currentTab !== TabShortName.SUCCESS && (
        <Tabs
          activeKey={currentTab}
          onChange={onChangeTab}
          items={[
            {
              label: TabName.create_profile,
              key: TabShortName.CREATE_PROFILE,
              children: <CreateProfile />,
            },
            {
              label: TabName.payment_setup,
              key: TabShortName.PAYMENT_SETUP,
              children: <PaymentSetup />,
            },
            {
              label: TabName.theme_setup,
              key: TabShortName.THEME_SETUP,
              children: <ThemeSetup />,
            },
            {
              label: TabName.modules_setup,
              key: TabShortName.MODULES_SETUP,
              children: <ModulesSetup />,
            },
            {
              label: TabName.modules_setup,
              key: TabShortName.MODULES_SETUP,
              children: <ModulesSetup />,
            },
          ]}
        />
      )}

      {currentTab === TabShortName.SUCCESS && <Success />}
    </>
  );
}
