import { BookOpen, CheckCheck, Plus, Search, UserRound, X } from 'lucide-react'
import courseImg from '../../assets/images/courseImg.png'
import more from '../../assets/icons/more.svg'
import { useState } from 'react'
import InstructorsTable from './InstructorsTable'
import { useInstructors } from '../../hooks/query'

const CourseCard = ({course}:any) => {
  const [assignCourse, setAssignCourse] = useState(false)
  const {data:instructors, isPending:instructorsIsPending } = useInstructors()


  return (
    <div className='flex flex-col w-[300px] h-full py-4 border border-borderColor rounded-[16px] '>
      <div>
        <div className='flex justify-between items-center px-4 mb-2'>
          <div className='bg-[#EAF9DE] rounded-[25.34px] px-4'>
            <CheckCheck color='#067306' className='inline'/>
            <span className='text-[#067306] '>Published</span>
          </div>
          <img src={more} alt="" className='cursor-pointer '/>
        </div>
        <img src={courseImg} alt="" className='mb-4'/>
        <p className='text-base font-semibold leading-[24px] px-4 mb-2'>{course?.courseDetails}</p>
        <div className='flex gap-x-8 border-b border-borderColor px-4 pb-4'>
          <div>
            <UserRound className='inline text-faintText'/> <span className='text-[14px] text-faintText '>{course?.totalStd} Students</span>
          </div>
          <div>
            <BookOpen className='inline text-faintText'/> <span className='text-[14px] text-faintText'>{course?.courseUnit} units</span>
          </div>
        </div>
      </div>

      <div className='mt-auto'>
        {/*Lecturers  */}
        <div className='my-2'>
          <p className='px-4 text-[14px] text-[#4B5563]'>Lecturers</p>
          {/* map the last(newest) lecturer added where arr.length - 1 is the last added lecturer*/}
          {course?.lecturers !== null ? ( course?.lecturers?.map( ({name}:any, index:number, arr:any) =>
            arr.length - 1 === index ? (
              <div className='px-4 flex gap-x-2 items-center text-[#0E1F1D] text-base font-semibold '>
                <p>{name}</p>
                <p>and {arr.length-1} others</p>
              </div>
            ) : ('')
          )) : (
            <p className='px-4 text-[#0E1F1D] text-base font-semibold'>No lecturer </p>
          )}
        </div>
        {/* Assign Lecturer */}
        <div className='mt-auto px-4 '>
          <button className='w-full text-base font-bold text-primary rounded-[16px] px-[28px] py-[10px] border border-primary '
            onClick={()=> setAssignCourse(true)}
          > 
            <Plus className='inline text-primary'/> Assign Lecturer
          </button>
        </div>
      </div>
      {assignCourse && (
        <div className="animate-jump fixed top-0 left-0 z-50 w-full h-full bg-[#3a3a3a]/30 backdrop-blur-[8px]">
          <div className="py-4 lg:w-[792px] min-h-[246px] rounded-[16px] absolute bg-white top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-50">
            <div className='px-4 flex items-center gap-x-4 justify-between border-b border-borderColor '>
              <h2 className="text-[#374151] text-[24px] font-bold">
                Assign Lecturer
              </h2>
              <X className="ml-auto w-fit text-black" onClick={()=>setAssignCourse(!assignCourse)} />
            </div>
            {/* Search */}
            <div className='bg-[#F9FAFB] py-8 px-8'>
              <div className='relative'>
                <input type="text" name="search"
                  className=' rounded-[16px] outline-none px-6 py-2 max-w-[400px] lg:w-[400px]'
                />
                <div className='absolute top-2 left-3 text-[#94A3B8]'>
                  <Search color='#94A3B8' className='inline'/> 
                  Name, email ,  phone number
                </div>
              </div>
            </div>
            {/* Table */}
            <InstructorsTable  instructors = { instructors} courseId={course?.id} />
            
          </div>
        </div>
      )}
    </div>
  )
}

export default CourseCard