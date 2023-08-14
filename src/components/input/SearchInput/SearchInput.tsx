import classNames from "classnames/bind";
import { SvgIcon } from "@components/icon/SvgIcon";
import { BasicInput } from "../BasicInput";
import style from "./SearchInput.module.scss";

const cx = classNames.bind(style);

// interface Props {}
// TODO: 검색 로직 추가
const SearchInput = () => {
  console.log("test");
  return (
    <div className={cx("search-input-wrap")}>
      <SvgIcon iconName="search" size={24} />
      <BasicInput id="search_input" type="text" placeholder="태그 혹은 문제이름을 검색해 보세요." />
    </div>
  );
};

export { SearchInput };
