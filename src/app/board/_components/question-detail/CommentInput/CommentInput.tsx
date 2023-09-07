import { useState } from "react";
import classNames from "classnames/bind";
import { IconButton } from "@components/button/IconButton";
import { SvgIcon } from "@components/icon/SvgIcon";
import style from "./CommentInput.module.scss";

const cx = classNames.bind(style);

const CommentInput = () => {
  const [comment, setComment] = useState<string>("");
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  const handleCommentSubmit = () => {
    console.log(comment);
  };
  return (
    <div className={cx("comment-input-wrap")}>
      <input className={cx("input")} onChange={handleCommentChange} />
      <IconButton
        icon={<SvgIcon iconName="send" size={24} />}
        title="댓글 남기기"
        onClick={() => handleCommentSubmit()}
      />
    </div>
  );
};

export { CommentInput };
