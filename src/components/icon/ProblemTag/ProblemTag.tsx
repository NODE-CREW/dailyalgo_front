import classNames from "classnames/bind";
import colorMap from "./colorMap";
import style from "./ProblemTag.module.scss";

const cx = classNames.bind(style);

interface Props {
  tagName: ProblemType;
  size?: "sm" | "md" | "lg";
}

const ProblemTag = ({ tagName, size = "md" }: Props) => (
  <span
    className={cx("problem-tag-wrap", size && `size-${size}`)}
    style={
      {
        "--tag-color": `${colorMap[tagName]}`,
      } as React.CSSProperties
    }
  >
    {tagName}
  </span>
);

export { ProblemTag };
