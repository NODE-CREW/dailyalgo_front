import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import { CommentInput } from "../CommentInput";
import { CommentItem } from "../CommentItem";

import style from "./CommentBlock.module.scss";

const cx = classNames.bind(style);

interface Props {}

const CommentBlock = ({}: Props) => {
  const commentCount = 2;
  const commentList = [
    {
      text: "와 이거 나도 헷갈렸던건데! 누가 빨리 대답좀 해주세요!! ",
      user: {
        id: 1,
        name: "나코딩잘해",
      },
    },
    {
      text: "ㅋㅋㅋㅋㅋ이걸모르넼ㅋㅋㅋㅋ",
      user: {
        id: 1,
        name: "이걸모름?",
      },
    },
  ];
  return (
    <div className={cx("comment-block-wrap")}>
      <strong className={cx("comment-count-wrap")}>
        <span className={cx("comment-count")}>{commentCount}개</span>의 댓글
      </strong>
      <CommentInput />
      <ul className={cx("comment-list-wrap")}>
        {commentList.map((comment, index) => (
          <li key={comment.text}>
            <CommentItem />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CommentBlock };
