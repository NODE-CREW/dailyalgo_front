import { createHttpCilent } from "src/lib/http-client";
import type { UserInfo, LoginRes } from "src/types/user";
import {
  API_CHECK_ID,
  API_CHECK_NICKNAME,
  API_SEND_EMAIL,
  API_CEHCK_CERTIFICATION_NUM,
  API_SIGN_IN,
  API_USER_INFO,
} from "../contants";

const instance = createHttpCilent()
  .setBaseUrl(process.env.NEXT_PUBLIC_API_URL ?? "")
  .build();

export const fetchCheckId = (id: string): Promise<boolean> => {
  return instance.get(API_CHECK_ID, { params: { id } });
};

export const fetchCheckNickname = (nickname: string): Promise<boolean> => {
  return instance.get(API_CHECK_NICKNAME, { params: { nickname } });
};

export const requestSendMail = (email: string): Promise<any> => {
  return instance.post(API_SEND_EMAIL, { email });
};

export const requestCheckCertificationNum = (email: string, num: string): Promise<any> => {
  return instance.post(API_CEHCK_CERTIFICATION_NUM, { email, num });
};

export const requestSignIn = (id: string, password: string): Promise<LoginRes> => {
  return instance.post(API_SIGN_IN, { id, password });
};

export const fetchUserInfo = (id?: string): Promise<UserInfo> => {
  return instance.get(API_USER_INFO(id));
};
