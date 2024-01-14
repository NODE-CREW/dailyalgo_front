// import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import { ProfileBadge } from "@components/user/ProfileBadge";
import type { AnswerDetail } from "src/types/answer";
import { TimeAgo } from "@components/user/TimeAgo";
import Link from "next/link";
import { IconButton } from "@components/button/IconButton";
import { SvgIcon } from "@components/icon/SvgIcon";

import style from "./AnswerHeader.module.scss";

const cx = classNames.bind(style);

interface Props {
  answer: AnswerDetail;
  isAuthor: boolean;
  onDeleteAnswer: (answerId: number) => void;
  onLikeAnswer: (answerId: number) => void;
}

const AnswerHeader = ({ answer, isAuthor, onDeleteAnswer, onLikeAnswer }: Props) => {
  console.log(answer);
  return (
    <div className={cx("answer-header-wrap")}>
      <div className={cx("icon")}>
        <ProfileBadge size={40} />
      </div>
      <div className={cx("answer-content-wrap")}>
        <div className={cx("left")}>
          <div className={cx("user-info")}>
            <Link href={`/user/${answer.user_id}`}>
              <span className={cx("user-name")}>{answer.user_nickname}dsad</span>
            </Link>

            <div className={cx("answer-info")}>
              <span className={cx("timestamp")}>
                <TimeAgo time={answer.created_time} /> 작성
              </span>
              {isAuthor && (
                <div className={cx("edit-wrap")}>
                  <Link href={`/board/answer/update/${answer.question_id}/${answer.id}`}>
                    <div>수정</div>
                  </Link>
                  <div onClick={() => onDeleteAnswer(answer.id)}>삭제</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={cx("right")}>
          <IconButton
            icon={<SvgIcon iconName={answer.is_like ? "like-on" : "like-off"} size={20} />}
            title="좋아요"
            onClick={() => onLikeAnswer(answer.id)}
          />
          <span className={cx("like-count")}>{answer.like_cnt}</span>
        </div>
      </div>
    </div>
  );
};

export { AnswerHeader };
