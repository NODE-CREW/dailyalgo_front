"use client";

import { reduxAppSelector, AppDispatch } from "src/redux/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUserInfo } from "src/api/User";
import { setUserInfo } from "src/redux/slices/auth-slice";
import { MyPageEditForm } from "@components/mypage/MyPageEditForm";
import { MyPageContentForm } from "@components/mypage/MyPageContentForm";
import { UserInfo } from "src/types/user";
import { MyPageTop } from "../../components/mypage/MyPageTop";

const Page = () => {
  const { userInfo } = reduxAppSelector((state) => state.authReducer.value);
  const dispatch = useDispatch<AppDispatch>();

  const [isEdited, setIsEdited] = useState(false);

  const clickEdit = () => {
    setIsEdited(!isEdited);
  };

  const getUserInfo = async () => {
    try {
      const res: UserInfo = await fetchUserInfo();
      dispatch(setUserInfo(res));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <MyPageTop
        isEdited={isEdited}
        clickBtnHandler={clickEdit}
        pageType="mypage"
        userInfo={userInfo}
        getUserInfo={getUserInfo}
      />
      {isEdited ? <MyPageEditForm /> : <MyPageContentForm />}
    </>
  );
};

export default Page;
