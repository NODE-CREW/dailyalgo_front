import Head from "next/head";
import Link from "next/link";
import "../../styles/common.scss";
// import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { LoginForm } from "src/components/signIn/LoginForm";
import classNames from "classnames/bind";
import style from "./SignIn.module.scss";

const cx = classNames.bind(style);

// 로그인 페이지
const SignIn = () => (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const validatePassword = (value: any) => {
  //   const patterns = [/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&-]).{8,12}$/];

  //   const isValid = patterns.every((pattern) => pattern.test(value));
  //   setError("password", {
  //     type: "manual",
  //     message: "비밀번호는 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.",
  //   });
  //   if (!isValid) {
  //     console.log("fda실행해라");
  //     setError("password", {
  //       type: "manual",
  //       message: "비밀번호는 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.",
  //     });
  //   } else {
  //     // 유효성 검사가 성공한 경우 에러를 초기화합니다.
  //     clearErrors("password");
  //   }
  //   console.log("isvalid", isValid);
  //   return isValid;
  // };

  // async (data) => {
  //   console.log(data);
  //   const isPasswordValid = validatePassword(data.password);
  //   if (isPasswordValid) {
  //     console.log(data);
  //   }
  // }

  <div className={cx("page-wrap")}>
    <Head>
      <title>데일리알고 로그인</title>
      <meta name="description" content="로그인 페이지" />
    </Head>
    <div className={cx("container")}>
      <h1>로그인</h1>
      <LoginForm />
      <div className={cx("sign-in-actions")}>
        <Link href="/" className={cx("link")}>
          <span>아이디/비밀번호를 잊어버리셨나요?</span>
          <img src="./images/arrow-tr.svg" alt="" />
        </Link>
        <Link href="/" className={cx("link")}>
          <span>아직 아이디가 없으신가요?</span>
          <img src="./images/arrow-tr.svg" alt="" />
        </Link>
      </div>
      <div className={cx("social-login")}>
        <button type="button" className={cx("kakao-btn")}>
          <img src="./images/kakao-logo.svg" alt="" />
          <span>카카오톡으로 로그인</span>
        </button>
        <button type="button" className={cx("google-btn")}>
          <img src="./images/google-logo.svg" alt="" />
          <span>구글로 로그인</span>
        </button>
        <button type="button" className={cx("github-btn")}>
          <img src="./images/github-logo.svg" alt="" />
          <span>깃허브로 로그인</span>
        </button>
      </div>
    </div>
  </div>
);

// const [value, setValue] = useState("");
// const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//   console.log(e);
//   setValue(() => e.target.value);
// };
// return (
//   <div className={cx("page-wrap")}>
//     <Head>
//       <title>로그인</title>
//       <meta name="description" content="로그인 페이지" />
//     </Head>
//     <div className={cx("container")}>
//       <h1>로그인</h1>
//       <input type="text" style={{ border: "1px solid #fff", width: "100%", lineHeight: 2 }} />
//       <input type="text" />
//       <button type="button">
//         <span>로그인</span>
//       </button>
//       <Link href="/">
//         <button className={cx("logo")} type="button">
//           <span>아이디/비밀번호를 잊어버리셨나요?</span>
//         </button>
//       </Link>
//       <Link href="/">
//         <button className={cx("logo")} type="button">
//           <span>아직 아이디가 없으신가요?</span>
//         </button>
//       </Link>
//       <button type="button">카카오톡으로 로그인</button>
//       {/* <div className={cx("social-login-wrap")}>
//         <div className={cx("button-wrap")}>
//           <button type="button" aria-label="sns" />
//         </div>
//         <div className={cx("button-wrap")}>
//           <button type="button" aria-label="sns" />
//         </div>
//         <div className={cx("button-wrap")}>
//           <button type="button" aria-label="sns" />
//         </div>
//       </div> */}
//       {/* <div className={cx("contents")}>
//       </div> */}
//     </div>
//     <input type="text" value={value} onChange={handleChange} />
//     {/* <Input type="text" inputValue={value} setInputValue={setValue} /> */}
//   </div>
// );
// };

export default SignIn;
