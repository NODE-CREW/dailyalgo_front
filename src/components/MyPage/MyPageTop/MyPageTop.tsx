import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { ProfileBadge } from "@components/user/ProfileBadge";
import { BasicButton } from "@components/button/BasicButton";
import style from "./MyPageTop.module.scss";

const cx = classNames.bind(style);

interface Props {
  // id: string;
  // name: string;
  // nickname: string;
  // intro: string;
  // email: string;
  // created_time: string;
  // question_cnt: number;
  // answer_cnt: number;
  // view_cnt: string;
  // follower_cnt: number;
  // following_cnt: number;
  // organizations: string[];
  clickBtnHandler: () => void;
  isEdited?: boolean;
  isFollowing?: boolean;
  pageType: "user" | "mypage";
}
// "id": "TESTER",
// "name": "테스터",
// "nickname": "리얼 테스터터",
// "email": "tester@gmail.com",
// "created_time": "2023-08-27T08:40:06.000Z",
// "question_cnt": 0,
// "answer_cnt": 0,
// "view_cnt": "0",
// "follower_cnt": 1,
// "following_cnt": 1,
// "organizations": -1
const MyPageTop = ({
  clickBtnHandler,
  isEdited,
  isFollowing,
  pageType,
}: // id,
// name,
// nickname,
// intro
// email,
// created_time,
// question_cnt,
// answer_cnt,
// view_cnt,
// follower_cnt,
// following_cnt,
// organizations,
Props) => {
  const organizations = ["테스트", "테스트2"];

  const btnContent = () => {
    switch (pageType) {
      case "user":
        return isFollowing ? (
          <BasicButton size="sm" buttonType="primary" onClick={clickBtnHandler}>
            팔로잉
          </BasicButton>
        ) : (
          <BasicButton size="sm" buttonType="secondary" onClick={clickBtnHandler}>
            팔로우
          </BasicButton>
        );
      case "mypage":
        return (
          <BasicButton buttonType="third" onClick={clickBtnHandler}>
            {isEdited ? "수정 완료" : "프로필 수정"}
          </BasicButton>
        );
      default:
        return null;
    }
  };

  return (
    <div className={cx("my-page-top-wrap")}>
      <div className={cx("my-page-top-inner")}>
        <ProfileBadge size={168} />
        <div className={cx("info-wrap")}>
          <span className={cx("nickname")}>{"nickname"}</span>
          <span className={cx("introduce")}>{"intro"}</span>
          <ul className={cx("organization-list")}>
            {organizations.map((organization) => (
              <li className={cx("organization-item")}>@{organization}</li>
            ))}
          </ul>
          <dl className={cx("figure-info-wrap")}>
            <div>
              <dt>가입일로부터</dt>
              <dd>{0} 일</dd>
            </div>
            <div>
              <dt>질문수</dt>
              <dd>{0} 개</dd>
            </div>
            <div>
              <dt>답변수</dt>
              <dd>{0} 개</dd>
            </div>
            <div>
              <dt>조회수</dt>
              <dd>{0} 개</dd>
            </div>
          </dl>
          {/* TODO: 클릭 시 팝업 */}
          <div className={cx("social-wrap")}>
            <div className={cx("social-item")}>
              <span className={cx("social-item-title")}>팔로워</span>
              <span className={cx("social-item-count")}>{0}</span>
            </div>
            <div className={cx("social-item")}>
              <span className={cx("social-item-title")}>팔로잉</span>
              <span className={cx("social-item-count")}>{0}</span>
            </div>
          </div>
        </div>
        <div className={cx("edit-button")}>{btnContent()}</div>
      </div>
    </div>
  );
};

export { MyPageTop };
