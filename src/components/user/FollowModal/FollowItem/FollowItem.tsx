import { useState, useEffect } from "react";
import { reduxAppSelector } from "src/redux/store";
import classNames from "classnames/bind";
import { ProfileBadge } from "@components/user/ProfileBadge";
import { BasicButton } from "@components/button/BasicButton";
import { useRouter } from "next/navigation";
import type { UserFollow } from "src/types/user";
import { requestUserFollow } from "src/api/User";
import style from "./FollowItem.module.scss";

const cx = classNames.bind(style);

interface Props {
  followItem: UserFollow;
  getUserInfo: () => void;
}

const FollowItem = ({ followItem, getUserInfo }: Props) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const { isLogIn } = reduxAppSelector((state) => state.authReducer.value);
  const router = useRouter();

  useEffect(() => {
    setIsFollowed(followItem.is_following === "true");
  }, []);

  const handleClick = async () => {
    if (!isLogIn) {
      router.push("/login");
      return;
    }

    try {
      await requestUserFollow(followItem.id);
      setIsFollowed(!isFollowed);
      getUserInfo();
    } catch (e) {
      console.log(e);
    }
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
      {isFollowed ? (
        <BasicButton size="sm" buttonType="secondary" onClick={handleClick}>
          취소
        </BasicButton>
      ) : (
        <BasicButton size="sm" onClick={handleClick}>
          팔로우
        </BasicButton>
      )}
    </li>
  );
};

export { FollowItem };
