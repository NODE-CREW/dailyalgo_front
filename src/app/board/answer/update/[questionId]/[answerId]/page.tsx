import { AnswerUpdateForm } from "src/app/board/_components/AnswerForm";

const page = ({ params }: { params: { questionId: string; answerId: string } }) => {
  console.log(params);
  return (
    <div>
      <AnswerUpdateForm answerId={Number(params.answerId)} questionId={Number(params.questionId)} />
    </div>
  );
};

export default page;
