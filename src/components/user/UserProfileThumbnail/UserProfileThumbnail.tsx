import classNames from "classnames/bind";
import Link from "next/link";
import { ProfileBadge } from "../ProfileBadge";
import style from "./UserProfileThumbnail.module.scss";

const cx = classNames.bind(style);

interface Props {
  userName: string;
  userProfileImage?: string;
  userId: string;
}

const UserProfileThumbnail = ({ userName, userProfileImage, userId }: Props) => {
  // TODO: userPageUrl 만들기
  const userPageUrl = `/user/${userId}`;
  return (
    <Link href={userPageUrl} className={cx("user-profile-thumbnail-wrap")}>
      <ProfileBadge profileImage={userProfileImage} size={24} />
      <div className={cx("user-name")}>{userName}</div>
    </Link>
  );
};

export { UserProfileThumbnail };
