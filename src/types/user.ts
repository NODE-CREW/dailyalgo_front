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
  organizations: {
    name: string;
    code: string;
  }[];
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
  is_following: "true" | "false";
}

interface QuestionItem {
  id: number;
  title: string;
  source: string;
  type: string;
  tags: string[];
  user_id: string;
  answer_created_time: Date;
  is_scraped: boolean;
  is_like: boolean;
}

interface UserQuestionsByContent {
  total_cnt: number;
  nextIndex: number;
  qustion_list: QuestionItem[];
}

export type {
  UserLoginRes,
  UserInfo,
  UserSignUpReq,
  UserFollow,
  UserQuestionsByContent,
  QuestionItem,
};
