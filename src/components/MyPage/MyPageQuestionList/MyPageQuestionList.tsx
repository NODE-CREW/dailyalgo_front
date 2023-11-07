import classNames from "classnames/bind";
import { MyPageQuestionItem } from "../MyPageQuestionItem";
import style from "./MyPageQuestionList.module.scss";

const cx = classNames.bind(style);

export interface QuestionItem {
  id: number;
  title: string;
  questionContents: string;
  problemTag: ProblemType;
  platform: PlatformType;
  algorithmTagArray: string[];
  viewCount: number;
  likeCount: number;
  commentCount: number;
  author: string;
  createdAt: string;
}

interface Props {
  tab: string;
  questionsData: QuestionItem[];
}

const MyPageQuestionList = ({ tab, questionsData }: Props) => {
  const headerText = (tabType: string) => {
    if (tabType === "답변") return "작성한 질문";
    if (tabType === "질문") return "작성한 질문";
    if (tabType === "다시보기") return "다시보기";
    return undefined;
  };

  return (
    <div className={cx("mypage-questions-wrap")}>
      <div className={cx("mypage-questions-header")}>
        <span className={cx("mypage-questions-header-text")}>
          <span className={cx("mypage-questions-header-highlight")}>150개</span>의 {headerText(tab)}
        </span>
      </div>
      <div className={cx("mypage-question-list")}>
        {questionsData.map((questionData) => (
          <MyPageQuestionItem {...questionData} key={`${tab}-${questionData.id}`} />
        ))}
      </div>
    </div>
  );
};

export { MyPageQuestionList };
