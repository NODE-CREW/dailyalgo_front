import { useState } from "react";
import classNames from "classnames/bind";
import { ProfileBadge } from "@components/user/ProfileBadge";
import { BasicButton } from "@components/button/BasicButton";
import { FollowModal } from "@components/user/FollowModal";
import style from "./MyPageTop.module.scss";

const cx = classNames.bind(style);

interface Props {
  clickBtnHandler: () => void;
  isEdited?: boolean;
  isFollowing?: boolean;
  pageType: "user" | "mypage";
}
const MyPageTop = ({ clickBtnHandler, isEdited, isFollowing, pageType }: Props) => {
  const organizations = ["테스트", "테스트2"];

  const [isFollowerModalOpen, setIsFollowerModalOpen] = useState(false);
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);

  const openFollowModal = (type: "follower" | "following") => {
    if (type === "follower") {
      setIsFollowerModalOpen(true);
    } else {
      setIsFollowingModalOpen(true);
    }
  };

  const closeFollowModal = (type: "follower" | "following") => {
    if (type === "follower") {
      setIsFollowerModalOpen(false);
    } else {
      setIsFollowingModalOpen(false);
    }
  };

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
            {isEdited ? "돌아가기" : "프로필 수정"}
          </BasicButton>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={cx("my-page-top-wrap")}>
        <div className={cx("my-page-top-inner")}>
          <div className={cx("user-wrap")}>
            <ProfileBadge size={168} />
            <div className={cx("info-wrap")}>
              <span className={cx("nickname")}>{"nickname"}</span>
              <span className={cx("introduce")}>{"intro"}</span>
              <ul className={cx("organization-list")}>
                {organizations.map((organization) => (
                  <li className={cx("organization-item")} key={organization}>
                    @{organization}
                  </li>
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
                <div className={cx("social-item")} onClick={() => openFollowModal("follower")}>
                  <span className={cx("social-item-title")}>팔로워</span>
                  <span className={cx("social-item-count")}>{0}</span>
                </div>
                <div className={cx("social-item")} onClick={() => openFollowModal("following")}>
                  <span className={cx("social-item-title")}>팔로잉</span>
                  <span className={cx("social-item-count")}>{0}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("edit-button")}>{btnContent()}</div>
        </div>
      </div>
      <FollowModal
        isOpen={isFollowerModalOpen}
        closeModal={() => closeFollowModal("follower")}
        type="follower"
      />
      <FollowModal
        isOpen={isFollowingModalOpen}
        closeModal={() => closeFollowModal("following")}
        type="following"
      />
    </>
  );
};

export { MyPageTop };
