import React, { useState } from 'react'
import { Bell, Bird, ChevronDown, Plus, Search } from 'lucide-react';
import book from '../../assets/icons/book.svg'
import file from '../../assets/icons/file.svg'
import EmptyState from '../../components/reusable/EmptyState';
import { useCourses } from '../../hooks/query';
import CourseCard from '../../components/courseManagement/CourseCard';
import dummyUser from '../../assets/images/dummy-user.png'

const CourseManagement = () => {
  const [menu, setMenu] = useState<any>(0)  
  const {data:courses} = useCourses()

  return (
    <div className='ml-[63px] md:ml-[217px] mb-8 px-4 pb-10'>
      {/* header */}
      <div className='py-8 border-b border-borderColor'>
        <div className='flex justify-between items-center'>
          {/* search */}
          <div className='ml-[20%] relative'>
            <input type="text" name="search"
              className=' bg-[#F1F5F9] rounded-[16px] outline-none px-6 py-2 max-w-[520px] lg:w-[520px]'
            />
            <div className='absolute top-2 left-3 text-[#94A3B8]'><Search color='#94A3B8' className='inline'/> Search</div>
          </div>
          {/* User information */}
          <div className='flex items-center gap-x-4'>
            <div className='relative bg-[#F3F8F8] rounded-[16px] p-2 '>
              <div className='absolute right-0 top-0 rounded-[50%] bg-red-600 w-2 h-2 '></div>
              <Bell />
            </div>

            <div className='flex gap-x-2'>
              <img src={dummyUser} alt="user" className='w-[46px] h-[46px] '/>
              <div>
                <p className='text-base text-[#0E1919] font-bold '>Soji Olaiya</p>
                <p className='text-faintText text-[12px] '>College of Medicine</p>
              </div>
          
            </div>

          </div>
        </div>

      </div>
      <div className='flex items-center justify-between mb-6 pt-[70px] '>
        <h2 className='font-semibold text-[28px] leading-[44px] text-[#0E1F1D] '>Course Management</h2>
        <div className='flex gap-x-4'>
          <button className="flex gap-2 items-center justify-center border h-10 rounded-[16px] px-[11px] py-[12px] ">
            <span className="text-[#838383]">2023/2034</span>
            <ChevronDown className='inline'/>
          </button>
          <button className="flex gap-2 items-center justify-center border h-10 rounded-[16px] px-[11px] py-[12px] ">
            <span className="text-[#838383]">Second Semester</span>
            <ChevronDown className='inline'/>
          </button>
        </div>
        {/* <button className='text-[#F3F4F6] text-[20px] font-bold leading-[24px] bg-[#008688] rounded-[16px] px-[28px] py-[20px] '><Plus className='inline'/> Create</button> */}
      </div>
      {/* Cards */}
      <div className='h-fit grid grid-cols-[auto_auto_auto] gap-x-4 items-center overflow-x-auto no-scrollbar'>
        <div className='flex items-center justify-between w-[321px] h-[132px] border border-[#E5E7EB] rounded-[16px] px-4 py-6 '>
          <div>
            <p className='text-[#697077] text-sm leading-[32px] '>Total Courses</p>
            <p className='text-[#008688] text-[28px] font-bold leading-[32px] '>32</p>
          </div>
          <div className='w-[54px] h-[54px] rounded-[10px] bg-[#D7E8E5] p-2 '>
          <img src={book} alt="book" className='w-[40px] h-[40px]'/>
          </div>
        </div>

        <div className='flex items-center justify-between w-[321px] h-[132px] border border-[#E5E7EB] rounded-[16px] px-4 py-6 '>
          <div>
            <p className='text-[#697077] text-sm leading-[32px] '>Ongoing Courses</p>
            <p className='text-[#008688] text-[28px] font-bold leading-[32px] '>4</p>
          </div>
          <div className='w-[54px] h-[54px] rounded-[10px] bg-[#D7E8E5] p-2 '>
          <img src={file} alt="book" className='w-[40px] h-[40px]'/>
          </div>
        </div>

        <div className='flex items-center justify-between w-[321px] h-[132px] border border-[#E5E7EB] rounded-[16px] px-4 py-6 '>
          <div>
            <p className='text-[#697077] text-sm leading-[32px] '>Published</p>
            <p className='text-[#008688] text-[28px] font-bold leading-[32px] '>32</p>
          </div>
          <div className='w-[54px] h-[54px] rounded-[10px] bg-[#D7E8E5] p-2 '>
          <img src={file} alt="book" className='w-[40px] h-[40px]'/>
          </div>
        </div>
      </div>
      {/* Coursese */}
      <div className='mt-10 '>
        <div className='flex justify-between items-center mb-8'>
          <p className='text-[24px] font-semibold leading-[36px] '>All Courses</p>
          <button className="flex gap-2 items-center justify-center border h-10 rounded-md px-2">
            <span className="text-[#838383]">All Department</span>
            <ChevronDown className='inline'/>
          </button>
        </div>

        {/* courses */}
        <div className='h-fit grid grid-cols-[150px_auto] gap-x-4 overflow-x-auto no-scrollbar'>
          <div className='border-r border-[#E5E7EB] '>
            <ul className="w-full flex flex-col text-xs md:text-sm lg:text-base gap-4 md:gap-8 overflow-y-visible overflow-x-auto overflow-hidden no-scrollbar">
              {menuBar.map(({level, label}:any) => (
                <li
                  key={level}
                  className={`flex justify-between items-center text-[18px] text-[#374151] font-semibold px-[18px] py-[10px] cursor-pointer transition flex-shrink-0 ${
                    menu === level
                      ? " bg-[#F3F8F8] rounded-[16px] "
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(level);
                  }}
                >
                  {label} 
                </li>
                // <span className='bg-[#E5E7EB] rounded-[8px] p-[8px] '>11</span>
              ))}
            </ul>
          </div>
          {/* Assets display */}
          {courses?.filter(
                  (item: { semesterId: string }) =>
                    menu === 0 || item.semesterId === menu
                )?.length === 0 ? (
            <EmptyState
              img={
                <Bird
                  size={150}
                  className="text-primary bg-primary/10 p-1 rounded-lg"
                />
              }
              title={`No Courses`}
              text={`Oops! It seems that you don't have any courses here`}
            />
          ) : (
            <div className="mt-5 grid lg:grid-cols-3 gap-4 w-full">
              {courses?.filter(
              (item: { semesterId: string }) =>
                menu === 0 || item.semesterId === menu
            )
            .map((course: any, index: number) => (
                  <div key={index} className="w-fit">
                    <CourseCard course={course} />
                  </div>
                ))}
            </div>
          )}

        </div>

      </div>
    </div>
  )
}

const menuBar = [
  {
    label: 'All',
    level: 0
  },
  {
    label: 'ND I',
    level: 1
  },
  {
    label: 'ND II',
    level: 2
  },
  {
    label: 'HND I',
    level: 3
  },
  {
    label: 'HND II',
    level: 4
  },
]

export default CourseManagement