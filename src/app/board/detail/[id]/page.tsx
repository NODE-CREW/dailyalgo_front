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
  console.log(data);
  return <div>Board Detail Page {params.id}</div>;
};

export default Page;
