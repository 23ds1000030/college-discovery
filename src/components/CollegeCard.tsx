import { api } from "@/lib/api";
import toast from "react-hot-toast";

export default function CollegeCard({ college }: any) {
  const saveCollege = async () => {
    try {
      await api.post("/saved", {
        collegeId: college.id,
        userId: "demo-user-id", // replace with real session later
      });

      toast.success("College saved!");
    } catch (err) {
      toast.error("Failed to save college");
    }
  };

  return (
    <div className="border p-5 rounded-xl shadow-sm hover:shadow-lg transition bg-white">
      <h2 className="text-lg font-semibold">{college.name}</h2>

      <p className="text-sm text-gray-500 mt-1">
        📍 {college.location}
      </p>

      <div className="flex justify-between mt-3 text-sm">
        <span>💰 ₹{college.fees}</span>
        <span>⭐ {college.rating}</span>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={saveCollege}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Save
        </button>

        <button className="border px-3 py-1 rounded">
          Compare
        </button>
      </div>
    </div>
  );
}