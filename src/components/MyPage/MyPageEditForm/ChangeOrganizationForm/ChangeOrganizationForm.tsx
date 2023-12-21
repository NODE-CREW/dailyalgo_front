"use client";

import classNames from "classnames/bind";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import {
  fetchOrganizationSearch,
  requestJoinOrganization,
  requestWithdrawOrganization,
} from "src/api/Organization";
import style from "./ChangeOrganizationForm.module.scss";

const cx = classNames.bind(style);

type FormValues = {
  organizationCode: string;
  organizationName: string;
};

const ChangeOrganizationForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    resetField,
  } = useForm<FormValues>({ mode: "onChange" });

  // NCN.ji

  const [isJoinComplete, setIsJoinComplete] = useState(false);
  const [searchedOragnizationName, setSearchedOragnizationName] = useState<string>("");
  const [searchedOrganizationCode, setSearchedOrganizationCode] = useState<string>("");

  const onValid: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await fetchOrganizationSearch(data.organizationCode);
      setSearchedOragnizationName(res);
      setSearchedOrganizationCode(data.organizationCode);
    } catch (e) {
      setError("organizationCode", {
        type: "wrongOrganizationCode",
        message: "존재하지 않는 소속코드입니다.",
      });
    }
  };

  const joinOranization = async () => {
    try {
      await requestJoinOrganization(searchedOrganizationCode);
      resetField("organizationCode");
      setIsJoinComplete(true);
      setTimeout(() => {
        setIsJoinComplete(false);
      }, 1500);
    } catch (e) {
      setError("organizationName", {
        type: "wrongOrganizationName",
        message: "이미 소속에 가입되어있습니다.",
      });
    }
  };

  return (
    <div className={cx("form-wrap")}>
      <h1>소속 변경</h1>

      <form onSubmit={handleSubmit(onValid)} className={cx("organigation-search-wrap")}>
        <div className={cx("organigation-code-wrap")}>
          <label htmlFor="organizationCode">
            <input
              id="organizationCode"
              type="text"
              placeholder="소속코드를 입력해주세요."
              {...register("organizationCode", { required: "소속코드를 입력해주세요" })}
              style={errors.organizationCode && { borderColor: "red" }}
            />
            {errors.organizationCode?.message && (
              <span className={cx("form-msg")}>{errors.organizationCode.message}</span>
            )}
          </label>
          <button type="submit">조회</button>
        </div>
        <div className={cx("organigation-result-wrap")}>
          <label htmlFor="organizationName">
            <input
              id="organizationName"
              type="text"
              placeholder="소속코드를 조회해주세요"
              readOnly
              value={searchedOragnizationName}
              {...register("organizationName")}
              style={errors.organizationName && { borderColor: "red" }}
            />
            {errors.organizationName?.message && (
              <span className={cx("form-msg")}>{errors.organizationName.message}</span>
            )}
            <button type="button" onClick={joinOranization}>
              추가하기
            </button>
          </label>
        </div>
      </form>

      {isJoinComplete && (
        <button type="button" className={cx("background")} onClick={() => setIsJoinComplete(false)}>
          <div className={cx("success-alarm")}>
            {searchedOragnizationName}에 가입이 완료되었습니다.
          </div>
        </button>
      )}
    </div>
  );
};

export { ChangeOrganizationForm };
