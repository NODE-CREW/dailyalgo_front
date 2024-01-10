import { createHttpCilent } from "src/lib/http-client";

import type { AnswerDetail, AnswerCreateReq } from "src/types/answer";
import {
  API_ANSWER,
  API_QUESTION_ANSWER,
  API_ANSWER_ITEM,
  API_ANSWER_LIKE,
  API_ANSWER_COMMENT,
} from "../contants";

const instance = createHttpCilent()
  .setBaseUrl(process.env.NEXT_PUBLIC_API_URL ?? "")
  .build();

export const fetchAnswerList = (questionId: number): Promise<AnswerDetail[]> => {
  return instance.get(API_QUESTION_ANSWER(questionId));
};

export const requestCreateAnswer = (requestBody: AnswerCreateReq): Promise<any> => {
  return instance.post(API_ANSWER, requestBody);
};

export const deleteAnswer = (answerId: number): Promise<any> => {
  return instance.delete(API_ANSWER_ITEM(answerId));
};

export const requestAnswerLike = (answerId: number): Promise<any> => {
  return instance.put(API_ANSWER_LIKE(answerId));
};
