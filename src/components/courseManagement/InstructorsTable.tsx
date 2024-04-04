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


const InstructorsTable = ({ courseId, instructors }: any) => {
  const [check, setCheck] = useState<any>([])
  const{mutate, isPending} = useAssignCourse()

  const assignInstructor = async(instructorId:any) => {
    mutate({
      courseId: courseId,
      instructorId: instructorId,
    })
  }

  return (
    <div className="px-[5%]">
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
            <table className="min-w-full bg-white">
              <thead className="font-normal">
                <tr className="">
                  <th className="py-4 px-4 font-normal">
                    <div className="flex gap-2 text-left">
                      <p>Name</p>
                    </div>
                  </th>
                  <th className="py-4 px-4 font-normal">
                    <div className="flex gap-2 text-left">
                      <p>Email</p>
                    </div>
                  </th>
                  <th className="min-w-[145px]  py-2 px-4 font-normal">
                    <div className="flex gap-2 text-left">
                      <p>Phone Numbers</p>
                    </div>
                  </th>
                  <th className="py-4 px-4 font-normal">
                    <div className="flex gap-2 text-left">
                      <p>Department</p>
                    </div>
                  </th>
                  <th className="py-4 px-4 font-normal">
                    <div className="flex gap-2 text-left">
                      <p>Action</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white text-sm">
                {instructors.map((instructor: any, index: number) => {
                  return (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-[#E5E7EB]" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-4 whitespace-nowrap text-left">
                        {instructor?.firstName} {instructor?.middleName} {instructor?.lastName}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap font-medium">
                        {instructor?.email}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {instructor?.phone}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {instructor?.department}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="w-full h-full flex justify-center items-center my-auto">
                          <button className="flex items-center rounded-[16px] text-primary border border-primary px-[20px] py-[4px] "
                            onClick={()=> {assignInstructor(instructor?.id); setCheck([...check, instructor?.id])}}
                          >
                            {check.includes(instructor?.id) ? <Check className="inline text-primary"/> : <Plus className="inline text-primary"/>} Assign
                          </button>
                        </div>
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

export default InstructorsTable;
