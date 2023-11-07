import type { Meta, StoryObj } from "@storybook/react";
import { MyPageQuestionItem } from "./MyPageQuestionItem";
import type { QuestionItem } from "../MyPageQuestionList/MyPageQuestionList";

const meta: Meta<typeof MyPageQuestionItem> = {
  component: MyPageQuestionItem,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MyPageQuestionItem>;

const Dummy: QuestionItem = {
  id: 1,
  title: "How to use React?",
  questionContents:
    "I want to use React in my project. How can I do that? I want to use React in my project. How can I do that? I want to use React in my project. How can I do that? I want to use React in my project. How can I do that?",
  problemTag: "시간초과",
  platform: "BOJ",
  algorithmTagArray: ["DP", "DFS", "BFS"],
  likeCount: 10,
  viewCount: 20,
  commentCount: 30,
  author: "근육맨",
  createdAt: "2021-08-01T00:00:00.000Z",
};

export const Default: Story = {
  args: {
    id: Dummy.id,
    title: Dummy.title,
    questionContents: Dummy.questionContents,
    problemTag: Dummy.problemTag,
    platform: Dummy.platform,
    algorithmTagArray: Dummy.algorithmTagArray,
    likeCount: Dummy.likeCount,
    viewCount: Dummy.viewCount,
    commentCount: Dummy.commentCount,
    author: Dummy.author,
    createdAt: Dummy.createdAt,
  },
};
