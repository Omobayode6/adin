import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";

// import { toast } from "react-toastify";
import { useState } from "react";
import { toast } from "react-toastify";
import { assignCourse } from "../../api";

// Course Management *******************************************************************************************
export const useAssignCourse = () => {
  // const location = useLocation();
  return useMutation({
    mutationFn: assignCourse,
    onSuccess: (data:any) => {
      toast.success(data.message, {
        toastId: "success1",
      });
    },
    onError: (error: any) => {
      console.log(error.data)
      let resMessage;
      error?.response?.status === 500 ?
      resMessage = error.response.data :
      error?.response?.status === 400 ?
        resMessage = error.response.data.errorMessages[0] : 
        resMessage = (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(resMessage, {
        toastId: "error1",
      });
    },
  });
};
