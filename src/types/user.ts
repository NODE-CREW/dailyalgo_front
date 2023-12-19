interface UserLoginRes {
  message: string;
  token: string;
}

interface UserInfo {
  id: string;
  name: string;
  nickname: string;
  intro: string;
  email: string;
  created_time: Date;
  organizations: string[];
  question_cnt: number;
  answer_cnt: number;
  view_cnt: number;
  follower_cnt: number;
  following_cnt: number;
}

interface UserSignUpReq {
  id: string;
  name: string;
  nickname: string;
  password: string;
  email: string;
  num: string;
  organization_code?: string;
}

interface UserFollow {
  id: string;
  nickname: string;
  intro?: string;
  is_following: boolean;
}

export type { UserLoginRes, UserInfo, UserSignUpReq, UserFollow };
