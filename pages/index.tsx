import { Button } from "antd";
import router from "next/router";
import React from "react";

export default function index() {
  const onClick = () => {
    console.log("clicked");
    router.replace("/view-clients");
    localStorage.setItem("token", "red");
  };

  return (
    <div>
      login
      <Button onClick={onClick}>Login</Button>
    </div>
  );
}
