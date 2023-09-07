// import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import { ProfileBadge } from "@components/user/ProfileBadge";
import { IconButton } from "@components/button/IconButton";
import { SvgIcon } from "@components/icon/SvgIcon";

import style from "./AnswerHeader.module.scss";

const cx = classNames.bind(style);

// interface Props {}

const AnswerHeader = () => {
  const userName = "답변왕";
  const isLiked = false;
  const likeIconName = isLiked ? "like-on" : "like-off";
  const likeCount = 77;

  return (
    <div className={cx("answer-header-wrap")}>
      <div className={cx("left")}>
        <ProfileBadge size={40} />
        <div className={cx("user-info")}>
          <span className={cx("user-name")}>{userName}</span>
          <span className={cx("timestamp")}>1분전</span>
        </div>
      </div>
      <div className={cx("right")}>
        <IconButton
          icon={<SvgIcon iconName={likeIconName} size={20} />}
          title="좋아요"
          className={cx(likeIconName)}
        />
        <span className={cx("like-count")}>{likeCount}</span>
      </div>
    </div>
  );
};

export { AnswerHeader };
