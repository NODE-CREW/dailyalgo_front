"use client";

import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { CommonDropdown } from "@components/dropdown/CommonDropdown";
import { HeroBanner } from "../HeroBanner";
import { QuestionListItem } from "../QuestionListItem";
import style from "./HomeLayout.module.scss";

const cx = classNames.bind(style);

interface Props {
  data: any;
}

const Dummy = [
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

const HomeLayout = ({ data }: Props) => {
  const sortOptions = [
    { id: "recent", label: "최신순" },
    { id: "like", label: "좋아요순" },
    { id: "comment", label: "댓글순" },
  ];
  const sourceOptions = [
    { id: "all", label: "전체" },
    { id: "baekjoon", label: "백준" },
    { id: "programmers", label: "프로그래머스" },
    { id: "swea", label: "SWEA" },
  ];
  const questionTypeOptions = [
    { id: "all", label: "전체" },
    { id: "short", label: "단순" },
  ];

  const [sort, setSort] = useState(sortOptions[0].id);
  const [source, setSource] = useState(sourceOptions[0].id);
  const [questionType, setQuestionType] = useState(questionTypeOptions[0].id);

  return (
    <div className={cx("home-layout-wrap")}>
      <HeroBanner />
      <div className={cx("home-layout-inner")}>
        <div className={cx("list-wrap")}>
          <strong className={cx("list-title")}>전체</strong>
          <div className={cx("sub-title-wrap")}>
            <span className={cx("sub-title")}>0000 개의 알고</span>
            <div className={cx("filter-wrap")}>
              <CommonDropdown
                options={sortOptions}
                initialValue={sortOptions[0].id}
                changeHandler={setSort}
              />
              <CommonDropdown
                options={sourceOptions}
                placeholder="문제 출처"
                changeHandler={setSource}
              />
              <CommonDropdown
                options={questionTypeOptions}
                placeholder="질문 타입"
                changeHandler={setQuestionType}
              />
            </div>
          </div>
          <ul className={cx("question-list")}>
            {Dummy.map((item) => (
              <QuestionListItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
        <div className={cx("advertise-wrap")}>
          <div className={cx("temp-ad")}>광고 영역</div>
        </div>
      </div>
    </div>
  );
};

export { HomeLayout };