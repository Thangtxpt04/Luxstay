import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Button({
  to,
  href,
  onClick,
  children,
  primary,
  outline,
  text,
  rounded,
  disibled,
  small,
  large,
  leftIcon,
  rightIcon,
  className,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    to,
    ...passProps,
  };
  // Remove event listener when btn disibled
  if (disibled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    text,
    rounded,
    disibled,
    small,
    large,
    [className]: className,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
