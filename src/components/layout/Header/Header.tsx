"use client";

import { useEffect } from "react";
import classNames from "classnames/bind";
import { usePathname, redirect } from "next/navigation";
import Link from "next/link";
import { BasicButton } from "@components/button/BasicButton";
import { SearchInput } from "@components/input/SearchInput";
import { IconButton } from "@components/button/IconButton";
import { SvgIcon } from "@components/icon/SvgIcon";
import { reduxAppSelector, AppDispatch } from "src/redux/store";
import { setLogIn, setUserInfo } from "src/redux/slices/auth-slice";
import { useDispatch } from "react-redux";
import style from "./Header.module.scss";
import { fetchUserInfo } from "../../../api/User";

const cx = classNames.bind(style);

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();

  const { isLogIn } = reduxAppSelector((state) => state.authReducer.value);

  /** localStorage에 token이 있으면 로그인 상태로 변경 */
  const getUserInfo = async () => {
    try {
      const res = await fetchUserInfo();
      dispatch(setUserInfo(res));
    } catch (e) {
      throw new Error("유저 정보를 불러오는데 실패했습니다.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setLogIn(token));
      getUserInfo();
    }
  }, []);

  /** 로그인 상태에 따른 redirect 설정
   * 로그인유저 접근 불가: 로그인, 회원가입, 아이디/비밀번호 찾기
   * 비로그인유저 접근 불가: 마이페이지, 게시글 작성
   * */
  const redirectPathnameArrayToLoginUser = ["/sign-in", "/sign-up", "/find-user"];
  const redirectPathnameArrayToNotLoginUser = ["/mypage", "/board/write"];
  useEffect(() => {
    if (isLogIn && redirectPathnameArrayToLoginUser.includes(pathname)) {
      redirect("/");
    } else if (!isLogIn && redirectPathnameArrayToNotLoginUser.includes(pathname)) {
      redirect("/sign-in");
    }
  }, [pathname, isLogIn]);

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
          {isLogIn ? (
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
