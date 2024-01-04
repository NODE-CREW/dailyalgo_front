interface QuestionItem {
  id: number;
  title: string;
  source: string;
  type: string;
  tags: { name: string }[];
  user_id: string;
  question_created_time: Date;
  is_scrap: number;
  is_like: number;
}

interface QuestionDetail {
  id: number;
  title: string;
  user_id: string;
  user_nickname: string;
  source: string;
  link: string;
  type: string;
  content: string;
  language: string;
  code: string;
  created_time: Date;
  modified_time: Date;
  view_cnt: number;
  like_cnt: number;
  answer_cnt: number;
  comment_cnt: number;
  tags: { name: string }[];
  is_scrap: number;
  is_like: number;
}

interface QuestionCreateRequestBody {
  title: string;
  source: string;
  link: string;
  type: string;
  content: string;
  language: string;
  code: string;
  tags: string[];
}

export type { QuestionItem, QuestionDetail, QuestionCreateRequestBody };
