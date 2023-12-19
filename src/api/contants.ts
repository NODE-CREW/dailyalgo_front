// === User ===
export const API_UPDATE_USER = "/user/";
export const API_UPDATE_PASSWORD = "/user/password/";
export const API_CHECK_ID = "/user/check/id/";
export const API_CHECK_NICKNAME = "/user/check/nickname/";
export const API_SEND_SIGN_UP_EMAIL = "/user/sign_up/email/";
export const API_CEHCK_SIGN_UP_CERTIFICATION_NUM = "/user/sign_up/validate/";

export const API_SEND_FIND_EMAIL = "/user/find/email/";
export const API_CHECK_FIND_CERTIFICATION_NUM = "/user/find/validate/";
export const API_SEND_PASSWORD_EMAIL = "/user/password/reset/email/";
export const API_CHECK_PASSWORD_CERTIFICATION_NUM = "/user/password/reset/validate/";
export const API_RESET_PASSWORD = "/user/password/reset/";

export const API_SIGN_UP = "/user/sign_up/";
export const API_SIGN_IN = "/user/sign_in/";

export const API_FIND_ID_BY_EMAIL = (email: string) => {
  return `/user/find/${email}/`;
};

export const API_USER_INFO = (id?: string) => {
  return id ? `/user/${id}/` : "/user/";
};

export const API_USER_FOLLOWER = (id: string) => {
  return `/user/${id}/follower/`;
};

export const API_USER_FOLLOWING = (id: string) => {
  return `/user/${id}/following/`;
};

// === Organization ===
export const API_SEARCH_ORGANIZATION = "/organization/code";
