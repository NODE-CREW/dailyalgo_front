// === User ===
export const API_CHECK_ID = "/user/check/id/";
export const API_CHECK_NICKNAME = "/user/check/nickname/";
export const API_SEND_SIGN_UP_EMAIL = "/user/sign_up/email/";
export const API_CEHCK_SIGN_UP_CERTIFICATION_NUM = "/user/sign_up/validate/";
export const API_SIGN_UP = "/user/sign_up/";

export const API_SIGN_IN = "/user/sign_in/";
export const API_USER_INFO = (id?: string) => {
  return id ? `/user/${id}/` : "/user/";
};

// === Organization ===
export const API_SEARCH_ORGANIZATION = "/organization/code";
