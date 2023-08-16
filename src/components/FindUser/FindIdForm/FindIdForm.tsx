"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Timer } from "@components/SignUp/Timer";
import classNames from "classnames/bind";
import style from "./FindIdForm.module.scss";

const cx = classNames.bind(style);

type FormValues = {
  email: string;
};

const FindIdForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    trigger,
    getValues,
  } = useForm<FormValues>({ mode: "onChange" });

  const [authResultMsg, setAuthResultMsg] = useState<string>("");
  const [shouldAuthorizeEmail, setShouldAuthorizeEmail] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isTimeOut, setIsTimeOut] = useState<boolean>(false);
  const [canSearchId, setCanSearchId] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");

  const handleEmail = async () => {
    const isValid = await trigger("email");
    if (!isValid) return;
    // 유저가 입력한 email로 인증번호 전송

    setShouldAuthorizeEmail(() => true);
  };

  return (
    <form
      onSubmit={handleSubmit((d) => {
        console.log(d);
      })}
      className={cx("find-id-form")}
    >
      {!canSearchId && (
        <div className={cx("input-with-button-wrap")}>
          <label htmlFor="email">
            <input
              id="email"
              placeholder="가입시 입력한 이메일을 입력해주세요."
              disabled={isAuthorized}
              {...register("email", {
                required: "이메일을 입력해주세요.",
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                  message: "이메일형식이 올바르지 않습니다.",
                },
              })}
              style={errors.email ? { borderColor: "#FF0000" } : {}}
            />
            {errors.email?.message && <span>{errors.email.message}</span>}
          </label>
          {!shouldAuthorizeEmail ? (
            <button
              type="button"
              onClick={() => {
                console.log("인증하기");
                handleEmail();
              }}
            >
              인증하기
            </button>
          ) : (
            <button
              type="button"
              disabled={isAuthorized}
              onClick={() => {
                console.log("재전송");
                // handleEmail();
              }}
            >
              재전송
            </button>
          )}
        </div>
      )}
      {shouldAuthorizeEmail && !canSearchId && (
        <>
          <div className={cx("input-with-button-wrap")}>
            <label htmlFor="emailAuthorization" className={cx("email-authorization")}>
              {!isAuthorized && (
                <Timer
                  setAuthResultMsg={setAuthResultMsg}
                  isAuthorized={isAuthorized}
                  setIsTimeOut={setIsTimeOut}
                />
              )}

              <input
                id="emailAuthorization"
                placeholder="인증번호를 입력해 주세요"
                disabled={isAuthorized}
                style={
                  errors.email
                    ? { borderColor: "#FF0000", paddingRight: "50px" }
                    : { paddingRight: "50px" }
                }
              />
              {isTimeOut && <span>{authResultMsg}</span>}
              {isAuthorized && <span className={cx("success")}>{authResultMsg}</span>}
            </label>

            <button
              type="button"
              disabled={isAuthorized || isTimeOut}
              onClick={() => {
                setIsAuthorized(true);
                setAuthResultMsg("인증이완료되었습니다.");
              }}
            >
              확인
            </button>
            {/* <div className={cn("certification-result-msg")}>
            <span>{authResultMsg}</span>
          </div> */}
          </div>
          <button
            type="button"
            className={cx("find-btn")}
            onClick={() => {
              setCanSearchId(true);
              setUserId("afdadfs");
            }}
          >
            찾기
          </button>
        </>
      )}
      {canSearchId && (
        <div className={cx("find-id-success")}>
          <span>
            {getValues("email")}로 가입된 아이디는
            <br /> 다음과 같습니다
          </span>
          <span className={cx("user-id")}>{userId}</span>
          <Link href="/sign-in" className={cx("login-btn")}>
            <button type="button">로그인하기</button>
          </Link>
        </div>
      )}
      {/* <button type="submit">submit</button> */}
    </form>
  );
};

export { FindIdForm };
