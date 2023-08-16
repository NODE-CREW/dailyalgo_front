// import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { IconButton } from "@components/button/IconButton";
import { SvgIcon } from "@components/icon/SvgIcon";
import Link from "next/link";
import { PlatformTag } from "@components/icon/PlatformTag";
import { ProblemTag } from "@components/icon/ProblemTag";
import { Tag } from "@components/icon/Tag";
import { UserProfileThumbnail } from "@components/user/UserProfileThumbnail";
import { TimeAgo } from "@components/user/TimeAgo";
import style from "./QuestionListItem.module.scss";

const cx = classNames.bind(style);

interface Props {
  title: string;
  questionContents: string;
  problemTag: ProblemType;
  platform: PlatformType;
  algorithmTagArray: string[];
  viewCount: number;
  likeCount: number;
  commentCount: number;
  author: string;
  createdAt: string;
}

const QuestionListItem = ({
  title,
  questionContents,
  platform,
  problemTag,
  algorithmTagArray,
  viewCount,
  likeCount,
  commentCount,
  author,
  createdAt,
}: Props) => {
  const countInfoArray = [
    {
      iconName: "eye",
      count: viewCount,
    },
    {
      iconName: "like-off",
      count: likeCount,
    },
    {
      iconName: "chat",
      count: commentCount,
    },
  ];
  return (
    <li className={cx("question-list-item-wrap")}>
      <IconButton icon={<SvgIcon iconName="solid-tag-off" size={32} />} title="북마크" />
      <div className={cx("question-contents-wrap")}>
        <div className={cx("item-header")}>
          <div className={cx("header-left")}>
            <PlatformTag platform={platform} />
            <ProblemTag tagName={problemTag} size="sm" />
          </div>
          <div className={cx("header-right")}>
            {algorithmTagArray.map((algorithmTag) => (
              <Tag key={algorithmTag} label={algorithmTag} />
            ))}
          </div>
        </div>
        {/* TODO: 문제 id 로 링크 */}
        {/* TODO: props 이름 api랑 맞추기 */}
        <Link href="/">
          <strong className={cx("question-title")}>{title}</strong>
          <span className={cx("question-contents")}>{questionContents}</span>
        </Link>
        <div className={cx("item-bottom")}>
          <div className={cx("count-info-wrap")}>
            {countInfoArray.map((countInfo) => (
              <div key={countInfo.iconName} className={cx("count-item-wrap")}>
                <SvgIcon iconName={countInfo.iconName as any} size={20} />
                <span className={cx("count")}>{countInfo.count}</span>
              </div>
            ))}
          </div>
          <div className={cx("user-info-wrap")}>
            <UserProfileThumbnail userName={author} userId="1234" />
            <TimeAgo time={createdAt} />
          </div>
        </div>
      </div>
    </li>
  );
};

export { QuestionListItem };
