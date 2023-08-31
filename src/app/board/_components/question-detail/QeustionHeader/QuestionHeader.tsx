// import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import { IconButton } from "@components/button/IconButton";
import { SvgIcon } from "@components/icon/SvgIcon";
import { UserProfileThumbnail } from "@components/user/UserProfileThumbnail";

import style from "./QuestionHeader.module.scss";

const cx = classNames.bind(style);

// interface Props {
// title: string;
// }

const QuestionHeader = () => {
  const title = "저 이런게 다 궁금하네용";
  const countInfoArray = [
    {
      iconName: "eye",
      count: 123,
    },
    {
      iconName: "like-off",
      count: 3,
    },
    {
      iconName: "chat",
      count: 123,
    },
  ];
  return (
    <div className={cx("question-header")}>
      <div className={cx("title-wrap")}>
        <h2 className={cx("question-title")}>{title}</h2>
        {/* TODO: 별 아이콘 맞는지 확인, 클릭 시 on/off toggle 기능 추가 */}
        <div className={cx("action-icon-wrap")}>
          <IconButton icon={<SvgIcon iconName="star" size={24} />} title="즐겨찾기" />
        </div>
      </div>
      <div className={cx("header-info-wrap")}>
        <div className={cx("author")}>
          {/* TODO: 프로필 썸네일 크기 props? */}
          <UserProfileThumbnail userName="질문자 닉넴" userId="몰?루" />
          {/* TODO: n 분전 등 시간 지남 기능 */}
        </div>
        {/* TODO: 공통 컴포넌트로 교체 */}
        <div className={cx("count-info-wrap")}>
          {countInfoArray.map((countInfo) => (
            <div key={countInfo.iconName} className={cx("count-item-wrap")}>
              <SvgIcon iconName={countInfo.iconName as any} size={20} />
              <span className={cx("count")}>{countInfo.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { QuestionHeader };
