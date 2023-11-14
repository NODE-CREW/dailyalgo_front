import classNames from "classnames/bind";
import { BasicModal } from "@components/modal/BasicModal";
import { FollowItem } from "./FollowItem";
import style from "./FollowModal.module.scss";

const cx = classNames.bind(style);

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  type: "follower" | "following";
}

const FollowModal = ({ isOpen, closeModal, type }: Props) => {
  return (
    <BasicModal isOpen={isOpen} closeModal={closeModal}>
      <div className={cx("follow-list-wrap")}>
        <strong className={cx("follow-list-title")}>
          {type === "follower" ? "팔로워" : "팔로잉"}
        </strong>
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
    </BasicModal>
  );
};

export { FollowModal };
