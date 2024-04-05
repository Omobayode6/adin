import { useQuery } from "@tanstack/react-query";
import { getCourses, getDepartments, getInstructors, getLevels } from "../../api";


export const useCourses= (levelId:number, departmentId:number) => {
  return useQuery({
    queryKey: ["courses", levelId, departmentId],
    queryFn: () => getCourses(levelId, departmentId),
  });
};
export const useInstructors= () => {
  return useQuery({
    queryKey: ["instructors"],
    queryFn: getInstructors,
  });
};
export const useLevels= () => {
  return useQuery({
    queryKey: ["levels"],
    queryFn: getLevels,
  });
};
export const useDepartments= () => {
  return useQuery({
    queryKey: ["departments"],
    queryFn: getDepartments,
  });
};
