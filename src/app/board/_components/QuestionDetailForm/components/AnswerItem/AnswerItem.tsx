import classNames from "classnames/bind";
import type { AnswerDetail } from "src/types/answer";
import { AnswerHeader } from "../AnswerHeader";
import style from "./AnswerItem.module.scss";

const cx = classNames.bind(style);

interface Props {
  answer: AnswerDetail;
  isAuthor: boolean;
  onDeleteAnswer: (answerId: number) => void;
  onLikeAnswer: (answerId: number) => void;
}

const AnswerItem = ({ answer, isAuthor, onDeleteAnswer, onLikeAnswer }: Props) => {
  return (
    <div className={cx("answer-item-wrap")}>
      <AnswerHeader
        answer={answer}
        isAuthor={isAuthor}
        onDeleteAnswer={onDeleteAnswer}
        onLikeAnswer={onLikeAnswer}
      />
    </div>
  );
};

export { AnswerItem };
