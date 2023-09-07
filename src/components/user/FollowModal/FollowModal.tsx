import { Dispatch, SetStateAction, useLayoutEffect } from "react";
import classNames from "classnames/bind";
import { IconButton } from "@components/button/IconButton";
import { SvgIcon } from "@components/icon/SvgIcon";
import { FollowItem } from "./FollowItem";
import style from "./FollowModal.module.scss";

const cx = classNames.bind(style);

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const FollowModal = ({ setIsOpen }: Props) => {
  const a = 1;
  console.log(a);
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
  return (
    <div className={cx("follow-modal-wrap")}>
      <div className={cx("dim")} onClick={() => setIsOpen(false)} />
      <div className={cx("follow-modal")}>
        <div className={cx("follow-modal-header")}>
          <strong>팔로워</strong>
          <IconButton
            icon={<SvgIcon iconName="close" size={32} />}
            onClick={() => setIsOpen(false)}
            title="닫기"
          />
        </div>
        <div className={cx("follow-list-wrap")}>
          <ul className={cx("follow-list")}>
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
            <FollowItem />
          </ul>
        </div>
      </div>
    </div>
  );
};

export { FollowModal };
