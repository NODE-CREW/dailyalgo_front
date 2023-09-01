import { MyPageTop } from "./_components/MyPageTop";
import { SideTab } from "./_components/SideTab";

const Page = () => {
  const tabList = ["답변", "질문", "다시보기", "알람"];

  return (
    <>
      <MyPageTop />
      <SideTab
        tabList={tabList}
        tabContents={[<div>tab1</div>, <div>tab2</div>, <div>tab3</div>]}
      />
    </>
  );
};

export default Page;
