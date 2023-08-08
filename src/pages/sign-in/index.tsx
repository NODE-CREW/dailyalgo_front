import Head from "next/head";
import { useEffect } from "react";
// import Link from "next/link";
// import { ChangeEvent, useState } from "react";
// import Input from "src/components/common/Input/Input";
// import classNames from "classnames/bind";
// import style from "./SignIn.module.scss";
import { useForm } from "react-hook-form";
// const cx = classNames.bind(style);

type FormValues = {
  loginId: string;
  password: string;
};

// 로그인 페이지
const SignIn = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>();

  const validatePassword = (value: any) => {
    const patterns = [
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&-]).{8,12}$/,
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&-]).{8,12}$/,
    ];

    const isValid = patterns.every((pattern) => pattern.test(value));

    if (!isValid) {
      console.log("fda실행해라");
      setError("password", {
        type: "manual",
        message: "비밀번호는 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.",
      });
    } else {
      // 유효성 검사가 성공한 경우 에러를 초기화합니다.
      clearErrors("password");
    }
    console.log("isvalid", isValid);
    return isValid;
  };

  useEffect(() => {
    setError("password", {
      type: "manual",
      message: "비밀번호는 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.",
    });
  }, [setError]);

  return (
    <div style={{ marginTop: 80 }}>
      <Head>
        <title>데일리알고 로그인</title>
        <meta name="description" content="로그인 페이지" />
      </Head>
      <div>
        <h1>로그인 페이지 입니다.</h1>
        <form
          onSubmit={handleSubmit(async (data) => {
            console.log(data);
            const isPasswordValid = validatePassword(data.password);
            if (isPasswordValid) {
              console.log(data);
            }
          })}
        >
          <label htmlFor="loginId">
            아이디
            <input
              id="loginId"
              placeholder="아이디를 입력해 주세요"
              {...register("loginId", {
                required: "아이디를 입력하셔야 합니다.",
                pattern: {
                  value: /^[a-zA-z0-9]{4,12}$/,
                  message: "아이디는 영문 대소문자와 숫자 4~12자리로 입력해야합니다",
                },
              })}
            />
            {errors?.loginId && <span role="alert">{errors.loginId.message}</span>}
          </label>
          <br />
          <label htmlFor="password">
            비밀번호
            <input
              id="password"
              placeholder="비밀번호를 입력해 주세요"
              {...register("password", {
                required: "비밀번호를 입력하셔야 합니다.",
                // pattern: {
                //   value: [
                //     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&-]).{8,12}$/,
                //     /^(?=.*?[#?!@$%^&-])/,
                //   ],
                //   message:
                //     "비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.",
                // },
                // validate: {
                //   length: (value) => (value && value.length > 10) || "mustBe10charsLong",
                //   test1: (value) => value === "test1" && "onMessage2",
                // },
                validate: validatePassword,
              })}
            />
            {errors?.password && <span role="alert">{errors.password.message}</span>}
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            로그인
          </button>
        </form>
      </div>
      <div>other actions</div>
      <div>social login</div>
    </div>
  );
};

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
