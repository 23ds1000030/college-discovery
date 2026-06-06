"use client";

import { useState } from "react";
import { useColleges } from "@/hooks/useColleges";
import CollegeCard from "@/components/CollegeCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CollegesPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useColleges(search, page);

  const colleges = data?.data || [];

  return (
    <div className="p-6">
      {/* SEARCH INPUT (UPDATED HERE) */}
      <input
        className="border p-2 w-full mb-4 rounded"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // resets pagination when user searches
        }}
      />

      {/* ERROR STATE */}
      {isError && (
        <p className="text-red-500">Failed to load colleges</p>
      )}

      {/* LOADING STATE (SKELETON UI) */}
      {!isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {colleges.map((c: any) => (
            <CollegeCard key={c.id} college={c} />
          ))}
        </div>
      )}

      {/* EMPTY STATE */}
      {!isLoading && colleges.length === 0 && (
        <p className="text-gray-500">No colleges found</p>
      )}

      {/* GRID (UPDATED HERE) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {colleges.map((c: any) => (
          <CollegeCard key={c.id} college={c} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex gap-2 mt-6">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </button>

        <span className="px-3 py-1">Page {page}</span>

        <button
          className="px-3 py-1 border rounded"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
      {/* disabled={page >= data?.totalPages} */}
    </div>
  );
}