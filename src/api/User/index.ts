import { createHttpCilent } from "src/lib/http-client";
import type { UserInfo, UserLoginRes, UserSignUpReq } from "src/types/user";
import {
  API_UPDATE_USER,
  API_CHECK_ID,
  API_CHECK_NICKNAME,
  API_SEND_SIGN_UP_EMAIL,
  API_CEHCK_SIGN_UP_CERTIFICATION_NUM,
  API_SIGN_IN,
  API_USER_INFO,
  API_SIGN_UP,
  API_SEND_FIND_EMAIL,
  API_CHECK_FIND_CERTIFICATION_NUM,
  API_SEND_PASSWORD_EMAIL,
  API_CHECK_PASSWORD_CERTIFICATION_NUM,
  API_RESET_PASSWORD,
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

export const requestSendSignUpMail = (email: string): Promise<any> => {
  return instance.post(API_SEND_SIGN_UP_EMAIL, { email });
};

export const requestCheckSignUpCertificationNum = (email: string, num: string): Promise<any> => {
  return instance.post(API_CEHCK_SIGN_UP_CERTIFICATION_NUM, { email, num });
};

export const requestSignUp = (requestBody: UserSignUpReq): Promise<UserLoginRes> => {
  return instance.post(API_SIGN_UP, requestBody);
};

export const requestSignIn = (id: string, password: string): Promise<UserLoginRes> => {
  return instance.post(API_SIGN_IN, { id, password });
};

export const fetchUserInfo = (id?: string): Promise<UserInfo> => {
  return instance.get(API_USER_INFO(id));
};

export const requestSendFindMail = (email: string): Promise<any> => {
  return instance.post(API_SEND_FIND_EMAIL, { email });
};

export const requestCheckFindCertificationNum = (email: string, num: string): Promise<string> => {
  return instance.post(API_CHECK_FIND_CERTIFICATION_NUM, { email, num });
};

export const requestSendPasswordMail = (id: string, email: string): Promise<any> => {
  return instance.post(API_SEND_PASSWORD_EMAIL, { id, email });
};

export const requestCheckPasswordCertificationNum = (
  email: string,
  num: string
): Promise<boolean> => {
  return instance.post(API_CHECK_PASSWORD_CERTIFICATION_NUM, { email, num });
};

export const requestResetPassword = (
  email: string,
  num: string,
  newPassword: string
): Promise<any> => {
  return instance.put(API_RESET_PASSWORD, { email, num, newPassword });
};

export const requestUpdateUser = (requestBody: {
  nickname: string;
  intro?: string;
}): Promise<any> => {
  return instance.put(API_UPDATE_USER, requestBody);
};
