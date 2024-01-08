// import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { CodeEditor } from "@components/article/CodeEditor";
import type { QuestionDetail } from "src/types/question";
import style from "./QuestionContents.module.scss";

const cx = classNames.bind(style);

interface Props {
  question: QuestionDetail;
}

const QuestionContents = ({ question }: Props) => {
  return (
    <div className={cx("question-contents-wrap")}>
      {/* TODO: defaultValue props로 유저 질문 코드 */}
      <div className={cx("code-editor-wrap")}>
        {question.code && (
          <CodeEditor
            language={question.language}
            customOption={{ readOnly: true }}
            defaultValue={question.code}
          />
        )}
      </div>
      {/* contents 삽입 부분 */}
      <pre className={cx("text")}>{question.content}</pre>
    </div>
  );
};

export { QuestionContents };
