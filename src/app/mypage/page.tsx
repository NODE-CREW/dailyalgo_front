"use client";

import { reduxAppSelector } from "src/redux/store";
import { useState } from "react";
import { MyPageEditForm } from "@components/mypage/MyPageEditForm";
import { MyPageContentForm } from "@components/mypage/MyPageContentForm";
import { MyPageTop } from "../../components/mypage/MyPageTop";

const Page = () => {
  const { userInfo } = reduxAppSelector((state) => state.authReducer.value);

  const [isEdited, setIsEdited] = useState(false);

  const clickEdit = () => {
    setIsEdited(!isEdited);
  };

  return (
    <>
      <MyPageTop
        isEdited={isEdited}
        clickBtnHandler={clickEdit}
        pageType="mypage"
        userInfo={userInfo}
      />
      {isEdited ? <MyPageEditForm /> : <MyPageContentForm />}
    </>
  );
};

export default Page;
