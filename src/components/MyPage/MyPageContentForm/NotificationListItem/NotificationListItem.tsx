import classNames from "classnames/bind";
import type { Notification } from "src/types/notification";
import { TimeAgo } from "@components/user/TimeAgo";
import { fetchNotificationItem } from "src/api/Notification";
import { useRouter } from "next/navigation";
import style from "./NotificationListItem.module.scss";
import { toast } from "react-toastify";

const cx = classNames.bind(style);

interface Props {
  notification: Notification;
}

const NotificationListItem = ({ notification }: Props) => {
  const router = useRouter();

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
      const res = await fetchNotificationItem(notification.id);
      if (typeof res.id === "number") router.push(`/board/detail/${res.id}`);
      else router.push(`/user/${res.id}`);
    } catch (e) {
      toast.error("예기치 못한 오류가 발생했습니다. 나중에 다시 시도해주세요.");
    }
  };

  return (
    <div className={cx("notification-item", !notification.is_read && "not-read-item")}>
      <div className={cx("notification-item-top")}>
        <div className={cx("notification-top-content")} onClick={clickNotificationHandler}>
          {getNotificationContent()}
        </div>
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
