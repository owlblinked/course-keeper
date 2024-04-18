import { useQuery } from "@tanstack/react-query";
import Api from "../../api/api";

const getCourses = async () => {
  const { data } = await Api.get("/courses");
  return data;
};

export const useGetCourses = () =>
  useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });
