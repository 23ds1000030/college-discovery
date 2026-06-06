"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function SavedPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/saved?userId=demo-user-id").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Saved Colleges</h1>

      {data.map((item: any) => (
        <div key={item.id} className="border p-3 mt-2">
          {item.college.name}
        </div>
      ))}
    </div>
  );
}