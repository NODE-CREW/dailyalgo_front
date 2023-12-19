import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { ProfileBadge } from "@components/user/ProfileBadge";
import { BasicButton } from "@components/button/BasicButton";
import type { UserFollow } from "src/types/user";
import style from "./FollowItem.module.scss";

const cx = classNames.bind(style);

interface Props {
  followItem: UserFollow;
}

const FollowItem = ({ followItem }: Props) => {
  const handleClick = () => {
    // click follow button request to server
  };
  return (
    <li className={cx("follow-item-wrap")}>
      <div className={cx("left")}>
        <ProfileBadge size={48} />
        <div className={cx("user-info")}>
          <span className={cx("name")}>{followItem.nickname}</span>
          <span className={cx("introduce")}>{followItem.intro}</span>
        </div>
      </div>
      <BasicButton size="sm">팔로우</BasicButton>
      {/* <BasicButton size="sm" buttonType="secondary">
        취소
      </BasicButton> */}
    </li>
  );
};

export { FollowItem };
