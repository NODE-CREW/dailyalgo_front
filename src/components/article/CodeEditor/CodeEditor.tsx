import { useRef } from "react";
import classNames from "classnames/bind";
import Editor, { Monaco } from "@monaco-editor/react";
import style from "./CodeEditor.module.scss";

const cx = classNames.bind(style);

interface Props {
  defaultValue?: string;
  language: string;
}

const CodeEditor = ({ defaultValue, language }: Props) => {
  const editorRef = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleEditorDidMount(editor: any, _: Monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    console.log("hhh");
    editorRef.current = editor;
  }

  const option = {
    minimap: {
      enabled: false,
    },
  };

  return (
    <div className={cx("code-editor-wrap")}>
      <Editor
        height="100%"
        defaultLanguage={language || "javascript"}
        defaultValue={defaultValue}
        // eslint-disable-next-line react/jsx-no-bind
        onMount={handleEditorDidMount}
        options={option}
      />
    </div>
  );
};

export { CodeEditor };
