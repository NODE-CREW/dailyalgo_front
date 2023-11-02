"use client";

// import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import { BasicButton } from "@components/button/BasicButton";
import { SearchInput } from "@components/input/SearchInput";
import { IconButton } from "@components/button/IconButton";
import { SvgIcon } from "@components/icon/SvgIcon";
import style from "./Header.module.scss";

const cx = classNames.bind(style);

const Header = () => {
  const isLogin = false;

  return (
    <header className={cx("header-wrap")}>
      <div className={cx("header-inner")}>
        <div className={cx("logo")}>
          <Link href="/">
            <img src="/assets/image/dailyalgo-logo.png" alt="logo" />
          </Link>
        </div>
        <div className={cx("search-input-wrap")}>
          <SearchInput />
        </div>
        <div className={cx("account-wrap")}>
          <Link href="/board/write">
            <BasicButton size="md">작성하기</BasicButton>
          </Link>
          {isLogin ? (
            <>
              {/* TODO: 알림 및 프로필 버튼 */}
              <Link href="/mypage">
                <IconButton icon={<SvgIcon iconName="profile" size={36} />} title="" />
              </Link>
            </>
          ) : (
            <Link href="/sign-in">
              <IconButton icon={<SvgIcon iconName="profile" size={36} />} title="login" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
