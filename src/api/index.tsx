import { privateApi, publicApi } from "./axios";


// Admin 
// Course Management
export const assignCourse = async (data: any) => {
  const res = await publicApi.post("/api/v1/PlatformAdmin/assignCourse", data);
  return res.data;
};



// Querry - publicApi
export const getCourses = async () => {
  const res = await publicApi.get("/api/v1/PlatformAdmin/Courses");
  return res.data.data;
};
export const getInstructors = async () => {
  const res = await publicApi.get("/api/v1/PlatformAdmin/Instructors");
  return res.data.data;
};