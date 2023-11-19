import classNames from "classnames/bind";
import { BasicButton } from "@components/button/BasicButton";
import { DeleteUserModal } from "../DeleteUserModal";
import { useState } from "react";
import { useForm, FieldErrors, SubmitHandler } from "react-hook-form";
import { fetchCheckNickname } from "src/api/User/api";
import style from "./ChangeProfileForm.module.scss";

const cx = classNames.bind(style);

type FormValues = {
  nickname: string;
  intro?: string;
};

const ChangeProfileForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    trigger,
    setError,
  } = useForm<FormValues>({ mode: "onChange" });

  const [nicknameDuplicationCheck, setNicknameDuplicationCheck] = useState(false);
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);

  const onValid: SubmitHandler<FormValues> = (data) => {
    if (!nicknameDuplicationCheck) {
      setError("nickname", { type: "duplicate", message: "중복 확인이 필요합니다." });
    } else {
      console.log("valid", data);
    }
  };

  const onInvalid = (error: FieldErrors) => {
    console.log("invalid", error);
  };

  const handleCheckNickname = async () => {
    const isValid = await trigger("nickname");
    if (!isValid) return;

    const nickname = getValues("nickname");
    // const res = await fetchCheckNickname(nickname);
    const res = true;
    if (res) {
      setNicknameDuplicationCheck(true);
    } else {
      setNicknameDuplicationCheck(false);
      setError("nickname", { type: "duplicate", message: "이미 사용중인 닉네임입니다." });
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

  const openDeleteUserModal = () => {
    setIsDeleteUserModalOpen(true);
  };

  const closeDeleteUserModal = () => {
    setIsDeleteUserModalOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInvalid)} className={cx("change-profile-form-wrap")}>
        <div className={cx("form-header")}>
          <span>프로필 수정</span>
        </div>
        <div className={cx("form-body")}>
          <div className={cx("form-items-wrap")}>
            {/* id */}
            <div className={cx("form-item")}>
              <p>아이디</p>
              <div className={cx("input-without-button-wrap")}>
                <label htmlFor="id">
                  <input id="id" value="id" disabled />
                </label>
              </div>
            </div>
            {/* email */}
            <div className={cx("form-item")}>
              <p>이메일</p>
              <div className={cx("input-without-button-wrap")}>
                <label htmlFor="email">
                  <input id="email" value="email" disabled />
                </label>
              </div>
            </div>
          </div>
          <div className={cx("form-items-wrap")}>
            <div className={cx("form-body-header")}>
              <span>내 정보</span>
            </div>
            {/* nickname */}
            <div className={cx("form-item")}>
              <p>닉네임</p>
              <div className={cx("input-with-button-wrap")}>
                <label htmlFor="nickname">
                  <input
                    id="nickname"
                    {...register("nickname", {
                      required: "닉네임을 입력해주세요.",
                      pattern: {
                        value: /^[a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,10}$/,
                        message: "닉네임은 영문 대소문자와 숫자 4~12자리로 입력해야합니다",
                      },
                      onChange: () => {
                        setNicknameDuplicationCheck(false);
                        setError("nickname", {
                          type: "duplicate",
                          message: "닉네임 중복 확인이 필요합니다.",
                        });
                      },
                    })}
                    defaultValue="nickname"
                    style={errors.nickname ? { borderColor: "#ff0000" } : {}}
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
            </div>
            {/* intro */}
            <div className={cx("form-item")}>
              <p>소개 한마디</p>
              <div className={cx("input-without-button-wrap")}>
                <label htmlFor="intro">
                  <input id="intro" {...register("intro")} defaultValue="한마디입니다" />
                </label>
              </div>
            </div>
            {/* organization */}
            <div className={cx("form-item")}>
              <p>소속</p>
              <div className={cx("input-without-button-wrap")}>
                <label htmlFor="organazation">
                  <input id="organazation" value="organazation" disabled />
                </label>
              </div>
            </div>
            <div className={cx("form-item")}>
              <p>organization code</p>
              <div className={cx("input-without-button-wrap")}>
                <label htmlFor="organizationCode">
                  <input id="organizationCode" value="organizationCode" disabled />
                </label>
              </div>
            </div>
            <div className={cx("organization-add-btn")}>소속추가</div>
          </div>
        </div>
        <BasicButton type="submit">수정완료</BasicButton>
        <div className={cx("delete-user-btn")} onClick={openDeleteUserModal}>
          회원탈퇴하기
        </div>
      </form>
      <DeleteUserModal isOpen={isDeleteUserModalOpen} closeModal={closeDeleteUserModal} />
    </>
  );
};

export { ChangeProfileForm };
