import { createHttpCilent } from "src/lib/http-client";
import { API_QUESTION } from "../contants";

const instance = createHttpCilent()
  .setBaseUrl(process.env.NEXT_PUBLIC_API_URL ?? "")
  .build();

export const requestPostQuestion = (requestBody: any): Promise<any> => {
  console.log("requestBody", requestBody);
  return instance.post(API_QUESTION, requestBody);
};
