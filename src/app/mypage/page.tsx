"use client";

import { useState } from "react";
import { reduxAppSelector } from "src/redux/store";
import { MyPageTop } from "../../components/mypage/MyPageTop";
import { SideTab } from "../../components/mypage/SideTab";
import { MyPageQuestionList } from "../../components/mypage/MyPageQuestionList";
import { NotificationList } from "../../components/mypage/NotificationList";
import { ChangePwForm } from "../../components/mypage/ChangePwForm";
import { ChangeProfileForm } from "../../components/mypage/ChangeProfileForm";
import type { QuestionItem } from "../../components/mypage/MyPageQuestionList/MyPageQuestionList";

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
  const { userInfo } = reduxAppSelector((state) => state.authReducer.value);
  console.log(userInfo);

  const mypageTabList = ["답변", "질문", "다시보기", "알람"];
  const mypageEditTabList = ["프로필 수정", "비밀번호 변경"];
  const [isEdited, setIsEdited] = useState(false);

  const clickEdit = () => {
    setIsEdited(!isEdited);
  };

  const mypageTabContents = [
    <MyPageQuestionList tab="답변" questionsData={Dummy} />,
    <MyPageQuestionList tab="질문" questionsData={Dummy} />,
    <MyPageQuestionList tab="다시보기" questionsData={Dummy} />,
    <NotificationList />,
  ];

  const mypageEditTabContents = [<ChangeProfileForm />, <ChangePwForm />];

  return (
    <>
      <MyPageTop isEdited={isEdited} clickBtnHandler={clickEdit} pageType="mypage" />
      {isEdited ? (
        <SideTab tabList={mypageEditTabList} tabContents={mypageEditTabContents} />
      ) : (
        <SideTab tabList={mypageTabList} tabContents={mypageTabContents} />
      )}
    </>
  );
};

export default Page;
