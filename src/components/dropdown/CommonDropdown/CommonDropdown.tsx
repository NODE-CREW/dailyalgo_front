import classNames from "classnames/bind";
import { SvgIcon } from "src/components/icon/SvgIcon";
import { useDropDown } from "./handler";
import style from "./CommonDropdown.module.scss";

const cx = classNames.bind(style);

interface Props {
  readonly options: {
    id: string;
    label: string;
  }[];
  readonly placeholder?: string;
  readonly className?: string;
  readonly initialValue?: string;
  readonly size?: "sm" | "md" | "lg" | "full";
}

const CommonDropdown = ({ options, placeholder, className, initialValue, size }: Props) => {
  const { selectedOption, showOptions, handleLabelClick, toggleShowOptions } = useDropDown(
    initialValue || ""
  );

  return (
    <div className={cx("dropdown", `size-${size}`, className)}>
      <button type="button" className={cx("selected-option")} onClick={toggleShowOptions}>
        <span className={cx("selected-option-text")}>
          {selectedOption
            ? options.filter((option) => option.id === selectedOption)[0].label
            : placeholder}
        </span>
        <SvgIcon iconName="arrow-triangle" size={10} />
      </button>

      {showOptions && (
        <div className={cx("option-list")}>
          {options.map((option) => (
            <div key={option.id} className={cx("option")}>
              <button
                type="button"
                onClick={() => {
                  handleLabelClick(option.id);
                }}
              >
                {option.label}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { CommonDropdown };
