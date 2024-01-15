import classNames from "classnames/bind";
import type { Notification } from "src/types/notification";
import { TimeAgo } from "@components/user/TimeAgo";
import style from "./NotificationListItem.module.scss";
import { fetchNotificationItem } from "src/api/Notification";

const cx = classNames.bind(style);

interface Props {
  notification: Notification;
}

const NotificationListItem = ({ notification }: Props) => {
  const getObjectNameString = (text: string) => {
    const MAX_LENGTH = 20;
    if (text.length > MAX_LENGTH) return `"${text.slice(0, MAX_LENGTH)}..."`;
    return `"${text}"`;
  };

  const getNotificationContent = () => {
    const objectType = notification.object;
    const typeName = notification.type;

    const subjectName = notification.subject_name;
    const objectName = getObjectNameString(notification.object_name);

    switch (objectType) {
      case "question":
        switch (typeName) {
          case "answer":
            return (
              <p>
                <span>{subjectName}</span>님이 회원님의 <span>{objectName}</span> 질문에 답변을
                달았습니다.
              </p>
            );

          case "like":
            return (
              <p>
                <span>{subjectName}</span>님이 회원님의 <span>{objectName}</span> 질문에 좋아요를
                눌렀습니다.
              </p>
            );

          default:
            return null;
        }

      case "question_comment":
        switch (typeName) {
          case "comment":
            return (
              <p>
                <span>{subjectName}</span>님이 회원님의 <span>{objectName}</span>질문에 댓글을
                남겼습니다.
              </p>
            );
          case "like":
            return (
              <p>
                <span>{subjectName}</span>님이 회원님의 댓글에 좋아요를 눌렀습니다.
              </p>
            );

          default:
            return null;
        }

      case "answer":
        switch (typeName) {
          case "answer":
            return (
              <p>
                <span>{subjectName}</span>님이 회원님의 <span>{objectName}</span>질문에 답변을
                달았습니다.
              </p>
            );
          case "like":
            return (
              <p>
                <span>{subjectName}</span>님이 회원님의 답변에 좋아요를 눌렀습니다.
              </p>
            );

          default:
            return null;
        }

      case "answer_comment":
        switch (typeName) {
          case "comment":
            return (
              <p>
                <span>{subjectName}</span>님이 회원님의 답변에 댓글을 남겼습니다.
              </p>
            );

          case "like":
            return (
              <p>
                <span>{subjectName}</span>님이 회원님의 댓글에 좋아요를 눌렀습니다.
              </p>
            );

          default:
            return null;
        }

      case "user":
        switch (typeName) {
          case "follow":
            return (
              <p>
                <span>{subjectName}</span>님이 회원님을 팔로우합니다.
              </p>
            );

          default:
            return null;
        }

      default:
        return null;
    }
  };

  const clickNotificationHandler = async () => {
    try {
      await fetchNotificationItem(notification.id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div onClick={clickNotificationHandler} className={cx("notification-item")}>
      <div className={cx("notification-item-top")}>
        <div className={cx("notification-top-content")}>{getNotificationContent()}</div>
        <span className={cx("notification-time")}>
          <TimeAgo time={notification.created_time} />
        </span>
      </div>
      <div className={cx("notification-item-bottom")}>
        {notification.content && <span>{notification.content}</span>}
      </div>
    </div>
  );
};

export { NotificationListItem };
