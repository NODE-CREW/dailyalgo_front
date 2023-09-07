// import { useState, useEffect } from 'react';
import classNames from "classnames/bind";
import style from "./Footer.module.scss";

const cx = classNames.bind(style);

// interface Props {

// }

const Footer = () => {
  console.log("Footer");
  return (
    <div className={cx("footer-wrap")}>
      <div className={cx("contents-wrap")}>
        <img src="/images/brandLogo.png" alt="default" />
      </div>
      <div className={cx("copyright")}>
        <span>Copyright NODECREW. All rights reserved.</span>
      </div>
    </div>
  );
};

export { Footer };
