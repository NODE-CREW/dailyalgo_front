import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { ProfileBadge } from "@components/user/ProfileBadge";
import { BasicButton } from "@components/button/BasicButton";
import style from "./FollowItem.module.scss";

const cx = classNames.bind(style);

interface Props {}

const FollowItem = ({}: Props) => {
  const handleClick = () => {};
  return (
    <li className={cx("follow-item-wrap")}>
      <div className={cx("left")}>
        <ProfileBadge size={48} />
        <div className={cx("user-info")}>
          <span className={cx("name")}>nickname</span>
          <span className={cx("introduce")}>ㅋㅋㅋㅋㅋ</span>
        </div>
      </div>
      <BasicButton size="sm">팔로우</BasicButton>
    </li>
  );
};

export { FollowItem };
