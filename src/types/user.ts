interface LoginRes {
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

export type { LoginRes, UserInfo };
