import classNames from "classnames/bind";
import { SvgIcon } from "@components/icon/SvgIcon";
import { UserProfileThumbnail } from "@components/user/UserProfileThumbnail";
import style from "./CommentItem.module.scss";

const cx = classNames.bind(style);

// interface Props {}

const CommentItem = () => (
  <div className={cx("comment-item-wrap")}>
    <div className={cx("comment-item-L")}>
      <SvgIcon iconName="comment-list-item" size={14} />
    </div>
    <div className={cx("comment-contents")}>
      <span className={cx("comment-text")}>와! 나도 몰랐던 건데잉</span>
      <UserProfileThumbnail imageShow={false} userName="몰랐던 애" userId="a" />
    </div>
  </div>
);

export { CommentItem };
