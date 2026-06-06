"use client";

import { useCompareStore } from "@/store/compareStore";
import { api } from "@/lib/api";
import { useState } from "react";

export default function ComparePage() {
  const { selected } = useCompareStore();
  const [result, setResult] = useState<any>(null);

  const compare = async () => {
    const res = await api.post("/compare", {
      collegeIds: selected.map((c) => c.id),
    });
    setResult(res.data);
  };

  return (
    <div className="p-6">
      <button onClick={compare} className="bg-black text-white px-4 py-2">
        Compare
      </button>

      {result && (
        <pre className="mt-4">
          {JSON.stringify(result.comparison, null, 2)}
        </pre>
      )}
    </div>
  );
}