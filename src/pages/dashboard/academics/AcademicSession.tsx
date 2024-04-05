import React, { useState } from 'react'
import { Bird, ChevronDown, Plus } from 'lucide-react';
import book from '../../../assets/icons/book.svg'
import file from '../../../assets/icons/file.svg'
import EmptyState from '../../../components/reusable/EmptyState';
import { useCourses } from '../../../hooks/query';
import CourseCard from '../../../components/courseManagement/CourseCard';

const AcademicSession = () => {
  const [menu, setMenu] = useState<any>(100)  

  return (
    <div className='ml-[63px] md:ml-[287px] mb-8 pt-[70px] px-[2%] pb-10'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='font-semibold text-[28px] leading-[44px] text-[#0E1F1D] '>Academics Sessions</h2>
        <button className='text-[#F3F4F6] text-[20px] font-bold leading-[24px] bg-[#008688] rounded-[16px] px-[28px] py-[20px] '><Plus className='inline'/> Create</button>
      </div>
      {/* Cards */}
      <div className='h-fit grid grid-cols-[auto_auto_auto] gap-x-4 items-center overflow-x-auto no-scrollbar'>
        <div className='flex items-center justify-between w-[321px] h-[152px] border border-[#E5E7EB] rounded-[16px] px-4 py-6 '>
          <div>
            <p className='text-[#697077] text-sm leading-[32px] '>Total Courses</p>
            <p className='text-[#008688] text-[28px] font-bold leading-[32px] '>32</p>
          </div>
          <div className='w-[54px] h-[54px] rounded-[10px] bg-[#D7E8E5] p-2 '>
          <img src={book} alt="book" className='w-[40px] h-[40px]'/>
          </div>
        </div>

        <div className='flex items-center justify-between w-[321px] h-[152px] border border-[#E5E7EB] rounded-[16px] px-4 py-6 '>
          <div>
            <p className='text-[#697077] text-sm leading-[32px] '>Ongoing Courses</p>
            <p className='text-[#008688] text-[28px] font-bold leading-[32px] '>4</p>
          </div>
          <div className='w-[54px] h-[54px] rounded-[10px] bg-[#D7E8E5] p-2 '>
          <img src={file} alt="book" className='w-[40px] h-[40px]'/>
          </div>
        </div>

        <div className='flex items-center justify-between w-[321px] h-[152px] border border-[#E5E7EB] rounded-[16px] px-4 py-6 '>
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
    </div>
  )
}

const menuBar = [
  {
    label: '100 Level',
    level: 100
  },
  {
    label: '200 Level',
    level: 200
  },
  {
    label: '300 Level',
    level: 300
  },
  {
    label: '400 Level',
    level: 400
  },
]

export default AcademicSession