import { reduxAppSelector } from "src/redux/store";
import { requestPostQuestion } from "src/api/Question";
import { SideTab } from "../SideTab";
import { MyPageQuestionList } from "./MyPageQuestionList";
import { NotificationList } from "./NotificationList";

const MyPageContentForm = () => {
  const mypageTabList = [
    {
      label: "답변",
      id: "answer",
    },
    {
      label: "질문",
      id: "question",
    },
    {
      label: "다시보기",
      id: "scrap",
    },
    {
      label: "알람",
      id: "notification",
    },
  ];

  const dummy = {
    title: "Test Title2",
    source: "BOJ",
    link: "https://www.acmicpc.net/problem/1000",
    type: "시간초과",
    content: "Test Content",
    language: "python",
    code: "print('Hello World')",
    tags: ["tag1", "tag2"],
  };

  const testPost = () => {
    console.log("test");
    try {
      requestPostQuestion(dummy);
    } catch (e) {
      console.log(e);
    }
  };

  const { userInfo } = reduxAppSelector((state) => state.authReducer.value);

  const mypageTabContents = mypageTabList.map((tab) => {
    if (tab.id === "notification") {
      return <NotificationList key={tab.id} />;
    }
    return <MyPageQuestionList key={tab.id} tab={tab} userId={userInfo.id} />;
  });

  return (
    <>
      <div onClick={testPost}>Test</div>
      <SideTab tabList={mypageTabList.map((tab) => tab.label)} tabContents={mypageTabContents} />
    </>
  );
};

export { MyPageContentForm };
