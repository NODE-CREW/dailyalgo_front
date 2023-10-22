import { useState } from "react";
import { debounce } from "lodash";
import { BasicModal } from "@components/modal/BasicModal";
import { BasicInput } from "@components/input/BasicInput";
import classNames from "classnames/bind";
import style from "./FilterModal.module.scss";

const cx = classNames.bind(style);

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  filterKeyword: string;
  setFilterKeyword: (item: FilterItemType) => void;
};

type FilterItemType = {
  id: string;
  label: string;
};

const filerItemList: FilterItemType[] = [
  { id: "all", label: "전체" },
  { id: "complete-search", label: "완전탐색" },
  { id: "data-structures", label: "자료구조" },
  { id: "hash", label: "해쉬" },
  { id: "list", label: "리스트" },
  { id: "stack", label: "스택" },
  { id: "queue", label: "큐" },
  { id: "priority-queue", label: "우선순위큐 (힙)" },
  { id: "tree", label: "트리" },
  { id: "graph", label: "그래프" },
  { id: "dfs", label: "깊이우선탐색 (dfs)" },
  { id: "bfs", label: "너비우선탐색 (bfs)" },
  { id: "dynamic-programming", label: "다이나믹 프로그래밍" },
  { id: "memoization", label: "메모이제이션" },
  { id: "number-theory", label: "정수론" },
  { id: "geometry", label: "기하학" },
  { id: "math", label: "수학" },
  { id: "string", label: "문자열" },
  { id: "greedy", label: "그리디" },
  { id: "binary-search", label: "이분탐색" },
  { id: "sorting", label: "정렬" },
  { id: "bitmasking", label: "비트마스킹" },
  { id: "simulation", label: "시뮬레이션" },
  { id: "backtracking", label: "백트래킹" },
  { id: "permutation", label: "순열" },
  { id: "combination", label: "조합" },
  { id: "subset", label: "부분집합" },
  { id: "recursion", label: "재귀함수" },
  { id: "divide-and-conquer", label: "분할정복" },
  { id: "two-pointer", label: "투 포인터" },
  { id: "other", label: "기타" },
];

const FilterItem = ({
  item,
  isSelected,
  onClick,
}: {
  item: FilterItemType;
  isSelected: boolean;
  onClick: (item: FilterItemType) => void;
}) => {
  return (
    <div
      className={isSelected ? cx("filter-selected-item") : cx("filter-item")}
      onClick={() => onClick(item)}
    >
      <span>{item.label}</span>
    </div>
  );
};

const FilterModal = ({ isOpen, closeModal, filterKeyword, setFilterKeyword }: Props) => {
  const [visibleFilterItem, setVisibleFilterItem] = useState<FilterItemType[]>(filerItemList);

  const searchKeywordHanlder = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    if (!keyword) {
      setVisibleFilterItem(filerItemList);
      return;
    }
    const filteredItem = filerItemList.filter((item) => item.label.includes(keyword));
    setVisibleFilterItem(filteredItem);
  }, 300);

  return (
    <BasicModal isOpen={isOpen} closeModal={closeModal}>
      <div className={cx("filter-modal")}>
        <div className={cx("filter-input")}>
          <BasicInput
            id="search-keyword"
            placeholder="알고리즘 이름을 입력해 주세요."
            onChange={searchKeywordHanlder}
          />
        </div>
        <div className={cx("filter-item-wrap")}>
          {visibleFilterItem.length === 0 ? (
            <span className={cx("result-none-text")}>검색된 결과가 없습니다.</span>
          ) : (
            <>
              {" "}
              {visibleFilterItem.map((item) => (
                <FilterItem
                  key={item.id}
                  item={item}
                  isSelected={filterKeyword === item.id}
                  onClick={setFilterKeyword}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </BasicModal>
  );
};

export { FilterModal };
