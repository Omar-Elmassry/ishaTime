import { useQuery } from "@tanstack/react-query";
import { fetchAdhanTimes } from "../queries/adhan-times-query";

export const useAdhanTimesQuery = (date: string) => {
  return useQuery({
    queryKey: ["adhanTimes", date],
    queryFn: () => fetchAdhanTimes(date),
  });
};
