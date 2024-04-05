import React, { useState } from "react";
import {
  ListFilter,
  Search,
  ChevronsUpDown,
  Bird,
  Plus,
  Check,
} from "lucide-react";
import EmptyState from "../reusable/EmptyState";
import { useAssignCourse } from "../../hooks/mutate";


const UserInstructorsTable = ({ instructors }: any) => {

  return (
    <div className="">
      {instructors?.length === 0 ? (
        <EmptyState
          img={
            <Bird
              size={150}
              className="text-[#C29E57] bg-orange-50 p-1 rounded-lg"
            />
          }
          title="No Wallet instructor"
          text="Oops! It seems that you do not have any wallet tansaction. "
        />
      ) : (
        <>
          <div className="w-full mx-auto overflow-x-auto">
            <table className="min-w-full bg-[#F3F8F8] rounded-[16px]">
              <thead className="font-normal ">
                <tr className="">
                  <th className="py-4 px-4 font-normal">
                    <div className="flex gap-2 text-left">
                      <p>Name</p>
                    </div>
                  </th>
                  <th className="min-w-[145px]  py-2 px-4 font-normal">
                    <div className="flex gap-2 text-left">
                      <p>Phone Numbers</p>
                    </div>
                  </th>
                  <th className="py-4 px-4 font-normal">
                    <div className="flex gap-2 text-left">
                      <p>Email</p>
                    </div>
                  </th>
                  <th className="py-4 px-4 font-normal">
                    <div className="flex gap-2 text-left">
                      <p>Department</p>
                    </div>
                  </th>
                  <th className="py-4 px-4 font-normal">
                    <div className="flex gap-2 text-left">
                      <p>Assigned Courses</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {instructors?.map((instructor: any, index: number) => {
                  return (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-[#FCFCFC]" : "bg-[#FCFCFC]"
                      }`}
                    >
                      <td className="px-4 py-4 whitespace-nowrap text-left">
                        {instructor?.fullName}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {instructor?.phoneNumber}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap font-medium">
                        {instructor?.email}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {instructor?.department}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {instructor?.totalCourse}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default UserInstructorsTable;
