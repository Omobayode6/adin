import { privateApi, publicApi } from "./axios";


// Admin 
// Course Management
export const assignCourse = async (data: any) => {
  const res = await publicApi.post("/api/v1/PlatformAdmin/assignCourse", data);
  return res.data;
};
export const addLecturer = async (data: any) => {
  const res = await publicApi.post("/api/v1/PlatformAdmin/addInstructor", data);
  return res.data;
};



// Querry - publicApi
export const getCourses = async (levelId:number, departmentId:number) => {
  const res = await publicApi.get(`/api/v1/PlatformAdmin/Courses/${levelId}/${departmentId}`);
  return res.data.data;
};
export const getInstructors = async () => {
  const res = await publicApi.get("/api/v1/PlatformAdmin/Instructors");
  return res.data.data;
};
export const getLevels = async () => {
  const res = await publicApi.get("/api/v1/PlatformAdmin/Levels");
  return res.data.data;
};
export const getDepartments = async () => {
  const res = await publicApi.get("/api/v1/PlatformAdmin/Department");
  return res.data.data;
}