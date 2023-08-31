import { Dispatch, SetStateAction } from "react";
import classNames from "classnames/bind";
import { IconButton } from "@components/button/IconButton";
import { SvgIcon } from "@components/icon/SvgIcon";
import style from "./FollowModal.module.scss";

const cx = classNames.bind(style);

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const FollowModal = ({ setIsOpen }: Props) => {
  const a = 1;
  console.log(a);
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
      </div>
    </div>
  );
};

export { FollowModal };
