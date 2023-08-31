// import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { ProblemTag } from "@components/icon/ProblemTag";
import { Tag } from "@components/icon/Tag";
import { BasicButton } from "@components/button/BasicButton";
import style from "./QuestionCoreInfoBox.module.scss";

const cx = classNames.bind(style);

// interface Props {}

const QuestionCoreInfoBox = () => {
  const tagList = ["DFS", "시뮬레이션", "구현"];
  return (
    <div className={cx("question-core-info-box-wrap")}>
      <strong className={cx("problem-name")}>덧셈식 출력하기</strong>
      <dl>
        <div>
          <dt>출처</dt>
          <dd>백준</dd>
        </div>
        <div>
          <dt>질문타입</dt>
          <dd>
            <ProblemTag tagName="시간초과" />
          </dd>
        </div>
        <div>
          <dt>태그</dt>
          <dd className={cx("tag-list")}>
            {tagList.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </dd>
        </div>
      </dl>
      <div className={cx("btn-wrap")}>
        <BasicButton size="lg">문제 바로가기</BasicButton>
      </div>
    </div>
  );
};

export { QuestionCoreInfoBox };
