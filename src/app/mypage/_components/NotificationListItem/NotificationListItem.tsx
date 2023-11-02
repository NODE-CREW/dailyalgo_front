import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import style from "./NotificationListItem.module.scss";

const cx = classNames.bind(style);

interface Props {}

const NotificationListItem = ({}: Props) => {
  return (
    <div className={cx("notification-item")}>
      <div className={cx("notification-item-top")}>
        <div className={cx("notification-top-content")}>
          <span className={cx("notification-highlight")}>블라블라</span>님이 회원님의 "
          <span className={cx("notification-highlight")}>제목일부분...</span>"컨텐츠에 댓글을
          달았습니다
        </div>
        <span className={cx("notification-time")}>50분전</span>
      </div>
      <div className={cx("notification-item-bottom")}>
        <span>재밋는 질문이네요! 해당 문제는 이렇게 풀어보면 어떨까요? 개...</span>
      </div>
    </div>
  );
};

export { NotificationListItem };
