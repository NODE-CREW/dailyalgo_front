import classNames from "classnames/bind";
import { NotificationListItem } from "../NotificationListItem";
import style from "./NotificationList.module.scss";

const cx = classNames.bind(style);

const NotificationList = () => {
  return (
    <div className={cx("notification-wrap")}>
      <div className={cx("notification-header")}>
        <span className={cx("notification-header-text")}>알림</span>
      </div>
      <div className={cx("notification-list")}>
        <NotificationListItem />
        <NotificationListItem />
        <NotificationListItem />
      </div>
    </div>
  );
};

export { NotificationList };
