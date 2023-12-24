import classNames from "classnames/bind";
import { IconButton } from "@components/button/IconButton";
import { SvgIcon } from "@components/icon/SvgIcon";
import { Tag } from "@components/icon/Tag";
import { TimeAgo } from "@components/user/TimeAgo";
import Link from "next/link";
import type { QuestionItem } from "src/types/user";
import style from "./MyPageQuestionItem.module.scss";

const cx = classNames.bind(style);

interface Props {
  question: QuestionItem;
}

const MyPageQuestionItem = ({ question }: Props) => {
  return (
    <li className={cx("question-item-wrap")}>
      <IconButton icon={<SvgIcon iconName="solid-tag-off" size={24} />} title="북마크" />
      <div className={cx("question-contents-wrap")}>
        <div className={cx("question-contents-top")}>
          <span className={cx("question-title")}>{question.title}</span>
          <div className={cx("content-right")}>
            <TimeAgo time={question.answer_created_time} />
            <span className={cx("write-btn")}>답글 작성</span>
          </div>
        </div>

        <div className={cx("question-tags")}>
          {question.tags.map((tag) => (
            <Tag label={tag} key={tag} />
          ))}
        </div>
      </div>
    </li>
  );
};

export { MyPageQuestionItem };
