"use client";

import { useState, MouseEvent } from "react";
import { FieldErrors, SubmitHandler, set, useForm } from "react-hook-form";
import classNames from "classnames/bind";
import { fetchCheckId, fetchCheckNickname, requestSendMail } from "src/api/User";
import style from "./SignUpForm.module.scss";
import { Timer } from "../Timer";
import { AgreementModal } from "../AgreementModal/AgreementModal";

const cx = classNames.bind(style);

type FormValues = {
  registerId: string;
  nickname: string;
  password: string;
  passwordCheck: string;
  email: string;
  organization?: string;
  organizationCode?: string;
  agreementAl: boolean;
  agreementId: boolean;
};

const SignUpForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    trigger,
    setError,
  } = useForm<FormValues>({ mode: "onChange" });

  const [registerIdDuplicationCheck, setRegisterIdDuplicationCheck] = useState(false);
  const [nicknameDuplicationCheck, setNicknameDuplicationCheck] = useState(false);
  const [shouldAuthorizeEmail, setShouldAuthorizeEmail] = useState(false);
  const [authResultMsg, setAuthResultMsg] = useState<string>("");
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isTimeOut, setIsTimeOut] = useState<boolean>(false);
  const [isAlModalOpen, setIsAlModalOpen] = useState<boolean>(false);
  const [isIdModalOpen, setIsIdModalOpen] = useState<boolean>(false);

  // const [verifiedId, setVerifiedId] = useState<string>("");

  const onValid: SubmitHandler<FormValues> = async (data) => {
    if (!registerIdDuplicationCheck) {
      setError("registerId", {
        type: "duplicate",
        message: "중복 확인이 필요합니다.",
      });
    } else if (!nicknameDuplicationCheck) {
      setError("nickname", {
        type: "duplicate",
        message: "중복 확인이 필요합니다.",
      });
    } else {
      console.log("valid", data);
    }
  };
  const onInvalid = (error: FieldErrors) => {
    console.log("invalid", error);
  };

  const handleCheckRegisterId = async () => {
    // 1. 아이디 유효성 검사 통과확인
    const isValid = await trigger("registerId");
    if (!isValid) return;

    const id = getValues("registerId");
    const res = await fetchCheckId(id);
    if (res) {
      setRegisterIdDuplicationCheck(true);
    } else {
      setRegisterIdDuplicationCheck(false);
      setError("registerId", {
        type: "duplication",
        message: "이미 사용중인 아이디입니다.",
      });
    }
  };

  const registerIdMsg = () => {
    const id = getValues("registerId");
    if (errors.registerId && id === "") return <span>{errors.registerId?.message}</span>;
    if (id !== undefined && id !== "") {
      if (errors.registerId?.message) return <span>{errors.registerId?.message}</span>;
      if (registerIdDuplicationCheck)
        return <span className={cx("success")}>사용가능한 아이디입니다.</span>;
      return <span className={cx("need-duplication-check")}>중복 확인이 필요합니다.</span>;
    }
    return undefined;
  };

  const handleCheckNickname = async () => {
    const isValid = await trigger("nickname");
    if (!isValid) return;

    const nickname = getValues("nickname");
    const res = await fetchCheckNickname(nickname);

    if (res) {
      setNicknameDuplicationCheck(true);
    } else {
      setNicknameDuplicationCheck(false);
      setError("nickname", {
        type: "duplicate",
        message: "이미 사용중인 닉네임입니다.",
      });
    }
  };

  const nicknameMsg = () => {
    const nickname = getValues("nickname");
    if (errors.nickname && nickname === "") return <span>{errors.nickname?.message}</span>;
    if (nickname !== undefined && nickname !== "") {
      if (nickname === "") return <span>{errors.nickname?.message}</span>;
      if (errors.nickname) return <span>{errors?.nickname.message}</span>;
      if (nicknameDuplicationCheck)
        return <span className={cx("success")}>사용가능한 닉네임입니다.</span>;
      if (!nicknameDuplicationCheck)
        return (
          <span role="alert" className={cx("need-duplication-check")}>
            중복 확인이 필요합니다.
          </span>
        );
      return null;
    }
    return null;
  };

  const handleEmail = async () => {
    const isValid = await trigger("email");
    const email = getValues("email");
    if (!isValid) return;
    await requestSendMail(email);
    setShouldAuthorizeEmail(() => true);
  };

  const alModalOpen = (e: MouseEvent) => {
    e.preventDefault();
    setIsAlModalOpen(true);
  };

  const idModalOpen = (e: MouseEvent) => {
    e.preventDefault();
    setIsIdModalOpen(true);
  };

  const agreementBtnClickHandler = (type: "al" | "id") => {
    if (type === "al") {
      const alCheckbox = document.getElementById("agreement-al") as HTMLInputElement;
      alCheckbox.checked = true;
      setIsAlModalOpen(false);
    } else {
      const idCheckbox = document.getElementById("agreement-id") as HTMLInputElement;
      idCheckbox.checked = true;
      setIsIdModalOpen(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInvalid)} className={cx("register-form")}>
        {/* register-id */}
        <div className={cx("input-with-button-wrap")}>
          <label htmlFor="registerId">
            <input
              id="registerId"
              placeholder="아이디를 입력해주세요."
              {...register("registerId", {
                required: "아이디를 입력해주세요.",
                pattern: {
                  value: /^(?=.*?[a-zA-Z])(?=.*?[a-z])(?=.*?[0-9]).{4,12}$/,
                  message: "아이디는 영문 대소문자와 숫자를 포함하여 4~12자리로 입력해야합니다",
                },
                onChange: () => {
                  if (registerIdDuplicationCheck) {
                    setRegisterIdDuplicationCheck(false);
                    setError("registerId", {
                      type: "duplicate",
                      message: "아이디 중복 확인이 필요합니다.",
                    });
                  }
                },
              })}
              style={errors.registerId ? { borderColor: "#FF0000" } : {}}
            />
            {registerIdMsg()}
          </label>
          <button type="button" onClick={handleCheckRegisterId} id="duplicate">
            중복확인
          </button>
        </div>
        {/* nickname */}
        <div className={cx("input-with-button-wrap")}>
          <label htmlFor="nickname">
            <input
              id="nickname"
              placeholder="닉네임을 입력해주세요."
              {...register("nickname", {
                required: "닉네임을 입력해주세요.",
                pattern: {
                  value: /^[a-zA-z0-9]{4,12}$/,
                  message: "닉네임은 영문 대소문자와 숫자 4~12자리로 입력해야합니다",
                },
                onChange: () => {
                  if (nicknameDuplicationCheck) {
                    setNicknameDuplicationCheck(false);
                    setError("nickname", {
                      type: "duplicate",
                      message: "닉네임 중복 확인이 필요합니다.",
                    });
                  }
                },
              })}
              style={errors.nickname ? { borderColor: "#FF0000" } : {}}
            />
            {nicknameMsg()}
          </label>
          <button
            type="button"
            onClick={() => {
              handleCheckNickname();
            }}
          >
            중복확인
          </button>
        </div>
        {/* password */}
        <div className={cx("input-without-button-wrap")}>
          <label htmlFor="password">
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                validate: {
                  isDuplicate: (value) => {
                    const passwordCheck = getValues("passwordCheck");
                    if (passwordCheck === "") return undefined;
                    if (passwordCheck !== "" && value !== passwordCheck) {
                      trigger("passwordCheck");
                      return "비밀번호가 일치하지 않습니다.";
                    }
                    trigger("passwordCheck");
                    return undefined;
                  },
                  hasRequiredChar: (value) =>
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&-]).{8,20}$/.test(value) ||
                    "비밀번호는 8자이상, 20자이하여야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.",
                  haveSpace: (value) => !/\s/g.test(value) || "공백은 포함할 수 없습니다.",
                },
              })}
              style={errors.password ? { borderColor: "#FF0000" } : {}}
            />
            {errors.password?.message && <span>{errors.password.message}</span>}
          </label>
        </div>
        {/* password check */}
        <div className={cx("input-without-button-wrap")}>
          <label htmlFor="passwordCheck">
            <input
              id="passwordCheck"
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요."
              {...register("passwordCheck", {
                required: "비밀번호를 한번 더 입력해주세요.",
                validate: {
                  // isDuplicate: (value) => {
                  //   const password = getValues("password");
                  //   if (password === "") return undefined;
                  //   if (password !== "" && value !== password) {
                  //     trigger("password");
                  //     return "비밀번호가 일치하지 않습니다.";
                  //   }
                  //   trigger("password");
                  //   return undefined;
                  // },
                  check: (value) => {
                    console.log("중복확인", "password : ", getValues("password"));
                    if (getValues("password") !== value) {
                      return "비밀번호가 일치하지 않습니다.";
                    }
                    return undefined;
                  },
                },
              })}
              style={errors.passwordCheck ? { borderColor: "#FF0000" } : {}}
            />
            {errors.passwordCheck?.message && <span>{errors.passwordCheck.message}</span>}
          </label>
        </div>
        {/* email */}
        <div className={cx("input-with-button-wrap")}>
          <label htmlFor="email">
            <input
              id="email"
              placeholder="이메일을 입력해주세요."
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
                handleEmail();
              }}
            >
              재전송
            </button>
          )}
        </div>
        {shouldAuthorizeEmail && (
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
              {/* {errors.email?.message && <span>{errors.email.message}</span>} */}
              {/* <span>{authResultMsg}</span> */}
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
        )}
        <div style={{ marginTop: 24 }}>
          <span style={{ color: "black", fontSize: 14 }}>선택</span>
          <div className={cx("input-without-button-wrap")}>
            <label htmlFor="organization">
              <input
                id="organization"
                placeholder="소속을 입력해주세요."
                {...register("organization", {})}
              />
            </label>
          </div>
          <div className={cx("input-without-button-wrap")}>
            <label htmlFor="organizationCode">
              <input
                id="organizationCode"
                placeholder="소속코드를 입력해주세요."
                {...register("organizationCode", {})}
              />
            </label>
          </div>
          <div className={cx(["agreement", "al"])}>
            <input
              type="checkbox"
              id="agreement-al"
              {...register("agreementAl", {
                required: false || "이용약관에 동의해주세요.",
              })}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="agreement-al">
              <span>
                본 서비스를 위한{" "}
                <a href="/" onClick={alModalOpen}>
                  이용약관
                </a>
                에 동의합니다.(필수)
              </span>
            </label>
          </div>
          <div className={cx("agreement")}>
            <input
              type="checkbox"
              id="agreement-id"
              {...register("agreementId", {
                required: false || "개인정보약관에 동의해주세요.",
              })}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="agreement-id">
              <span>
                본 서비스를 위한{" "}
                <a href="/" onClick={idModalOpen}>
                  개인정보약관
                </a>
                에 동의합니다.(필수)
              </span>
            </label>
          </div>
        </div>
        <button type="submit" className={cx("register-btn")}>
          회원가입
        </button>
      </form>
      <AgreementModal
        type="al"
        isOpen={isAlModalOpen}
        closeModal={() => setIsAlModalOpen(false)}
        agreementClick={agreementBtnClickHandler}
      />
      <AgreementModal
        type="id"
        isOpen={isIdModalOpen}
        closeModal={() => setIsIdModalOpen(false)}
        agreementClick={agreementBtnClickHandler}
      />
    </>
  );
};

export { SignUpForm };
