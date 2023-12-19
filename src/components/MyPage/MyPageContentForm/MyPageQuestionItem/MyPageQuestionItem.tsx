import classNames from "classnames/bind";
import { IconButton } from "@components/button/IconButton";
import { SvgIcon } from "@components/icon/SvgIcon";
import { Tag } from "@components/icon/Tag";
import { TimeAgo } from "@components/user/TimeAgo";
import Link from "next/link";
import style from "./MyPageQuestionItem.module.scss";
import type { QuestionItem } from "../MyPageQuestionList/MyPageQuestionList";

const cx = classNames.bind(style);

const MyPageQuestionItem = ({
  title,
  questionContents,
  platform,
  problemTag,
  algorithmTagArray,
  viewCount,
  likeCount,
  commentCount,
  author,
  createdAt,
}: QuestionItem) => {
  return (
    <li className={cx("question-item-wrap")}>
      <IconButton icon={<SvgIcon iconName="solid-tag-off" size={24} />} title="북마크" />
      <div className={cx("question-contents-wrap")}>
        <div className={cx("question-contents-top")}>
          <span className={cx("question-title")}>{title}</span>
          <div className={cx("content-right")}>
            <TimeAgo time={createdAt} />
            <span className={cx("write-btn")}>답글 작성</span>
          </div>
        </div>

        <div className={cx("question-tags")}>
          {algorithmTagArray.map((tag) => (
            <Tag label={tag} key={tag} />
          ))}
        </div>
      </div>
    </li>
  );
};

export { MyPageQuestionItem };
