import { useQuery } from "@tanstack/react-query";
import { getCourses, getInstructors } from "../../api";


export const useCourses= () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });
};
export const useInstructors= () => {
  return useQuery({
    queryKey: ["instructors"],
    queryFn: getInstructors,
  });
};
