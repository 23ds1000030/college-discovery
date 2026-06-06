import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export const useColleges = (search: string, page: number) => {
  return useQuery({
    queryKey: ["colleges", search, page],
    queryFn: async () => {
      const res = await api.get("/colleges", {
        params: { search, page },
      });

      return res.data;
    },
    keepPreviousData: true,
  });
};