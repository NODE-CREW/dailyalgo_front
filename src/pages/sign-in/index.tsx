import Head from "next/head";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
// import Input from "src/components/common/Input/Input";
import classNames from "classnames/bind";
import style from "./SignIn.module.scss";

const cx = classNames.bind(style);

const SignIn = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setValue(() => e.target.value);
  };
  return (
    <div className={cx("page-wrap")}>
      <Head>
        <title>로그인</title>
        <meta name="description" content="로그인 페이지" />
      </Head>
      <div className={cx("container")}>
        <h1>로그인</h1>
        <input type="text" style={{ border: "1px solid #fff", width: "100%", lineHeight: 2 }} />
        <input type="text" />
        <button type="button">
          <span>로그인</span>
        </button>
        <Link href="/">
          <button className={cx("logo")} type="button">
            <span>아이디/비밀번호를 잊어버리셨나요?</span>
          </button>
        </Link>
        <Link href="/">
          <button className={cx("logo")} type="button">
            <span>아직 아이디가 없으신가요?</span>
          </button>
        </Link>
        <button type="button">카카오톡으로 로그인</button>
        {/* <div className={cx("social-login-wrap")}>
          <div className={cx("button-wrap")}>
            <button type="button" aria-label="sns" />
          </div>
          <div className={cx("button-wrap")}>
            <button type="button" aria-label="sns" />
          </div>
          <div className={cx("button-wrap")}>
            <button type="button" aria-label="sns" />
          </div>
        </div> */}
        {/* <div className={cx("contents")}>
        </div> */}
      </div>
      <input type="text" value={value} onChange={handleChange} />
      {/* <Input type="text" inputValue={value} setInputValue={setValue} /> */}
    </div>
  );
};

export default SignIn;
