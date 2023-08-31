import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import { BasicInput } from "@components/input/BasicInput";
import { CodeEditor } from "@components/article/CodeEditor";
import { CommonDropdown } from "@components/dropdown/CommonDropdown";
import { BasicButton } from "@components/button/BasicButton";
import { QuestionInfoBox } from "../QuestionInfoBox";
import { NotedBox } from "../NotedBox";

import style from "./ArticleForm.module.scss";

const cx = classNames.bind(style);

// interface Props {}

const ArticleForm = () => {
  const [language, setLanguage] = useState("python");

  // TODO: 삭제 요망
  useEffect(() => {
    setLanguage("python");
  }, []);

  const languageList = [
    { id: "python", label: "Python" },
    { id: "java", label: "Java" },
    { id: "cpp", label: "C++" },
    { id: "c", label: "C" },
    { id: "javascript", label: "JavaScript" },
    { id: "csharp", label: "C#" },
  ];
  return (
    <div className={cx("article-form-wrap")}>
      <div className={cx("left")}>
        <QuestionInfoBox />
        <NotedBox />
      </div>
      <div className={cx("right")}>
        <h2 className={cx("title")}>질문하기</h2>
        <div className={cx("input-wrap")}>
          <h3 className={cx("sub-title")}>질문 제목</h3>
          <BasicInput id="title" size="md" placeholder="질문 제목을 입력해 주세요" />
        </div>
        <div className={cx("input-wrap")}>
          <div className={cx("title-wrap")}>
            <h3 className={cx("sub-title")}>코드</h3>
            <CommonDropdown options={languageList} initialValue={language} size="sm" />
          </div>
          <div className={cx("code-editor-wrap")}>
            <CodeEditor language={language} />
          </div>
        </div>
        <div className={cx("input-wrap")}>
          <h3 className={cx("sub-title")}>질문 내용</h3>
          <div className={cx("markdown-wrap")}>
            {/* TODO: 마크다운 에디터 삽입 */}
            {/* <MarkDownEditor /> */}
          </div>
        </div>
        {/* TODO: submit 로직 */}
        <BasicButton size="lg">질문하기</BasicButton>
      </div>
    </div>
  );
};

export { ArticleForm };
