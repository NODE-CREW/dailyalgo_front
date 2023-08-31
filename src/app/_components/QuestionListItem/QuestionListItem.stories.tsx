import type { Meta, StoryObj } from "@storybook/react";
import { QuestionListItem } from "./QuestionListItem";

const meta: Meta<typeof QuestionListItem> = {
  component: QuestionListItem,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof QuestionListItem>;

export const Default: Story = {
  args: {
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
  },
};
