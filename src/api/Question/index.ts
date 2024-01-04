import { createHttpCilent } from "src/lib/http-client";
import type { QuestionDetail, QuestionCreateRequestBody } from "src/types/question";
import {
  API_QUESTION,
  API_QUESTION_ITEM,
  API_QUESTION_LIKE,
  API_QUESTION_SCRAP,
} from "../contants";

const instance = createHttpCilent()
  .setBaseUrl(process.env.NEXT_PUBLIC_API_URL ?? "")
  .build();

export const requestPostQuestion = (requestBody: QuestionCreateRequestBody): Promise<any> => {
  return instance.post(API_QUESTION, requestBody);
};

export const requestUpdateQuestion = (
  questionId: number,
  requestBody: QuestionCreateRequestBody
): Promise<any> => {
  return instance.put(API_QUESTION_ITEM(questionId), requestBody);
};

export const fetchQuestionDetail = (questionId: number): Promise<QuestionDetail> => {
  return instance.get(API_QUESTION_ITEM(questionId));
};

export const requestScrapQuestion = (questionId: number): Promise<any> => {
  return instance.put(API_QUESTION_SCRAP(questionId));
};

export const requestLikeQuestion = (questionId: number): Promise<any> => {
  return instance.put(API_QUESTION_LIKE(questionId));
};
