import {
  useState,
  // Dispatch,
  // SetStateAction,
  ComponentProps,
  KeyboardEvent,
} from "react";
import classNames from "classnames/bind";
import { BasicInput } from "@components/input/BasicInput";
import { CommonDropdown } from "@components/dropdown/CommonDropdown";
import { Tag } from "@components/icon/Tag";
import { InputBlock } from "./InputBlock";
import style from "./QuestionInfoBox.module.scss";

const cx = classNames.bind(style);

type OptionType = Pick<ComponentProps<typeof CommonDropdown>, "options">;

// interface Props {
// setSource: Dispatch<SetStateAction<string>>;
// setLink: Dispatch<SetStateAction<string>>;
// setType: Dispatch<SetStateAction<string>>;
// setTag: Dispatch<SetStateAction<string[]>>;
// }

const sourceOptionList: OptionType["options"] = [
  {
    id: "boj",
    label: "백준",
  },
  {
    id: "programmers",
    label: "프로그래머스",
  },
  {
    id: "swea",
    label: "SWEA",
  },
  {
    id: "leetCode",
    label: "LeetCode",
  },
];

const typeOptionList: OptionType["options"] = [
  {
    id: "timeOut",
    label: "시간초과",
  },
  {
    id: "memoryExceed",
    label: "메모리 초과",
  },
  {
    id: "error",
    label: "에러",
  },
  {
    id: "solution",
    label: "해결방법",
  },
  {
    id: "counterExample",
    label: "반례요청",
  },
  {
    id: "whyWrong",
    label: "왜맞틀",
  },
  {
    id: "whyRight",
    label: "왜틀맞",
  },
  {
    id: "etc",
    label: "기타",
  },
];

const QuestionInfoBox = () => {
  const [tagList, setTagList] = useState<string[]>([]);

  const handleTagEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    setTagList([...tagList, e.currentTarget.value]);
    e.currentTarget.value = "";
  };

  return (
    <div className={cx("question-info-box-wrap")}>
      <strong className={cx("box-title")}>문제 정보</strong>
      <InputBlock label="출처">
        <CommonDropdown options={sourceOptionList} placeholder="문제 출처" size="full" />
      </InputBlock>
      <InputBlock label="출처">
        <BasicInput id="source" size="sm" />
      </InputBlock>
      <InputBlock label="질문 유형">
        <CommonDropdown
          options={typeOptionList}
          placeholder="질문 타입을 선택해주세요."
          size="full"
        />
      </InputBlock>
      <InputBlock label="태그" subLabel="관련 태그를 추가해 주세요 (최대 5개)">
        <BasicInput id="source" placeholder="예 : DFS" onEnter={handleTagEnter} size="sm" />
      </InputBlock>
      {tagList.length > 0 && (
        <div className={cx("tag-list")}>
          {tagList.map((tag) => (
            // TODO: 태그 삭제 기능 추가
            <Tag label={tag} key={tag} />
          ))}
        </div>
      )}
    </div>
  );
};

export { QuestionInfoBox };
