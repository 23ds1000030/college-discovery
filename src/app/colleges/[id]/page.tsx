import { api } from "@/lib/api";

export default async function CollegeDetail({
  params,
}: {
  params: { id: string };
}) {
  const res = await api.get(`/colleges/${params.id}`);
  const college = res.data;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{college.name}</h1>

      <p className="mt-2">{college.overview}</p>

      <h2 className="mt-4 font-semibold">Courses</h2>
      <ul>
        {college.courses?.map((c: any) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}