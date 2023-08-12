import classNames from "classnames/bind";
import style from "./BasicButton.module.scss";

const cx = classNames.bind(style);

type Props = {
  href?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  styleType?: "sm" | "md" | "lg";
  buttonType?: "primary" | "secondary" | "tertiary" | "danger" | "link";
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const BasicButton = ({ href, children, type, onClick, styleType = "md", ...props }: Props) => {
  const element = href ? "a" : "button";
  const Root = element;
  const rootProps = {
    className: cx("btn", `btn-${styleType}`, `btn-type-${props.buttonType}`),
    type,
    href,
    onClick,
    ...props,
  };
  return <Root {...rootProps}>{children}</Root>;
};

export { BasicButton };
