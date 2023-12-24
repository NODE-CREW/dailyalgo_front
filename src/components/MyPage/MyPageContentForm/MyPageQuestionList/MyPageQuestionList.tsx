import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { Pagination } from "@components/common/Pagination/Pagination";
import { MyPageQuestionItem } from "../MyPageQuestionItem";
import { fetchUserQuestionsByContent } from "src/api/User";
import style from "./MyPageQuestionList.module.scss";

const cx = classNames.bind(style);

interface Props {
  tab: {
    label: string;
    id: string;
  };
  userId: string;
}

const MyPageQuestionList = ({ tab, userId }: Props) => {
  const headerText = (tabType: string) => {
    if (tabType === "답변") return "작성한 답변";
    if (tabType === "질문") return "작성한 질문";
    if (tabType === "다시보기") return "다시보기";
    return undefined;
  };

  const [totalCnt, setTotalCnt] = useState(0);
  const [questionList, setQuestionList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [tab]);

  useEffect(() => {
    const getQuestionList = async () => {
      try {
        const res = fetchUserQuestionsByContent(userId, tab.id, page);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };

    getQuestionList();
  }, [page, tab, userId]);

  return (
    <div className={cx("mypage-questions-wrap")}>
      <div className={cx("mypage-questions-header")}>
        <span className={cx("mypage-questions-header-text")}>
          <span className={cx("mypage-questions-header-highlight")}>150개</span>의{" "}
          {headerText(tab.label)}
        </span>
      </div>
      <div className={cx("mypage-question-list")}>
        {questionList.map((question) => (
          <MyPageQuestionItem question={question} key={`${tab}-${question.id}`} />
        ))}
      </div>
      <Pagination totalPage={totalPage} page={page} setPage={setPage} />
    </div>
  );
};

export { MyPageQuestionList };
