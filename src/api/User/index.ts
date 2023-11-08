import { createHttpCilent } from "src/lib/http-client";

import {
  API_CHECK_ID,
  API_CHECK_NICKNAME,
  API_SEND_EMAIL,
  API_CEHCK_CERTIFICATION_NUM,
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
