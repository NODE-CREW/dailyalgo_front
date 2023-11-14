"use client";

import { SideTab } from "@components/mypage/SideTab";
import { MyPageQuestionList } from "@components/mypage/MyPageQuestionList";
import { MyPageTop } from "@components/mypage/MyPageTop";
import { useState } from "react";
import type { QuestionItem } from "@components/mypage/MyPageQuestionList/MyPageQuestionList";

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

const UserPage = () => {
  const userPageTabList = ["답변", "질문"];
  const userPageTabContent = [
    <MyPageQuestionList tab="답변" questionsData={Dummy} />,
    <MyPageQuestionList tab="질문" questionsData={Dummy} />,
  ];

  const [isFollowing, setIsFollowing] = useState(false);

  const clickFollowBtn = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <>
      <MyPageTop clickBtnHandler={clickFollowBtn} isFollowing={isFollowing} pageType="user" />
      <SideTab tabList={userPageTabList} tabContents={userPageTabContent} />
    </>
  );
};

export default UserPage;
