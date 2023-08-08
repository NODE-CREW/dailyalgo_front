"use client";

import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import classNames from "classnames/bind";
import style from "./LoginForm.module.scss";

const cx = classNames.bind(style);

// interface Props {

// }

type FormValues = {
  loginId: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>();

  const onValid: SubmitHandler<FormValues> = async (data) => {
    console.log("valid", data);
  };
  const onInvalid = (error: FieldErrors) => {
    console.log("invalid", error);
    // setError("root", {
    //   type: "required",
    //   message: `아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.`,
    // });
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} className={cx("login-form")}>
      <label htmlFor="loginId">
        <input
          id="loginId"
          placeholder="아이디를 입력해주세요."
          className={cx()}
          style={
            errors.loginId
              ? { borderColor: "#FF0000", boxShadow: "0 0 4px 2px hsla(0, 100%, 50%, 0.3)" }
              : {}
          }
          {...register("loginId", {
            required: "아이디를 입력해주세요.",
            // pattern: {
            //   value: /^[a-zA-z0-9]{4,12}$/,
            //   message: "아이디는 영문 대소문자와 숫자 4~12자리로 입력해야합니다",
            // },
          })}
        />
        <button
          type="button"
          className={cx("id-cancel-btn")}
          onClick={() => {
            reset({
              loginId: "",
            });
          }}
        >
          <img src="./images/outline-cancel.svg" alt="" />
        </button>
      </label>
      <label htmlFor="password">
        <input
          id="password"
          placeholder="비밀번호를 입력해 주세요."
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            // validate: {
            //   hasRequiredChar: (value) =>
            //     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&-]).{8,12}$/.test(value) ||
            //     "비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.",
            //   haveSpace: (value) => !/\s/g.test(value) || "공백있네?",
            // },
          })}
          className={cx("")}
          style={
            errors.password
              ? { borderColor: "#FF0000", boxShadow: "0 0 4px 2px hsla(0, 100%, 50%, 0.3)" }
              : {}
          }
        />
        <button
          type="button"
          className={cx("pw-cancel-btn")}
          onClick={() => {
            reset({
              password: "",
            });
          }}
        >
          <img src="./images/outline-cancel.svg" alt="" />
        </button>
      </label>
      {(errors?.loginId && <span role="alert">{errors.loginId.message}</span>) ||
        (errors?.password && <span role="alert">{errors.password.message}</span>) ||
        (errors?.root && <span role="alert">{errors.root.message}</span>)}
      <button type="submit" disabled={isSubmitting} className={cx("login-btn")}>
        로그인
      </button>
    </form>
  );
};

export { LoginForm };
