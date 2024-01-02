type ProblemType =
  | "시간초과"
  | "메모리 초과"
  | "에러"
  | "해결방법"
  | "반례요청"
  | "왜맞틀"
  | "왜틀맞"
  | "기타";

type TagItem = {
  id: string;
  label: string;
};

type PlatformType = "BOJ" | "SWEA" | "Programmers";

export type { TagItem };
