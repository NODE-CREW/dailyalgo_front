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

export type { QuestionItem };
