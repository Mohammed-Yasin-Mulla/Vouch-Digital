import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import axios from "axios";
import router from "next/router";

interface SuccessResponse {
  token: string;
}

interface Error {
  error: string;
}

interface LoginPayload {
  username: string;
  password: string;
}

export function useLoginAPI() {
  const query = useMutation<SuccessResponse, Error, LoginPayload>(
    (MutationKey) => axios.post("https://reqres.in/api/login", MutationKey),
    {
      onSuccess: (data) => {
        router.replace("/view-clients");
        localStorage.setItem("token", data.token);
        message.success("Login Successful");
      },
      onError: () => {
        message.error(`Login Failed`);
      },
    }
  );

  return query;
}
