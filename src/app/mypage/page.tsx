"use client";

import { MyPageTop } from "./_components/MyPageTop";
import { SideTab } from "./_components/SideTab";
import { MyPageQuestionList } from "./_components/MyPageQuestionList";
import { NotificationList } from "./_components/NotificationList";
import type { QuestionItem } from "./_components/MyPageQuestionList/MyPageQuestionList";

const Dummy: QuestionItem[] = [
  {
    id: 1,
    title: "How to use React?",
    questionContents:
      "I want to use React in my project. How can I do that? I want to use React in my project. How can I do that? I want to use React in my project. How can I do that? I want to use React in my project. How can I do that?",
    problemTag: "시간초과",
    platform: "BOJ",
    algorithmTagArray: ["DP", "DFS", "BFS"],
    likeCount: 10,
    viewCount: 20,
    commentCount: 30,
    author: "근육맨",
    createdAt: "2021-08-01T00:00:00.000Z",
  },
  {
    id: 2,
    title: "How to use React?",
    questionContents:
      "I want to use React in my project. How can I do that? I want to use React in my project. How can I do that? I want to use React in my project. How can I do that? I want to use React in my project. How can I do that?",
    problemTag: "시간초과",
    platform: "BOJ",
    algorithmTagArray: ["DP", "DFS", "BFS"],
    likeCount: 10,
    viewCount: 20,
    commentCount: 30,
    author: "근육맨",
    createdAt: "2021-08-01T00:00:00.000Z",
  },
  {
    id: 3,
    title: "How to use React?",
    questionContents:
      "I want to use React in my project. How can I do that? I want to use React in my project. How can I do that? I want to use React in my project. How can I do that? I want to use React in my project. How can I do that?",
    problemTag: "시간초과",
    platform: "BOJ",
    algorithmTagArray: ["DP", "DFS", "BFS"],
    likeCount: 10,
    viewCount: 20,
    commentCount: 30,
    author: "근육맨",
    createdAt: "2021-08-01T00:00:00.000Z",
  },
  {
    id: 4,
    title: "How to use React?",
    questionContents:
      "I want to use React in my project. How can I do that? I want to use React in my project. How can I do that? I want to use React in my project. How can I do that? I want to use React in my project. How can I do that?",
    problemTag: "시간초과",
    platform: "BOJ",
    algorithmTagArray: ["DP", "DFS", "BFS"],
    likeCount: 10,
    viewCount: 20,
    commentCount: 30,
    author: "근육맨",
    createdAt: "2021-08-01T00:00:00.000Z",
  },
];

const Page = () => {
  const tabList = ["답변", "질문", "다시보기", "알람"];

  const tabContents = [
    <MyPageQuestionList tab="답변" questionsData={Dummy} />,
    <MyPageQuestionList tab="질문" questionsData={Dummy} />,
    <MyPageQuestionList tab="다시보기" questionsData={Dummy} />,
    <NotificationList />,
  ];

  return (
    <>
      <MyPageTop />
      <SideTab tabList={tabList} tabContents={tabContents} />
    </>
  );
};

export default Page;
