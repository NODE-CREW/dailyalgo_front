// import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { CodeEditor } from "@components/article/CodeEditor";
import style from "./QuestionContents.module.scss";

const cx = classNames.bind(style);

// interface Props {}

const QuestionContents = () => {
  const a = 1;
  console.log(a);
  return (
    <div className={cx("question-contents-wrap")}>
      {/* TODO: defaultValue props로 유저 질문 코드 */}
      <CodeEditor language="javascript" customOption={{ readOnly: false }} />
      {/* contents 삽입 부분 */}
      <pre className={cx("text")}>
        질문드립니다. 해당 문제를 푸는데 이러이러한 점이 어렵습니다. 제가 생각했을 때는 이런이런
        점이 문제여서 안풀린것 같은데 더 좋은 풀이방법이 있는지 궁급합니다. 전 이렇게 풀이하고자
        했습니다. 알고 고수님들의 조언 부탁드립니다. 감사합니다.
      </pre>
    </div>
  );
};

export { QuestionContents };
