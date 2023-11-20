// === User ===
export const API_CHECK_ID = "/user/check/id/";
export const API_CHECK_NICKNAME = "/user/check/nickname/";
export const API_SEND_EMAIL = "/user/send_mail/";
export const API_CEHCK_CERTIFICATION_NUM = "/user/check/certification_num/";

export const API_SIGN_IN = "/user/sign_in/";
export const API_USER_INFO = (id?: string) => {
  return id ? `/user/${id}/` : "/user/";
};
