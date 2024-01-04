import { toast } from "react-toastify";

const getData = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/question/${id}`);

    const data = await res.json();
    return data;
  } catch (error) {
    toast.error("예기치 못한 오류가 발생했습니다. 나중에 다시 시도해 주세요.");
    throw new Error("Failed to fetch data");
  }
};

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);
  return <div>Board Detail Page {data.id}</div>;
};

export default Page;
