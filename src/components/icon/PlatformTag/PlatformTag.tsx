import classNames from "classnames/bind";
import style from "./PlatformTag.module.scss";

const cx = classNames.bind(style);

interface Props {
  platform: PlatformType;
}

const PlatformTag = ({ platform }: Props) => (
  <span className={cx("platform-tag-wrap")}>{platform}</span>
);

export { PlatformTag };
