"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import classNames from "classnames/bind";
import style from "./ChangePwForm.module.scss";

const cx = classNames.bind(style);

type FormValues = {
  originalPassword: string;
  newPassword: string;
  newPasswordCheck: string;
};

const ChangePwForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    trigger,
    // setError
  } = useForm<FormValues>({ mode: "onChange" });

  const [isChangeComplete, setIsChangeComplete] = useState(false);

  const onValid: SubmitHandler<FormValues> = async (data) => {
    console.log("data", data);
    // 비밀번호 변경 API 요청(작업 시 주석 외 내용 삭제)
    // const response = await checkPassword(data);
    // if (response) {
    //   setIsChangeComplete(true);
    //   setTimeout(() => {
    //   setIsChangeComplete(false);
    // }, 1500);
    // } else {
    //   setError("newPassword", {
    //     type: "wrongPassword",
    //     message: "비밀번호가 올바르지않습니다."
    //   })
    // }
    setIsChangeComplete(true);
    setTimeout(() => {
      setIsChangeComplete(false);
    }, 1500);
  };

  return (
    <div className={cx("form-wrap")}>
      <h1>비밀번호 변경</h1>
      <span className={cx("hint")}>8 ~ 16자 영문, 숫자, 특수문자($`~!@$!%*#^?&\\(\\)\-_=+)</span>
      <form className={cx("change-pw-form")} onSubmit={handleSubmit(onValid)}>
        {/* original password */}
        <div className={cx("input-without-button-wrap")}>
          <label htmlFor="originPassword">
            <input
              id="originPassword"
              type="text"
              placeholder="현재 비밀번호를 입력해주세요."
              {...register("originalPassword", {
                required: "현재 비밀번호를 입력해주세요.",
              })}
              maxLength={16}
              style={errors.originalPassword ? { borderColor: "#FF0000" } : {}}
            />
            {errors.originalPassword?.message && (
              <span className={cx("form-msg")}>{errors.originalPassword.message}</span>
            )}
          </label>
        </div>
        {/* new password */}
        <div className={cx("input-without-button-wrap")}>
          <label htmlFor="newPassword">
            <input
              id="newPassword"
              type="text"
              placeholder="새 비밀번호를 입력해주세요."
              {...register("newPassword", {
                required: "비밀번호를 입력해주세요.",
                validate: {
                  isDuplicate: (value) => {
                    const passwordCheck = getValues("newPasswordCheck");
                    if (passwordCheck === "") return undefined;
                    if (passwordCheck !== "" && value !== passwordCheck) {
                      trigger("newPasswordCheck");
                      return "비밀번호가 일치하지 않습니다.";
                    }
                    trigger("newPasswordCheck");
                    return undefined;
                  },
                  hasRequiredChar: (value) =>
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&-]).{8,20}$/.test(value) ||
                    "비밀번호는 8자이상, 20자이하여야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.",
                  haveSpace: (value) => !/\s/g.test(value) || "공백은 포함할 수 없습니다.",
                },
              })}
              style={errors.newPassword ? { borderColor: "#FF0000" } : {}}
            />
            {errors.newPassword?.message && (
              <span className={cx("form-msg")}>{errors.newPassword.message}</span>
            )}
          </label>
        </div>
        {/* new password check */}
        <div className={cx("input-without-button-wrap")}>
          <label htmlFor="newPasswordCheck">
            <input
              id="newPasswordCheck"
              type="text"
              placeholder="새 비밀번호를 한번 더 입력해주세요."
              {...register("newPasswordCheck", {
                required: "비밀번호를 한번 더 입력해주세요.",
                validate: {
                  check: (value) => {
                    console.log("중복확인", "newPassword : ", getValues("newPassword"));
                    if (getValues("newPassword") !== value) {
                      return "비밀번호가 일치하지 않습니다.";
                    }
                    return undefined;
                  },
                },
              })}
              style={errors.newPasswordCheck ? { borderColor: "#FF0000" } : {}}
            />
            {errors.newPasswordCheck?.message && (
              <span className={cx("form-msg")}>{errors.newPasswordCheck.message}</span>
            )}
          </label>
        </div>
        <button type="submit" className={cx("change-pw-btn")}>
          변경
        </button>
      </form>
      {isChangeComplete && (
        <button
          type="button"
          className={cx("background")}
          onClick={() => setIsChangeComplete(false)}
        >
          <div className={cx("success-alarm")}>비밀번호가 성공적으로 변경되었습니다.</div>
        </button>
      )}
    </div>
  );
};

export { ChangePwForm };
