import { ArticleUpdateForm } from "../../_components/ArticleForm";

const getData = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/question/${id}`);

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);
  return (
    <div>
      <ArticleUpdateForm data={data} />
    </div>
  );
};

export default Page;
