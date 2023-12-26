"use client";

import { SideTab } from "@components/mypage/SideTab";
import { reduxAppSelector } from "src/redux/store";
import { MyPageQuestionList } from "@components/mypage/MyPageContentForm/MyPageQuestionList";
import { MyPageTop } from "@components/mypage/MyPageTop";
import { useState, useEffect, use } from "react";
import { useParams, useRouter } from "next/navigation";
import { fetchUserInfo, requestUserFollow } from "src/api/User";
import type { UserInfo } from "src/types/user";

const UserPage = () => {
  const { id: userId } = useParams();
  const { isLogIn, userInfo: myUserInfo } = reduxAppSelector((state) => state.authReducer.value);
  const router = useRouter();

  const userPageTabList = [
    {
      label: "답변",
      id: "answer",
    },
    {
      label: "질문",
      id: "question",
    },
  ];

  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: "",
    name: "",
    nickname: "",
    intro: "",
    email: "",
    created_time: new Date(),
    organizations: [],
    question_cnt: 0,
    answer_cnt: 0,
    view_cnt: 0,
    follower_cnt: 0,
    following_cnt: 0,
    is_following: false,
  });

  const userPageTabContent = userPageTabList.map((tab) => {
    return <MyPageQuestionList key={tab.id} tab={tab} userId={userId} pageType="user" />;
  });

  const clickFollowBtn = async () => {
    if (!isLogIn) {
      alert("로그인 후 이용해주세요.");
      return;
    }
    try {
      await requestUserFollow(userId);

      const newFollowerCnt = userInfo.is_following
        ? userInfo.follower_cnt - 1
        : userInfo.follower_cnt + 1;
      setUserInfo({
        ...userInfo,
        is_following: !userInfo.is_following,
        follower_cnt: newFollowerCnt,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getUserInfo = async () => {
    try {
      const res: UserInfo = await fetchUserInfo(userId);
      setUserInfo(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (isLogIn && myUserInfo.id === userId) {
      router.push("/mypage");
    }
  }, [myUserInfo, isLogIn, router, userId]);

  return (
    <>
      <MyPageTop
        clickBtnHandler={clickFollowBtn}
        isFollowing={userInfo.is_following}
        pageType="user"
        userInfo={userInfo}
        getUserInfo={getUserInfo}
      />
      <SideTab tabList={userPageTabList.map((tab) => tab.label)} tabContents={userPageTabContent} />
    </>
  );
};

export default UserPage;
